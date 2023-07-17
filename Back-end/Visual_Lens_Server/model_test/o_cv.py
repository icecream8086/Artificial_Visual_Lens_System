import cv2
import os

# open cv test

img = cv2.imread('model_test/image/air_battle.jpg')

# 高斯模糊
blur_img = cv2.GaussianBlur(img, (25, 25), 0)

# 输出图像
cv2.imwrite('model_test/image/blur_image.jpg', blur_img)


