import time
import requests
import logging
from ModbusHandler import ModbusHandler
from GlobalConfig import GlobalConfig

class Logger:
  def __init__(self):
    self.config = GlobalConfig()
    self.ModbusDevice = ModbusHandler()
  def log(self):
    data = self.ModbusDevice.getAnalogInputs()
    logging.info("Logging: \n %s" % data)
    requests.post(
      self.config.getEnvVars('SERVER_ADDRESS') + '/log/test', 
      json=data
    )
  def run(self, delay=10):
    self.log()
    time.sleep(int(self.config.getEnvVars('FREQUENCY')))
    self.run()

if __name__ == "__main__":
  myLogger = Logger()
  myLogger.run()