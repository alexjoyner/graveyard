import modbus_tk
import modbus_tk.defines as cst
from modbus_tk import modbus_tcp, hooks
from GlobalConfig import GlobalConfig

class ModbusHandler:
  def __init__(self):
    config = GlobalConfig()
    self.master = modbus_tcp.TcpMaster(
      host=config.getAll()['MODBUS_URL'],
      port=502
    )

  def getAnalogInputs(self):
    return self.master.execute(255, cst.READ_HOLDING_REGISTERS, 8336, 10)

if __name__ == '__main__':
  test = ModbusHandler()
  data = test.getAnalogInputs()
  response = {
    'data': data
  }
  print('Data Retreived')
  print(response)