import hashlib


def get_sha256(file):
    try:
        sha256_hash = hashlib.sha256(file.read()).hexdigest()
        return sha256_hash
    except Exception as e:
        print(e)
    return e

def get_sha256(path):
    try:
        file = open(path, "rb")
        sha256_hash = hashlib.sha256(file.read()).hexdigest()
        return sha256_hash
    except Exception as e:
        print(e)
    return e