from PIL import Image
import torch
import torchvision.transforms.functional as TF
from transformers import CLIPModel ,CLIPProcessor

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


model_path = "clip-vit-base-patch32"
model = CLIPModel.from_pretrained(model_path).to(device)
processor = CLIPProcessor.from_pretrained(model_path)

# url = "http://images.cocodataset.org/val2017/000000039769.jpg"
# image = Image.open(requests.get(url, stream=True).raw)

image = image = Image.open("a.jpg")
image_tensor = TF.to_tensor(image).to(device)

texts=["bear","cat","weapon","air craft"]
inputs = processor(text=texts, images=image_tensor, return_tensors="pt", padding=True)
inputs.to(device)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image
probs = logits_per_image.softmax(dim=1)

# print(logits_per_image)
# print(probs)

# 取出匹配概率最大的描述文字
max_prob_idx = probs.argmax(-1).item()
max_prob_desc = texts[max_prob_idx]
# 打印匹配概率最大的描述文字和对应的匹配概率
print(f"Max prob description: {max_prob_desc}")
print(f"Max prob: {probs[0][max_prob_idx]:.4f}")

# pip install -i https://repo.nju.edu.cn/repository/pypi/simple torch
# URL https://doc.nju.edu.cn/books/35f4a/page/pypi-python-package-index

# pip install -i https://mirrors.aliyun.com/pypi/simple/ torch

# path 
# /usr/local