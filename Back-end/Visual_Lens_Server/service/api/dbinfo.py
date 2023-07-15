# 创建 MySQL 数据库连接
import mysql.connector


mydb = mysql.connector.connect(
  host="192.168.101.1",
  user="root",
  password="",
  database=""
)