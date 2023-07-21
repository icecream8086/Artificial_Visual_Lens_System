import subprocess

def monitor_gpu():
    command = "nvidia-smi --query-gpu=utilization.gpu,memory.used,temperature.gpu --format=csv,noheader,nounits"
    process = subprocess.Popen(command, stdout=subprocess.PIPE, shell=True)
    output, _ = process.communicate()

    gpu_info = output.decode().strip().split("\n")
    gpu_usage = [{"GPU Utilization": float(info.split(",")[0]),
                  "Memory Usage": float(info.split(",")[1]),
                  "GPU Temperature": float(info.split(",")[2])} for info in gpu_info]

    return gpu_usage

gpu_usage = monitor_gpu()
for i, usage in enumerate(gpu_usage):
    print(f"GPU {i+1} 使用情况:")
    print(f"    GPU 利用率: {usage['GPU Utilization']}%")
    print(f"    内存使用量: {usage['Memory Usage']} MB")
    print(f"    GPU 温度: {usage['GPU Temperature']}°C")
