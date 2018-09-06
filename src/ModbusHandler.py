import modbus_tk
import modbus_tk.defines as cst
from modbus_tk import modbus_tcp, hooks

class ModbusHandler:
  def __init__(self):
    self.master = modbus_tcp.TcpMaster(
      host="192.168.2.100",
      port=502
    )

  def getAnalogInputs(self):
    print('Getting Analog Inputs')
    return self.master.execute(255, cst.READ_HOLDING_REGISTERS, 8336, 10)

if __name__ == '__main__':
  test = ModbusHandler()
  data = test.getAnalogInputs()
  response = {
    'data': data
  }
  print('Data Retreived')
  print(response)