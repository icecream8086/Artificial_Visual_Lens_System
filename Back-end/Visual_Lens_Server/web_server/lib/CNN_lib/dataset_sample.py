
from torchvision import transforms

def create_transform(resize=256, center_crop=224, mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]):
    transform = transforms.Compose([
        transforms.Resize(resize),
        transforms.CenterCrop(center_crop),
        transforms.ToTensor(),
        transforms.Normalize(mean=mean, std=std)
    ])
    return transform