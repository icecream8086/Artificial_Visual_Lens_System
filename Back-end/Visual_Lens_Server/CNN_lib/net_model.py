import torch
import torch.nn as nn
import torchvision.models as models


class ResNet_152_Customize(nn.Module):
    def __init__(self, num_classes=1000):
        super(ResNet_152_Customize, self).__init__()
        self.resnet152 = models.resnet152(pretrained=True)
        self.resnet152.fc = nn.Linear(2048, num_classes)
    
    def forward(self, x):
        x = self.resnet152(x)
        return x
    
class ResNet_101_Customize(nn.Module):
    def __init__(self, num_classes=1000):
        super(ResNet_101_Customize, self).__init__()
        self.resnet101 = models.resnet101(pretrained=True)
        self.resnet101.fc = nn.Linear(2048, num_classes)
    def forward(self, x):
        x = self.resnet101(x)
        return x
    

class ResNet_50_Customize(nn.Module):
    def __init__(self, num_classes=1000):
        super(ResNet_50_Customize, self).__init__()
        self.resnet50 = models.resnet50(pretrained=True)
        self.resnet50.fc = nn.Linear(2048, num_classes)

    def forward(self, x):
        x = self.resnet50(x)
        return x

class ResNet_18_Customize(nn.Module):
    def __init__(self, num_classes=1000):
        super(ResNet_18_Customize, self).__init__()
        self.resnet18 = models.resnet18(pretrained=True)
        self.resnet18.fc = nn.Linear(512, num_classes)

    def forward(self, x):
        x = self.resnet18(x)
        return x
