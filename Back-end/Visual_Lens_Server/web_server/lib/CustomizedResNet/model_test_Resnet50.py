"""
This script loads a pre-trained ResNet-50 model and evaluates its performance on the validation and test sets of a custom image dataset.
The script first loads the dataset and splits it into training, validation, and test sets. Then, it loads the ResNet-50 model and its pre-trained weights from a checkpoint file.
The script adjusts the size of the fully connected layer of the model to match the number of classes in the custom dataset.
Finally, the script evaluates the model's performance on the validation and test sets and prints the average loss and accuracy for each set.
"""
from os import path
import torch
import torch.nn as nn
from lib.CNN_lib.net_model import ResNet_50_Customize
from lib.CNN_lib.data_split import data_split
from tqdm import tqdm


# 加载数据集
test_loader, val_loader = data_split()


def evaluate_model(model_path, test_loader, val_loader):
    # 判断是否有GPU可用
    device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
    # 加载模型到GPU
    model = ResNet_50_Customize(num_classes=5).to(device)

    # 加载模型状态字典到CPU
    state_dict = torch.load(model_path, device)

    if 'resnet50.fc.weight' in state_dict:
        state_dict['resnet50.fc.weight'] = state_dict['resnet50.fc.weight'][:5]
    if 'resnet50.fc.bias' in state_dict:
        state_dict['resnet50.fc.bias'] = state_dict['resnet50.fc.bias'][:5]

    # 将状态字典加载到模型对象中
    model.load_state_dict(state_dict, strict=False)

    # 将模型设置为评估模式
    model.eval()

    # 在验证集上评估模型
    with torch.no_grad():
        val_loss = 0.0
        val_acc = 0.0
        val_bar = tqdm(val_loader, desc='Validation', leave=False)
        for images, labels in val_bar:
            criterion = nn.CrossEntropyLoss()
            images, labels = images.to(device), labels.to(device)
            outputs = model(images)
            loss = criterion(outputs, labels)
            val_loss += loss.item()
            _, predicted = torch.max(outputs.data, 1)
            val_acc += (predicted == labels).sum().item()
            val_bar.set_postfix({'Loss': val_loss / len(val_loader), 'Accuracy': val_acc / len(val_loader)})

            # 准备输出的 JSON 数据
            output_data = {
                'type': 'validation',
                'validation_loss': val_loss / len(val_loader.dataset),
                'validation_accuracy': val_acc / len(val_loader.dataset),
            }

            # 打印输出的 JSON 数据

    # 在测试集上评估模型
    with torch.no_grad():
        test_loss = 0.0
        test_acc = 0.0
        test_bar = tqdm(test_loader, desc='Testing', leave=False)
        for images, labels in test_bar:
            images, labels = images.to(device), labels.to(device)
            outputs = model(images)
            loss = criterion(outputs, labels)
            test_loss += loss.item()
            _, predicted = torch.max(outputs.data, 1)
            test_acc += (predicted == labels).sum().item()
            test_bar.set_postfix({'Loss': test_loss / len(test_loader), 'Accuracy': test_acc / len(test_loader)})

            # 准备输出的 JSON 数据
            output_data = {
                'type': 'test',
                'test_loss': test_loss / len(test_loader.dataset),
                'test_accuracy': test_acc / len(test_loader.dataset)
            }
            return output_data


# # 加载数据集
# # (path: str = 'dataset', transform: Compose = transform, train_rate: float = 0.6, test_rate: float = 0.2) -> tuple[Unknown, Unknown]
# path = './dataset'
# test_loader, val_loader = data_split()

# # 指定模型路径
# model_path = 'ResNet-0602.pth'

# #  evaluate_model
# print(evaluate_model(model_path, test_loader, val_loader))