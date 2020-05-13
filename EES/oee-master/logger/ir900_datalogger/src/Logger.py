import time
import requests
import logging
from ModbusHandler import ModbusHandler
from GlobalConfig import GlobalConfig

class Logger:
  def __init__(self):
    config =  GlobalConfig()
    self.envVars = config.getEnvVars()
    self.controllers = config.getControllers()
    self.ModbusHandler = ModbusHandler(None)
  def run(self): 
    self.log()
    time.sleep(int(self.envVars['LOG_FREQUENCY']))
    self.run()
  def log(self):
    logPackage = self.ModbusHandler.getLogPackage(self.controllers)
    logging.info("Logging: \n %s" % logPackage)
    requests.post(
      self.envVars['SERVER_ADDRESS'] + '/log/new', 
      json=logPackage
    )
  def merge_two_dicts(self, x, y):
    z = x.copy()   # start with x's keys and values
    z.update(y)    # modifies z with y's keys and values & returns None
    return z

if __name__ == "__main__":
  myLogger = Logger()
  myLogger.run()