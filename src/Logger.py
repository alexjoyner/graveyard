import time
import requests
from ModbusHandler import ModbusHandler

URL = "https://webhook.site/b60f0eb6-2e1c-4dd5-82fa-db24bb9f92ba"
ModbusDevice = ModbusHandler()
class Logger:
  def __init__(self):
    print('new Logger')
  def log(self):
    print("New Log Point")
    data = ModbusDevice.getAnalogInputs()
    print(data)
    res = requests.post(URL, json=data)
    print(res)

if __name__ == "__main__":
  x = 0
  myLogger = Logger()
  while x <= 10:
    myLogger.log()
    time.sleep(10)
    x += 1