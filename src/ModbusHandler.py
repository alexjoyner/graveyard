import modbus_tk
import modbus_tk.defines as cst
from modbus_tk import modbus_tcp, hooks
import datetime
from GlobalConfig import GlobalConfig

class ModbusHandler:
  def __init__(self):
    self.config = GlobalConfig()
    self.master = modbus_tcp.TcpMaster(
      host=self.config.getModbusInfo()['MODBUS_ADDRESS'],
      port=502
    )

  def getAnalogInputs(self):
    data = self.master.execute(255, cst.READ_HOLDING_REGISTERS, 8335, 10)
    now = datetime.datetime.now()
    return {
      "logs": self.buildLogPack(data),
      "datetime": "%s-05" % now.strftime("%Y-%m-%d %H:%M:%S")
    }
  def buildLogPack(self, IO_DATA):
    logPack = {}
    for x in range(int(self.config.getModbusInfo()['NUM_OF_AI'])):
      aiNum = x + 1
      aiInfo = self.config.getInputInfo("AI_" + str(aiNum))
      if(bool(aiInfo["active"])):
        logPack[aiInfo["point_id"]] = {
          "name": aiInfo["name"],
          "value": IO_DATA[x] / 10,
          "unit": aiInfo["unit"]
        }
    return logPack

if __name__ == '__main__':
  test = ModbusHandler()
  data = test.getAnalogInputs()
  response = {
    'data': data
  }
  print('Data Retreived')
  print(response)