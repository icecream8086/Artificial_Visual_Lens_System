import psutil
import time
import platform
import socket
import time
import os
import shutil

def monitor_cpu_memory(interval):
    while True:
        cpu_percent = psutil.cpu_percent(interval=interval)
        memory_percent = psutil.virtual_memory().percent
        cores_percent = psutil.cpu_percent(interval=interval, percpu=True)
        cpu_freq = psutil.cpu_freq()
        cpu_temp = psutil.sensors_temperatures()["coretemp"][0].current
        time.sleep(interval)
        return cpu_percent, memory_percent, cores_percent, cpu_freq, cpu_temp

def monitor_os_info():
    # 获取主机名
    hostname = socket.gethostname()
    os_name = platform.system()
    os_release = platform.release()
    # 获取服务器当前时间
    current_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    # 获取程序运行时长
    start_time = time.time()
    end_time = time.time()
    run_time = end_time - start_time
    return hostname, os_name, os_release, current_time, run_time


def disk_info():
    # 获取磁盘列表
    disk_list = [disk for disk in os.listdir('/') if os.path.isdir(os.path.join('/', disk))]
    # 获取程序所在磁盘
    drive, path = os.path.splitdrive(os.path.dirname(os.path.abspath(__file__)))
    # 嘎掉多余的字符串，只保留盘符
    program_path = drive + '/' + path.split('/')[1]

    # 遍历每个磁盘
    for disk_name in disk_list:
        # 获取磁盘的挂载目录
        mount_point = os.path.join('/', disk_name)
        # 如果挂载目录不是特定路径，跳过该磁盘
        if mount_point != program_path:
            continue
        # 获取磁盘使用情况
        usage = psutil.disk_usage(mount_point)
        total_size = usage.total // (1024**3)  # 转换为GB
        free_size = usage.free // (1024**3)  # 转换为GB
        used_size = usage.used // (1024**3)  # 转换为GB

        # 获取文件系统类型
        partitions = psutil.disk_partitions()
        for partition in partitions:
            if partition.mountpoint == mount_point:
                fstype = partition.fstype
                break

        # 输出结果
        print("磁盘名称：", disk_name)
        print("挂载目录：", mount_point)
        print("文件系统：", fstype)
        print("大小：", total_size, "GB")
        print("可用大小：", free_size, "GB")
        print("已使用大小：", used_size, "GB")
        print(program_path)

monitor_cpu_memory(1)
monitor_os_info()
disk_info()