package Projects.Target1;

import gpclasses.baseclasses.*;
import gpclasses.animations.*;
import gpclasses.graphics.*;
import gpclasses.macroobjects.*;
import gpclasses.system.*;
import gpclasses.tags.*;
import gpclasses.baseclasses.CgpReferenceTag;
import gpclasses.system.CgpRefTagFactory;
import gpclasses.util.misc.*;
import gpclasses.util.io.*;
import gpclasses.plugins.diag.*;
import gpclasses.plugins.script.*;
import gpclasses.plugins.illuminatedSwitch.*;
import gpclasses.userScripts.*;
import gpclasses.alarms.*;
import java.text.Format;
import java.util.Vector;

public class Panel2 extends CgpPanel
{
	public Panel2XprSrv exprServer;

	public Switch_0007 Switch01;
	public Switch_0012 Switch02;
	public Switch_0008 Switch03;
	public Switch_0012 SilenceAlarmsBtn;
	public Switch_0011 Switch04;
	public Lamp_0007 WindingTempAlarmLight05;
	public Lamp_0007 SealFailAlarmLight05;
	public Lamp_0007 HighFloatAlarmLight05;
	public Lamp_0007 VibrationAlarmLight05;
	public Lamp_0007 HighRtdAlarmLight05;
	public Lamp_0007 GroupObject04_WindingTempAlarmLight04;
	public Lamp_0007 GroupObject04_SealFailAlarmLight04;
	public Lamp_0007 GroupObject04_HighFloatAlarmLight04;
	public Lamp_0007 GroupObject04_VibrationAlarmLight04;
	public Lamp_0007 GroupObject04_HighRtdAlarmLight04;
	public Lamp_0007 GroupObject05_WindingTempAlarmLight02;
	public Lamp_0007 GroupObject05_SealFailAlarmLight02;
	public Lamp_0007 GroupObject05_HighFloatAlarmLight02;
	public Lamp_0007 GroupObject05_VibrationAlarmLight02;
	public Lamp_0007 GroupObject05_HighRtdAlarmLight02;
	public Lamp_0007 GroupObject06_WindingTempAlarmLight01;
	public Lamp_0007 GroupObject06_SealFailAlarmLight01;
	public Lamp_0007 GroupObject06_HighFloatAlarmLight01;
	public Lamp_0007 GroupObject06_VibrationAlarmLight01;
	public Lamp_0007 GroupObject06_HighRtdAlarmLight01;
	public Lamp_0007 GroupObject07_WindingTempAlarmLight;
	public Lamp_0007 GroupObject07_SealFailAlarmLight;
	public Lamp_0007 GroupObject07_HighFloatAlarmLight;
	public Lamp_0007 GroupObject07_VibrationAlarmLight;
	public Lamp_0007 GroupObject07_HighRtdAlarmLight;
	public Lamp_0007 GroupObject08_WindingTempAlarmLight03;
	public Lamp_0007 GroupObject08_SealFailAlarmLight03;
	public Lamp_0007 GroupObject08_HighFloatAlarmLight03;
	public Lamp_0007 GroupObject08_VibrationAlarmLight03;
	public Lamp_0007 GroupObject08_HighRtdAlarmLight03;
	CgpFont F1;
	CgpFont F9;
	CgpFont F17;
	private CgpMasterPanel masterPanel = null;
	public int publishedTo()
		{
			return CgpSystem.HMI;
		}

	public void createStaticObjects()
	{
		exprServer = new Panel2XprSrv();

		setBacklightColor(0);
	}
	public String getPanelName()
	{
		return "Summary";
	}
	public int getPanelID()
	{
		return 2;
	}

	public int getBackColor()
	{
		return 0x004c402a;
	}

