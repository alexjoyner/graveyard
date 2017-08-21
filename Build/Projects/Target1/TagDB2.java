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

		TagDB.System_Vars_P1.ResetAlarms = new CgpIntTag("System_Vars_P1.ResetAlarms", 1, TagDB.startNumber + 10, true, 0, true);
		TagDB.System_Vars_P1.ResetAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P1.SilenceAlarms = new CgpIntTag("System_Vars_P1.SilenceAlarms", 1, TagDB.startNumber + 11, true, 0, true);
		TagDB.System_Vars_P1.SilenceAlarms.setMinMaxValues(-32768, 32767, true);

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

		TagDB.Vars_Pump2.Alarms.WindingTemp = new CgpIntTag("Vars_Pump2.Alarms.WindingTemp", 1, TagDB.startNumber + 27, true, 0, true);
		TagDB.Vars_Pump2.Alarms.WindingTemp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.Alarms.Vibration = new CgpIntTag("Vars_Pump2.Alarms.Vibration", 1, TagDB.startNumber + 28, true, 0, true);
		TagDB.Vars_Pump2.Alarms.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.Alarms.SealFail = new CgpIntTag("Vars_Pump2.Alarms.SealFail", 1, TagDB.startNumber + 29, true, 0, true);
		TagDB.Vars_Pump2.Alarms.SealFail.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.Alarms.HighRTD = new CgpIntTag("Vars_Pump2.Alarms.HighRTD", 1, TagDB.startNumber + 30, true, 0, true);
		TagDB.Vars_Pump2.Alarms.HighRTD.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.Alarms.HighFloat = new CgpIntTag("Vars_Pump2.Alarms.HighFloat", 1, TagDB.startNumber + 31, true, 0, true);
		TagDB.Vars_Pump2.Alarms.HighFloat.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.Timers.VibrationAlarmTimer = new CgpIntTag("Vars_Pump2.Timers.VibrationAlarmTimer", 1, TagDB.startNumber + 32, true, 0, true);
		TagDB.Vars_Pump2.Timers.VibrationAlarmTimer.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.Timers.PumpRtdAlarmTime = new CgpIntTag("Vars_Pump2.Timers.PumpRtdAlarmTime", 1, TagDB.startNumber + 33, true, 0, true);
		TagDB.Vars_Pump2.Timers.PumpRtdAlarmTime.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.CurrentTemps.Vibration = new CgpIntTag("Vars_Pump2.CurrentTemps.Vibration", 1, TagDB.startNumber + 34, true, 0, true);
		TagDB.Vars_Pump2.CurrentTemps.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.CurrentTemps.Motor_1_Temp = new CgpIntTag("Vars_Pump2.CurrentTemps.Motor_1_Temp", 1, TagDB.startNumber + 35, true, 0, true);
		TagDB.Vars_Pump2.CurrentTemps.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.CurrentTemps.Motor_2_Temp = new CgpIntTag("Vars_Pump2.CurrentTemps.Motor_2_Temp", 1, TagDB.startNumber + 36, true, 0, true);
		TagDB.Vars_Pump2.CurrentTemps.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.CurrentTemps.Motor_3_Temp = new CgpIntTag("Vars_Pump2.CurrentTemps.Motor_3_Temp", 1, TagDB.startNumber + 37, true, 0, true);
		TagDB.Vars_Pump2.CurrentTemps.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.CurrentTemps.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump2.CurrentTemps.Bottom_Bearing_Temp", 1, TagDB.startNumber + 38, true, 0, true);
		TagDB.Vars_Pump2.CurrentTemps.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.SetPoints.Vibration = new CgpIntTag("Vars_Pump2.SetPoints.Vibration", 1, TagDB.startNumber + 39, true, 0, true);
		TagDB.Vars_Pump2.SetPoints.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.SetPoints.Motor_1_Temp = new CgpIntTag("Vars_Pump2.SetPoints.Motor_1_Temp", 1, TagDB.startNumber + 40, true, 0, true);
		TagDB.Vars_Pump2.SetPoints.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.SetPoints.Motor_2_Temp = new CgpIntTag("Vars_Pump2.SetPoints.Motor_2_Temp", 1, TagDB.startNumber + 41, true, 0, true);
		TagDB.Vars_Pump2.SetPoints.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.SetPoints.Motor_3_Temp = new CgpIntTag("Vars_Pump2.SetPoints.Motor_3_Temp", 1, TagDB.startNumber + 42, true, 0, true);
		TagDB.Vars_Pump2.SetPoints.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump2.SetPoints.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump2.SetPoints.Bottom_Bearing_Temp", 1, TagDB.startNumber + 43, true, 0, true);
		TagDB.Vars_Pump2.SetPoints.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.Alarms.WindingTemp = new CgpIntTag("Vars_Pump3.Alarms.WindingTemp", 1, TagDB.startNumber + 44, true, 0, true);
		TagDB.Vars_Pump3.Alarms.WindingTemp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.Alarms.Vibration = new CgpIntTag("Vars_Pump3.Alarms.Vibration", 1, TagDB.startNumber + 45, true, 0, true);
		TagDB.Vars_Pump3.Alarms.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.Alarms.SealFail = new CgpIntTag("Vars_Pump3.Alarms.SealFail", 1, TagDB.startNumber + 46, true, 0, true);
		TagDB.Vars_Pump3.Alarms.SealFail.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.Alarms.HighRTD = new CgpIntTag("Vars_Pump3.Alarms.HighRTD", 1, TagDB.startNumber + 47, true, 0, true);
		TagDB.Vars_Pump3.Alarms.HighRTD.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.Alarms.HighFloat = new CgpIntTag("Vars_Pump3.Alarms.HighFloat", 1, TagDB.startNumber + 48, true, 0, true);
		TagDB.Vars_Pump3.Alarms.HighFloat.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.Timers.VibrationAlarmTimer = new CgpIntTag("Vars_Pump3.Timers.VibrationAlarmTimer", 1, TagDB.startNumber + 49, true, 0, true);
		TagDB.Vars_Pump3.Timers.VibrationAlarmTimer.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.Timers.PumpRtdAlarmTime = new CgpIntTag("Vars_Pump3.Timers.PumpRtdAlarmTime", 1, TagDB.startNumber + 50, true, 0, true);
		TagDB.Vars_Pump3.Timers.PumpRtdAlarmTime.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.CurrentTemps.Vibration = new CgpIntTag("Vars_Pump3.CurrentTemps.Vibration", 1, TagDB.startNumber + 51, true, 0, true);
		TagDB.Vars_Pump3.CurrentTemps.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.CurrentTemps.Motor_1_Temp = new CgpIntTag("Vars_Pump3.CurrentTemps.Motor_1_Temp", 1, TagDB.startNumber + 52, true, 0, true);
		TagDB.Vars_Pump3.CurrentTemps.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.CurrentTemps.Motor_2_Temp = new CgpIntTag("Vars_Pump3.CurrentTemps.Motor_2_Temp", 1, TagDB.startNumber + 53, true, 0, true);
		TagDB.Vars_Pump3.CurrentTemps.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.CurrentTemps.Motor_3_Temp = new CgpIntTag("Vars_Pump3.CurrentTemps.Motor_3_Temp", 1, TagDB.startNumber + 54, true, 0, true);
		TagDB.Vars_Pump3.CurrentTemps.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.CurrentTemps.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump3.CurrentTemps.Bottom_Bearing_Temp", 1, TagDB.startNumber + 55, true, 0, true);
		TagDB.Vars_Pump3.CurrentTemps.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.SetPoints.Vibration = new CgpIntTag("Vars_Pump3.SetPoints.Vibration", 1, TagDB.startNumber + 56, true, 0, true);
		TagDB.Vars_Pump3.SetPoints.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.SetPoints.Motor_1_Temp = new CgpIntTag("Vars_Pump3.SetPoints.Motor_1_Temp", 1, TagDB.startNumber + 57, true, 0, true);
		TagDB.Vars_Pump3.SetPoints.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.SetPoints.Motor_2_Temp = new CgpIntTag("Vars_Pump3.SetPoints.Motor_2_Temp", 1, TagDB.startNumber + 58, true, 0, true);
		TagDB.Vars_Pump3.SetPoints.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.SetPoints.Motor_3_Temp = new CgpIntTag("Vars_Pump3.SetPoints.Motor_3_Temp", 1, TagDB.startNumber + 59, true, 0, true);
		TagDB.Vars_Pump3.SetPoints.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump3.SetPoints.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump3.SetPoints.Bottom_Bearing_Temp", 1, TagDB.startNumber + 60, true, 0, true);
		TagDB.Vars_Pump3.SetPoints.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.Alarms.WindingTemp = new CgpIntTag("Vars_Pump4.Alarms.WindingTemp", 1, TagDB.startNumber + 61, true, 0, true);
		TagDB.Vars_Pump4.Alarms.WindingTemp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.Alarms.Vibration = new CgpIntTag("Vars_Pump4.Alarms.Vibration", 1, TagDB.startNumber + 62, true, 0, true);
		TagDB.Vars_Pump4.Alarms.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.Alarms.SealFail = new CgpIntTag("Vars_Pump4.Alarms.SealFail", 1, TagDB.startNumber + 63, true, 0, true);
		TagDB.Vars_Pump4.Alarms.SealFail.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.Alarms.HighRTD = new CgpIntTag("Vars_Pump4.Alarms.HighRTD", 1, TagDB.startNumber + 64, true, 0, true);
		TagDB.Vars_Pump4.Alarms.HighRTD.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.Alarms.HighFloat = new CgpIntTag("Vars_Pump4.Alarms.HighFloat", 1, TagDB.startNumber + 65, true, 0, true);
		TagDB.Vars_Pump4.Alarms.HighFloat.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.Timers.VibrationAlarmTimer = new CgpIntTag("Vars_Pump4.Timers.VibrationAlarmTimer", 1, TagDB.startNumber + 66, true, 0, true);
		TagDB.Vars_Pump4.Timers.VibrationAlarmTimer.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.Timers.PumpRtdAlarmTime = new CgpIntTag("Vars_Pump4.Timers.PumpRtdAlarmTime", 1, TagDB.startNumber + 67, true, 0, true);
		TagDB.Vars_Pump4.Timers.PumpRtdAlarmTime.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.CurrentTemps.Vibration = new CgpIntTag("Vars_Pump4.CurrentTemps.Vibration", 1, TagDB.startNumber + 68, true, 0, true);
		TagDB.Vars_Pump4.CurrentTemps.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.CurrentTemps.Motor_1_Temp = new CgpIntTag("Vars_Pump4.CurrentTemps.Motor_1_Temp", 1, TagDB.startNumber + 69, true, 0, true);
		TagDB.Vars_Pump4.CurrentTemps.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.CurrentTemps.Motor_2_Temp = new CgpIntTag("Vars_Pump4.CurrentTemps.Motor_2_Temp", 1, TagDB.startNumber + 70, true, 0, true);
		TagDB.Vars_Pump4.CurrentTemps.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.CurrentTemps.Motor_3_Temp = new CgpIntTag("Vars_Pump4.CurrentTemps.Motor_3_Temp", 1, TagDB.startNumber + 71, true, 0, true);
		TagDB.Vars_Pump4.CurrentTemps.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.CurrentTemps.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump4.CurrentTemps.Bottom_Bearing_Temp", 1, TagDB.startNumber + 72, true, 0, true);
		TagDB.Vars_Pump4.CurrentTemps.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.SetPoints.Vibration = new CgpIntTag("Vars_Pump4.SetPoints.Vibration", 1, TagDB.startNumber + 73, true, 0, true);
		TagDB.Vars_Pump4.SetPoints.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.SetPoints.Motor_1_Temp = new CgpIntTag("Vars_Pump4.SetPoints.Motor_1_Temp", 1, TagDB.startNumber + 74, true, 0, true);
		TagDB.Vars_Pump4.SetPoints.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.SetPoints.Motor_2_Temp = new CgpIntTag("Vars_Pump4.SetPoints.Motor_2_Temp", 1, TagDB.startNumber + 75, true, 0, true);
		TagDB.Vars_Pump4.SetPoints.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.SetPoints.Motor_3_Temp = new CgpIntTag("Vars_Pump4.SetPoints.Motor_3_Temp", 1, TagDB.startNumber + 76, true, 0, true);
		TagDB.Vars_Pump4.SetPoints.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump4.SetPoints.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump4.SetPoints.Bottom_Bearing_Temp", 1, TagDB.startNumber + 77, true, 0, true);
		TagDB.Vars_Pump4.SetPoints.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.Alarms.WindingTemp = new CgpIntTag("Vars_Pump5.Alarms.WindingTemp", 1, TagDB.startNumber + 78, true, 0, true);
		TagDB.Vars_Pump5.Alarms.WindingTemp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.Alarms.Vibration = new CgpIntTag("Vars_Pump5.Alarms.Vibration", 1, TagDB.startNumber + 79, true, 0, true);
		TagDB.Vars_Pump5.Alarms.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.Alarms.SealFail = new CgpIntTag("Vars_Pump5.Alarms.SealFail", 1, TagDB.startNumber + 80, true, 0, true);
		TagDB.Vars_Pump5.Alarms.SealFail.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.Alarms.HighRTD = new CgpIntTag("Vars_Pump5.Alarms.HighRTD", 1, TagDB.startNumber + 81, true, 0, true);
		TagDB.Vars_Pump5.Alarms.HighRTD.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.Alarms.HighFloat = new CgpIntTag("Vars_Pump5.Alarms.HighFloat", 1, TagDB.startNumber + 82, true, 0, true);
		TagDB.Vars_Pump5.Alarms.HighFloat.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.Timers.VibrationAlarmTimer = new CgpIntTag("Vars_Pump5.Timers.VibrationAlarmTimer", 1, TagDB.startNumber + 83, true, 0, true);
		TagDB.Vars_Pump5.Timers.VibrationAlarmTimer.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.Timers.PumpRtdAlarmTime = new CgpIntTag("Vars_Pump5.Timers.PumpRtdAlarmTime", 1, TagDB.startNumber + 84, true, 0, true);
		TagDB.Vars_Pump5.Timers.PumpRtdAlarmTime.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.CurrentTemps.Vibration = new CgpIntTag("Vars_Pump5.CurrentTemps.Vibration", 1, TagDB.startNumber + 85, true, 0, true);
		TagDB.Vars_Pump5.CurrentTemps.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.CurrentTemps.Motor_1_Temp = new CgpIntTag("Vars_Pump5.CurrentTemps.Motor_1_Temp", 1, TagDB.startNumber + 86, true, 0, true);
		TagDB.Vars_Pump5.CurrentTemps.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.CurrentTemps.Motor_2_Temp = new CgpIntTag("Vars_Pump5.CurrentTemps.Motor_2_Temp", 1, TagDB.startNumber + 87, true, 0, true);
		TagDB.Vars_Pump5.CurrentTemps.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.CurrentTemps.Motor_3_Temp = new CgpIntTag("Vars_Pump5.CurrentTemps.Motor_3_Temp", 1, TagDB.startNumber + 88, true, 0, true);
		TagDB.Vars_Pump5.CurrentTemps.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.CurrentTemps.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump5.CurrentTemps.Bottom_Bearing_Temp", 1, TagDB.startNumber + 89, true, 0, true);
		TagDB.Vars_Pump5.CurrentTemps.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.SetPoints.Vibration = new CgpIntTag("Vars_Pump5.SetPoints.Vibration", 1, TagDB.startNumber + 90, true, 0, true);
		TagDB.Vars_Pump5.SetPoints.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.SetPoints.Motor_1_Temp = new CgpIntTag("Vars_Pump5.SetPoints.Motor_1_Temp", 1, TagDB.startNumber + 91, true, 0, true);
		TagDB.Vars_Pump5.SetPoints.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.SetPoints.Motor_2_Temp = new CgpIntTag("Vars_Pump5.SetPoints.Motor_2_Temp", 1, TagDB.startNumber + 92, true, 0, true);
		TagDB.Vars_Pump5.SetPoints.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.SetPoints.Motor_3_Temp = new CgpIntTag("Vars_Pump5.SetPoints.Motor_3_Temp", 1, TagDB.startNumber + 93, true, 0, true);
		TagDB.Vars_Pump5.SetPoints.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump5.SetPoints.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump5.SetPoints.Bottom_Bearing_Temp", 1, TagDB.startNumber + 94, true, 0, true);
		TagDB.Vars_Pump5.SetPoints.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.Alarms.WindingTemp = new CgpIntTag("Vars_Pump6.Alarms.WindingTemp", 1, TagDB.startNumber + 95, true, 0, true);
		TagDB.Vars_Pump6.Alarms.WindingTemp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.Alarms.Vibration = new CgpIntTag("Vars_Pump6.Alarms.Vibration", 1, TagDB.startNumber + 96, true, 0, true);
		TagDB.Vars_Pump6.Alarms.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.Alarms.SealFail = new CgpIntTag("Vars_Pump6.Alarms.SealFail", 1, TagDB.startNumber + 97, true, 0, true);
		TagDB.Vars_Pump6.Alarms.SealFail.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.Alarms.HighRTD = new CgpIntTag("Vars_Pump6.Alarms.HighRTD", 1, TagDB.startNumber + 98, true, 0, true);
		TagDB.Vars_Pump6.Alarms.HighRTD.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.Alarms.HighFloat = new CgpIntTag("Vars_Pump6.Alarms.HighFloat", 1, TagDB.startNumber + 99, true, 0, true);
		TagDB.Vars_Pump6.Alarms.HighFloat.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.Timers.VibrationAlarmTimer = new CgpIntTag("Vars_Pump6.Timers.VibrationAlarmTimer", 1, TagDB.startNumber + 100, true, 0, true);
		TagDB.Vars_Pump6.Timers.VibrationAlarmTimer.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.Timers.PumpRtdAlarmTime = new CgpIntTag("Vars_Pump6.Timers.PumpRtdAlarmTime", 1, TagDB.startNumber + 101, true, 0, true);
		TagDB.Vars_Pump6.Timers.PumpRtdAlarmTime.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.CurrentTemps.Vibration = new CgpIntTag("Vars_Pump6.CurrentTemps.Vibration", 1, TagDB.startNumber + 102, true, 0, true);
		TagDB.Vars_Pump6.CurrentTemps.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.CurrentTemps.Motor_1_Temp = new CgpIntTag("Vars_Pump6.CurrentTemps.Motor_1_Temp", 1, TagDB.startNumber + 103, true, 0, true);
		TagDB.Vars_Pump6.CurrentTemps.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.CurrentTemps.Motor_2_Temp = new CgpIntTag("Vars_Pump6.CurrentTemps.Motor_2_Temp", 1, TagDB.startNumber + 104, true, 0, true);
		TagDB.Vars_Pump6.CurrentTemps.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.CurrentTemps.Motor_3_Temp = new CgpIntTag("Vars_Pump6.CurrentTemps.Motor_3_Temp", 1, TagDB.startNumber + 105, true, 0, true);
		TagDB.Vars_Pump6.CurrentTemps.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.CurrentTemps.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump6.CurrentTemps.Bottom_Bearing_Temp", 1, TagDB.startNumber + 106, true, 0, true);
		TagDB.Vars_Pump6.CurrentTemps.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.SetPoints.Vibration = new CgpIntTag("Vars_Pump6.SetPoints.Vibration", 1, TagDB.startNumber + 107, true, 0, true);
		TagDB.Vars_Pump6.SetPoints.Vibration.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.SetPoints.Motor_1_Temp = new CgpIntTag("Vars_Pump6.SetPoints.Motor_1_Temp", 1, TagDB.startNumber + 108, true, 0, true);
		TagDB.Vars_Pump6.SetPoints.Motor_1_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.SetPoints.Motor_2_Temp = new CgpIntTag("Vars_Pump6.SetPoints.Motor_2_Temp", 1, TagDB.startNumber + 109, true, 0, true);
		TagDB.Vars_Pump6.SetPoints.Motor_2_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.SetPoints.Motor_3_Temp = new CgpIntTag("Vars_Pump6.SetPoints.Motor_3_Temp", 1, TagDB.startNumber + 110, true, 0, true);
		TagDB.Vars_Pump6.SetPoints.Motor_3_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.Vars_Pump6.SetPoints.Bottom_Bearing_Temp = new CgpIntTag("Vars_Pump6.SetPoints.Bottom_Bearing_Temp", 1, TagDB.startNumber + 111, true, 0, true);
		TagDB.Vars_Pump6.SetPoints.Bottom_Bearing_Temp.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P2.ResetAlarms = new CgpIntTag("System_Vars_P2.ResetAlarms", 1, TagDB.startNumber + 112, true, 0, true);
		TagDB.System_Vars_P2.ResetAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P2.SilenceAlarms = new CgpIntTag("System_Vars_P2.SilenceAlarms", 1, TagDB.startNumber + 113, true, 0, true);
		TagDB.System_Vars_P2.SilenceAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P3.ResetAlarms = new CgpIntTag("System_Vars_P3.ResetAlarms", 1, TagDB.startNumber + 114, true, 0, true);
		TagDB.System_Vars_P3.ResetAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P3.SilenceAlarms = new CgpIntTag("System_Vars_P3.SilenceAlarms", 1, TagDB.startNumber + 115, true, 0, true);
		TagDB.System_Vars_P3.SilenceAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P4.ResetAlarms = new CgpIntTag("System_Vars_P4.ResetAlarms", 1, TagDB.startNumber + 116, true, 0, true);
		TagDB.System_Vars_P4.ResetAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P4.SilenceAlarms = new CgpIntTag("System_Vars_P4.SilenceAlarms", 1, TagDB.startNumber + 117, true, 0, true);
		TagDB.System_Vars_P4.SilenceAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P5.ResetAlarms = new CgpIntTag("System_Vars_P5.ResetAlarms", 1, TagDB.startNumber + 118, true, 0, true);
		TagDB.System_Vars_P5.ResetAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P5.SilenceAlarms = new CgpIntTag("System_Vars_P5.SilenceAlarms", 1, TagDB.startNumber + 119, true, 0, true);
		TagDB.System_Vars_P5.SilenceAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P6.ResetAlarms = new CgpIntTag("System_Vars_P6.ResetAlarms", 1, TagDB.startNumber + 120, true, 0, true);
		TagDB.System_Vars_P6.ResetAlarms.setMinMaxValues(-32768, 32767, true);

		TagDB.System_Vars_P6.SilenceAlarms = new CgpIntTag("System_Vars_P6.SilenceAlarms", 1, TagDB.startNumber + 121, true, 0, true);
		TagDB.System_Vars_P6.SilenceAlarms.setMinMaxValues(-32768, 32767, true);


		new RefTagDB();

		return null;
	}
}
