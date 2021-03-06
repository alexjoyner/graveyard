try:
    from configparser import ConfigParser
except ImportError:
    from ConfigParser import ConfigParser  # ver. < 3.0
import os

class GlobalConfig:
  def __init__(self):
    env = os.environ.get('PY_ENV') or "prod"
    self.parser = ConfigParser()
    filename = ''
    if(env.lower() == 'dev' or env.lower() == 'development'):
      self.BASE_ENV = 'DEV_ENV'
      filename = '../config.ini'
    elif(env.lower() == 'prodtest'):
      self.BASE_ENV = 'PROD_ENV'
      filename = '../config.ini'
    else:
      self.BASE_ENV = 'PROD_ENV'
      filename = '/var/app/ir900_datalogger/config.ini'
    self.parser.read(filename)
  def getEnvVars(self, key):
    return self.parser.get(self.BASE_ENV, key)
  def getModbusInfo(self, key):
    return self.parser.get("MODBUS_INFO", key)
  def getInputInfo(self, input):
    return {
      "point_id": self.parser.get(input, "point_id"),
      "name": self.parser.get(input, "name"),
      "unit": self.parser.get(input, "unit"),
      "active": self.parser.getboolean(input, "active")
    }

if __name__ == '__main__':
  config = GlobalConfig()
  print "Getting test Env Var: %s" % config.getEnvVars("SERVER_ADDRESS")
  print "Ai1 active: %s" % config.getInputInfo("AI_1")["active"]
  print "Ai2 active: %s" % config.getInputInfo("AI_2")["active"]
  print "Ai7 active: %s" % config.getInputInfo("AI_7")["active"]