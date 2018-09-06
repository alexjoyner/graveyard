import time
import datetime
import requests
from ModbusHandler import ModbusHandler

URL = "http://192.168.2.33:8080/log/test"
ModbusDevice = ModbusHandler()
class Logger:
  def __init__(self):
    print 'new Logger'
  def log(self):
    print 'New Log Point'
    now = datetime.datetime.now()
    data = ModbusDevice.getAnalogInputs()
    log={
      "pointID": 1,
      "value": data[5] / 10,
      "dateTime": now.strftime("%Y-%m-%d %H:%M:%S")
    }
    print log
    res = requests.post(URL, json=log)
    print res

if __name__ == "__main__":
  x = 0
  myLogger = Logger()
  while x <= 10:
    myLogger.log()
    time.sleep(1)
    x += 1