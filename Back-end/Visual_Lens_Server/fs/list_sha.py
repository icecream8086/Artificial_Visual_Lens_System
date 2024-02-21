import hashlib
import os
from sha import get_sha256_path,get_sha256

def list_sha256_path(path):
    # os walk 修改为 os listdir
    result = {}
    for file in os.listdir(path):
        file_path = os.path.join(path, file)
        if os.path.isfile(file_path):
            try:
                with open(file_path, "rb") as f:
                    sha256_hash = get_sha256(f)
                    result[file_path] = sha256_hash
            except Exception as e:
                print(e)
    return result


# directory = "./"
# lists=list_sha256_path(directory)
# for key,value in lists.items():
#     print(key,value)
    
# example output:
# ./7z_fs.py a722d934127d9432f0c2c56f8c3d45decd9445447b244c8493116bf5f75f9926
# ./clean.py e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
# ./mov_fs.py e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
# ./sha.py 7fbd449e0cb6a463ad3777404377bc7ac4df0d38bfdcf4e8cb9e1bb4095ae40a
# ./zip_fs.py 1fbb3ddbdfbe34a280667d536e8732ed80673c186b8a309ec9bfa323b7374ff2
# ./list_sha.py 696f7c8e868a66d156f7f63d0262fe0ce3c9c3f88d69df22f83798c3c89db77d