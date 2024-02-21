import json
from py3nvml.py3nvml import nvmlDeviceGetHandleByIndex, nvmlDeviceGetMemoryInfo, nvmlDeviceGetName, nvmlDeviceGetTemperature, nvmlDeviceGetUtilizationRates, nvmlInit, nvmlShutdown, nvmlDeviceGetCount, NVML_TEMPERATURE_GPU


def list_gpu():
    nvmlInit()
    device_count = nvmlDeviceGetCount()
    gpu_info = []
    for i in range(device_count):
        handle = nvmlDeviceGetHandleByIndex(i)
        info = nvmlDeviceGetMemoryInfo(handle)
        gpu_info.append({
            "name": nvmlDeviceGetName(handle),
            "gpu_id": i,
            "total_memory": info.total,
            "free_memory": info.free,
            "used_memory": info.used,
            "temperature": nvmlDeviceGetTemperature(handle, NVML_TEMPERATURE_GPU),
            "utilization": nvmlDeviceGetUtilizationRates(handle).gpu,
        })
    nvmlShutdown()
    return json.dumps(gpu_info)