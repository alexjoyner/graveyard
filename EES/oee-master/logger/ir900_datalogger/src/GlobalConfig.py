import yaml
import os

env = os.environ.get('PY_ENV') or "prod"
env = env.lower()
configPath = {
  'dev': '../config.ini',
  'prodtest': '../config.ini',
  'prod': '/var/app/oee_master/config.ini',
}
class GlobalConfig:
  def __init__(self):
    self.config = yaml.load(file(configPath[env]))

  def getEnvVars(self):
    if env not in self.config['environments']:
      return None
    return self.config['environments'][env]
    
  def getControllers(self):
    return self.config["controllers"]

if __name__ == '__main__':
  config = GlobalConfig()
  print config.getControllers()