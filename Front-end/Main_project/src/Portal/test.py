import base64
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5

def decrypt(data, private_key):
    # 将 base64 编码的数据解码为字节串
    encrypted_data = base64.b64decode(data)

    # 使用 RSA 私钥初始化解密器
    rsa_private_key = RSA.import_key(private_key)
    cipher = PKCS1_v1_5.new(rsa_private_key)

    # 解密数据
    decrypted_data = cipher.decrypt(encrypted_data, None)

    # 返回解密后的数据
    return decrypted_data.decode()

# 示例用法
data = "base64-encoded-encrypted-data"
private_key = "RSA-private-key"

decrypted_data = decrypt(data, private_key)
print(decrypted_data)
