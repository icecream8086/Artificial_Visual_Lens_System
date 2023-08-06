import subprocess

        
def compress_directory(path, filename):
    try:
        # 拼接命令行参数
        command = ['zip', '-r', f'{filename}.zip', path]

        # 调用命令行执行压缩命令
        subprocess.run(command, check=True)

        print(f'{path} 压缩成功，生成文件名为 {filename}.zip')
    except subprocess.CalledProcessError as e:
        print(f'压缩失败：{e}')

def compress_directory(path, filename, comment):
    try:
        # 拼接命令行参数
        command = ['zip', '-r', f'{filename}.zip', path, f'-mmt={comment}']

        # 调用命令行执行压缩命令
        subprocess.run(command, check=True)

        print(f'{path} 压缩成功，生成文件名为 {filename}.zip')
    except subprocess.CalledProcessError as e:
        print(f'压缩失败：{e}')
        

def decompress_archive(archive_path, target_path):
    try:
        # 拼接命令行参数
        command = ['unzip', '-o', archive_path, '-d', target_path]

        subprocess.run(command, check=True)

        print(f'{archive_path} 解压缩成功')
    except subprocess.CalledProcessError as e:
        print(f'解压缩失败：{e}')
    