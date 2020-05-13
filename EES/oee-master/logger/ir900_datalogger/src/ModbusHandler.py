import modbus_tk
import modbus_tk.defines as cst
from modbus_tk import modbus_tcp, hooks
import datetime
from GlobalConfig import GlobalConfig

class ModbusHandler:
  def __init__(self, controller):
    self.config = GlobalConfig()
    self.envVars = self.config.getEnvVars()
    if(controller):
      self.controller = controller
  def getLogPackage(self, controllers):
    now = datetime.datetime.now()
    logPackage = {}
    for controller in controllers:
      self.controller = controller
      self.setConnection()
      rawData = self.getAnalogInputs()
      logPackage['logs'] = self.getLogBlock(rawData)
    logPackage['datetime'] = "%s-05" % now.strftime("%Y-%m-%d %H:%M:%S")
    return logPackage
  def setConnection(self):
    print ("Connecting to: " + self.controller['MODBUS_ADDRESS'] +":"+ str(self.controller['MODBUS_PORT']))
    self.master = modbus_tcp.TcpMaster(
      host=self.controller['MODBUS_ADDRESS'],
      port=int(self.controller['MODBUS_PORT'])
    )
  def getAnalogInputs(self):
    return self.master.execute(255, cst.READ_HOLDING_REGISTERS, 8959, 29)
  def getLogBlock(self, dataArray):
    inputs = self.controller['inputs']
    logBlock = {}
    # Add in analog sections
    for x in range(len(dataArray)):
      pos = x + 1
      inputID = self.calcInputID(pos)
      if inputID not in inputs:
        continue
      pointInfo = inputs[inputID]
      if(pointInfo and pointInfo['point_id']):
        logBlock[pointInfo["point_id"]] = {
          "value": dataArray[x]
        }
    return logBlock
  def calcInputID(self, pos):
    controller = self.controller
    inputID = ''
    if(pos <= controller['NUM_OF_AI']):
      inputID = "AI_" + str(pos)
    elif (pos <= (controller['NUM_OF_AI'] + controller['NUM_OF_DI'])):
      inputID = "DI_" + str(pos - controller['NUM_OF_AI'])
    else:
      inputID = "CUST_" + str(pos - ((controller['NUM_OF_AI'] + controller['NUM_OF_DI'])))
    return inputID
  

if __name__ == '__main__':
  testController = GlobalConfig().getControllers()[0]
  testHandler = ModbusHandler(testController)
  testData = [
    1,2,3,4,5,6,7,8,9,10,11,12,
    0,1,0,1,0,1,0,1,0,1,1,1,
    7.5,3.4,23.42,23,0
  ]
  testLogBlock = testHandler.getLogBlock(testData)
  print('Test Log Block: ')
  print(testLogBlock)
