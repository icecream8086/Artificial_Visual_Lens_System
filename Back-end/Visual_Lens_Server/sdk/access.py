import torch
from PIL import Image
from CNN_lib.net_model import ResNet_50_Customize
from CNN_lib.dataset_sample import transform

class ImageClassifier:
    def __init__(self, model_path='../ResNet-0602.pth'):
        self.model_path = model_path
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        print(f'Using device: {self.device} \n model: {model_path}')
        self.model = ResNet_50_Customize(num_classes=10)  # TODO: 修改 num_classes 为具体的分类数目
        self.model.load_state_dict(torch.load(model_path, map_location=self.device))
        self.model.to(device=self.device)
        self.model.eval()

        self.transform = transform

def predict_images(self, image_path, batch_size=1, top_k=1, return_probs=False, label_names=['Apple_Black_Rot_Disease', 'Grape_Black_Rot_Disease', 'Tomato_Leaf_Spot_Disease', ...]):
    images = self._load_images(image_path)
    with torch.no_grad():
        logits = self.model(images.to(device=self.device))
        preds = torch.softmax(logits, dim=-1)
        preds, idxs = torch.topk(preds, k=top_k, dim=-1)
        preds, idxs = preds.tolist(), idxs.tolist()

        # 展平 idxs
        idxs = [idx for sublist in idxs for idx in sublist]

        # 获取对应的标签名字
        label_names = [label_names[idx] for idx in idxs]

    if return_probs:
        return preds, idxs, label_names
    else:
        return idxs, label_names

    def _load_images(self, image_path):
        image = Image.open(image_path).convert('RGB')
        image = self.transform(image)
        return image.unsqueeze(0)


