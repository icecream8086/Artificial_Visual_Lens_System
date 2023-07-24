#!/bin/bash

# start container  

podman start Redis_server > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "Redis_server Ok"
else
  echo "Redis_server fail"
fi

podman start MySql_service > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "MySql_service OK"
else
  echo "MySql_service fail"
fi
