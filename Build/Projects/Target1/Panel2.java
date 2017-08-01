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
	public Switch_0008 Switch02;
	public Switch_0008 Switch03;
	public Lamp_0007 WindingTempAlarmLight;
	public Lamp_0007 SealFailAlarmLight;
	public Lamp_0007 HighFloatAlarmLight;
	public Lamp_0007 VibrationAlarmLight;
	public Lamp_0007 HighRtdAlarmLight;
	public Switch_0008 SilenceAlarmsBtn;
	public Switch_0011 Switch04;
	CgpFont F1;
	CgpFont F9;
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
		Switch02 = new Switch_0008(80, 180, 160, 220, panelContext, this);
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
		Switch02.bit0 = TagDB.System_Vars.ResetAlarms;
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
		WindingTempAlarmLight = new Lamp_0007(80, 60, 120, 80, panelContext, this);
		int intArray2[] = {0x006e726e, 0x006e726e, };
		WindingTempAlarmLight.frameClr = intArray2;
		int intArray3[] = {0x006ecc2a, 0x003b4ce6, };
		WindingTempAlarmLight.foreClr = intArray3;
		int intArray4[] = {0x00000000, 0x00000000, };
		WindingTempAlarmLight.backClr = intArray4;
		int intArray5[] = {1, 1, };
		WindingTempAlarmLight.pattern = intArray5;
		WindingTempAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.WindingTemp;

		CgpFont	fonts22[];
		String	labels22[];
		fonts22 = new CgpFont[2];
		labels22 = new String[2];

		labels22[0] = "OK";
		fonts22[0] = F1;

		labels22[1] = "AL";
		fonts22[1] = F1;

		int intArray6[] = {0x00ffffff, 0x00ffffff, };
		WindingTempAlarmLight.labelClr = intArray6;
		WindingTempAlarmLight.label3DClr = intArray4;

		WindingTempAlarmLight.lampFonts = fonts22;
		WindingTempAlarmLight.labels = labels22;

		WindingTempAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		WindingTempAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		WindingTempAlarmLight.alwaysDrawBackground = false;

		WindingTempAlarmLight.init();
		SealFailAlarmLight = new Lamp_0007(80, 80, 120, 100, panelContext, this);
		SealFailAlarmLight.frameClr = intArray2;
		SealFailAlarmLight.foreClr = intArray3;
		SealFailAlarmLight.backClr = intArray4;
		SealFailAlarmLight.pattern = intArray5;
		SealFailAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.SealFail;

		CgpFont	fonts79[];
		String	labels79[];
		fonts79 = new CgpFont[2];
		labels79 = new String[2];

		labels79[0] = "OK";
		fonts79[0] = F1;

		labels79[1] = "AL";
		fonts79[1] = F1;

		SealFailAlarmLight.labelClr = intArray6;
		SealFailAlarmLight.label3DClr = intArray4;

		SealFailAlarmLight.lampFonts = fonts79;
		SealFailAlarmLight.labels = labels79;

		SealFailAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		SealFailAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		SealFailAlarmLight.alwaysDrawBackground = false;

		SealFailAlarmLight.init();
		HighFloatAlarmLight = new Lamp_0007(80, 100, 120, 120, panelContext, this);
		HighFloatAlarmLight.frameClr = intArray2;
		HighFloatAlarmLight.foreClr = intArray3;
		HighFloatAlarmLight.backClr = intArray4;
		HighFloatAlarmLight.pattern = intArray5;
		HighFloatAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.HighFloat;

		CgpFont	fonts80[];
		String	labels80[];
		fonts80 = new CgpFont[2];
		labels80 = new String[2];

		labels80[0] = "OK";
		fonts80[0] = F1;

		labels80[1] = "AL";
		fonts80[1] = F1;

		HighFloatAlarmLight.labelClr = intArray6;
		HighFloatAlarmLight.label3DClr = intArray4;

		HighFloatAlarmLight.lampFonts = fonts80;
		HighFloatAlarmLight.labels = labels80;

		HighFloatAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		HighFloatAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		HighFloatAlarmLight.alwaysDrawBackground = false;

		HighFloatAlarmLight.init();
		VibrationAlarmLight = new Lamp_0007(80, 120, 120, 140, panelContext, this);
		VibrationAlarmLight.frameClr = intArray2;
		VibrationAlarmLight.foreClr = intArray3;
		VibrationAlarmLight.backClr = intArray4;
		VibrationAlarmLight.pattern = intArray5;
		VibrationAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.Vibration;

		CgpFont	fonts81[];
		String	labels81[];
		fonts81 = new CgpFont[2];
		labels81 = new String[2];

		labels81[0] = "OK";
		fonts81[0] = F1;

		labels81[1] = "AL";
		fonts81[1] = F1;

		VibrationAlarmLight.labelClr = intArray6;
		VibrationAlarmLight.label3DClr = intArray4;

		VibrationAlarmLight.lampFonts = fonts81;
		VibrationAlarmLight.labels = labels81;

		VibrationAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		VibrationAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		VibrationAlarmLight.alwaysDrawBackground = false;

		VibrationAlarmLight.init();
		HighRtdAlarmLight = new Lamp_0007(80, 140, 120, 160, panelContext, this);
		HighRtdAlarmLight.frameClr = intArray2;
		HighRtdAlarmLight.foreClr = intArray3;
		HighRtdAlarmLight.backClr = intArray4;
		HighRtdAlarmLight.pattern = intArray5;
		HighRtdAlarmLight.controlTag01 = TagDB.Vars_Pump1.Alarms.HighRTD;

		CgpFont	fonts82[];
		String	labels82[];
		fonts82 = new CgpFont[2];
		labels82 = new String[2];

		labels82[0] = "OK";
		fonts82[0] = F1;

		labels82[1] = "AL";
		fonts82[1] = F1;

		HighRtdAlarmLight.labelClr = intArray6;
		HighRtdAlarmLight.label3DClr = intArray4;

		HighRtdAlarmLight.lampFonts = fonts82;
		HighRtdAlarmLight.labels = labels82;

		HighRtdAlarmLight.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		HighRtdAlarmLight.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		HighRtdAlarmLight.alwaysDrawBackground = false;

		HighRtdAlarmLight.init();

		CgpText GroupObject02_Text02 = new CgpText
		(
			"Pump#",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F1,
			0x0011c3f4,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			0,	// x1
			40,	// y1
			80,	// x2
			60,	// y2
			CgpColor.makeTransparentColor(0x08ffffff),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		GroupObject02_Text02.set3DColor(0x00ff0000);

		CgpText GroupObject02_Text03 = new CgpText
		(
			"1",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F1,
			0x0011c3f4,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			80,	// x1
			40,	// y1
			120,	// x2
			60,	// y2
			CgpColor.makeTransparentColor(0x08ffffff),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		GroupObject02_Text03.set3DColor(0x00ff0000);

		CgpText GroupObject02_Text04 = new CgpText
		(
			"2",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F1,
			0x0011c3f4,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			120,	// x1
			40,	// y1
			160,	// x2
			60,	// y2
			CgpColor.makeTransparentColor(0x08ffffff),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		GroupObject02_Text04.set3DColor(0x00ff0000);

		CgpText GroupObject02_Text05 = new CgpText
		(
			"3",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F1,
			0x0011c3f4,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			160,	// x1
			40,	// y1
			200,	// x2
			60,	// y2
			CgpColor.makeTransparentColor(0x08ffffff),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		GroupObject02_Text05.set3DColor(0x00ff0000);

		CgpText GroupObject02_Text06 = new CgpText
		(
			"4",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F1,
			0x0011c3f4,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			200,	// x1
			40,	// y1
			240,	// x2
			60,	// y2
			CgpColor.makeTransparentColor(0x08ffffff),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		GroupObject02_Text06.set3DColor(0x00ff0000);

		CgpText GroupObject02_Text07 = new CgpText
		(
			"5",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F1,
			0x0011c3f4,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			240,	// x1
			40,	// y1
			280,	// x2
			60,	// y2
			CgpColor.makeTransparentColor(0x08ffffff),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		GroupObject02_Text07.set3DColor(0x00ff0000);

		CgpText GroupObject02_Text08 = new CgpText
		(
			"6",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F1,
			0x0011c3f4,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			280,	// x1
			40,	// y1
			320,	// x2
			60,	// y2
			CgpColor.makeTransparentColor(0x08ffffff),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		GroupObject02_Text08.set3DColor(0x00ff0000);
		SilenceAlarmsBtn = new Switch_0008(160, 180, 240, 220, panelContext, this);
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
		SilenceAlarmsBtn.bit0 = TagDB.System_Vars.SilenceAlarms;
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

		CgpRectangle Rectangle02 = new CgpRectangle
		(
			120,	// x1
			80,	// y1
			160,	// x2
			100,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle03 = new CgpRectangle
		(
			120,	// x1
			100,	// y1
			160,	// x2
			120,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle04 = new CgpRectangle
		(
			120,	// x1
			120,	// y1
			160,	// x2
			140,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle05 = new CgpRectangle
		(
			120,	// x1
			140,	// y1
			160,	// x2
			160,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle07 = new CgpRectangle
		(
			160,	// x1
			80,	// y1
			200,	// x2
			100,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle08 = new CgpRectangle
		(
			160,	// x1
			100,	// y1
			200,	// x2
			120,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle09 = new CgpRectangle
		(
			160,	// x1
			120,	// y1
			200,	// x2
			140,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle10 = new CgpRectangle
		(
			160,	// x1
			140,	// y1
			200,	// x2
			160,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle12 = new CgpRectangle
		(
			200,	// x1
			80,	// y1
			240,	// x2
			100,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle13 = new CgpRectangle
		(
			200,	// x1
			100,	// y1
			240,	// x2
			120,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle14 = new CgpRectangle
		(
			200,	// x1
			120,	// y1
			240,	// x2
			140,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle15 = new CgpRectangle
		(
			200,	// x1
			140,	// y1
			240,	// x2
			160,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle17 = new CgpRectangle
		(
			240,	// x1
			80,	// y1
			280,	// x2
			100,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle18 = new CgpRectangle
		(
			240,	// x1
			100,	// y1
			280,	// x2
			120,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle19 = new CgpRectangle
		(
			240,	// x1
			120,	// y1
			280,	// x2
			140,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle20 = new CgpRectangle
		(
			240,	// x1
			140,	// y1
			280,	// x2
			160,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle22 = new CgpRectangle
		(
			280,	// x1
			80,	// y1
			320,	// x2
			100,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle23 = new CgpRectangle
		(
			280,	// x1
			100,	// y1
			320,	// x2
			120,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle24 = new CgpRectangle
		(
			280,	// x1
			120,	// y1
			320,	// x2
			140,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle Rectangle25 = new CgpRectangle
		(
			280,	// x1
			140,	// y1
			320,	// x2
			160,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle GroupObject03_Rectangle01 = new CgpRectangle
		(
			120,	// x1
			60,	// y1
			160,	// x2
			80,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle GroupObject03_Rectangle06 = new CgpRectangle
		(
			160,	// x1
			60,	// y1
			200,	// x2
			80,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle GroupObject03_Rectangle11 = new CgpRectangle
		(
			200,	// x1
			60,	// y1
			240,	// x2
			80,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle GroupObject03_Rectangle16 = new CgpRectangle
		(
			240,	// x1
			60,	// y1
			280,	// x2
			80,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpRectangle GroupObject03_Rectangle21 = new CgpRectangle
		(
			280,	// x1
			60,	// y1
			320,	// x2
			80,	// y2
			CgpRectangle.SQUARE_CORNERS,	// corner type
			7,	// Width of round corner
			7,	// Height of round corner
			0x00908c7f,	// borderFgColor
			0x00000000,	// bg
			0x00aaa599,	// fg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			(byte)1,	// fillStyle
			0,
			this
		);

		CgpPolyLine Line01 = new CgpPolyLine
		(
			0,	// x1
			60,	// y1
			320,	// x2
			60,	// y2
			0x00f4f1ee,	// borderFgColor
			0x00f4f1ee,	// bg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			CgpPolyLine.ARROW_NONE,	// LineEndStyle
			0,
			this
		);
		((CgpWindow)owner).drawBack();
		TagDB._UserApplicationLanguage.addEventListener(WindingTempAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.WindingTemp.addEventListener(WindingTempAlarmLight, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(SealFailAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.SealFail.addEventListener(SealFailAlarmLight, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(HighFloatAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.HighFloat.addEventListener(HighFloatAlarmLight, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(VibrationAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.Vibration.addEventListener(VibrationAlarmLight, 0, panelContext);
		TagDB.Vars_Pump1.Alarms.HighRTD.addEventListener(HighRtdAlarmLight, 0, panelContext);
		TagDB._UserApplicationLanguage.addEventListener(HighRtdAlarmLight, 0, panelContext);
		TagDB._UserLevel.addEventListener(Switch04, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[43];
		zOrderList[0] = Switch01;
		zOrderList[1] = Switch02;
		zOrderList[2] = Switch03;
		zOrderList[3] = WindingTempAlarmLight;
		zOrderList[4] = SealFailAlarmLight;
		zOrderList[5] = HighFloatAlarmLight;
		zOrderList[6] = VibrationAlarmLight;
		zOrderList[7] = HighRtdAlarmLight;
		zOrderList[8] = GroupObject02_Text02;
		zOrderList[9] = GroupObject02_Text03;
		zOrderList[10] = GroupObject02_Text04;
		zOrderList[11] = GroupObject02_Text05;
		zOrderList[12] = GroupObject02_Text06;
		zOrderList[13] = GroupObject02_Text07;
		zOrderList[14] = GroupObject02_Text08;
		zOrderList[15] = SilenceAlarmsBtn;
		zOrderList[16] = Switch04;
		zOrderList[17] = Rectangle02;
		zOrderList[18] = Rectangle03;
		zOrderList[19] = Rectangle04;
		zOrderList[20] = Rectangle05;
		zOrderList[21] = Rectangle07;
		zOrderList[22] = Rectangle08;
		zOrderList[23] = Rectangle09;
		zOrderList[24] = Rectangle10;
		zOrderList[25] = Rectangle12;
		zOrderList[26] = Rectangle13;
		zOrderList[27] = Rectangle14;
		zOrderList[28] = Rectangle15;
		zOrderList[29] = Rectangle17;
		zOrderList[30] = Rectangle18;
		zOrderList[31] = Rectangle19;
		zOrderList[32] = Rectangle20;
		zOrderList[33] = Rectangle22;
		zOrderList[34] = Rectangle23;
		zOrderList[35] = Rectangle24;
		zOrderList[36] = Rectangle25;
		zOrderList[37] = GroupObject03_Rectangle01;
		zOrderList[38] = GroupObject03_Rectangle06;
		zOrderList[39] = GroupObject03_Rectangle11;
		zOrderList[40] = GroupObject03_Rectangle16;
		zOrderList[41] = GroupObject03_Rectangle21;
		zOrderList[42] = Line01;
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
		tagListVector.add(TagDB._UserLevel);
		tagListVector.add(TagDB.Global_Process_Bits.logoutProcess);
		tagListVector.add(TagDB.Global_Process_Bits.GotoSetup);

		super.registerTagList(tagListVector);
	}

	public void onClose()
	{
		super.onClose();

		Switch04.shutdown();

		SilenceAlarmsBtn.shutdown();

		HighRtdAlarmLight.shutdown();

		VibrationAlarmLight.shutdown();

		HighFloatAlarmLight.shutdown();

		SealFailAlarmLight.shutdown();

		WindingTempAlarmLight.shutdown();

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
			"Seal",	// text
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
			"High\nFloat",	// text
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
			"High RTD",	// text
			0 + _dx,	// x
			140 + _dy,	// y
			80,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		return true;
	}
	public CgpMasterPanel getMasterPanel()
	{
		return masterPanel;
	}

}
