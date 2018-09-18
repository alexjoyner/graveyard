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
      "inputs": self.buildLogPack(data),
      "dateTime": "%s-05" % now.strftime("%Y-%m-%d %H:%M:%S")
    }
  def buildLogPack(self, IO_DATA):
    logPack = []
    for x in range(7):
      aiNum = x + 1
      aiInfo = self.config.getInputInfo("AI_" + str(aiNum))
      if(aiInfo["active"]):
        logPack.append({
          "pointID": aiInfo["point_id"],
          "value": IO_DATA[x] / 10,
        })
    return logPack

if __name__ == '__main__':
  test = ModbusHandler()
  data = test.getAnalogInputs()
  response = {
    'data': data
  }
  print('Data Retreived')
  print(response)