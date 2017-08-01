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
		TagDB.Vars_Pump1.Alarms.WindingTemp = new CgpIntTag("Vars_Pump1.Alarms.WindingTemp", 1, TagDB.startNumber + 5, true, 0, true);
		TagDB.Vars_Pump1.Alarms.WindingTemp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.Alarms.Vibration = new CgpIntTag("Vars_Pump1.Alarms.Vibration", 1, TagDB.startNumber + 6, true, 0, true);
		TagDB.Vars_Pump1.Alarms.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.Alarms.SealFail = new CgpIntTag("Vars_Pump1.Alarms.SealFail", 1, TagDB.startNumber + 7, true, 0, true);
		TagDB.Vars_Pump1.Alarms.SealFail.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.Alarms.HighRTD = new CgpIntTag("Vars_Pump1.Alarms.HighRTD", 1, TagDB.startNumber + 8, true, 0, true);
		TagDB.Vars_Pump1.Alarms.HighRTD.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.Alarms.HighFloat = new CgpIntTag("Vars_Pump1.Alarms.HighFloat", 1, TagDB.startNumber + 9, true, 0, true);
		TagDB.Vars_Pump1.Alarms.HighFloat.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars.ResetAlarms = new CgpIntTag("System_Vars.ResetAlarms", 1, TagDB.startNumber + 10, true, 0, true);
		TagDB.System_Vars.ResetAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars.SilenceAlarms = new CgpIntTag("System_Vars.SilenceAlarms", 1, TagDB.startNumber + 11, true, 0, true);
		TagDB.System_Vars.SilenceAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.Timers.VibrationAlarmTimer = new CgpIntTag("Vars_Pump1.Timers.VibrationAlarmTimer", 1, TagDB.startNumber + 12, true, 0, true);
		TagDB.Vars_Pump1.Timers.VibrationAlarmTimer.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.Timers.PumpRtdAlarmTime = new CgpIntTag("Vars_Pump1.Timers.PumpRtdAlarmTime", 1, TagDB.startNumber + 13, true, 0, true);
		TagDB.Vars_Pump1.Timers.PumpRtdAlarmTime.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.CurrentTemps.Vibration = new CgpIntTag("Vars_Pump1.CurrentTemps.Vibration", 1, TagDB.startNumber + 15, true, 0, true);
		TagDB.Vars_Pump1.CurrentTemps.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.CurrentTemps.Motor_1_Temp = new CgpIntTag("Vars_Pump1.CurrentTemps.Motor_1_Temp", 1, TagDB.startNumber + 16, true, 0, true);
		TagDB.Vars_Pump1.CurrentTemps.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.CurrentTemps.Motor_2_Temp = new CgpIntTag("Vars_Pump1.CurrentTemps.Motor_2_Temp", 1, TagDB.startNumber + 17, true, 0, true);
		TagDB.Vars_Pump1.CurrentTemps.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.CurrentTemps.Motor_3_Temp = new CgpIntTag("Vars_Pump1.CurrentTemps.Motor_3_Temp", 1, TagDB.startNumber + 18, true, 0, true);
		TagDB.Vars_Pump1.CurrentTemps.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.CurrentTemps.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump1.CurrentTemps.Bottom_Bearing_Temp", 1, TagDB.startNumber + 19, true, 0, true);
		TagDB.Vars_Pump1.CurrentTemps.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.SetPoints.Vibration = new CgpIntTag("Vars_Pump1.SetPoints.Vibration", 1, TagDB.startNumber + 20, true, 0, true);
		TagDB.Vars_Pump1.SetPoints.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.SetPoints.Motor_1_Temp = new CgpIntTag("Vars_Pump1.SetPoints.Motor_1_Temp", 1, TagDB.startNumber + 21, true, 0, true);
		TagDB.Vars_Pump1.SetPoints.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.SetPoints.Motor_2_Temp = new CgpIntTag("Vars_Pump1.SetPoints.Motor_2_Temp", 1, TagDB.startNumber + 22, true, 0, true);
		TagDB.Vars_Pump1.SetPoints.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.SetPoints.Motor_3_Temp = new CgpIntTag("Vars_Pump1.SetPoints.Motor_3_Temp", 1, TagDB.startNumber + 23, true, 0, true);
		TagDB.Vars_Pump1.SetPoints.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump1.SetPoints.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump1.SetPoints.Bottom_Bearing_Temp", 1, TagDB.startNumber + 24, true, 0, true);
		TagDB.Vars_Pump1.SetPoints.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);


		new RefTagDB();

		return null;
	}
}
