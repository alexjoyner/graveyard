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
  def run(self):
    self.log()
    time.sleep(3)
    self.run()

if __name__ == "__main__":
  myLogger = Logger()
  myLogger.run()