package Projects.Target1;

import gpclasses.baseclasses.*;
import gpclasses.system.*;
import gpclasses.macroobjects.*;
import gpclasses.graphics.*;
import gpclasses.animations.*;
import gpclasses.plugins.script.*;
import gpclasses.util.io.*;
import gpclasses.tags.*;
import gpclasses.plugins.diag.*;
import gpclasses.plugins.dialogTable.*;
import gpclasses.userScripts.*;
import gpclasses.plugins.remoteTargetAlarms.*;
import gpclasses.plugins.illuminatedSwitch.*;



public class Startup extends CgpStartup
{
	public static CgpScript DateTime;
	public static Object DateTimeTimerContext;

	// Dialog table member declaration

	public static void main (String args[])
	{
		enableTimeSync(CgpStartup.NO_SYNC_MODE, -1);
		startupObject = new Startup();
		CgpStartup.main(args);

		CgpSystem.setAppBuildDateAndTimeString("16/08/2017", "11:08:32");
	}

	public String[] getPublishedPanels()
	{
		return null;
	}

	public int getDisplayWidth()
	{
		return 320;
	}

	public int getDisplayHeight()
	{
		return 240;
	}

	public CgpWindow[] getPopupWindows()
	{
		CgpWindow[] windowList =
		{
			WindowDB.LogoutPopup,
		};
		return windowList;
	}

	protected void preInitProject()
	{
		TagDB.StaticInit();
		new Projects.Target1.TagDB();
		CgpSystem.projectName = "Projects/Target1";
	}

	protected void postInitProject()
	{
		CgpSmartKeypad.setKeypadProperty( true,
						0x00ffffff,
						0x00ffffff,
						0x009f5f1f,
						0x005f3f1f,
						0x00744e14,
						CgpSmartKeypad.LAYOUT_3PAGE
						);

		int iPersistentContext = CgpSystem.TEM.getContextID(0);
		gpclasses.system.CgpSystem.TM.setMinPeriodicInterval(100);
		Projects.Target1.TagDB._ExternalCmdTag.addEventListener(CgpScript.loadScript("Projects/Target1/ExternalCmdScript"), 0, iPersistentContext);
		Projects.Target1.TagDB._CurPanelID.addEventListener(CgpScript.loadScript("gpclasses/system/CgpChangePanelScript"), 0, iPersistentContext);
		DateTime = new CgpDateTimeUpdateScript();
		DateTimeTimerContext = gpclasses.system.CgpSystem.TM.createContext(CgpThread.MAX_PRIORITY-1);
		gpclasses.system.CgpSystem.TM.addTimerScript(DateTime, 1000, DateTimeTimerContext);
		gpclasses.system.CgpSystem.baseWindow.setPanelHistory(32);
		gpclasses.system.CgpSystem.TEM.setAnyHDATags(false);

		gpclasses.system.CgpSystem.setShowSystemErrorWindow(true);

		char seps[] = {' '};
		CgpLanguageMgr.languageMgr.setSeperators(seps);

		CgpFont fonts[] = {
			new CgpFont("TCP8x13", CgpFont.PLAIN, (byte)13, (byte)8),
		};
		CgpLanguageMgr.languageMgr.setApplicationLanguageFonts(fonts);



		CgpSecurityControl.securityControl = new CgpSecurityControl(
			600,
			CgpSecurityControl.ACCESS_MIN_LEVEL,
			CgpGraphics.DRAW_SECURED_NOTHING,
			65502,
			CgpSecurityControl.UNSECURED_PANEL_ACTION_NOTHING,
			0,
			0,
			true,
			false,
			false);
		CgpSecurityControl.securityControl.init();
		byte [] securityKey = {99,48,50,56,57,50,100,101,48,98,52,100,48,99,49,98,102,100,102,51,51,57,97,51,56,100,99,50,97,100,49,98,100,55,48,51,48,53,48,55,};
		CgpSecurityDB.securityDB = new CgpSecurityDB(securityKey);
		CgpSecurityDB.securityDB.init("");
		CgpSecurityPasswordMgr.securityPasswordMgr = new CgpSecurityPasswordMgr(-1, 3, -1, -1, -1, -1);

		if (CgpSystem.isPlatform(CgpSystem.HMI)) CgpHdaHistorian.setAutoFlushTime(0);

		// Protocol info
		CgpCommManager.setStringProperty("Pump1", "Con_Protocol", "Modbus TCP/IP");

		// Dialog Table Functions

		gpclasses.system.CgpSystem.globalCursor = new CgpCursor("MouseArrow.bmp", "MouseHand.bmp", 20, 25, CgpColor.makeTransparentColor(0x00333333));

		gpclasses.system.CgpSystem.globalCursor.setTimeout(30);
	}

	protected void appScriptRegistration(int context)
	{
		CgpAction Action1 = new CgpAction(new ActionScript1(), "Log Out Process");
		CgpDataChangeTrigger ConditionalAction1 = new CgpDataChangeTrigger(TagDB.Global_Process_Bits.logoutProcess, CgpDataChangeTrigger.WHEN_TRUE, context, Action1);
		ConditionalAction1.onlyPublishTo(CgpSystem.HMI);

		CgpAction Action2 = new CgpAction(new ActionScript2(), "Goto Setup Screen (Must Check Authentication for access)");
		CgpDataChangeTrigger ConditionalAction2 = new CgpDataChangeTrigger(TagDB.Global_Process_Bits.GotoSetup, CgpDataChangeTrigger.WHEN_TRUE, context, Action2);
		ConditionalAction2.onlyPublishTo(CgpSystem.HMI);

	}

	protected void openScripts()
	{
	}

	protected void shutdownProject()
	{
		TagDB.AlarmGroup1.clean();
	}

	public String getRevisionNumber()
	{
		return "201";
	}

	public void setupProjectPersistents()
	{
		int iPersistentContext = CgpSystem.TEM.getContextID(0);
		CgpTag tagListIgnoredByWebgate[] =
		{
			TagDB._UserLevel,
			TagDB.Global_Process_Bits.logoutProcess,
			TagDB.Global_Process_Bits.GotoSetup,
		};
		appScriptRegistration(iPersistentContext);

		CgpSystem.TEM.registerTagList(iPersistentContext, null, tagListIgnoredByWebgate);
	}
}
