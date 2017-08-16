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

public class Panel4 extends CgpPanel
{
	public Panel4XprSrv exprServer;

	public Switch_0007 Switch01;
	public Switch_0008 Switch02;
	public Switch_0007 Timers;
	public Switch_0008 SilenceAlarmsBtn;
	public CgpNumericDisplay NumericDisplay01;
	public CgpNumericDisplay NumericDisplay02;
	public CgpNumericDisplay NumericDisplay03;
	public CgpNumericDisplay NumericDisplay04;
	public CgpNumericDisplay NumericDisplay05;
	public Switch_0011 Switch04;
	CgpFont F1;
	CgpFont F33;
	CgpFont F37;
	CgpFont F43;
	public CgpSmartKeypadDec  decKeypad;
	private CgpMasterPanel masterPanel = null;
	public int publishedTo()
		{
			return CgpSystem.HMI;
		}

	public void createStaticObjects()
	{
		exprServer = new Panel4XprSrv();

		setBacklightColor(0);
	}
	public String getPanelName()
	{
		return "TripValueSetpoints";
	}
	public int getPanelID()
	{
		return 4;
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

		F33 = new CgpFont("TCP6x10", CgpFont.PLAIN, (byte)10, (byte)6);

		F37 = new CgpFont("PF Utah (WF) S", CgpFont.PLAIN, (byte)10, (byte)0);

		F43 = new CgpFont("PF Utah (WF) S", CgpFont.PLAIN, (byte)9, (byte)0);

		CgpFont textFont0 = new CgpFont("TCP8x13", CgpFont.PLAIN, (byte)13, (byte)8);

		decKeypad = new CgpSmartKeypadDec(panelContext, this);
		decKeypad.init();
		Switch01 = new Switch_0007(0, 180, 80, 220, panelContext, this);
		Switch01.frameClr = 0x005d4833;
		Switch01.foreClr = 0x00dd9933;
		Switch01.backClr = 0x00000000;
		Switch01.pattern = 1;

		CgpFont	fonts24[];
		String	labels24[];
		fonts24 = new CgpFont[1];
		labels24 = new String[1];

		labels24[0] = "Main\nMenu";
		fonts24[0] = F1;

		Switch01.buzzer = true;

		Switch01.switchFonts = fonts24;
		Switch01.labels = labels24;

		int intArray0[] = {0x00ffffff, };
		Switch01.labelClr = intArray0;
		int intArray1[] = {0x00000000, };
		Switch01.label3DClr = intArray1;
		Switch01.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch01.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch01.panelChange0 = 2;
		Switch01.alwaysDrawBackground = false;

		Switch01.init();
		Switch02 = new Switch_0008(80, 180, 160, 220, panelContext, this);
		Switch02.frameClr = 0x005d4833;
		Switch02.foreClr = 0x006ecc2a;
		Switch02.backClr = 0x00000000;
		Switch02.pattern = 1;

		CgpFont	fonts38[];
		String	labels38[];
		fonts38 = new CgpFont[1];
		labels38 = new String[1];

		labels38[0] = "Reset\nAll";
		fonts38[0] = F1;

		Switch02.buzzer = true;

		Switch02.switchFonts = fonts38;
		Switch02.labels = labels38;

		Switch02.labelClr = intArray0;
		Switch02.label3DClr = intArray1;
		Switch02.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch02.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch02.bit0 = TagDB.System_Vars.ResetAlarms;
		Switch02.alwaysDrawBackground = false;

		Switch02.init();
		Timers = new Switch_0007(240, 180, 320, 220, panelContext, this);
		Timers.frameClr = 0x005d4833;
		Timers.foreClr = 0x00aaa599;
		Timers.backClr = 0x00000000;
		Timers.pattern = 1;

		CgpFont	fonts39[];
		String	labels39[];
		fonts39 = new CgpFont[1];
		labels39 = new String[1];

		labels39[0] = "Timers";
		fonts39[0] = F1;

		Timers.buzzer = true;

		Timers.switchFonts = fonts39;
		Timers.labels = labels39;

		Timers.labelClr = intArray0;
		Timers.label3DClr = intArray1;
		Timers.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Timers.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Timers.panelChange0 = 5;
		Timers.alwaysDrawBackground = false;

		Timers.init();
		SilenceAlarmsBtn = new Switch_0008(160, 180, 240, 220, panelContext, this);
		SilenceAlarmsBtn.frameClr = 0x005d4833;
		SilenceAlarmsBtn.foreClr = 0x00227fe6;
		SilenceAlarmsBtn.backClr = 0x00000000;
		SilenceAlarmsBtn.pattern = 1;

		CgpFont	fonts40[];
		String	labels40[];
		fonts40 = new CgpFont[1];
		labels40 = new String[1];

		labels40[0] = "Silence\nAlarms";
		fonts40[0] = F1;

		SilenceAlarmsBtn.buzzer = true;

		SilenceAlarmsBtn.switchFonts = fonts40;
		SilenceAlarmsBtn.labels = labels40;

		SilenceAlarmsBtn.labelClr = intArray0;
		SilenceAlarmsBtn.label3DClr = intArray1;
		SilenceAlarmsBtn.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		SilenceAlarmsBtn.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		SilenceAlarmsBtn.bit0 = TagDB.System_Vars.SilenceAlarms;
		SilenceAlarmsBtn.alwaysDrawBackground = false;

		SilenceAlarmsBtn.init();

		NumericDisplay01 = new CgpNumericDisplay(80, 60, 120, 80, panelContext, this);
		NumericDisplay01.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay01.variable = TagDB.Vars_Pump1.SetPoints.Vibration;
		NumericDisplay01.zeroSuppress = true;
		NumericDisplay01.zeroDisplay = true;
		NumericDisplay01.displayDigits = 3;
		NumericDisplay01.decimalPlaces = 0;
		NumericDisplay01.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay01.unitStrings = null;
		CgpFont	fonts107[][] = {
			{ textFont0 },
			};
		NumericDisplay01.fonts = fonts107;
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
		NumericDisplay01.minExpr   = 1000;
		NumericDisplay01.maxExpr   = 1001;
		NumericDisplay01.init();

		NumericDisplay02 = new CgpNumericDisplay(80, 80, 120, 100, panelContext, this);
		NumericDisplay02.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay02.variable = TagDB.Vars_Pump1.SetPoints.Motor_1_Temp;
		NumericDisplay02.zeroSuppress = true;
		NumericDisplay02.zeroDisplay = true;
		NumericDisplay02.displayDigits = 3;
		NumericDisplay02.decimalPlaces = 0;
		NumericDisplay02.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay02.unitStrings = null;
		NumericDisplay02.fonts = fonts107;
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
		NumericDisplay02.alwaysDrawBackground = true;
		NumericDisplay02.exprServer = exprServer;
		NumericDisplay02.useLocalMinMax  = true;
		NumericDisplay02.minExpr   = 1002;
		NumericDisplay02.maxExpr   = 1003;
		NumericDisplay02.init();

		NumericDisplay03 = new CgpNumericDisplay(80, 100, 120, 120, panelContext, this);
		NumericDisplay03.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay03.variable = TagDB.Vars_Pump1.SetPoints.Motor_2_Temp;
		NumericDisplay03.zeroSuppress = true;
		NumericDisplay03.zeroDisplay = true;
		NumericDisplay03.displayDigits = 3;
		NumericDisplay03.decimalPlaces = 0;
		NumericDisplay03.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay03.unitStrings = null;
		NumericDisplay03.fonts = fonts107;
		NumericDisplay03.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay03.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay03.enableInput = true;
		NumericDisplay03.displayPopupKeypad = true;
		NumericDisplay03.keypad = decKeypad;
		NumericDisplay03.beepOnTouch = false;
		NumericDisplay03.barcode = false;
		NumericDisplay03.frameColor = 0x00908c7f;
		NumericDisplay03.foreColor = 0x00aaa599;
		NumericDisplay03.textColor = 0x00ffffff;
		NumericDisplay03.text3DColor = 0x00000000;
		NumericDisplay03.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay03.changeColor = false;
		NumericDisplay03.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay03.drawObject = displayDraw0;
		NumericDisplay03.alwaysDrawBackground = true;
		NumericDisplay03.exprServer = exprServer;
		NumericDisplay03.useLocalMinMax  = true;
		NumericDisplay03.minExpr   = 1004;
		NumericDisplay03.maxExpr   = 1005;
		NumericDisplay03.init();

		NumericDisplay04 = new CgpNumericDisplay(80, 120, 120, 140, panelContext, this);
		NumericDisplay04.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay04.variable = TagDB.Vars_Pump1.SetPoints.Motor_3_Temp;
		NumericDisplay04.zeroSuppress = true;
		NumericDisplay04.zeroDisplay = true;
		NumericDisplay04.displayDigits = 3;
		NumericDisplay04.decimalPlaces = 0;
		NumericDisplay04.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay04.unitStrings = null;
		NumericDisplay04.fonts = fonts107;
		NumericDisplay04.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay04.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay04.enableInput = true;
		NumericDisplay04.displayPopupKeypad = true;
		NumericDisplay04.keypad = decKeypad;
		NumericDisplay04.beepOnTouch = false;
		NumericDisplay04.barcode = false;
		NumericDisplay04.frameColor = 0x00908c7f;
		NumericDisplay04.foreColor = 0x00aaa599;
		NumericDisplay04.textColor = 0x00ffffff;
		NumericDisplay04.text3DColor = 0x00000000;
		NumericDisplay04.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay04.changeColor = false;
		NumericDisplay04.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay04.drawObject = displayDraw0;
		NumericDisplay04.alwaysDrawBackground = true;
		NumericDisplay04.exprServer = exprServer;
		NumericDisplay04.useLocalMinMax  = true;
		NumericDisplay04.minExpr   = 1006;
		NumericDisplay04.maxExpr   = 1007;
		NumericDisplay04.init();

		NumericDisplay05 = new CgpNumericDisplay(80, 140, 120, 160, panelContext, this);
		NumericDisplay05.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay05.variable = TagDB.Vars_Pump1.SetPoints.Bottom_Bearing_Temp;
		NumericDisplay05.zeroSuppress = true;
		NumericDisplay05.zeroDisplay = true;
		NumericDisplay05.displayDigits = 3;
		NumericDisplay05.decimalPlaces = 0;
		NumericDisplay05.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay05.unitStrings = null;
		NumericDisplay05.fonts = fonts107;
		NumericDisplay05.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay05.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay05.enableInput = true;
		NumericDisplay05.displayPopupKeypad = true;
		NumericDisplay05.keypad = decKeypad;
		NumericDisplay05.beepOnTouch = false;
		NumericDisplay05.barcode = false;
		NumericDisplay05.frameColor = 0x00908c7f;
		NumericDisplay05.foreColor = 0x00aaa599;
		NumericDisplay05.textColor = 0x00ffffff;
		NumericDisplay05.text3DColor = 0x00000000;
		NumericDisplay05.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay05.changeColor = false;
		NumericDisplay05.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay05.drawObject = displayDraw0;
		NumericDisplay05.alwaysDrawBackground = true;
		NumericDisplay05.exprServer = exprServer;
		NumericDisplay05.useLocalMinMax  = true;
		NumericDisplay05.minExpr   = 1008;
		NumericDisplay05.maxExpr   = 1009;
		NumericDisplay05.init();

		CgpPolyLine Line01 = new CgpPolyLine
		(
			0,	// x1
			80,	// y1
			320,	// x2
			80,	// y2
			0x002a3bc3,	// borderFgColor
			0x003b4ce6,	// bg
			(byte)1,	// lineWidth
			CgpLinePattern.LINE_SOLID,
			CgpPolyLine.ARROW_NONE,	// LineEndStyle
			0,
			this
		);
		Switch04 = new Switch_0011(0, 220, 320, 240, panelContext, this);
		Switch04.frameClr = 0x006e726e;
		Switch04.foreClr = 0x003b4ce6;
		Switch04.backClr = 0x00000000;
		Switch04.pattern = 1;

		CgpFont	fonts112[];
		String	labels112[];
		fonts112 = new CgpFont[1];
		labels112 = new String[1];

		labels112[0] = "Log Out";
		fonts112[0] = F1;

		Switch04.buzzer = true;
		Switch04.visibID = 1010;

		Switch04.switchFonts = fonts112;
		Switch04.labels = labels112;

		Switch04.labelClr = intArray0;
		Switch04.label3DClr = intArray1;
		Switch04.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch04.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch04.bit0 = TagDB.Global_Process_Bits.logoutProcess;
		Switch04.exprServer = exprServer;
		Switch04.alwaysDrawBackground = false;

		Switch04.init();
		((CgpWindow)owner).drawBack();
		TagDB._Seconds.addEventListener(NumericDisplay01, 0, panelContext);
		TagDB.Vars_Pump1.SetPoints.Vibration.addEventListener(NumericDisplay01, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay02, 0, panelContext);
		TagDB.Vars_Pump1.SetPoints.Motor_1_Temp.addEventListener(NumericDisplay02, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay03, 0, panelContext);
		TagDB.Vars_Pump1.SetPoints.Motor_2_Temp.addEventListener(NumericDisplay03, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay04, 0, panelContext);
		TagDB.Vars_Pump1.SetPoints.Motor_3_Temp.addEventListener(NumericDisplay04, 0, panelContext);
		TagDB.Vars_Pump1.SetPoints.Bottom_Bearing_Temp.addEventListener(NumericDisplay05, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay05, 0, panelContext);
		TagDB._UserLevel.addEventListener(Switch04, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[12];
		zOrderList[0] = Switch01;
		zOrderList[1] = Switch02;
		zOrderList[2] = Timers;
		zOrderList[3] = SilenceAlarmsBtn;
		zOrderList[4] = NumericDisplay01;
		zOrderList[5] = NumericDisplay02;
		zOrderList[6] = NumericDisplay03;
		zOrderList[7] = NumericDisplay04;
		zOrderList[8] = NumericDisplay05;
		zOrderList[9] = Line01;
		zOrderList[10] = Switch04;
		zOrderList[11] = decKeypad;
		theZstack = zOrderList;

		IgpTouch touchList[] =
		{
			decKeypad,
			Switch04,
			NumericDisplay05,
			NumericDisplay04,
			NumericDisplay03,
			NumericDisplay02,
			NumericDisplay01,
			SilenceAlarmsBtn,
			Timers,
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
		tagListVector.add(TagDB.Vars_Pump1.SetPoints.Vibration);
		tagListVector.add(TagDB.Vars_Pump1.SetPoints.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump1.SetPoints.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump1.SetPoints.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump1.SetPoints.Bottom_Bearing_Temp);
		tagListVector.add(TagDB._UserLevel);
		tagListVector.add(TagDB.Global_Process_Bits.logoutProcess);

		super.registerTagList(tagListVector);
	}

	public void onClose()
	{
		super.onClose();
		decKeypad.shutdown();

		Switch04.shutdown();

		NumericDisplay05.shutdown();

		NumericDisplay04.shutdown();

		NumericDisplay03.shutdown();

		NumericDisplay02.shutdown();

		NumericDisplay01.shutdown();

		SilenceAlarmsBtn.shutdown();

		Timers.shutdown();

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
			"Setpoints",	// text
			40 + _dx,	// x
			0 + _dy,	// y
			240,	// width
			41,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
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
			39 + _dy,	// y
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
			39 + _dy,	// y
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
			39 + _dy,	// y
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
			39 + _dy,	// y
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
			39 + _dy,	// y
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
			39 + _dy,	// y
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
			39 + _dy,	// y
			41,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F1	// font type
		);
		// Text02
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
			F33	// font type
		);
		// Text03
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x087e6245),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Motor #1",	// text
			0 + _dx,	// x
			80 + _dy,	// y
			81,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F33	// font type
		);
		// Text04
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x087e6245),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Motor #2",	// text
			0 + _dx,	// x
			100 + _dy,	// y
			81,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F33	// font type
		);
		// Text05
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x087e6245),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Motor #3",	// text
			0 + _dx,	// x
			120 + _dy,	// y
			81,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F33	// font type
		);
		// Text06
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x087e6245),	// border color
			0x0011c3f4,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Bottom Bearing",	// text
			0 + _dx,	// x
			140 + _dy,	// y
			81,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F37	// font type
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
			"in / sec",	// text
			0 + _dx,	// x
			68 + _dy,	// y
			81,	// width
			13,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F43	// font type
		);
		// Text08
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Temperature F",	// text
			0 + _dx,	// x
			161 + _dy,	// y
			81,	// width
			11,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F43	// font type
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
		// GroupObject01_Rectangle01
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
		// GroupObject01_Rectangle06
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
		// GroupObject01_Rectangle11
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
		// GroupObject01_Rectangle16
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
		// GroupObject01_Rectangle21
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
		// GroupObject04_Rectangle01
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			80 + _dx,	// x
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
		// GroupObject04_Rectangle06
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
		// GroupObject04_Rectangle11
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
		// GroupObject04_Rectangle16
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
		// GroupObject04_Rectangle21
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
		// GroupObject05_Rectangle01
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			80 + _dx,	// x
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
		// GroupObject05_Rectangle06
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
		// GroupObject05_Rectangle11
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
		// GroupObject05_Rectangle16
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
		// GroupObject05_Rectangle21
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
		// GroupObject06_Rectangle01
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
		// GroupObject06_Rectangle06
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
		// GroupObject06_Rectangle11
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
		// GroupObject06_Rectangle16
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
		// GroupObject06_Rectangle21
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
		// GroupObject07_Rectangle01
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			80 + _dx,	// x
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
		// GroupObject07_Rectangle06
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
		// GroupObject07_Rectangle11
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
		// GroupObject07_Rectangle16
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
		// GroupObject07_Rectangle21
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
		// GroupObject08_Rectangle01
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
		// GroupObject08_Rectangle06
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
		// GroupObject08_Rectangle11
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
		// GroupObject08_Rectangle16
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
		// GroupObject08_Rectangle21
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
		// GroupObject09_Rectangle01
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
		// GroupObject09_Rectangle06
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
		// GroupObject09_Rectangle11
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
		// GroupObject09_Rectangle16
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
		// GroupObject09_Rectangle21
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
		// GroupObject10_Rectangle01
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
		// GroupObject10_Rectangle06
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
		// GroupObject10_Rectangle11
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
		// GroupObject10_Rectangle16
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
		// GroupObject10_Rectangle21
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
		// GroupObject11_Rectangle01
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
		// GroupObject11_Rectangle06
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
		// GroupObject11_Rectangle11
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
		// GroupObject11_Rectangle16
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
		// GroupObject11_Rectangle21
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
		NumericDisplay01.drawBackground(_g);

		return true;
	}
	public CgpMasterPanel getMasterPanel()
	{
		return masterPanel;
	}

}
