import logging
import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets
from torch.optim.lr_scheduler import StepLR
from CNN_lib.dataset_normal import transform
from CNN_lib.net_model import ResNet_50_Customize
from tqdm import tqdm
import json


train_set_1 = datasets.ImageFolder('dataset', transform=transform)
basicset = torch.utils.data.ConcatDataset([train_set_1, ])
basicloader = torch.utils.data.DataLoader(basicset, batch_size=32, shuffle=True)

indices = torch.randperm(len(basicset))
basicset = torch.utils.data.Subset(basicset, indices)
train_size = int(len(basicset) * 0.6)
test_size = int(len(basicset) * 0.2)
val_size = len(basicset) - train_size - test_size
train_set, test_set, val_set = torch.utils.data.random_split(basicset, [train_size, test_size, val_size])
train_loader = torch.utils.data.DataLoader(train_set, batch_size=32, shuffle=True)
test_loader = torch.utils.data.DataLoader(test_set, batch_size=32, shuffle=True)
val_loader = torch.utils.data.DataLoader(val_set, batch_size=32, shuffle=True)

# 定义模型


# 定义训练函数
# 设置日志文件路径和格式
logging.basicConfig(filename='train.log', level=logging.INFO, format='%(asctime)s %(levelname)s: %(message)s')


def train(model, device, train_loader, criterion, optimizer, epoch):
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


# 设置超参数并训练模型
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = ResNet_50_Customize(num_classes=10)
model.to(device)
optimizer = optim.Adam(model.parameters(), lr=0.001)
scheduler = StepLR(optimizer, step_size=10, gamma=0.1)  # 定义学习率调度器
criterion = nn.CrossEntropyLoss()
epochs = 360

train_bar = tqdm(train_loader)  # 使用tqdm包装train_loader
val_bar = tqdm(val_loader)  # 使用tqdm包装val_loader

for epoch in range(1, epochs + 1):
    train(model, device, train_loader, criterion, optimizer, epoch)
    test(model, device, val_loader, criterion)
    scheduler.step()  # 每个epoch结束后调用学习率调度器进行自我学习率调整
    
train_bar.close()  # 停止和清除进度条
val_bar.close()

torch.save(model.state_dict(), 'ResNet-0602.pth')
