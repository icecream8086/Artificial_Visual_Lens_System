import torch
import torch.nn as nn
import torchvision.models as models

class ResNet_0602(nn.Module):
    def __init__(self, num_classes, freeze_layers=True):
        super(ResNet_0602, self).__init__()
        self.num_classes = num_classes
        self.resnet50 = models.resnet50(pretrained=True)
        if freeze_layers:
            for param in self.resnet50.parameters():
                param.requires_grad = False
        
        self.resnet50.fc = nn.Identity()  # 使用Identity代替ReLU(inplace=True)
        self.fc = nn.Sequential(
            nn.Linear(2048, 512),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes)
        )

    def forward(self, x):
        x = self.resnet50.conv1(x)
        x = self.resnet50.bn1(x)
        x = self.resnet50.relu(x)
        x = self.resnet50.maxpool(x)

        x = self.resnet50.layer1(x)
        x = self.resnet50.layer2(x)
        x = self.resnet50.layer3(x)
        x = self.resnet50.layer4(x)

        x = self.resnet50.avgpool(x)
        x = torch.flatten(x, 1)
        x = self.fc(x)

        return x