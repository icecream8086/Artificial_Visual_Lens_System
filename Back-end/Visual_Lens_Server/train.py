import logging
import torch
import torch.nn as nn
import torch.optim as optim
from torch.optim.lr_scheduler import StepLR
from CNN_lib.dataset_normal import transform
from CNN_lib.net_model import ResNet_50_Customize
from CNN_lib.data_split import data_split
from tqdm import tqdm
import json
import concurrent.futures
import time
from threading import Timer

val_loader, train_loader = data_split(path='dataset', transform=transform, train_rate=0.6, test_rate=0.2)

train_bar = tqdm(train_loader)  # 使用tqdm包装train_loader
val_bar = tqdm(val_loader)  # 使用tqdm包装val_loader

# 定义训练函数
# 设置日志文件路径和格式
logging.basicConfig(filename='train.log', level=logging.INFO, format='%(asctime)s %(levelname)s: %(message)s')
def delayed_execution():
    # 延时函数，用于模拟任务被取消的情况
    result2 = task.cancel()
    print(result2)

def train(model, device, train_loader, criterion, optimizer, epoch, train_bar):
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


def test(model, device, val_loader, criterion):
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

    progress = {
        'val_loss': val_loss,
        'correct': correct,
        'total': len(val_loader.dataset),
        'accuracy': 100. * correct / len(val_loader.dataset)
    }
    progress_json = json.dumps(progress)
    print(progress_json)


# # 设置超参数并训练模型
# def train_module(val_loader, train_loader, train, test ,module_name='ResNet-0602.pth'):
#     device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
#     model = ResNet_50_Customize(num_classes=10)
#     model.to(device)
#     optimizer = optim.Adam(model.parameters(), lr=0.001)
#     scheduler = StepLR(optimizer, step_size=10, gamma=0.1)  # 定义学习率调度器
#     criterion = nn.CrossEntropyLoss()
#     epochs = 360
#     for epoch in range(1, epochs + 1):
#         train(model, device, train_loader, criterion, optimizer, epoch)
#         test(model, device, val_loader, criterion)
#         scheduler.step()  # 每个epoch结束后调用学习率调度器进行自我学习率调整
    
#     train_bar.close()  # 停止和清除进度条
#     val_bar.close()
#     torch.save(model.state_dict(), module_name)

# train_module(val_loader, train_loader, train, test, module_name='ResNet-0602.pth')

# # ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
# import logging
# import torch
# import torch.nn as nn
# import torch.optim as optim
# from torch.optim.lr_scheduler import StepLR
# from CNN_lib.dataset_normal import transform
# from CNN_lib.net_model import ResNet_50_Customize
# from CNN_lib.data_split import data_split
# from tqdm import tqdm
# import json

# # 定义训练函数
# def train(model, device, train_loader, criterion, optimizer, epoch, train_bar):
#     model.train()
#     train_loss = 0.0
#     for batch_idx, (data, target) in enumerate(train_loader):
#         data, target = data.to(device), target.to(device)
#         optimizer.zero_grad()
#         output = model(data)
#         loss = criterion(output, target)
#         loss.backward()
#         optimizer.step()
#         train_loss += loss.item()
#         train_bar.update(1)  # 更新进度条
#     train_loss /= len(train_loader)
#     return train_loss

# # 定义测试函数
def test(model, device, val_loader, criterion, val_bar):
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

# 设置超参数并训练模型
class TrainAndTestModel:
    def __init__(self):
        self.executor = concurrent.futures.ThreadPoolExecutor(max_workers=1)
        self.future = None

    def start(self, dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs):
        if self.future:
            return json.dumps({"status": "error", "message": "A task is already running."})
        self.future = self.executor.submit(self.train_and_test_model, dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs)
        return json.dumps({"status": "success", "message": "Task started."})

    def cancel(self):
        if self.future:
            self.future.cancel()
            self.future = None
            return json.dumps({"status": "success", "message": "Task cancelled."})
        else:
            return json.dumps({"status": "error", "message": "No task to cancel."})


    def train_and_test_model(self, dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs):
        val_loader, train_loader = data_split(path=dataset_path, transform=transform, train_rate=train_rate, test_rate=test_rate)
        train_bar = tqdm(train_loader)  # 使用tqdm包装train_loader
        val_bar = tqdm(val_loader)  # 使用tqdm包装val_loader

        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        model = ResNet_50_Customize(num_classes=10)
        model.to(device)
        optimizer = optim.Adam(model.parameters(), lr=lr)
        scheduler = StepLR(optimizer, step_size=step_size, gamma=gamma)  # 定义学习率调度器
        criterion = nn.CrossEntropyLoss()

        for epoch in range(1, epochs + 1):
            # 检查任务是否被取消
            if self.future.cancelled():
                break

            train_loss = train(model, device, train_loader, criterion, optimizer, epoch, train_bar)
            val_loss, correct, accuracy = test(model, device, val_loader, criterion, val_bar)
            scheduler.step()  # 每个epoch结束后调用学习率调度器进行自我学习率调整

            # 打印训练和测试进度
            train_progress = {'epoch': epoch, 'train_loss': train_loss}
            # print(json.dumps(train_progress))
            test_progress = {'val_loss': val_loss, 'correct': correct, 'total': len(val_loader.dataset), 'accuracy': accuracy}
            # print(json.dumps(test_progress))

        train_bar.close()  # 停止和清除进度条
        val_bar.close()
        if not self.future.cancelled():
            torch.save(model.state_dict(), module_name)
        pass

dataset_path = 'dataset'
module_name = 'ResNet-0602.pth'
train_rate = 0.6
test_rate = 0.2
lr = 0.001
step_size = 10
gamma = 0.1
epochs = 360

#global 
task = TrainAndTestModel()
# router 1
result= task.start(dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs)
print(result)
# Later...
# router 2 (cancel task)
result2 = task.cancel()
print(result2)
