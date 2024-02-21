import shutil
import os

def move_directory(src_dir, dst_dir):
    # 检查源文件夹是否存在
    if not os.path.exists(src_dir):
         raise FileNotFoundError("源文件夹不存在")

    # 检查目标文件夹是否存在，如果不存在则创建
    if not os.path.exists(dst_dir):
        os.makedirs(dst_dir)

    # 使用shutil.move函数移动文件夹
    shutil.move(src_dir, dst_dir)
    
    # move_directory('/path/to/source', '/path/to/destination')

def rename_directory(old_dir, new_dir):
    try:
        # 检查旧文件夹是否存在
        if not os.path.exists(old_dir):
            raise FileNotFoundError(f"旧文件夹 {old_dir} 不存在")

        # 检查新文件夹是否已存在
        if os.path.exists(new_dir):
            raise FileExistsError(f"新文件夹 {new_dir} 已存在")

        # 使用os.rename函数重命名文件夹
        os.rename(old_dir, new_dir)
    except Exception as e:
        # 如果出现任何异常，重新抛出
        raise e
    
