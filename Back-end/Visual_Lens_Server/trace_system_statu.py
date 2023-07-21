import psutil
import time

def monitor_cpu_memory(interval):
    while True:
        cpu_percent = psutil.cpu_percent(interval=interval)
        memory_percent = psutil.virtual_memory().percent

        print(f"CPU使用率: {cpu_percent}%")
        print(f"内存使用率: {memory_percent}%")

        time.sleep(interval)

monitor_cpu_memory(1)
