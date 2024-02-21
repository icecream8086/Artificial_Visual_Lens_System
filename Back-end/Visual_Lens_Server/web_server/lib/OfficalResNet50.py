import warnings
from transformers import logging

# 设置 transformers 库的日志级别为错误，这将屏蔽所有警告
logging.set_verbosity_error()

from transformers import AutoImageProcessor, ResNetForImageClassification
import torch
from PIL import Image

def offical_resNet(image_path):
    image = Image.open(image_path)
    processor = AutoImageProcessor.from_pretrained("./lib/resnet-50")
    model = ResNetForImageClassification.from_pretrained("./lib/resnet-50")

    # 处理图像并传递给模型
    inputs = processor(image, return_tensors="pt")

    with torch.no_grad():
        logits = model(**inputs).logits

    # 找到预测概率最高的类别
    predicted_label = logits.argmax(-1).item()
    json={"result":model.config.id2label[predicted_label]}
    return json

# #demo
# path='./test2.jpg'
# print(offical_resNet(path))