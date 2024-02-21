import subprocess

def compress_directory(path, filename):
    try:
        # 拼接命令行参数
        command = ['7z', 'a', '-r', f'{filename}.7z', path]
        # 调用命令行执行压缩命令
        subprocess.run(command, check=True)
        print(f'{path} 压缩成功，生成文件名为 {filename}.7z')
        
        return path,filename
    except subprocess.CalledProcessError as e:
        print(f'压缩失败：{e}')

def compress_directory(path, filename, comment):
    try:
        command = ['7z', 'a', '-r', f'{filename}.7z', path, f'-mmt={comment}']
        subprocess.run(command, check=True)
        print(f'{path} 压缩成功，生成文件名为 {filename}.7z')
        return path,filename
    except subprocess.CalledProcessError as e:
        print(f'压缩失败：{e}')


def decompress_archive(archive_path, target_path):
    try:
        command = ['7z', 'x', '-o' + target_path, archive_path]
        subprocess.run(command, check=True)

        print(f'{archive_path} 解压缩成功')
        return archive_path,target_path
    except subprocess.CalledProcessError as e:
        print(f'解压缩失败：{e}')

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import subprocess

# def compress_directory(path, filename):
#     try:
#         command = ['7z', 'a', '-r', f'{filename}.7z', path]
#         subprocess.run(command, check=True)
#         return f'{path} 压缩成功，生成文件名为 {filename}.7z'
#     except subprocess.CalledProcessError as e:
#         return f'压缩失败：{e}'

# def compress_directory_with_comment(path, filename, comment):
#     try:
#         command = ['7z', 'a', '-r', f'{filename}.7z', path, f'-mmt={comment}']
#         subprocess.run(command, check=True)
#         return f'{path} 压缩成功，生成文件名为 {filename}.7z'
#     except subprocess.CalledProcessError as e:
#         return f'压缩失败：{e}'

# def decompress_archive(archive_path, target_path):
#     try:
#         command = ['7z', 'x', '-o' + target_path, archive_path]
#         subprocess.run(command, check=True)
#         return f'{archive_path} 解压缩成功'
#     except subprocess.CalledProcessError as e:
#         return f'解压缩失败：{e}'
# print(compress_directory('path_to_directory', 'archive_name'))
# print(compress_directory_with_comment('path_to_directory', 'archive_name', 'comment'))
# print(decompress_archive('path_to_archive', 'target_path'))