"""
This script loads a pre-trained ResNet-50 model and evaluates its performance on the validation and test sets of a custom image dataset.
The script first loads the dataset and splits it into training, validation, and test sets. Then, it loads the ResNet-50 model and its pre-trained weights from a checkpoint file.
The script adjusts the size of the fully connected layer of the model to match the number of classes in the custom dataset.
Finally, the script evaluates the model's performance on the validation and test sets and prints the average loss and accuracy for each set.
"""
import torch
from torchvision import datasets
import torch.nn as nn
from CNN_lib.net_model import ResNet_50_Customize
from CNN_lib.dataset_sample import transform
import json
from tqdm import tqdm


train_set = datasets.ImageFolder('dataset', transform=transform)
train_loader = torch.utils.data.DataLoader(train_set, batch_size=32, shuffle=True)

# 划分数据集
train_size = int(len(train_set) * 0.6)
test_size = int(len(train_set) * 0.2)
val_size = len(train_set) - train_size - test_size
train_set, test_set, val_set = torch.utils.data.random_split(train_set, [train_size, test_size, val_size])

# 加载数据集
train_loader = torch.utils.data.DataLoader(train_set, batch_size=32, shuffle=True)
test_loader = torch.utils.data.DataLoader(test_set, batch_size=32, shuffle=True)
val_loader = torch.utils.data.DataLoader(val_set, batch_size=32, shuffle=True)

# 判断是否有GPU可用
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
print('Device:', device)

# 加载模型到GPU
model = ResNet_50_Customize(num_classes=5).to(device)

# 加载模型状态字典到CPU
state_dict = torch.load('ResNet-0602.pth', device)

if 'resnet50.fc.weight' in state_dict:
    state_dict['resnet50.fc.weight'] = state_dict['resnet50.fc.weight'][:5]
if 'resnet50.fc.bias' in state_dict:
    state_dict['resnet50.fc.bias'] = state_dict['resnet50.fc.bias'][:5]

# 将状态字典加载到模型对象中
model.load_state_dict(state_dict, strict=False)

# 将模型设置为评估模式
model.eval()

# 将数据移动到GPU
val_loss = torch.tensor(0.0, dtype=torch.float32, device=device)
val_acc = torch.tensor(0.0, dtype=torch.float32, device=device)
test_loss = torch.tensor(0.0, dtype=torch.float32, device=device)
test_acc = torch.tensor(0.0, dtype=torch.float32, device=device)

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
            'test_loss': test_loss / len(test_loader.dataset),
            'test_accuracy': test_acc / len(test_loader.dataset)
        }

        
        # 打印输出的 JSON 数据
        print(output_data)

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
            'validation_loss': val_loss / len(val_loader.dataset),
            'validation_accuracy': val_acc / len(val_loader.dataset),
            'test_loss': test_loss / len(test_loader.dataset),
            'test_accuracy': test_acc / len(test_loader.dataset)
        }

        # 打印输出的 JSON 数据
        print(output_data)