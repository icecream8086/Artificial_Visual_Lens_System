from difflib import restore
import torch
from PIL import Image
from ...CNN_lib.net_model import ResNet_50_Customize
from ...CNN_lib.dataset_sample import create_transform

class ImageClassifier:
    def __init__(self, model_path='../ResNet-0602.pth', label_map=None):
        self.model_path = model_path
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        print(f'Using device: {self.device} \n model: {model_path}')
        self.model = ResNet_50_Customize(num_classes=10)  # TODO: 修改 num_classes 为具体的分类数目

        state_dict = torch.load(model_path, map_location=self.device)
        self.model.load_state_dict(state_dict['model_state_dict'])
        self.model.to(device=self.device)
        self.model.eval()

        self.transform = create_transform()
        self.label_map = state_dict['label_map'] if 'label_map' in state_dict else label_map

    def predict_images(self, image_path, batch_size=1, top_k=9, return_probs=False, label_names=None):
        try:
            images = self._load_images(image_path)
            with torch.no_grad():
                logits = self.model(images.to(device=self.device))
                preds = torch.softmax(logits, dim=-1)
                preds, idxs = torch.topk(preds, k=top_k, dim=-1)
                preds, idxs = preds.tolist(), idxs.tolist()

                idxs = [idx for sublist in idxs for idx in sublist]

                print(f"idxs: {idxs}")
                if label_names is None:
                    if self.label_map is not None:
                        label_names = [self.label_map.get(idx, 'Unknown label') for idx in idxs]
                    elif hasattr(self.model, 'label_names'):
                        label_names = [self.model.label_names.get(idx, 'Unknown label') for idx in idxs] # type: ignore
                    else:
                        raise ValueError("Either label_map or label_names must be provided.")
                else:
                    label_names = [self.label_map.get(idx, 'Unknown label') if idx < len(label_names) else 'Unknown label' for idx in idxs]
                print(f"label_map: {self.label_map}")
                label_names=self.label_map
                print(f"label_names                 : {label_names}")

                if return_probs:
                    return idxs,label_names,preds
                    # return preds[0][0], idxs, label_names
                else:
                    return idxs, label_names
        except Exception as e:
            raise Exception(f"Error in predict_images: {str(e)}")

    def _load_images(self, image_path):
        image = Image.open(image_path).convert('RGB')
        image = self.transform(image)
        return image.unsqueeze(0)