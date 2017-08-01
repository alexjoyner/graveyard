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

public class Panel5 extends CgpPanel
{
	public Panel5XprSrv exprServer;

	public Switch_0008 Switch02;
	public Switch_0010 Switch03;
	public Switch_0008 SilenceAlarmsBtn;
	public CgpNumericDisplay NumericDisplay01;
	public CgpNumericDisplay NumericDisplay02;
	public Switch_0011 Switch04;
	public Switch_0007 Switch01;
	CgpFont F15;
	CgpFont F16;
	CgpFont F65;
	public CgpSmartKeypadDec  decKeypad;
	private CgpMasterPanel masterPanel = null;
	public int publishedTo()
		{
			return CgpSystem.HMI;
		}

	public void createStaticObjects()
	{
		exprServer = new Panel5XprSrv();

		setBacklightColor(0);
	}
	public String getPanelName()
	{
		return "TimerSetpoints";
	}
	public int getPanelID()
	{
		return 5;
	}

	public int getBackColor()
	{
		return 0x004c402a;
	}

	public void onOpen()
	{
		super.onOpen();

		Integer contextObject = new Integer(panelContext);

		F15 = new CgpFont("TCP8x13", CgpFont.PLAIN, (byte)13, (byte)8);

		F16 = new CgpFont("TCP6x10", CgpFont.PLAIN, (byte)10, (byte)6);

		F65 = new CgpFont("PF Utah (WF) S", CgpFont.PLAIN, (byte)9, (byte)0);

		CgpFont textFont0 = new CgpFont("TCP8x13", CgpFont.PLAIN, (byte)13, (byte)8);

		decKeypad = new CgpSmartKeypadDec(panelContext, this);
		decKeypad.init();
		Switch02 = new Switch_0008(80, 180, 160, 220, panelContext, this);
		Switch02.frameClr = 0x005d4833;
		Switch02.foreClr = 0x006ecc2a;
		Switch02.backClr = 0x00000000;
		Switch02.pattern = 1;

		CgpFont	fonts57[];
		String	labels57[];
		fonts57 = new CgpFont[1];
		labels57 = new String[1];

		labels57[0] = "Reset\nAll";
		fonts57[0] = F15;

		Switch02.buzzer = true;

		Switch02.switchFonts = fonts57;
		Switch02.labels = labels57;

		int intArray0[] = {0x00ffffff, };
		Switch02.labelClr = intArray0;
		int intArray1[] = {0x00000000, };
		Switch02.label3DClr = intArray1;
		Switch02.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch02.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch02.bit0 = TagDB.System_Vars.ResetAlarms;
		Switch02.alwaysDrawBackground = false;

		Switch02.init();
		Switch03 = new Switch_0010(240, 180, 320, 220, panelContext, this);
		Switch03.securityLevel = 1;
		Switch03.frameClr = 0x005d4833;
		Switch03.foreClr = 0x00aaa599;
		Switch03.backClr = 0x00000000;
		Switch03.pattern = 1;

		CgpFont	fonts58[];
		String	labels58[];
		fonts58 = new CgpFont[1];
		labels58 = new String[1];

		labels58[0] = "Back";
		fonts58[0] = F15;

		Switch03.buzzer = true;

		Switch03.switchFonts = fonts58;
		Switch03.labels = labels58;

		Switch03.labelClr = intArray0;
		Switch03.label3DClr = intArray1;
		Switch03.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch03.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch03.scriptID0 = 1000;
		Switch03.exprServer = exprServer;
		Switch03.alwaysDrawBackground = false;

		Switch03.init();
		SilenceAlarmsBtn = new Switch_0008(160, 180, 240, 220, panelContext, this);
		SilenceAlarmsBtn.frameClr = 0x005d4833;
		SilenceAlarmsBtn.foreClr = 0x00227fe6;
		SilenceAlarmsBtn.backClr = 0x00000000;
		SilenceAlarmsBtn.pattern = 1;

		CgpFont	fonts59[];
		String	labels59[];
		fonts59 = new CgpFont[1];
		labels59 = new String[1];

		labels59[0] = "Silence\nAlarms";
		fonts59[0] = F15;

		SilenceAlarmsBtn.buzzer = true;

		SilenceAlarmsBtn.switchFonts = fonts59;
		SilenceAlarmsBtn.labels = labels59;

		SilenceAlarmsBtn.labelClr = intArray0;
		SilenceAlarmsBtn.label3DClr = intArray1;
		SilenceAlarmsBtn.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		SilenceAlarmsBtn.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		SilenceAlarmsBtn.bit0 = TagDB.System_Vars.SilenceAlarms;
		SilenceAlarmsBtn.exprServer = exprServer;
		SilenceAlarmsBtn.alwaysDrawBackground = false;

		SilenceAlarmsBtn.init();

		NumericDisplay01 = new CgpNumericDisplay(80, 60, 120, 80, panelContext, this);
		NumericDisplay01.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay01.variable = TagDB.Vars_Pump1.Timers.VibrationAlarmTimer;
		NumericDisplay01.zeroSuppress = true;
		NumericDisplay01.zeroDisplay = true;
		NumericDisplay01.displayDigits = 3;
		NumericDisplay01.decimalPlaces = 0;
		NumericDisplay01.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay01.unitStrings = null;
		CgpFont	fonts69[][] = {
			{ textFont0 },
			};
		NumericDisplay01.fonts = fonts69;
		NumericDisplay01.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay01.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay01.enableInput = true;
		NumericDisplay01.displayPopupKeypad = true;
		NumericDisplay01.keypad = decKeypad;
		NumericDisplay01.beepOnTouch = false;
		NumericDisplay01.barcode = false;
		NumericDisplay01.frameColor = 0x00908c7f;
		NumericDisplay01.foreColor = 0x00aaa599;
		NumericDisplay01.textColor = 0x00ffffff;
		NumericDisplay01.text3DColor = 0x00000000;
		NumericDisplay01.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay01.changeColor = false;
		NumericDisplay01.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		CgpNumericDisplayDraw displayDraw0 = new D_Display01(1,1,1,1);
		NumericDisplay01.drawObject = displayDraw0;
		NumericDisplay01.alwaysDrawBackground = false;
		NumericDisplay01.exprServer = exprServer;
		NumericDisplay01.useLocalMinMax  = true;
		NumericDisplay01.minExpr   = 1001;
		NumericDisplay01.maxExpr   = 1002;
		NumericDisplay01.init();

		NumericDisplay02 = new CgpNumericDisplay(80, 120, 120, 140, panelContext, this);
		NumericDisplay02.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay02.variable = TagDB.Vars_Pump1.Timers.PumpRtdAlarmTime;
		NumericDisplay02.zeroSuppress = true;
		NumericDisplay02.zeroDisplay = true;
		NumericDisplay02.displayDigits = 3;
		NumericDisplay02.decimalPlaces = 0;
		NumericDisplay02.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay02.unitStrings = null;
		NumericDisplay02.fonts = fonts69;
		NumericDisplay02.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay02.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay02.enableInput = true;
		NumericDisplay02.displayPopupKeypad = true;
		NumericDisplay02.keypad = decKeypad;
		NumericDisplay02.beepOnTouch = false;
		NumericDisplay02.barcode = false;
		NumericDisplay02.frameColor = 0x00908c7f;
		NumericDisplay02.foreColor = 0x00aaa599;
		NumericDisplay02.textColor = 0x00ffffff;
		NumericDisplay02.text3DColor = 0x00000000;
		NumericDisplay02.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay02.changeColor = false;
		NumericDisplay02.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay02.drawObject = displayDraw0;
		NumericDisplay02.alwaysDrawBackground = false;
		NumericDisplay02.exprServer = exprServer;
		NumericDisplay02.useLocalMinMax  = true;
		NumericDisplay02.minExpr   = 1003;
		NumericDisplay02.maxExpr   = 1004;
		NumericDisplay02.init();
		Switch04 = new Switch_0011(0, 220, 320, 240, panelContext, this);
		Switch04.frameClr = 0x006e726e;
		Switch04.foreClr = 0x003b4ce6;
		Switch04.backClr = 0x00000000;
		Switch04.pattern = 1;

		CgpFont	fonts71[];
		String	labels71[];
		fonts71 = new CgpFont[1];
		labels71 = new String[1];

		labels71[0] = "Log Out";
		fonts71[0] = F15;

		Switch04.buzzer = true;
		Switch04.visibID = 1005;

		Switch04.switchFonts = fonts71;
		Switch04.labels = labels71;

		Switch04.labelClr = intArray0;
		Switch04.label3DClr = intArray1;
		Switch04.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch04.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch04.bit0 = TagDB.Global_Process_Bits.logoutProcess;
		Switch04.exprServer = exprServer;
		Switch04.alwaysDrawBackground = false;

		Switch04.init();
		Switch01 = new Switch_0007(0, 180, 80, 220, panelContext, this);
		Switch01.frameClr = 0x005d4833;
		Switch01.foreClr = 0x00dd9933;
		Switch01.backClr = 0x00000000;
		Switch01.pattern = 1;

		CgpFont	fonts72[];
		String	labels72[];
		fonts72 = new CgpFont[1];
		labels72 = new String[1];

		labels72[0] = "Main\nMenu";
		fonts72[0] = F15;

		Switch01.buzzer = true;

		Switch01.switchFonts = fonts72;
		Switch01.labels = labels72;

		Switch01.labelClr = intArray0;
		Switch01.label3DClr = intArray1;
		Switch01.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch01.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch01.panelChange0 = 2;
		Switch01.exprServer = exprServer;
		Switch01.alwaysDrawBackground = false;

		Switch01.init();
		((CgpWindow)owner).drawBack();
		TagDB._UserLevel.addEventListener(Switch03, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay01, 0, panelContext);
		TagDB.Vars_Pump1.Timers.VibrationAlarmTimer.addEventListener(NumericDisplay01, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay02, 0, panelContext);
		TagDB.Vars_Pump1.Timers.PumpRtdAlarmTime.addEventListener(NumericDisplay02, 0, panelContext);
		TagDB._UserLevel.addEventListener(Switch04, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[8];
		zOrderList[0] = Switch02;
		zOrderList[1] = Switch03;
		zOrderList[2] = SilenceAlarmsBtn;
		zOrderList[3] = NumericDisplay01;
		zOrderList[4] = NumericDisplay02;
		zOrderList[5] = Switch04;
		zOrderList[6] = Switch01;
		zOrderList[7] = decKeypad;
		theZstack = zOrderList;

		IgpTouch touchList[] =
		{
			decKeypad,
			Switch01,
			Switch04,
			NumericDisplay02,
			NumericDisplay01,
			SilenceAlarmsBtn,
			Switch03,
			Switch02,
		};

		registerTouchList(touchList);

		registerTagList();
		postOnOpen();
	}

	public void registerTagList()
	{
		Vector tagListVector = new Vector();
		tagListVector.add(TagDB._UserApplicationLanguage);
		tagListVector.add(TagDB.Vars_Pump1.Timers.VibrationAlarmTimer);
		tagListVector.add(TagDB.Vars_Pump1.Timers.PumpRtdAlarmTime);
		tagListVector.add(TagDB._UserLevel);
		tagListVector.add(TagDB.Global_Process_Bits.logoutProcess);

		super.registerTagList(tagListVector);
	}

	public void onClose()
	{
		super.onClose();
		decKeypad.shutdown();

		Switch01.shutdown();

		Switch04.shutdown();

		NumericDisplay02.shutdown();

		NumericDisplay01.shutdown();

		SilenceAlarmsBtn.shutdown();

		Switch03.shutdown();

		Switch02.shutdown();
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
			"Time Delay Setpoints",	// text
			80 + _dx,	// x
			0 + _dy,	// y
			161,	// width
			41,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F15	// font type
		);
		// Text02
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			0x007f6144,	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Enter Time Delay after reaching alarm setpoint before pump is shutdown and alarm sounded",	// text
			20 + _dx,	// x
			80 + _dy,	// y
			281,	// width
			41,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F16	// font type
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
			F15	// font type
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
			F15	// font type
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
			F15	// font type
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
			F15	// font type
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
			F15	// font type
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
			F15	// font type
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
			F15	// font type
		);
		// Text03
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			0x007f6144,	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Enter Time Delay after any one of 4 pump RTD's reaches setpoint and shuts pump down",	// text
			20 + _dx,	// x
			140 + _dy,	// y
			281,	// width
			41,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F16	// font type
		);
		// GroupObject06_GroupObject05_Rectangle01
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			80 + _dx,	// x
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
		// GroupObject06_GroupObject05_Rectangle06
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
		// GroupObject06_GroupObject05_Rectangle11
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
		// GroupObject06_GroupObject05_Rectangle16
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
		// GroupObject06_GroupObject05_Rectangle21
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
		// GroupObject06_GroupObject01_Rectangle01
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
		// GroupObject06_GroupObject01_Rectangle06
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
		// GroupObject06_GroupObject01_Rectangle11
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
		// GroupObject06_GroupObject01_Rectangle16
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
		// GroupObject06_GroupObject01_Rectangle21
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
		// GroupObject01_GroupObject03_Rectangle01
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
		// GroupObject01_GroupObject03_Rectangle06
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
		// GroupObject01_GroupObject03_Rectangle11
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
		// GroupObject01_GroupObject03_Rectangle16
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
		// GroupObject01_GroupObject03_Rectangle21
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
		// GroupObject01_GroupObject04_Rectangle01
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			80 + _dx,	// x
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
		// GroupObject01_GroupObject04_Rectangle06
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
		// GroupObject01_GroupObject04_Rectangle11
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
		// GroupObject01_GroupObject04_Rectangle16
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
		// GroupObject01_GroupObject04_Rectangle21
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
		// Text04
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Vibration",	// text
			0 + _dx,	// x
			59 + _dy,	// y
			81,	// width
			16,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F16	// font type
		);
		// Text07
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Time in seconds",	// text
			0 + _dx,	// x
			68 + _dy,	// y
			81,	// width
			13,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F65	// font type
		);
		// Text05
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"RTD Grouping",	// text
			0 + _dx,	// x
			120 + _dy,	// y
			81,	// width
			16,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F16	// font type
		);
		// Text06
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Time in seconds",	// text
			0 + _dx,	// x
			129 + _dy,	// y
			81,	// width
			13,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F65	// font type
		);
		NumericDisplay01.drawBackground(_g);

		NumericDisplay02.drawBackground(_g);

		return true;
	}
	public CgpMasterPanel getMasterPanel()
	{
		return masterPanel;
	}

}