	public void onOpen()
	{
		super.onOpen();

		Integer contextObject = new Integer(panelContext);

		F1 = new CgpFont("TCP8x13", CgpFont.PLAIN, (byte)13, (byte)8);

		F9 = new CgpFont("PF Sans Serif", CgpFont.PLAIN, (byte)8, (byte)8);

		F17 = new CgpFont("PF Utah (WF) S", CgpFont.PLAIN, (byte)8, (byte)0);

		Switch01 = new Switch_0007(0, 180, 80, 220, panelContext, this);
		Switch01.frameClr = 0x005d4833;
		Switch01.foreClr = 0x00dd9933;
		Switch01.backClr = 0x00000000;
		Switch01.pattern = 1;

		CgpFont	fonts18[];
		String	labels18[];
		fonts18 = new CgpFont[1];
		labels18 = new String[1];

		labels18[0] = "Vibration\n& RTDs";
		fonts18[0] = F1;

		Switch01.buzzer = true;

		Switch01.switchFonts = fonts18;
		Switch01.labels = labels18;

		int intArray0[] = {0x00ffffff, };
		Switch01.labelClr = intArray0;
		int intArray1[] = {0x00000000, };
		Switch01.label3DClr = intArray1;
		Switch01.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch01.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch01.panelChange0 = 3;
		Switch01.alwaysDrawBackground = false;

		Switch01.init();
		Switch02 = new Switch_0012(80, 180, 160, 220, panelContext, this);
		Switch02.frameClr = 0x005d4833;
		Switch02.foreClr = 0x006ecc2a;
		Switch02.backClr = 0x00000000;
		Switch02.pattern = 1;

		CgpFont	fonts19[];
		String	labels19[];
		fonts19 = new CgpFont[1];
		labels19 = new String[1];

		labels19[0] = "Reset\nAll";
		fonts19[0] = F1;

		Switch02.buzzer = true;

		Switch02.switchFonts = fonts19;
		Switch02.labels = labels19;

		Switch02.labelClr = intArray0;
		Switch02.label3DClr = intArray1;
		Switch02.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch02.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch02.bit0 = TagDB.System_Vars_P1.ResetAlarms;
		Switch02.bit1 = TagDB.System_Vars_P2.ResetAlarms;
		Switch02.bit2 = TagDB.System_Vars_P3.ResetAlarms;
		Switch02.bit3 = TagDB.System_Vars_P4.ResetAlarms;
		Switch02.bit4 = TagDB.System_Vars_P5.ResetAlarms;
		Switch02.bit5 = TagDB.System_Vars_P6.ResetAlarms;
		Switch02.alwaysDrawBackground = false;

		Switch02.init();
		Switch03 = new Switch_0008(240, 180, 320, 220, panelContext, this);
		Switch03.frameClr = 0x005d4833;
		Switch03.foreClr = 0x00aaa599;
		Switch03.backClr = 0x00000000;
		Switch03.pattern = 1;

		CgpFont	fonts20[];
		String	labels20[];
		fonts20 = new CgpFont[1];
		labels20 = new String[1];

		labels20[0] = "Setup";
		fonts20[0] = F1;

		Switch03.buzzer = true;

		Switch03.switchFonts = fonts20;
		Switch03.labels = labels20;

		Switch03.labelClr = intArray0;
		Switch03.label3DClr = intArray1;
		Switch03.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch03.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch03.bit0 = TagDB.Global_Process_Bits.GotoSetup;
		Switch03.alwaysDrawBackground = false;

		Switch03.init();
		SilenceAlarmsBtn = new Switch_0012(160, 180, 240, 220, panelContext, this);
		SilenceAlarmsBtn.frameClr = 0x005d4833;
		SilenceAlarmsBtn.foreClr = 0x00227fe6;
		SilenceAlarmsBtn.backClr = 0x00000000;
		SilenceAlarmsBtn.pattern = 1;

		CgpFont	fonts89[];
		String	labels89[];
		fonts89 = new CgpFont[1];
		labels89 = new String[1];

		labels89[0] = "Silence\nAlarms";
		fonts89[0] = F1;

		SilenceAlarmsBtn.buzzer = true;

		SilenceAlarmsBtn.switchFonts = fonts89;
		SilenceAlarmsBtn.labels = labels89;

		SilenceAlarmsBtn.labelClr = intArray0;
		SilenceAlarmsBtn.label3DClr = intArray1;
		SilenceAlarmsBtn.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		SilenceAlarmsBtn.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		SilenceAlarmsBtn.bit0 = TagDB.System_Vars_P1.SilenceAlarms;
		SilenceAlarmsBtn.bit1 = TagDB.System_Vars_P2.SilenceAlarms;
		SilenceAlarmsBtn.bit2 = TagDB.System_Vars_P3.SilenceAlarms;
		SilenceAlarmsBtn.bit3 = TagDB.System_Vars_P4.SilenceAlarms;
		SilenceAlarmsBtn.bit4 = TagDB.System_Vars_P5.SilenceAlarms;
		SilenceAlarmsBtn.bit5 = TagDB.System_Vars_P6.SilenceAlarms;
		SilenceAlarmsBtn.alwaysDrawBackground = false;

		SilenceAlarmsBtn.init();
		Switch04 = new Switch_0011(0, 220, 320, 240, panelContext, this);
		Switch04.frameClr = 0x006e726e;
		Switch04.foreClr = 0x003b4ce6;
		Switch04.backClr = 0x00000000;
		Switch04.pattern = 1;

		CgpFont	fonts90[];
		String	labels90[];
		fonts90 = new CgpFont[1];
		labels90 = new String[1];

		labels90[0] = "Log Out";
		fonts90[0] = F1;

		Switch04.buzzer = true;
		Switch04.visibID = 1000;

		Switch04.switchFonts = fonts90;
		Switch04.labels = labels90;

		Switch04.labelClr = intArray0;
		Switch04.label3DClr = intArray1;
		Switch04.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch04.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch04.bit0 = TagDB.Global_Process_Bits.logoutProcess;
		Switch04.exprServer = exprServer;
		Switch04.alwaysDrawBackground = false;

		Switch04.init();
		WindingTempAlarmLight05 = new Lamp_0007(280, 60, 320, 80, panelContext, this);
		int intArray2[] = {0x006e726e, 0x006e726e, };
		WindingTempAlarmLight05.frameClr = intArray2;
		int intArray3[] = {0x006ecc2a, 0x003b4ce6, };
		WindingTempAlarmLight05.foreClr = intArray3;
		int intArray4[] = {0x00000000, 0x00000000, };
		WindingTempAlarmLight05.backClr = intArray4;
		int intArray5[] = {1, 1, };
		WindingTempAlarmLight05.pattern = intArray5;
		WindingTempAlarmLight05.controlTag01 = TagDB.Vars_Pump6.Alarms.WindingTemp;

		CgpFont	fonts146[];
		String	labels146[];
		fonts146 = new CgpFont[2];
		labels146 = new String[2];

		labels146[0] = "OK";
		fonts146[0] = F1;

		labels146[1] = "AL";
		fonts146[1] = F1;

		int intArray6[] = {0x00ffffff, 0x00ffffff, };
		WindingTempAlarmLight05.labelClr = intArray6;
		WindingTempAlarmLight05.label3DClr = intArray4;

		WindingTempAlarmLight05.lampFonts = fonts146;
		WindingTempAlarmLight05.labels = labels146;

		WindingTempAlarmLight05.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		WindingTempAlarmLight05.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		WindingTempAlarmLight05.exprServer = exprServer;
		WindingTempAlarmLight05.alwaysDrawBackground = false;

		WindingTempAlarmLight05.init();
		SealFailAlarmLight05 = new Lamp_0007(280, 80, 320, 100, panelContext, this);
		SealFailAlarmLight05.frameClr = intArray2;
		SealFailAlarmLight05.foreClr = intArray3;
		SealFailAlarmLight05.backClr = intArray4;
		SealFailAlarmLight05.pattern = intArray5;
		SealFailAlarmLight05.controlTag01 = TagDB.Vars_Pump6.Alarms.SealFail;

		CgpFont	fonts147[];
		String	labels147[];
		fonts147 = new CgpFont[2];
		labels147 = new String[2];

		labels147[0] = "OK";
		fonts147[0] = F1;

		labels147[1] = "AL";
		fonts147[1] = F1;

		SealFailAlarmLight05.labelClr = intArray6;
		SealFailAlarmLight05.label3DClr = intArray4;

		SealFailAlarmLight05.lampFonts = fonts147;
		SealFailAlarmLight05.labels = labels147;

		SealFailAlarmLight05.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		SealFailAlarmLight05.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		SealFailAlarmLight05.exprServer = exprServer;
		SealFailAlarmLight05.alwaysDrawBackground = false;

		SealFailAlarmLight05.init();
		HighFloatAlarmLight05 = new Lamp_0007(280, 100, 320, 120, panelContext, this);
		HighFloatAlarmLight05.frameClr = intArray2;
		HighFloatAlarmLight05.foreClr = intArray3;
		HighFloatAlarmLight05.backClr = intArray4;
		HighFloatAlarmLight05.pattern = intArray5;
		HighFloatAlarmLight05.controlTag01 = TagDB.Vars_Pump6.Alarms.HighFloat;

		CgpFont	fonts148[];
		String	labels148[];
		fonts148 = new CgpFont[2];
		labels148 = new String[2];

		labels148[0] = "OK";
		fonts148[0] = F1;

		labels148[1] = "AL";
		fonts148[1] = F1;

		HighFloatAlarmLight05.labelClr = intArray6;
		HighFloatAlarmLight05.label3DClr = intArray4;

		HighFloatAlarmLight05.lampFonts = fonts148;
		HighFloatAlarmLight05.labels = labels148;

		HighFloatAlarmLight05.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		HighFloatAlarmLight05.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		HighFloatAlarmLight05.exprServer = exprServer;
		HighFloatAlarmLight05.alwaysDrawBackground = false;

		HighFloatAlarmLight05.init();
		VibrationAlarmLight05 = new Lamp_0007(280, 120, 320, 140, panelContext, this);
		VibrationAlarmLight05.frameClr = intArray2;
		VibrationAlarmLight05.foreClr = intArray3;
		VibrationAlarmLight05.backClr = intArray4;
		VibrationAlarmLight05.pattern = intArray5;
		VibrationAlarmLight05.controlTag01 = TagDB.Vars_Pump6.Alarms.Vibration;

		CgpFont	fonts149[];
		String	labels149[];
		fonts149 = new CgpFont[2];
		labels149 = new String[2];

		labels149[0] = "OK";
		fonts149[0] = F1;

		labels149[1] = "AL";
		fonts149[1] = F1;

		VibrationAlarmLight05.labelClr = intArray6;
		VibrationAlarmLight05.label3DClr = intArray4;

		VibrationAlarmLight05.lampFonts = fonts149;
		VibrationAlarmLight05.labels = labels149;

		VibrationAlarmLight05.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		VibrationAlarmLight05.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		VibrationAlarmLight05.exprServer = exprServer;
		VibrationAlarmLight05.alwaysDrawBackground = false;

		VibrationAlarmLight05.init();
		HighRtdAlarmLight05 = new Lamp_0007(280, 140, 320, 160, panelContext, this);
		HighRtdAlarmLight05.frameClr = intArray2;
		HighRtdAlarmLight05.foreClr = intArray3;
		HighRtdAlarmLight05.backClr = intArray4;
		HighRtdAlarmLight05.pattern = intArray5;
		HighRtdAlarmLight05.controlTag01 = TagDB.Vars_Pump6.Alarms.HighRTD;

		CgpFont	fonts150[];
		String	labels150[];
		fonts150 = new CgpFont[2];
		labels150 = new String[2];

		labels150[0] = "OK";
		fonts150[0] = F1;

		labels150[1] = "AL";
		fonts150[1] = F1;

		HighRtdAlarmLight05.labelClr = intArray6;
		HighRtdAlarmLight05.label3DClr = intArray4;

		HighRtdAlarmLight05.lampFonts = fonts150;
		HighRtdAlarmLight05.labels = labels150;

		HighRtdAlarmLight05.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		HighRtdAlarmLight05.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		HighRtdAlarmLight05.exprServer = exprServer;
		HighRtdAlarmLight05.alwaysDrawBackground = false;

		HighRtdAlarmLight05.init();
		GroupObject04_WindingTempAlarmLight04 = new Lamp_0007(240, 60, 280, 80, panelContext, this);
		GroupObject04_WindingTempAlarmLight04.frameClr = intArray2;
		GroupObject04_WindingTempAlarmLight04.foreClr = intArray3;
		GroupObject04_WindingTempAlarmLight04.backClr = intArray4;
		GroupObject04_WindingTempAlarmLight04.pattern = intArray5;
		GroupObject04_WindingTempAlarmLight04.controlTag01 = TagDB.Vars_Pump5.Alarms.WindingTemp;

		CgpFont	fonts136[];
		String	labels136[];
		fonts136 = new CgpFont[2];
		labels136 = new String[2];

		labels136[0] = "OK";
		fonts136[0] = F1;

		labels136[1] = "AL";
		fonts136[1] = F1;

		GroupObject04_WindingTempAlarmLight04.labelClr = intArray6;
		GroupObject04_WindingTempAlarmLight04.label3DClr = intArray4;

		GroupObject04_WindingTempAlarmLight04.lampFonts = fonts136;
		GroupObject04_WindingTempAlarmLight04.labels = labels136;

		GroupObject04_WindingTempAlarmLight04.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject04_WindingTempAlarmLight04.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject04_WindingTempAlarmLight04.exprServer = exprServer;
		GroupObject04_WindingTempAlarmLight04.alwaysDrawBackground = false;

		GroupObject04_WindingTempAlarmLight04.init();
		GroupObject04_SealFailAlarmLight04 = new Lamp_0007(240, 80, 280, 100, panelContext, this);
		GroupObject04_SealFailAlarmLight04.frameClr = intArray2;
		GroupObject04_SealFailAlarmLight04.foreClr = intArray3;
		GroupObject04_SealFailAlarmLight04.backClr = intArray4;
		GroupObject04_SealFailAlarmLight04.pattern = intArray5;
		GroupObject04_SealFailAlarmLight04.controlTag01 = TagDB.Vars_Pump5.Alarms.SealFail;

		CgpFont	fonts137[];
		String	labels137[];
		fonts137 = new CgpFont[2];
		labels137 = new String[2];

		labels137[0] = "OK";
		fonts137[0] = F1;

		labels137[1] = "AL";
		fonts137[1] = F1;

		GroupObject04_SealFailAlarmLight04.labelClr = intArray6;
		GroupObject04_SealFailAlarmLight04.label3DClr = intArray4;

		GroupObject04_SealFailAlarmLight04.lampFonts = fonts137;
		GroupObject04_SealFailAlarmLight04.labels = labels137;

		GroupObject04_SealFailAlarmLight04.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject04_SealFailAlarmLight04.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject04_SealFailAlarmLight04.exprServer = exprServer;
		GroupObject04_SealFailAlarmLight04.alwaysDrawBackground = false;

		GroupObject04_SealFailAlarmLight04.init();
		GroupObject04_HighFloatAlarmLight04 = new Lamp_0007(240, 100, 280, 120, panelContext, this);
		GroupObject04_HighFloatAlarmLight04.frameClr = intArray2;
		GroupObject04_HighFloatAlarmLight04.foreClr = intArray3;
		GroupObject04_HighFloatAlarmLight04.backClr = intArray4;
		GroupObject04_HighFloatAlarmLight04.pattern = intArray5;
		GroupObject04_HighFloatAlarmLight04.controlTag01 = TagDB.Vars_Pump5.Alarms.HighFloat;

		CgpFont	fonts138[];
		String	labels138[];
		fonts138 = new CgpFont[2];
		labels138 = new String[2];

		labels138[0] = "OK";
		fonts138[0] = F1;

		labels138[1] = "AL";
		fonts138[1] = F1;

		GroupObject04_HighFloatAlarmLight04.labelClr = intArray6;
		GroupObject04_HighFloatAlarmLight04.label3DClr = intArray4;

		GroupObject04_HighFloatAlarmLight04.lampFonts = fonts138;
		GroupObject04_HighFloatAlarmLight04.labels = labels138;

		GroupObject04_HighFloatAlarmLight04.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject04_HighFloatAlarmLight04.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject04_HighFloatAlarmLight04.exprServer = exprServer;
		GroupObject04_HighFloatAlarmLight04.alwaysDrawBackground = false;

		GroupObject04_HighFloatAlarmLight04.init();
		GroupObject04_VibrationAlarmLight04 = new Lamp_0007(240, 120, 280, 140, panelContext, this);
		GroupObject04_VibrationAlarmLight04.frameClr = intArray2;
		GroupObject04_VibrationAlarmLight04.foreClr = intArray3;
		GroupObject04_VibrationAlarmLight04.backClr = intArray4;
		GroupObject04_VibrationAlarmLight04.pattern = intArray5;
		GroupObject04_VibrationAlarmLight04.controlTag01 = TagDB.Vars_Pump5.Alarms.Vibration;

		CgpFont	fonts139[];
		String	labels139[];
		fonts139 = new CgpFont[2];
		labels139 = new String[2];

		labels139[0] = "OK";
		fonts139[0] = F1;

		labels139[1] = "AL";
		fonts139[1] = F1;

		GroupObject04_VibrationAlarmLight04.labelClr = intArray6;
		GroupObject04_VibrationAlarmLight04.label3DClr = intArray4;

		GroupObject04_VibrationAlarmLight04.lampFonts = fonts139;
		GroupObject04_VibrationAlarmLight04.labels = labels139;

		GroupObject04_VibrationAlarmLight04.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject04_VibrationAlarmLight04.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject04_VibrationAlarmLight04.exprServer = exprServer;
		GroupObject04_VibrationAlarmLight04.alwaysDrawBackground = false;

		GroupObject04_VibrationAlarmLight04.init();
		GroupObject04_HighRtdAlarmLight04 = new Lamp_0007(240, 140, 280, 160, panelContext, this);
		GroupObject04_HighRtdAlarmLight04.frameClr = intArray2;
		GroupObject04_HighRtdAlarmLight04.foreClr = intArray3;
		GroupObject04_HighRtdAlarmLight04.backClr = intArray4;
		GroupObject04_HighRtdAlarmLight04.pattern = intArray5;
		GroupObject04_HighRtdAlarmLight04.controlTag01 = TagDB.Vars_Pump5.Alarms.HighRTD;

		CgpFont	fonts140[];
		String	labels140[];
		fonts140 = new CgpFont[2];
		labels140 = new String[2];

		labels140[0] = "OK";
		fonts140[0] = F1;

		labels140[1] = "AL";
		fonts140[1] = F1;

		GroupObject04_HighRtdAlarmLight04.labelClr = intArray6;
		GroupObject04_HighRtdAlarmLight04.label3DClr = intArray4;

		GroupObject04_HighRtdAlarmLight04.lampFonts = fonts140;
		GroupObject04_HighRtdAlarmLight04.labels = labels140;

		GroupObject04_HighRtdAlarmLight04.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject04_HighRtdAlarmLight04.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject04_HighRtdAlarmLight04.exprServer = exprServer;
		GroupObject04_HighRtdAlarmLight04.alwaysDrawBackground = false;

		GroupObject04_HighRtdAlarmLight04.init();
		GroupObject05_WindingTempAlarmLight02 = new Lamp_0007(160, 60, 200, 80, panelContext, this);
		GroupObject05_WindingTempAlarmLight02.frameClr = intArray2;
		GroupObject05_WindingTempAlarmLight02.foreClr = intArray3;
		GroupObject05_WindingTempAlarmLight02.backClr = intArray4;
		GroupObject05_WindingTempAlarmLight02.pattern = intArray5;
		GroupObject05_WindingTempAlarmLight02.controlTag01 = TagDB.Vars_Pump3.Alarms.WindingTemp;

		CgpFont	fonts126[];
		String	labels126[];
		fonts126 = new CgpFont[2];
		labels126 = new String[2];

		labels126[0] = "OK";
		fonts126[0] = F1;

		labels126[1] = "AL";
		fonts126[1] = F1;

		GroupObject05_WindingTempAlarmLight02.labelClr = intArray6;
		GroupObject05_WindingTempAlarmLight02.label3DClr = intArray4;

		GroupObject05_WindingTempAlarmLight02.lampFonts = fonts126;
		GroupObject05_WindingTempAlarmLight02.labels = labels126;

		GroupObject05_WindingTempAlarmLight02.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject05_WindingTempAlarmLight02.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject05_WindingTempAlarmLight02.exprServer = exprServer;
		GroupObject05_WindingTempAlarmLight02.alwaysDrawBackground = false;

		GroupObject05_WindingTempAlarmLight02.init();
		GroupObject05_SealFailAlarmLight02 = new Lamp_0007(160, 80, 200, 100, panelContext, this);
		GroupObject05_SealFailAlarmLight02.frameClr = intArray2;
		GroupObject05_SealFailAlarmLight02.foreClr = intArray3;
		GroupObject05_SealFailAlarmLight02.backClr = intArray4;
		GroupObject05_SealFailAlarmLight02.pattern = intArray5;
		GroupObject05_SealFailAlarmLight02.controlTag01 = TagDB.Vars_Pump3.Alarms.SealFail;

		CgpFont	fonts127[];
		String	labels127[];
		fonts127 = new CgpFont[2];
		labels127 = new String[2];

		labels127[0] = "OK";
		fonts127[0] = F1;

		labels127[1] = "AL";
		fonts127[1] = F1;

		GroupObject05_SealFailAlarmLight02.labelClr = intArray6;
		GroupObject05_SealFailAlarmLight02.label3DClr = intArray4;

		GroupObject05_SealFailAlarmLight02.lampFonts = fonts127;
		GroupObject05_SealFailAlarmLight02.labels = labels127;

		GroupObject05_SealFailAlarmLight02.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject05_SealFailAlarmLight02.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject05_SealFailAlarmLight02.exprServer = exprServer;
		GroupObject05_SealFailAlarmLight02.alwaysDrawBackground = false;

		GroupObject05_SealFailAlarmLight02.init();
		GroupObject05_HighFloatAlarmLight02 = new Lamp_0007(160, 100, 200, 120, panelContext, this);
		GroupObject05_HighFloatAlarmLight02.frameClr = intArray2;
		GroupObject05_HighFloatAlarmLight02.foreClr = intArray3;
		GroupObject05_HighFloatAlarmLight02.backClr = intArray4;
		GroupObject05_HighFloatAlarmLight02.pattern = intArray5;
		GroupObject05_HighFloatAlarmLight02.controlTag01 = TagDB.Vars_Pump3.Alarms.HighFloat;

		CgpFont	fonts128[];
		String	labels128[];
		fonts128 = new CgpFont[2];
		labels128 = new String[2];

		labels128[0] = "OK";
		fonts128[0] = F1;

		labels128[1] = "AL";
		fonts128[1] = F1;

		GroupObject05_HighFloatAlarmLight02.labelClr = intArray6;
		GroupObject05_HighFloatAlarmLight02.label3DClr = intArray4;

		GroupObject05_HighFloatAlarmLight02.lampFonts = fonts128;
		GroupObject05_HighFloatAlarmLight02.labels = labels128;

		GroupObject05_HighFloatAlarmLight02.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject05_HighFloatAlarmLight02.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject05_HighFloatAlarmLight02.exprServer = exprServer;
		GroupObject05_HighFloatAlarmLight02.alwaysDrawBackground = false;

		GroupObject05_HighFloatAlarmLight02.init();
		GroupObject05_VibrationAlarmLight02 = new Lamp_0007(160, 120, 200, 140, panelContext, this);
		GroupObject05_VibrationAlarmLight02.frameClr = intArray2;
		GroupObject05_VibrationAlarmLight02.foreClr = intArray3;
		GroupObject05_VibrationAlarmLight02.backClr = intArray4;
		GroupObject05_VibrationAlarmLight02.pattern = intArray5;
		GroupObject05_VibrationAlarmLight02.controlTag01 = TagDB.Vars_Pump3.Alarms.Vibration;

		CgpFont	fonts129[];
		String	labels129[];
		fonts129 = new CgpFont[2];
		labels129 = new String[2];

		labels129[0] = "OK";
		fonts129[0] = F1;

		labels129[1] = "AL";
		fonts129[1] = F1;

		GroupObject05_VibrationAlarmLight02.labelClr = intArray6;
		GroupObject05_VibrationAlarmLight02.label3DClr = intArray4;

		GroupObject05_VibrationAlarmLight02.lampFonts = fonts129;
		GroupObject05_VibrationAlarmLight02.labels = labels129;

		GroupObject05_VibrationAlarmLight02.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject05_VibrationAlarmLight02.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject05_VibrationAlarmLight02.exprServer = exprServer;
		GroupObject05_VibrationAlarmLight02.alwaysDrawBackground = false;

		GroupObject05_VibrationAlarmLight02.init();
		GroupObject05_HighRtdAlarmLight02 = new Lamp_0007(160, 140, 200, 160, panelContext, this);
		GroupObject05_HighRtdAlarmLight02.frameClr = intArray2;
		GroupObject05_HighRtdAlarmLight02.foreClr = intArray3;
		GroupObject05_HighRtdAlarmLight02.backClr = intArray4;
		GroupObject05_HighRtdAlarmLight02.pattern = intArray5;
		GroupObject05_HighRtdAlarmLight02.controlTag01 = TagDB.Vars_Pump3.Alarms.HighRTD;

		CgpFont	fonts130[];
		String	labels130[];
		fonts130 = new CgpFont[2];
		labels130 = new String[2];

		labels130[0] = "OK";
		fonts130[0] = F1;

		labels130[1] = "AL";
		fonts130[1] = F1;

		GroupObject05_HighRtdAlarmLight02.labelClr = intArray6;
		GroupObject05_HighRtdAlarmLight02.label3DClr = intArray4;

		GroupObject05_HighRtdAlarmLight02.lampFonts = fonts130;
		GroupObject05_HighRtdAlarmLight02.labels = labels130;

		GroupObject05_HighRtdAlarmLight02.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject05_HighRtdAlarmLight02.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject05_HighRtdAlarmLight02.exprServer = exprServer;
		GroupObject05_HighRtdAlarmLight02.alwaysDrawBackground = false;

		GroupObject05_HighRtdAlarmLight02.init();
		GroupObject06_WindingTempAlarmLight01 = new Lamp_0007(120, 60, 160, 80, panelContext, this);
		GroupObject06_WindingTempAlarmLight01.frameClr = intArray2;
		GroupObject06_WindingTempAlarmLight01.foreClr = intArray3;
		GroupObject06_WindingTempAlarmLight01.backClr = intArray4;
		GroupObject06_WindingTempAlarmLight01.pattern = intArray5;
		GroupObject06_WindingTempAlarmLight01.controlTag01 = TagDB.Vars_Pump2.Alarms.WindingTemp;

		CgpFont	fonts121[];
		String	labels121[];
		fonts121 = new CgpFont[2];
		labels121 = new String[2];

		labels121[0] = "OK";
		fonts121[0] = F1;

		labels121[1] = "AL";
		fonts121[1] = F1;

		GroupObject06_WindingTempAlarmLight01.labelClr = intArray6;
		GroupObject06_WindingTempAlarmLight01.label3DClr = intArray4;

		GroupObject06_WindingTempAlarmLight01.lampFonts = fonts121;
		GroupObject06_WindingTempAlarmLight01.labels = labels121;

		GroupObject06_WindingTempAlarmLight01.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject06_WindingTempAlarmLight01.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject06_WindingTempAlarmLight01.exprServer = exprServer;
		GroupObject06_WindingTempAlarmLight01.alwaysDrawBackground = false;

		GroupObject06_WindingTempAlarmLight01.init();
		GroupObject06_SealFailAlarmLight01 = new Lamp_0007(120, 80, 160, 100, panelContext, this);
		GroupObject06_SealFailAlarmLight01.frameClr = intArray2;
		GroupObject06_SealFailAlarmLight01.foreClr = intArray3;
		GroupObject06_SealFailAlarmLight01.backClr = intArray4;
		GroupObject06_SealFailAlarmLight01.pattern = intArray5;
		GroupObject06_SealFailAlarmLight01.controlTag01 = TagDB.Vars_Pump2.Alarms.SealFail;

		CgpFont	fonts122[];
		String	labels122[];
		fonts122 = new CgpFont[2];
		labels122 = new String[2];

		labels122[0] = "OK";
		fonts122[0] = F1;

		labels122[1] = "AL";
		fonts122[1] = F1;

		GroupObject06_SealFailAlarmLight01.labelClr = intArray6;
		GroupObject06_SealFailAlarmLight01.label3DClr = intArray4;

		GroupObject06_SealFailAlarmLight01.lampFonts = fonts122;
		GroupObject06_SealFailAlarmLight01.labels = labels122;

		GroupObject06_SealFailAlarmLight01.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject06_SealFailAlarmLight01.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject06_SealFailAlarmLight01.exprServer = exprServer;
		GroupObject06_SealFailAlarmLight01.alwaysDrawBackground = false;

		GroupObject06_SealFailAlarmLight01.init();
		GroupObject06_HighFloatAlarmLight01 = new Lamp_0007(120, 100, 160, 120, panelContext, this);
		GroupObject06_HighFloatAlarmLight01.frameClr = intArray2;
		GroupObject06_HighFloatAlarmLight01.foreClr = intArray3;
		GroupObject06_HighFloatAlarmLight01.backClr = intArray4;
		GroupObject06_HighFloatAlarmLight01.pattern = intArray5;
		GroupObject06_HighFloatAlarmLight01.controlTag01 = TagDB.Vars_Pump2.Alarms.HighFloat;

		CgpFont	fonts123[];
		String	labels123[];
		fonts123 = new CgpFont[2];
		labels123 = new String[2];

		labels123[0] = "OK";
		fonts123[0] = F1;

		labels123[1] = "AL";
		fonts123[1] = F1;

		GroupObject06_HighFloatAlarmLight01.labelClr = intArray6;
		GroupObject06_HighFloatAlarmLight01.label3DClr = intArray4;

		GroupObject06_HighFloatAlarmLight01.lampFonts = fonts123;
		GroupObject06_HighFloatAlarmLight01.labels = labels123;

		GroupObject06_HighFloatAlarmLight01.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject06_HighFloatAlarmLight01.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject06_HighFloatAlarmLight01.exprServer = exprServer;
		GroupObject06_HighFloatAlarmLight01.alwaysDrawBackground = false;

		GroupObject06_HighFloatAlarmLight01.init();
		GroupObject06_VibrationAlarmLight01 = new Lamp_0007(120, 120, 160, 140, panelContext, this);
		GroupObject06_VibrationAlarmLight01.frameClr = intArray2;
		GroupObject06_VibrationAlarmLight01.foreClr = intArray3;
		GroupObject06_VibrationAlarmLight01.backClr = intArray4;
		GroupObject06_VibrationAlarmLight01.pattern = intArray5;
		GroupObject06_VibrationAlarmLight01.controlTag01 = TagDB.Vars_Pump2.Alarms.Vibration;

		CgpFont	fonts124[];
		String	labels124[];
		fonts124 = new CgpFont[2];
		labels124 = new String[2];

		labels124[0] = "OK";
		fonts124[0] = F1;

		labels124[1] = "AL";
		fonts124[1] = F1;

		GroupObject06_VibrationAlarmLight01.labelClr = intArray6;
		GroupObject06_VibrationAlarmLight01.label3DClr = intArray4;

		GroupObject06_VibrationAlarmLight01.lampFonts = fonts124;
		GroupObject06_VibrationAlarmLight01.labels = labels124;

		GroupObject06_VibrationAlarmLight01.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject06_VibrationAlarmLight01.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject06_VibrationAlarmLight01.exprServer = exprServer;
		GroupObject06_VibrationAlarmLight01.alwaysDrawBackground = false;

		GroupObject06_VibrationAlarmLight01.init();
		GroupObject06_HighRtdAlarmLight01 = new Lamp_0007(120, 140, 160, 160, panelContext, this);
		GroupObject06_HighRtdAlarmLight01.frameClr = intArray2;
		GroupObject06_HighRtdAlarmLight01.foreClr = intArray3;
		GroupObject06_HighRtdAlarmLight01.backClr = intArray4;
		GroupObject06_HighRtdAlarmLight01.pattern = intArray5;
		GroupObject06_HighRtdAlarmLight01.controlTag01 = TagDB.Vars_Pump2.Alarms.HighRTD;

		CgpFont	fonts125[];
		String	labels125[];
		fonts125 = new CgpFont[2];
		labels125 = new String[2];

		labels125[0] = "OK";
		fonts125[0] = F1;

		labels125[1] = "AL";
		fonts125[1] = F1;

		GroupObject06_HighRtdAlarmLight01.labelClr = intArray6;
		GroupObject06_HighRtdAlarmLight01.label3DClr = intArray4;

		GroupObject06_HighRtdAlarmLight01.lampFonts = fonts125;
		GroupObject06_HighRtdAlarmLight01.labels = labels125;

		GroupObject06_HighRtdAlarmLight01.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject06_HighRtdAlarmLight01.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject06_HighRtdAlarmLight01.exprServer = exprServer;
		GroupObject06_HighRtdAlarmLight01.alwaysDrawBackground = false;

		GroupObject06_HighRtdAlarmLight01.init();
		GroupObject07_WindingTempAlarmLight = new Lamp_0007(80, 60, 120, 80, panelContext, this);
		GroupObject07_WindingTempAlarmLight.frameClr = intArray2;
		GroupObject07_WindingTempAlarmLight.foreClr = intArray3;
		GroupObject07_WindingTempAlarmLight.backClr = intArray4;
		GroupObject07_WindingTempAlarmLight.pattern = intArray5;
		GroupObject07_WindingTempAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.WindingTemp;

		CgpFont	fonts22[];
		String	labels22[];
		fonts22 = new CgpFont[2];
		labels22 = new String[2];

		labels22[0] = "OK";
		fonts22[0] = F1;

		labels22[1] = "AL";
		fonts22[1] = F1;

		GroupObject07_WindingTempAlarmLight.labelClr = intArray6;
		GroupObject07_WindingTempAlarmLight.label3DClr = intArray4;

		GroupObject07_WindingTempAlarmLight.lampFonts = fonts22;
		GroupObject07_WindingTempAlarmLight.labels = labels22;

		GroupObject07_WindingTempAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject07_WindingTempAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject07_WindingTempAlarmLight.exprServer = exprServer;
		GroupObject07_WindingTempAlarmLight.alwaysDrawBackground = false;

		GroupObject07_WindingTempAlarmLight.init();
		GroupObject07_SealFailAlarmLight = new Lamp_0007(80, 80, 120, 100, panelContext, this);
		GroupObject07_SealFailAlarmLight.frameClr = intArray2;
		GroupObject07_SealFailAlarmLight.foreClr = intArray3;
		GroupObject07_SealFailAlarmLight.backClr = intArray4;
		GroupObject07_SealFailAlarmLight.pattern = intArray5;
		GroupObject07_SealFailAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.SealFail;

		CgpFont	fonts79[];
		String	labels79[];
		fonts79 = new CgpFont[2];
		labels79 = new String[2];

		labels79[0] = "OK";
		fonts79[0] = F1;

		labels79[1] = "AL";
		fonts79[1] = F1;

		GroupObject07_SealFailAlarmLight.labelClr = intArray6;
		GroupObject07_SealFailAlarmLight.label3DClr = intArray4;

		GroupObject07_SealFailAlarmLight.lampFonts = fonts79;
		GroupObject07_SealFailAlarmLight.labels = labels79;

		GroupObject07_SealFailAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject07_SealFailAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject07_SealFailAlarmLight.exprServer = exprServer;
		GroupObject07_SealFailAlarmLight.alwaysDrawBackground = false;

		GroupObject07_SealFailAlarmLight.init();
		GroupObject07_HighFloatAlarmLight = new Lamp_0007(80, 100, 120, 120, panelContext, this);
		GroupObject07_HighFloatAlarmLight.frameClr = intArray2;
		GroupObject07_HighFloatAlarmLight.foreClr = intArray3;
		GroupObject07_HighFloatAlarmLight.backClr = intArray4;
		GroupObject07_HighFloatAlarmLight.pattern = intArray5;
		GroupObject07_HighFloatAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.HighFloat;

		CgpFont	fonts80[];
		String	labels80[];
		fonts80 = new CgpFont[2];
		labels80 = new String[2];

		labels80[0] = "OK";
		fonts80[0] = F1;

		labels80[1] = "AL";
		fonts80[1] = F1;

		GroupObject07_HighFloatAlarmLight.labelClr = intArray6;
		GroupObject07_HighFloatAlarmLight.label3DClr = intArray4;

		GroupObject07_HighFloatAlarmLight.lampFonts = fonts80;
		GroupObject07_HighFloatAlarmLight.labels = labels80;

		GroupObject07_HighFloatAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject07_HighFloatAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject07_HighFloatAlarmLight.exprServer = exprServer;
		GroupObject07_HighFloatAlarmLight.alwaysDrawBackground = false;

		GroupObject07_HighFloatAlarmLight.init();
		GroupObject07_VibrationAlarmLight = new Lamp_0007(80, 120, 120, 140, panelContext, this);
		GroupObject07_VibrationAlarmLight.frameClr = intArray2;
		GroupObject07_VibrationAlarmLight.foreClr = intArray3;
		GroupObject07_VibrationAlarmLight.backClr = intArray4;
		GroupObject07_VibrationAlarmLight.pattern = intArray5;
		GroupObject07_VibrationAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.Vibration;

		CgpFont	fonts81[];
		String	labels81[];
		fonts81 = new CgpFont[2];
		labels81 = new String[2];

		labels81[0] = "OK";
		fonts81[0] = F1;

		labels81[1] = "AL";
		fonts81[1] = F1;

		GroupObject07_VibrationAlarmLight.labelClr = intArray6;
		GroupObject07_VibrationAlarmLight.label3DClr = intArray4;

		GroupObject07_VibrationAlarmLight.lampFonts = fonts81;
		GroupObject07_VibrationAlarmLight.labels = labels81;

		GroupObject07_VibrationAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject07_VibrationAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject07_VibrationAlarmLight.exprServer = exprServer;
		GroupObject07_VibrationAlarmLight.alwaysDrawBackground = false;

		GroupObject07_VibrationAlarmLight.init();
		GroupObject07_HighRtdAlarmLight = new Lamp_0007(80, 140, 120, 160, panelContext, this);
		GroupObject07_HighRtdAlarmLight.frameClr = intArray2;
		GroupObject07_HighRtdAlarmLight.foreClr = intArray3;
		GroupObject07_HighRtdAlarmLight.backClr = intArray4;
		GroupObject07_HighRtdAlarmLight.pattern = intArray5;
		GroupObject07_HighRtdAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.HighRTD;

		CgpFont	fonts82[];
		String	labels82[];
		fonts82 = new CgpFont[2];
		labels82 = new String[2];

		labels82[0] = "OK";
		fonts82[0] = F1;

		labels82[1] = "AL";
		fonts82[1] = F1;

		GroupObject07_HighRtdAlarmLight.labelClr = intArray6;
		GroupObject07_HighRtdAlarmLight.label3DClr = intArray4;

		GroupObject07_HighRtdAlarmLight.lampFonts = fonts82;
		GroupObject07_HighRtdAlarmLight.labels = labels82;

		GroupObject07_HighRtdAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject07_HighRtdAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject07_HighRtdAlarmLight.exprServer = exprServer;
		GroupObject07_HighRtdAlarmLight.alwaysDrawBackground = false;

		GroupObject07_HighRtdAlarmLight.init();
		GroupObject08_WindingTempAlarmLight03 = new Lamp_0007(200, 60, 240, 80, panelContext, this);
		GroupObject08_WindingTempAlarmLight03.frameClr = intArray2;
		GroupObject08_WindingTempAlarmLight03.foreClr = intArray3;
		GroupObject08_WindingTempAlarmLight03.backClr = intArray4;
		GroupObject08_WindingTempAlarmLight03.pattern = intArray5;
		GroupObject08_WindingTempAlarmLight03.controlTag01 = TagDB.Vars_Pump4.Alarms.WindingTemp;

		CgpFont	fonts131[];
		String	labels131[];
		fonts131 = new CgpFont[2];
		labels131 = new String[2];

		labels131[0] = "OK";
		fonts131[0] = F1;

		labels131[1] = "AL";
		fonts131[1] = F1;

		GroupObject08_WindingTempAlarmLight03.labelClr = intArray6;
		GroupObject08_WindingTempAlarmLight03.label3DClr = intArray4;

		GroupObject08_WindingTempAlarmLight03.lampFonts = fonts131;
		GroupObject08_WindingTempAlarmLight03.labels = labels131;

		GroupObject08_WindingTempAlarmLight03.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject08_WindingTempAlarmLight03.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject08_WindingTempAlarmLight03.exprServer = exprServer;
		GroupObject08_WindingTempAlarmLight03.alwaysDrawBackground = false;

		GroupObject08_WindingTempAlarmLight03.init();
		GroupObject08_SealFailAlarmLight03 = new Lamp_0007(200, 80, 240, 100, panelContext, this);
		GroupObject08_SealFailAlarmLight03.frameClr = intArray2;
		GroupObject08_SealFailAlarmLight03.foreClr = intArray3;
		GroupObject08_SealFailAlarmLight03.backClr = intArray4;
		GroupObject08_SealFailAlarmLight03.pattern = intArray5;
		GroupObject08_SealFailAlarmLight03.controlTag01 = TagDB.Vars_Pump4.Alarms.SealFail;

		CgpFont	fonts132[];
		String	labels132[];
		fonts132 = new CgpFont[2];
		labels132 = new String[2];

		labels132[0] = "OK";
		fonts132[0] = F1;

		labels132[1] = "AL";
		fonts132[1] = F1;

		GroupObject08_SealFailAlarmLight03.labelClr = intArray6;
		GroupObject08_SealFailAlarmLight03.label3DClr = intArray4;

		GroupObject08_SealFailAlarmLight03.lampFonts = fonts132;
		GroupObject08_SealFailAlarmLight03.labels = labels132;

		GroupObject08_SealFailAlarmLight03.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject08_SealFailAlarmLight03.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject08_SealFailAlarmLight03.exprServer = exprServer;
		GroupObject08_SealFailAlarmLight03.alwaysDrawBackground = false;

		GroupObject08_SealFailAlarmLight03.init();
		GroupObject08_HighFloatAlarmLight03 = new Lamp_0007(200, 100, 240, 120, panelContext, this);
		GroupObject08_HighFloatAlarmLight03.frameClr = intArray2;
		GroupObject08_HighFloatAlarmLight03.foreClr = intArray3;
		GroupObject08_HighFloatAlarmLight03.backClr = intArray4;
		GroupObject08_HighFloatAlarmLight03.pattern = intArray5;
		GroupObject08_HighFloatAlarmLight03.controlTag01 = TagDB.Vars_Pump4.Alarms.HighFloat;

		CgpFont	fonts133[];
		String	labels133[];
		fonts133 = new CgpFont[2];
		labels133 = new String[2];

		labels133[0] = "OK";
		fonts133[0] = F1;

		labels133[1] = "AL";
		fonts133[1] = F1;

		GroupObject08_HighFloatAlarmLight03.labelClr = intArray6;
		GroupObject08_HighFloatAlarmLight03.label3DClr = intArray4;

		GroupObject08_HighFloatAlarmLight03.lampFonts = fonts133;
		GroupObject08_HighFloatAlarmLight03.labels = labels133;

		GroupObject08_HighFloatAlarmLight03.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject08_HighFloatAlarmLight03.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject08_HighFloatAlarmLight03.exprServer = exprServer;
		GroupObject08_HighFloatAlarmLight03.alwaysDrawBackground = false;

		GroupObject08_HighFloatAlarmLight03.init();
		GroupObject08_VibrationAlarmLight03 = new Lamp_0007(200, 120, 240, 140, panelContext, this);
		GroupObject08_VibrationAlarmLight03.frameClr = intArray2;
		GroupObject08_VibrationAlarmLight03.foreClr = intArray3;
		GroupObject08_VibrationAlarmLight03.backClr = intArray4;
		GroupObject08_VibrationAlarmLight03.pattern = intArray5;
		GroupObject08_VibrationAlarmLight03.controlTag01 = TagDB.Vars_Pump4.Alarms.Vibration;

		CgpFont	fonts134[];
		String	labels134[];
		fonts134 = new CgpFont[2];
		labels134 = new String[2];

		labels134[0] = "OK";
		fonts134[0] = F1;

		labels134[1] = "AL";
		fonts134[1] = F1;

		GroupObject08_VibrationAlarmLight03.labelClr = intArray6;
		GroupObject08_VibrationAlarmLight03.label3DClr = intArray4;

		GroupObject08_VibrationAlarmLight03.lampFonts = fonts134;
		GroupObject08_VibrationAlarmLight03.labels = labels134;

		GroupObject08_VibrationAlarmLight03.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject08_VibrationAlarmLight03.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject08_VibrationAlarmLight03.exprServer = exprServer;
		GroupObject08_VibrationAlarmLight03.alwaysDrawBackground = false;

		GroupObject08_VibrationAlarmLight03.init();
		GroupObject08_HighRtdAlarmLight03 = new Lamp_0007(200, 140, 240, 160, panelContext, this);
		GroupObject08_HighRtdAlarmLight03.frameClr = intArray2;
		GroupObject08_HighRtdAlarmLight03.foreClr = intArray3;
		GroupObject08_HighRtdAlarmLight03.backClr = intArray4;
		GroupObject08_HighRtdAlarmLight03.pattern = intArray5;
		GroupObject08_HighRtdAlarmLight03.controlTag01 = TagDB.Vars_Pump4.Alarms.HighRTD;

		CgpFont	fonts135[];
		String	labels135[];
		fonts135 = new CgpFont[2];
		labels135 = new String[2];

		labels135[0] = "OK";
		fonts135[0] = F1;

		labels135[1] = "AL";
		fonts135[1] = F1;

		GroupObject08_HighRtdAlarmLight03.labelClr = intArray6;
		GroupObject08_HighRtdAlarmLight03.label3DClr = intArray4;

		GroupObject08_HighRtdAlarmLight03.lampFonts = fonts135;
		GroupObject08_HighRtdAlarmLight03.labels = labels135;

		GroupObject08_HighRtdAlarmLight03.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		GroupObject08_HighRtdAlarmLight03.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		GroupObject08_HighRtdAlarmLight03.exprServer = exprServer;
		GroupObject08_HighRtdAlarmLight03.alwaysDrawBackground = false;

		GroupObject08_HighRtdAlarmLight03.init();
		((CgpWindow)owner).drawBack();
		TagDB._UserLevel.addEventListener(Switch04, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(WindingTempAlarmLight05, 0, panelContext);
		TagDB.Vars_Pump6.Alarms.WindingTemp.addEventListener(WindingTempAlarmLight05, 0, panelContext);
		TagDB.Vars_Pump6.Alarms.SealFail.addEventListener(SealFailAlarmLight05, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(SealFailAlarmLight05, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(HighFloatAlarmLight05, 0, panelContext);
		TagDB.Vars_Pump6.Alarms.HighFloat.addEventListener(HighFloatAlarmLight05, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(VibrationAlarmLight05, 0, panelContext);
		TagDB.Vars_Pump6.Alarms.Vibration.addEventListener(VibrationAlarmLight05, 0, panelContext);
		TagDB.Vars_Pump6.Alarms.HighRTD.addEventListener(HighRtdAlarmLight05, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(HighRtdAlarmLight05, 0, panelContext);
		TagDB.Vars_Pump5.Alarms.WindingTemp.addEventListener(GroupObject04_WindingTempAlarmLight04, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject04_WindingTempAlarmLight04, 0, panelContext);
		TagDB.Vars_Pump5.Alarms.SealFail.addEventListener(GroupObject04_SealFailAlarmLight04, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject04_SealFailAlarmLight04, 0, panelContext);
		TagDB.Vars_Pump5.Alarms.HighFloat.addEventListener(GroupObject04_HighFloatAlarmLight04, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject04_HighFloatAlarmLight04, 0, panelContext);
		TagDB.Vars_Pump5.Alarms.Vibration.addEventListener(GroupObject04_VibrationAlarmLight04, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject04_VibrationAlarmLight04, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject04_HighRtdAlarmLight04, 0, panelContext);
		TagDB.Vars_Pump5.Alarms.HighRTD.addEventListener(GroupObject04_HighRtdAlarmLight04, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject05_WindingTempAlarmLight02, 0, panelContext);
		TagDB.Vars_Pump3.Alarms.WindingTemp.addEventListener(GroupObject05_WindingTempAlarmLight02, 0, panelContext);
		TagDB.Vars_Pump3.Alarms.SealFail.addEventListener(GroupObject05_SealFailAlarmLight02, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject05_SealFailAlarmLight02, 0, panelContext);
		TagDB.Vars_Pump3.Alarms.HighFloat.addEventListener(GroupObject05_HighFloatAlarmLight02, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject05_HighFloatAlarmLight02, 0, panelContext);
		TagDB.Vars_Pump3.Alarms.Vibration.addEventListener(GroupObject05_VibrationAlarmLight02, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject05_VibrationAlarmLight02, 0, panelContext);
		TagDB.Vars_Pump3.Alarms.HighRTD.addEventListener(GroupObject05_HighRtdAlarmLight02, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject05_HighRtdAlarmLight02, 0, panelContext);
		TagDB.Vars_Pump2.Alarms.WindingTemp.addEventListener(GroupObject06_WindingTempAlarmLight01, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject06_WindingTempAlarmLight01, 0, panelContext);
		TagDB.Vars_Pump2.Alarms.SealFail.addEventListener(GroupObject06_SealFailAlarmLight01, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject06_SealFailAlarmLight01, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject06_HighFloatAlarmLight01, 0, panelContext);
		TagDB.Vars_Pump2.Alarms.HighFloat.addEventListener(GroupObject06_HighFloatAlarmLight01, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject06_VibrationAlarmLight01, 0, panelContext);
		TagDB.Vars_Pump2.Alarms.Vibration.addEventListener(GroupObject06_VibrationAlarmLight01, 0, panelContext);
		TagDB.Vars_Pump2.Alarms.HighRTD.addEventListener(GroupObject06_HighRtdAlarmLight01, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject06_HighRtdAlarmLight01, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject07_WindingTempAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.WindingTemp.addEventListener(GroupObject07_WindingTempAlarmLight, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject07_SealFailAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.SealFail.addEventListener(GroupObject07_SealFailAlarmLight, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject07_HighFloatAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.HighFloat.addEventListener(GroupObject07_HighFloatAlarmLight, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject07_VibrationAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.Vibration.addEventListener(GroupObject07_VibrationAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.HighRTD.addEventListener(GroupObject07_HighRtdAlarmLight, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject07_HighRtdAlarmLight, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject08_WindingTempAlarmLight03, 0, panelContext);
		TagDB.Vars_Pump4.Alarms.WindingTemp.addEventListener(GroupObject08_WindingTempAlarmLight03, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject08_SealFailAlarmLight03, 0, panelContext);
		TagDB.Vars_Pump4.Alarms.SealFail.addEventListener(GroupObject08_SealFailAlarmLight03, 0, panelContext);
		TagDB.Vars_Pump4.Alarms.HighFloat.addEventListener(GroupObject08_HighFloatAlarmLight03, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject08_HighFloatAlarmLight03, 0, panelContext);
		TagDB.Vars_Pump4.Alarms.Vibration.addEventListener(GroupObject08_VibrationAlarmLight03, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject08_VibrationAlarmLight03, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(GroupObject08_HighRtdAlarmLight03, 0, panelContext);
		TagDB.Vars_Pump4.Alarms.HighRTD.addEventListener(GroupObject08_HighRtdAlarmLight03, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[35];
		zOrderList[0] = Switch01;
		zOrderList[1] = Switch02;
		zOrderList[2] = Switch03;
		zOrderList[3] = SilenceAlarmsBtn;
		zOrderList[4] = Switch04;
		zOrderList[5] = WindingTempAlarmLight05;
		zOrderList[6] = SealFailAlarmLight05;
		zOrderList[7] = HighFloatAlarmLight05;
		zOrderList[8] = VibrationAlarmLight05;
		zOrderList[9] = HighRtdAlarmLight05;
		zOrderList[10] = GroupObject04_WindingTempAlarmLight04;
		zOrderList[11] = GroupObject04_SealFailAlarmLight04;
		zOrderList[12] = GroupObject04_HighFloatAlarmLight04;
		zOrderList[13] = GroupObject04_VibrationAlarmLight04;
		zOrderList[14] = GroupObject04_HighRtdAlarmLight04;
		zOrderList[15] = GroupObject05_WindingTempAlarmLight02;
		zOrderList[16] = GroupObject05_SealFailAlarmLight02;
		zOrderList[17] = GroupObject05_HighFloatAlarmLight02;
		zOrderList[18] = GroupObject05_VibrationAlarmLight02;
		zOrderList[19] = GroupObject05_HighRtdAlarmLight02;
		zOrderList[20] = GroupObject06_WindingTempAlarmLight01;
		zOrderList[21] = GroupObject06_SealFailAlarmLight01;
		zOrderList[22] = GroupObject06_HighFloatAlarmLight01;
		zOrderList[23] = GroupObject06_VibrationAlarmLight01;
		zOrderList[24] = GroupObject06_HighRtdAlarmLight01;
		zOrderList[25] = GroupObject07_WindingTempAlarmLight;
		zOrderList[26] = GroupObject07_SealFailAlarmLight;
		zOrderList[27] = GroupObject07_HighFloatAlarmLight;
		zOrderList[28] = GroupObject07_VibrationAlarmLight;
		zOrderList[29] = GroupObject07_HighRtdAlarmLight;
		zOrderList[30] = GroupObject08_WindingTempAlarmLight03;
		zOrderList[31] = GroupObject08_SealFailAlarmLight03;
		zOrderList[32] = GroupObject08_HighFloatAlarmLight03;
		zOrderList[33] = GroupObject08_VibrationAlarmLight03;
		zOrderList[34] = GroupObject08_HighRtdAlarmLight03;
		theZstack = zOrderList;

		IgpTouch touchList[] =
		{
			Switch04,
			SilenceAlarmsBtn,
			Switch03,
			Switch02,
			Switch01,
		};

		registerTouchList(touchList);

		registerTagList();
		postOnOpen();
	}

	public void registerTagList()
	{
		Vector tagListVector = new Vector();
		tagListVector.add(TagDB._UserApplicationLanguage);
		tagListVector.add(TagDB.Vars_Pump1.Alarms.WindingTemp);
		tagListVector.add(TagDB.Vars_Pump1.Alarms.Vibration);
		tagListVector.add(TagDB.Vars_Pump1.Alarms.SealFail);
		tagListVector.add(TagDB.Vars_Pump1.Alarms.HighRTD);
		tagListVector.add(TagDB.Vars_Pump1.Alarms.HighFloat);
		tagListVector.add(TagDB.Vars_Pump2.Alarms.WindingTemp);
		tagListVector.add(TagDB.Vars_Pump2.Alarms.Vibration);
		tagListVector.add(TagDB.Vars_Pump2.Alarms.SealFail);
		tagListVector.add(TagDB.Vars_Pump2.Alarms.HighRTD);
		tagListVector.add(TagDB.Vars_Pump2.Alarms.HighFloat);
		tagListVector.add(TagDB.Vars_Pump3.Alarms.WindingTemp);
		tagListVector.add(TagDB.Vars_Pump3.Alarms.Vibration);
		tagListVector.add(TagDB.Vars_Pump3.Alarms.SealFail);
		tagListVector.add(TagDB.Vars_Pump3.Alarms.HighRTD);
		tagListVector.add(TagDB.Vars_Pump3.Alarms.HighFloat);
		tagListVector.add(TagDB.Vars_Pump4.Alarms.WindingTemp);
		tagListVector.add(TagDB.Vars_Pump4.Alarms.Vibration);
		tagListVector.add(TagDB.Vars_Pump4.Alarms.SealFail);
		tagListVector.add(TagDB.Vars_Pump4.Alarms.HighRTD);
		tagListVector.add(TagDB.Vars_Pump4.Alarms.HighFloat);
		tagListVector.add(TagDB.Vars_Pump5.Alarms.WindingTemp);
		tagListVector.add(TagDB.Vars_Pump5.Alarms.Vibration);
		tagListVector.add(TagDB.Vars_Pump5.Alarms.SealFail);
		tagListVector.add(TagDB.Vars_Pump5.Alarms.HighRTD);
		tagListVector.add(TagDB.Vars_Pump5.Alarms.HighFloat);
		tagListVector.add(TagDB.Vars_Pump6.Alarms.WindingTemp);
		tagListVector.add(TagDB.Vars_Pump6.Alarms.Vibration);
		tagListVector.add(TagDB.Vars_Pump6.Alarms.SealFail);
		tagListVector.add(TagDB.Vars_Pump6.Alarms.HighRTD);
		tagListVector.add(TagDB.Vars_Pump6.Alarms.HighFloat);
		tagListVector.add(TagDB._UserLevel);
		tagListVector.add(TagDB.Global_Process_Bits.logoutProcess);
		tagListVector.add(TagDB.Global_Process_Bits.GotoSetup);

		super.registerTagList(tagListVector);
	}

	public void onClose()
	{
		super.onClose();

		GroupObject08_HighRtdAlarmLight03.shutdown();

		GroupObject08_VibrationAlarmLight03.shutdown();

		GroupObject08_HighFloatAlarmLight03.shutdown();

		GroupObject08_SealFailAlarmLight03.shutdown();

		GroupObject08_WindingTempAlarmLight03.shutdown();

		GroupObject07_HighRtdAlarmLight.shutdown();

		GroupObject07_VibrationAlarmLight.shutdown();

		GroupObject07_HighFloatAlarmLight.shutdown();

		GroupObject07_SealFailAlarmLight.shutdown();

		GroupObject07_WindingTempAlarmLight.shutdown();

		GroupObject06_HighRtdAlarmLight01.shutdown();

		GroupObject06_VibrationAlarmLight01.shutdown();

		GroupObject06_HighFloatAlarmLight01.shutdown();

		GroupObject06_SealFailAlarmLight01.shutdown();

		GroupObject06_WindingTempAlarmLight01.shutdown();

		GroupObject05_HighRtdAlarmLight02.shutdown();

		GroupObject05_VibrationAlarmLight02.shutdown();

		GroupObject05_HighFloatAlarmLight02.shutdown();

		GroupObject05_SealFailAlarmLight02.shutdown();

		GroupObject05_WindingTempAlarmLight02.shutdown();

		GroupObject04_HighRtdAlarmLight04.shutdown();

		GroupObject04_VibrationAlarmLight04.shutdown();

		GroupObject04_HighFloatAlarmLight04.shutdown();

		GroupObject04_SealFailAlarmLight04.shutdown();

		GroupObject04_WindingTempAlarmLight04.shutdown();

		HighRtdAlarmLight05.shutdown();

		VibrationAlarmLight05.shutdown();

		HighFloatAlarmLight05.shutdown();

		SealFailAlarmLight05.shutdown();

		WindingTempAlarmLight05.shutdown();

		Switch04.shutdown();

		SilenceAlarmsBtn.shutdown();

		Switch03.shutdown();

		Switch02.shutdown();

		Switch01.shutdown();
	}

	public boolean drawBackground(int gp)
	{
		CgpCanvas _g = new CgpCanvas(gp);

		// Text01
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"PUMP STATUS SUMMARY",	// text
			40 + _dx,	// x
			10 + _dy,	// y
			240,	// width
			20,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// GroupObject01_Text09
		_g.drawStringWithBorder
		(
			0x007f6144,	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Winding \nTemp",	// text
			0 + _dx,	// x
			60 + _dy,	// y
			80,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F9	// font type
		);
		// GroupObject01_Text10
		_g.drawStringWithBorder
		(
			0x007f6144,	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Seal Leak",	// text
			0 + _dx,	// x
			80 + _dy,	// y
			80,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F9	// font type
		);
		// GroupObject01_Text11
		_g.drawStringWithBorder
		(
			0x007f6144,	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Moisture",	// text
			0 + _dx,	// x
			100 + _dy,	// y
			80,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F9	// font type
		);
		// GroupObject01_Text12
		_g.drawStringWithBorder
		(
			0x007f6144,	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Vibration",	// text
			0 + _dx,	// x
			120 + _dy,	// y
			80,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// GroupObject01_Text13
		_g.drawStringWithBorder
		(
			0x007f6144,	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Lower Bearing\nTemp",	// text
			0 + _dx,	// x
			140 + _dy,	// y
			80,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F17	// font type
		);
		// GroupObject02_Text02
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Pump#",	// text
			0 + _dx,	// x
			40 + _dy,	// y
			81,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// GroupObject02_Text03
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"1",	// text
			80 + _dx,	// x
			40 + _dy,	// y
			41,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// GroupObject02_Text04
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"2",	// text
			120 + _dx,	// x
			40 + _dy,	// y
			41,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// GroupObject02_Text05
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"3",	// text
			160 + _dx,	// x
			40 + _dy,	// y
			41,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// GroupObject02_Text06
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"4",	// text
			200 + _dx,	// x
			40 + _dy,	// y
			41,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// GroupObject02_Text07
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"5",	// text
			240 + _dx,	// x
			40 + _dy,	// y
			41,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// GroupObject02_Text08
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"6",	// text
			280 + _dx,	// x
			40 + _dy,	// y
			41,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// Rectangle02
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			120 + _dx,	// x
			80 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle03
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			120 + _dx,	// x
			100 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle04
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			120 + _dx,	// x
			120 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle05
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			120 + _dx,	// x
			140 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle07
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			160 + _dx,	// x
			80 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle08
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			160 + _dx,	// x
			100 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle09
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			160 + _dx,	// x
			120 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle10
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			160 + _dx,	// x
			140 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle12
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			200 + _dx,	// x
			80 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle13
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			200 + _dx,	// x
			100 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle14
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			200 + _dx,	// x
			120 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle15
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			200 + _dx,	// x
			140 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle17
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			240 + _dx,	// x
			80 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle18
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			240 + _dx,	// x
			100 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle19
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			240 + _dx,	// x
			120 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle20
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			240 + _dx,	// x
			140 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle22
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			280 + _dx,	// x
			80 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle23
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			280 + _dx,	// x
			100 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle24
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			280 + _dx,	// x
			120 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Rectangle25
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			280 + _dx,	// x
			140 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// GroupObject03_Rectangle01
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			120 + _dx,	// x
			60 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// GroupObject03_Rectangle06
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			160 + _dx,	// x
			60 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// GroupObject03_Rectangle11
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			200 + _dx,	// x
			60 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// GroupObject03_Rectangle16
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			240 + _dx,	// x
			60 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// GroupObject03_Rectangle21
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			280 + _dx,	// x
			60 + _dy,	// y
			41,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// arc width
			7	// arc height
		);
		// Line01
		_g.drawLine
		(
			0 + _dx,	// x1
			60 + _dy,	// y1
			320 + _dx,	// x2
			60 + _dy,	// y2
			0x00f4f1ee,	// line color
			0x00f4f1ee,	// back color
			CgpLinePattern.LINE_SOLID,	// line pattern
			1,	// line width
			CgpPolyLine.ARROW_NONE	// line end style
		);
		return true;
	}
	public CgpMasterPanel getMasterPanel()
	{
		return masterPanel;
	}

}
