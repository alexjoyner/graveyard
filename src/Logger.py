import time
import datetime
import requests
import logging
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
      "dateTime": "%s-05" % now.strftime("%Y-%m-%d %H:%M:%S")
    }
    logging.info("Logging: \n %s" % log)
    requests.post(
      self.config.getEnvVars()['SERVER_ADDRESS'] + '/log/test', 
      json=log
    )
  def run(self, delay=10):
    self.log()
    time.sleep(int(self.config.getEnvVars()['FREQUENCY']))
    self.run()

if __name__ == "__main__":
  myLogger = Logger()
  myLogger.run()