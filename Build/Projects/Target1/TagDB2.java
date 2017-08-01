package Projects.Target1;

import gpclasses.baseclasses.*;
import gpclasses.system.*;
import gpclasses.tags.*;
import gpclasses.trends.*;
import gpclasses.macroobjects.*;

public class TagDB2
{
	public static Object classFactory3(int tagFieldIdentifier)
	{
		TagDB.PLC_ModbusEquipment01.Green_light = new CgpDiscreteTag("PLC_ModbusEquipment01.Green_light", 1, TagDB.startNumber + 0, true, false, true);

		TagDB.PLC_ModbusEquipment01.Red_light = new CgpDiscreteTag("PLC_ModbusEquipment01.Red_light", 1, TagDB.startNumber + 1, true, false, true);

		TagDB.PLC_ModbusEquipment01.Sys_reset = new CgpDiscreteTag("PLC_ModbusEquipment01.Sys_reset", 1, TagDB.startNumber + 2, true, false, true);

		TagDB.PLC_ModbusEquipment01.Sys_start = new CgpDiscreteTag("PLC_ModbusEquipment01.Sys_start", 1, TagDB.startNumber + 3, true, false, true);

		TagDB.PLC_ModbusEquipment01.Sys_stop = new CgpDiscreteTag("PLC_ModbusEquipment01.Sys_stop", 1, TagDB.startNumber + 4, true, false, true);

		TagDB.PLC_ModbusEquipment01.Yellow_light = new CgpDiscreteTag("PLC_ModbusEquipment01.Yellow_light", 1, TagDB.startNumber + 5, true, false, true);


		new RefTagDB();

		return null;
	}
}
