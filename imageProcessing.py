from PIL import Image

image = Image.open("test.jpg")
gray_image = image.convert("L")
brightness_factor = 1.2

def adjust_brightness(pixel):
    new_value = int(pixel * brightness_factor)
    return min(new_value, 255)

brightened_image = gray_image.point(adjust_brightness)
brightened_image.save("brightened_gray.jpg")
print("Image has been converted to grayscale and brightness adjusted. Saved as 'brightened_gray.jpg'.")
