from PIL import Image
import requests

from transformers import CLIPProcessor, CLIPModel

from transformers import CLIPProcessor, CLIPModel
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"
model = CLIPModel.from_pretrained("./lib/clip-vit-large-patch14")
processor = CLIPProcessor.from_pretrained("./lib/clip-vit-large-patch14")

# clip function

def get_image_label(file_path, text):
    device = "cuda" if torch.cuda.is_available() else "cpu"
    model = CLIPModel.from_pretrained("./lib/clip-vit-large-patch14")
    processor = CLIPProcessor.from_pretrained("./lib/clip-vit-large-patch14")

    model.to(device)
    image = Image.open(file_path)
    inputs = processor(text, images=image, return_tensors="pt", padding=True)

    inputs = {k: v.to(device) for k, v in inputs.items()} # move inputs to the same device as the model
    outputs = model(**inputs)
    logits_per_image = outputs.logits_per_image # this is the image-text similarity score
    probs = logits_per_image.softmax(dim=1) # we can take the softmax to get the label probabilities

    max_prob_index = probs.argmax(-1).item()
    max_prob = probs[0][max_prob_index].item()

    json = {
        "image_label": text[max_prob_index],
        "index": max_prob_index,
        "prob": max_prob
    }
    return json

# # example_
# file_path = "./a.png"
# text=["cat ","bear" ,"weapon","air craft"]
# jsons = get_image_label(file_path, text)
# print(jsons) # we can then take the max of these label probabilities

