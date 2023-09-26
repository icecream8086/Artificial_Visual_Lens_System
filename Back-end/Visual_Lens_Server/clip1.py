from PIL import Image
import requests

from transformers import CLIPProcessor, CLIPModel

from transformers import CLIPProcessor, CLIPModel
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"
model = CLIPModel.from_pretrained("./clip-vit-large-patch14")
processor = CLIPProcessor.from_pretrained("./clip-vit-large-patch14")

model.to(device)
file_path = "/home/zhangsan/Artificial_Visual_Lens_System/Back-end/Visual_Lens_Server/e.jpg"
image = Image.open(file_path)
text=["cat ","bear" ,"weapon","air craft"]
inputs = processor(text, images=image, return_tensors="pt", padding=True)

inputs = {k: v.to(device) for k, v in inputs.items()} # move inputs to the same device as the model
outputs = model(**inputs)
logits_per_image = outputs.logits_per_image # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1) # we can take the softmax to get the label probabilities

print(text[probs.argmax(-1).item()]) # we can then take the max of these label probabilities
print(logits_per_image.argmax(-1).item()) # we can then take the max of these label probabilities
print(probs[0][probs.argmax(-1).item()].item() )# we can then take the max of these label probabilities

print(text[probs.argmax(-1).item()]) # we can then take the max of these label probabilities

# pip install -i https://mirrors.nju.edu.cn/pypi/web/simple torch
# URL https://doc.nju.edu.cn/books/35f4a/page/pypi-python-package-index

# pip install -i https://mirrors.aliyun.com/pypi/simple/ torch

# path 
# /usr/local