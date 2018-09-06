import time
import datetime
import requests
from ModbusHandler import ModbusHandler
from GlobalConfig import GlobalConfig

class Logger:
  def __init__(self):
    self.config = GlobalConfig()
    self.ModbusDevice = ModbusHandler()
  def log(self):
    now = datetime.datetime.now()
    data = self.ModbusDevice.getAnalogInputs()
    log={
      "pointID": 1,
      "value": data[5] / 10,
      "dateTime": now.strftime("%Y-%m-%d %H:%M:%S")
    }
    requests.post(
      self.config.getAll()['DESTINATION_URL'], 
      json=log
    )
  def run(self, delay=3):
    self.log()
    time.sleep(delay)
    self.run()

if __name__ == "__main__":
  myLogger = Logger()
  myLogger.run()