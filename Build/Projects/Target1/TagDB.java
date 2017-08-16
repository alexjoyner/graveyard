package Projects.Target1;

import gpclasses.baseclasses.*;
import gpclasses.animations.*;
import gpclasses.graphics.*;
import gpclasses.system.*;
import gpclasses.tags.*;
import gpclasses.macroobjects.*;
import gpclasses.plugins.diag.*;
import gpclasses.plugins.dialogTable.*;
import gpclasses.plugins.remoteTargetAlarms.*;

import gpclasses.plugins.illuminatedSwitch.*;

import java.util.Hashtable;

import Projects.ConfigurationMenu.ConfigTagDB;

public class TagDB extends ConfigTagDB
{
	public static int startNumber = CgpTagDB.NUM_SYSTEM_TAGS;
	public static Integer persistentContextObject = new Integer(CgpTagEventManager.getContextID(0));
	private static byte errorHandle = (byte)0;

	public static _DDT105 Authorization01;
	public static CgpStringTag UserLogin;
	public static CgpStringTag PasswordLogin;
	public static CgpDiscreteTag _IPAddressStatus;
	public static _Folder1_6 Vars_Pump1;
	public static _Folder1_12 System_Vars;
	public static _Folder1_14 Global_Process_Bits;

	// Dialog table members decalration

	public static CgpBaseAlarmGroup AlarmGroup1;


	static void StaticInit()
	{
		errorHandle = CgpSystem.configureErrorHandling("UserInputMgr.txt");

		CgpHdaHistorian.setTopOfDay(0);

		CgpAlarmBuffer.setTrackUsersACK(false);

		String[] AlarmGroup1TypeMsgs_0 = { "LOLO", };
		String[] AlarmGroup1TypeMsgs_1 = { "LO", };
		String[] AlarmGroup1TypeMsgs_2 = { "NRML", };
		String[] AlarmGroup1TypeMsgs_3 = { "HI", };
		String[] AlarmGroup1TypeMsgs_4 = { "HIHI", };
		String[] AlarmGroup1TypeMsgs_5 = { "MIN%", };
		String[] AlarmGroup1TypeMsgs_6 = { "MAJ%", };
		String[] AlarmGroup1TypeMsgs_7 = { "MIND", };
		String[] AlarmGroup1TypeMsgs_8 = { "MAJD", };
		String[] AlarmGroup1StateMsgs_0 = { "ACTIVE", };
		String[] AlarmGroup1StateMsgs_1 = { "ACK", };
		String[] AlarmGroup1StateMsgs_2 = { "RTN", };
		String[] AlarmGroup1StateMsgs_3 = { "", };
		String[] AlarmGroup1Labels	= { "AlarmGroup1", };

		AlarmGroup1 = CgpAlarmGroup.createAlarmGroup(1, 0, 100, 100, false, IgpAlarmGroupConstants.OPTIONAL_ACK_MODE);
		AlarmGroup1.setGroupName("AlarmGroup1");
		AlarmGroup1.setTypeMessage(
				AlarmGroup1TypeMsgs_0,
				AlarmGroup1TypeMsgs_1,
				AlarmGroup1TypeMsgs_2,
				AlarmGroup1TypeMsgs_3,
				AlarmGroup1TypeMsgs_4,
				AlarmGroup1TypeMsgs_5,
				AlarmGroup1TypeMsgs_6,
				AlarmGroup1TypeMsgs_7,
				AlarmGroup1TypeMsgs_8);
		AlarmGroup1.setStateMessage(
				AlarmGroup1StateMsgs_0,
				AlarmGroup1StateMsgs_1,
				AlarmGroup1StateMsgs_2,
				AlarmGroup1StateMsgs_3);
		AlarmGroup1.setGroupLabels( AlarmGroup1Labels );

		AlarmGroup1.setSharing(IgpAlarmEventDsConstants.SHARING_NONE);


		CgpExpressionServer.expressionServer = new XprSrv();
	}

	public TagDB()
	{
		super(27);
		//buildClassFactory();
		//super.buildClassFactory();
	}

	public void instantiate(int tagId)
	{
		classFactory(tagId);
	}

	public void buildClassFactory()
	{
		CgpSystem.buildClassFactory(getClass(), null, startNumber);
	}


	public static Object classFactory(int tagFieldIdentifier)
	{
		return TagDB0.classFactory1(tagFieldIdentifier);
	}

}
