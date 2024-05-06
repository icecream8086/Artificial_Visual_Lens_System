import torch

def check_label_map(model_path):
    state_dict = torch.load(model_path)
    if 'label_map' in state_dict:
        print("The model contains label_map.")
        print(f"label_map: {state_dict['label_map']}")
    else:
        print("The model does not contain label_map.")

# 使用你的模型路径替换 'model.pth'
check_label_map('ng501.pth')