import logging
import torch
import torch.nn as nn
import torch.optim as optim
from torch.optim.lr_scheduler import StepLR
from lib.CNN_lib.dataset_normal import transform
from lib.CNN_lib.net_model import ResNet_50_Customize
import torchvision
from lib.CNN_lib.data_split import data_split
from tqdm import tqdm
import json
import concurrent.futures
import time
from threading import Timer

val_loader, train_loader = data_split(path='dataset', transform=transform, train_rate=0.6, test_rate=0.2)

train_bar = tqdm(train_loader)  # 使用tqdm包装train_loader
val_bar = tqdm(val_loader)  # 使用tqdm包装val_loader
class TrainAndTestModel:
    def __init__(self):
        self.executor = concurrent.futures.ThreadPoolExecutor(max_workers=1)
        self.future = None
        self.cancelled = False  # 添加一个全局变量来存储取消任务的信号


    def train(self, model, device, train_loader, criterion, optimizer, epoch, train_bar):
        model.train()
        train_loss = 0.0
        for batch_idx, (data, target) in enumerate(train_loader):
            data, target = data.to(device), target.to(device)
            optimizer.zero_grad()
            output = model(data)
            loss = criterion(output, target)
            loss.backward()
            optimizer.step()
            train_loss += loss.item()
            train_bar.update(1)  # 更新进度条
        train_loss /= len(train_loader)
        progress = {
            'epoch': epoch,
            'train_loss': train_loss
        }
        progress_json = json.dumps(progress)
        print(progress_json)
        return train_loss

    def test(self, model, device, val_loader, criterion, val_bar):
        model.eval()
        val_loss = 0.0
        correct = 0
        with torch.no_grad():
            for data, target in val_bar:
                data, target = data.to(device), target.to(device)
                output = model(data)
                val_loss += criterion(output, target).item()  # sum up batch loss
                pred = output.argmax(dim=1, keepdim=True)  # get the index of the max log-probability
                correct += pred.eq(target.view_as(pred)).sum().item()
                val_bar.update(1)  # 更新进度条
        val_loss /= len(val_loader.dataset)
        accuracy = 100. * correct / len(val_loader.dataset)
        return val_loss, correct, accuracy

    def start(self, dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs):
        if self.future:
            return json.dumps({"status": "error", "message": "A task is already running."})
        self.future = self.executor.submit(self.train_and_test_model, dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs)
        try:
            result = self.future.result()  # 等待任务完成并获取结果
        finally:
            self.future = None  # 任务完成后，重置 self.future
        self.cancel()
        return json.dumps({"status": "success", "message": "Task completed.", "result": result})


    def cancel(self):
        if self.future:
            self.cancelled = True  # 设置取消任务的信号
            return json.dumps({"status": "success", "message": "Task cancellation requested."})
        else:
            return json.dumps({"status": "error", "message": "No task to cancel."})


    def train_and_test_model(self, dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs):
        train_dataset = torchvision.datasets.ImageFolder(dataset_path, transform=transform)
        val_dataset = torchvision.datasets.ImageFolder(dataset_path, transform=transform)
        train_loader = torch.utils.data.DataLoader(train_dataset, batch_size=64)
        val_loader = torch.utils.data.DataLoader(val_dataset, batch_size=64)

        # 保存 label_map
        dataset = torchvision.datasets.ImageFolder(dataset_path, transform=transform)
        print("dataset.class_to_idx",dataset.class_to_idx)
        label_map = {v: k for k, v in dataset.class_to_idx.items()}
        print("label_map",label_map)

        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        model = ResNet_50_Customize(num_classes=10)
        model.to(device)
        optimizer = optim.Adam(model.parameters(), lr=lr)
        scheduler = StepLR(optimizer, step_size=step_size, gamma=gamma)  # 定义学习率调度器
        criterion = nn.CrossEntropyLoss()

        train_progress = []
        test_progress = []

        for epoch in range(1, epochs + 1):
            # 检查任务是否被取消
            if self.cancelled:
                break
            train_loss = self.train(model, device, train_loader, criterion, optimizer, epoch, train_bar)
            val_loss, correct, accuracy = self.test(model, device, val_loader, criterion, val_bar)
            scheduler.step()  # 每个epoch结束后调用学习率调度器进行自我学习率调整

            # 打印训练和测试进度
            train_progress.append({'epoch': epoch, 'train_loss': train_loss})
            test_progress.append({'val_loss': val_loss, 'correct': correct, 'total': len(val_loader.dataset), 'accuracy': accuracy})

            train_bar.close()  # 停止和清除进度条
            val_bar.close()
            if not self.future.cancelled(): # type: ignore
                torch.save({
                    'model_state_dict': model.state_dict(),
                    'label_map': label_map
                }, f'./model/{module_name}.pth')
        if self.cancelled:
            self.cancelled = False  # 重置取消任务的信号
            return json.dumps({"status": "cancelled", "message": "Task was cancelled."})

        if torch.cuda.is_available():
            torch.cuda.empty_cache()
        # 返回训练和测试的结果
        return {
            'train_progress': train_progress,
            'test_progress': test_progress
        }
