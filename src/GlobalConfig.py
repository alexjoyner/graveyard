try:
    from configparser import ConfigParser
except ImportError:
    from ConfigParser import ConfigParser  # ver. < 3.0
import os

class GlobalConfig:
  def __init__(self):
    env = os.environ.get('PY_ENV') or "prod"
    self.parser = ConfigParser()
    #filename = '/var/app/ir900_datlogger/config.ini'
    #filename = 'C:\Users\rosco\Documents\GitHub\ees-datalogger\ir900_datalogger\config.ini'
    filename = '../config.ini'
    self.parser.read(filename)
    if(env.lower() == 'dev' or env.lower() == 'development'):
      self.BASE_ENV = 'DEV_ENV'
    else:
      self.BASE_ENV = 'PROD_ENV'
  def getEnvVars(self):
    return self.parser[self.BASE_ENV]
  def getModbusInfo(self):
    return self.parser["MODBUS_INFO"]
  def getInputInfo(self, input):
    return self.parser[input]

if __name__ == '__main__':
  config = GlobalConfig()
  print "Getting test Env Var: %s" % config.getEnvVars()["SERVER_ADDRESS"]
  print "Ai1 active: %s" % config.getInputInfo("AI_1")["active"]
  print "Ai2 active: %s" % config.getInputInfo("AI_2")["active"]
  print "Ai7 active: %s" % config.getInputInfo("AI_7")["active"]