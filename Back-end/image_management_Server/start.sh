npm start
# #!/bin/bash

# port=3000

# # 使用lsof命令查找占用指定端口的进程
# process_id=$(lsof -i :$port -t)

# if [ -z "$process_id" ]; then
#   echo "No process is listening on port $port"
# else
#   echo "Process with PID $process_id is listening on port $port"
#   echo "Process details:"
#   ps -p $process_id -o pid,ppid,cmd,%cpu,%mem
# fi
