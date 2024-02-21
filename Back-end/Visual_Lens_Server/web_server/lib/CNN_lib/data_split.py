import torch
from torchvision import datasets
from lib.CNN_lib.dataset_sample import create_transform

def data_split(path='dataset',transform=create_transform(),train_rate=0.6,test_rate=0.2):
    train_set = datasets.ImageFolder(path, transform=transform)
    train_loader = torch.utils.data.DataLoader(train_set, batch_size=32, shuffle=True)

# 划分数据集
    train_size = int(len(train_set) * train_rate)
    test_size = int(len(train_set) * test_rate)
    val_size = len(train_set) - train_size - test_size
    train_set, test_set, val_set = torch.utils.data.random_split(train_set, [train_size, test_size, val_size])

# 加载数据集
    train_loader = torch.utils.data.DataLoader(train_set, batch_size=32, shuffle=True)
    test_loader = torch.utils.data.DataLoader(test_set, batch_size=32, shuffle=True)
    val_loader = torch.utils.data.DataLoader(val_set, batch_size=32, shuffle=True)
    return test_loader,val_loader