import os
from PIL import Image

def crop_images(folder_path, width=512, height=512):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.jpg') or file.endswith('.png'):
                file_path = os.path.join(root, file)
                with Image.open(file_path) as img:
                    img = img.crop((0, 0, width, height))
                    img.save(file_path)
        
folder_path = '/folder'
crop_images(folder_path, width=512, height=512)