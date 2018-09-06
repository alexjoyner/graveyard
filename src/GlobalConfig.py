from configparser import ConfigParser
import os

class GlobalConfig:
  def __init__(self):
    env = os.environ.get('PY_ENV')
    self.config = ConfigParser()
    self.config.read('../config.ini')
    if(env.lower() == 'dev' or env.lower() == 'development'):
      self.BASE_ENV = 'DEV_ENV'
    else:
      self.BASE_ENV = 'PROD_ENV'
    self.setup()
  def read(self, key_name):
    return self.config.get(self.BASE_ENV, key_name)
  def setup(self):
    self.ENV_VARS = {
      "SERVER_ADDRESS": self.read('SERVER_ADDRESS'),
      "DESTINATION_URL": self.read('SERVER_ADDRESS') + '/log/test',
      "MODBUS_URL": "192.168.2.100"
    }
  def getAll(self):
    return self.ENV_VARS

if __name__ == '__main__':
  config = GlobalConfig()
  print config.getAll()