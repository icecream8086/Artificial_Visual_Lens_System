from sdk.access import ImageClassifier

def predict_images(model_path,label_names, image_path):
    classifier = ImageClassifier(model_path)
    preds, idxs, label_names=classifier.predict_images(image_path, top_k=3, return_probs=True, label_names=label_names)
    json = {
        "predictions": preds,
        "idxs": idxs,
        "label_names": label_names
    }
    return json

#demo
model_path = './ResNet-0602.pth'
label_names=['Apple_Black_Rot_Disease', 'Grape_Black_Rot_Disease', 'Tomato_Leaf_Spot_Disease', 'Tomato_Septoria_Leaf_Spot_Disease', 'Tomato_Spider_Mites_Two_spotted_spider_mite', 'Tomato_Target_Spot_Disease', 'Tomato_Tomato_Yellow_Leaf_Curl_Virus', 'Tomato_Tomato_mosaic_virus', 'Tomato_healthy', 'Grape_Black_Meas']
path='./test2.jpg'

print(predict_images(model_path,label_names, path))
