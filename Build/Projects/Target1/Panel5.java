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

	public Switch_0010 Switch03;
	public CgpNumericDisplay NumericDisplay01;
	public CgpNumericDisplay NumericDisplay02;
	public Switch_0011 Switch04;
	public Switch_0007 Switch01;
	public CgpNumericDisplay NumericDisplay03;
	public CgpNumericDisplay NumericDisplay04;
	public CgpNumericDisplay NumericDisplay05;
	public CgpNumericDisplay NumericDisplay06;
	public CgpNumericDisplay NumericDisplay07;
	public CgpNumericDisplay NumericDisplay08;
	public CgpNumericDisplay NumericDisplay09;
	public CgpNumericDisplay NumericDisplay10;
	public CgpNumericDisplay NumericDisplay11;
	public CgpNumericDisplay NumericDisplay12;
	public Switch_0012 SilenceAlarmsBtn;
	public Switch_0012 Switch02;
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

		int intArray0[] = {0x00ffffff, };
		Switch03.labelClr = intArray0;
		int intArray1[] = {0x00000000, };
		Switch03.label3DClr = intArray1;
		Switch03.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch03.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch03.scriptID0 = 1000;
		Switch03.exprServer = exprServer;
		Switch03.alwaysDrawBackground = false;

		Switch03.init();

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

		NumericDisplay03 = new CgpNumericDisplay(120, 60, 160, 80, panelContext, this);
		NumericDisplay03.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay03.variable = TagDB.Vars_Pump2.Timers.VibrationAlarmTimer;
		NumericDisplay03.zeroSuppress = true;
		NumericDisplay03.zeroDisplay = true;
		NumericDisplay03.displayDigits = 3;
		NumericDisplay03.decimalPlaces = 0;
		NumericDisplay03.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay03.unitStrings = null;
		NumericDisplay03.fonts = fonts69;
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
		NumericDisplay03.minExpr   = 1006;
		NumericDisplay03.maxExpr   = 1007;
		NumericDisplay03.init();

		NumericDisplay04 = new CgpNumericDisplay(120, 120, 160, 140, panelContext, this);
		NumericDisplay04.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay04.variable = TagDB.Vars_Pump2.Timers.PumpRtdAlarmTime;
		NumericDisplay04.zeroSuppress = true;
		NumericDisplay04.zeroDisplay = true;
		NumericDisplay04.displayDigits = 3;
		NumericDisplay04.decimalPlaces = 0;
		NumericDisplay04.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay04.unitStrings = null;
		NumericDisplay04.fonts = fonts69;
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
		NumericDisplay04.minExpr   = 1008;
		NumericDisplay04.maxExpr   = 1009;
		NumericDisplay04.init();

		NumericDisplay05 = new CgpNumericDisplay(160, 60, 200, 80, panelContext, this);
		NumericDisplay05.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay05.variable = TagDB.Vars_Pump3.Timers.VibrationAlarmTimer;
		NumericDisplay05.zeroSuppress = true;
		NumericDisplay05.zeroDisplay = true;
		NumericDisplay05.displayDigits = 3;
		NumericDisplay05.decimalPlaces = 0;
		NumericDisplay05.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay05.unitStrings = null;
		NumericDisplay05.fonts = fonts69;
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
		NumericDisplay05.minExpr   = 1010;
		NumericDisplay05.maxExpr   = 1011;
		NumericDisplay05.init();

		NumericDisplay06 = new CgpNumericDisplay(160, 120, 200, 140, panelContext, this);
		NumericDisplay06.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay06.variable = TagDB.Vars_Pump3.Timers.PumpRtdAlarmTime;
		NumericDisplay06.zeroSuppress = true;
		NumericDisplay06.zeroDisplay = true;
		NumericDisplay06.displayDigits = 3;
		NumericDisplay06.decimalPlaces = 0;
		NumericDisplay06.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay06.unitStrings = null;
		NumericDisplay06.fonts = fonts69;
		NumericDisplay06.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay06.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay06.enableInput = true;
		NumericDisplay06.displayPopupKeypad = true;
		NumericDisplay06.keypad = decKeypad;
		NumericDisplay06.beepOnTouch = false;
		NumericDisplay06.barcode = false;
		NumericDisplay06.frameColor = 0x00908c7f;
		NumericDisplay06.foreColor = 0x00aaa599;
		NumericDisplay06.textColor = 0x00ffffff;
		NumericDisplay06.text3DColor = 0x00000000;
		NumericDisplay06.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay06.changeColor = false;
		NumericDisplay06.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay06.drawObject = displayDraw0;
		NumericDisplay06.alwaysDrawBackground = true;
		NumericDisplay06.exprServer = exprServer;
		NumericDisplay06.useLocalMinMax  = true;
		NumericDisplay06.minExpr   = 1012;
		NumericDisplay06.maxExpr   = 1013;
		NumericDisplay06.init();

		NumericDisplay07 = new CgpNumericDisplay(200, 60, 240, 80, panelContext, this);
		NumericDisplay07.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay07.variable = TagDB.Vars_Pump4.Timers.VibrationAlarmTimer;
		NumericDisplay07.zeroSuppress = true;
		NumericDisplay07.zeroDisplay = true;
		NumericDisplay07.displayDigits = 3;
		NumericDisplay07.decimalPlaces = 0;
		NumericDisplay07.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay07.unitStrings = null;
		NumericDisplay07.fonts = fonts69;
		NumericDisplay07.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay07.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay07.enableInput = true;
		NumericDisplay07.displayPopupKeypad = true;
		NumericDisplay07.keypad = decKeypad;
		NumericDisplay07.beepOnTouch = false;
		NumericDisplay07.barcode = false;
		NumericDisplay07.frameColor = 0x00908c7f;
		NumericDisplay07.foreColor = 0x00aaa599;
		NumericDisplay07.textColor = 0x00ffffff;
		NumericDisplay07.text3DColor = 0x00000000;
		NumericDisplay07.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay07.changeColor = false;
		NumericDisplay07.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay07.drawObject = displayDraw0;
		NumericDisplay07.alwaysDrawBackground = true;
		NumericDisplay07.exprServer = exprServer;
		NumericDisplay07.useLocalMinMax  = true;
		NumericDisplay07.minExpr   = 1014;
		NumericDisplay07.maxExpr   = 1015;
		NumericDisplay07.init();

		NumericDisplay08 = new CgpNumericDisplay(200, 120, 240, 140, panelContext, this);
		NumericDisplay08.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay08.variable = TagDB.Vars_Pump4.Timers.PumpRtdAlarmTime;
		NumericDisplay08.zeroSuppress = true;
		NumericDisplay08.zeroDisplay = true;
		NumericDisplay08.displayDigits = 3;
		NumericDisplay08.decimalPlaces = 0;
		NumericDisplay08.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay08.unitStrings = null;
		NumericDisplay08.fonts = fonts69;
		NumericDisplay08.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay08.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay08.enableInput = true;
		NumericDisplay08.displayPopupKeypad = true;
		NumericDisplay08.keypad = decKeypad;
		NumericDisplay08.beepOnTouch = false;
		NumericDisplay08.barcode = false;
		NumericDisplay08.frameColor = 0x00908c7f;
		NumericDisplay08.foreColor = 0x00aaa599;
		NumericDisplay08.textColor = 0x00ffffff;
		NumericDisplay08.text3DColor = 0x00000000;
		NumericDisplay08.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay08.changeColor = false;
		NumericDisplay08.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay08.drawObject = displayDraw0;
		NumericDisplay08.alwaysDrawBackground = true;
		NumericDisplay08.exprServer = exprServer;
		NumericDisplay08.useLocalMinMax  = true;
		NumericDisplay08.minExpr   = 1016;
		NumericDisplay08.maxExpr   = 1017;
		NumericDisplay08.init();

		NumericDisplay09 = new CgpNumericDisplay(240, 60, 280, 80, panelContext, this);
		NumericDisplay09.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay09.variable = TagDB.Vars_Pump5.Timers.VibrationAlarmTimer;
		NumericDisplay09.zeroSuppress = true;
		NumericDisplay09.zeroDisplay = true;
		NumericDisplay09.displayDigits = 3;
		NumericDisplay09.decimalPlaces = 0;
		NumericDisplay09.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay09.unitStrings = null;
		NumericDisplay09.fonts = fonts69;
		NumericDisplay09.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay09.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay09.enableInput = true;
		NumericDisplay09.displayPopupKeypad = true;
		NumericDisplay09.keypad = decKeypad;
		NumericDisplay09.beepOnTouch = false;
		NumericDisplay09.barcode = false;
		NumericDisplay09.frameColor = 0x00908c7f;
		NumericDisplay09.foreColor = 0x00aaa599;
		NumericDisplay09.textColor = 0x00ffffff;
		NumericDisplay09.text3DColor = 0x00000000;
		NumericDisplay09.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay09.changeColor = false;
		NumericDisplay09.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay09.drawObject = displayDraw0;
		NumericDisplay09.alwaysDrawBackground = true;
		NumericDisplay09.exprServer = exprServer;
		NumericDisplay09.useLocalMinMax  = true;
		NumericDisplay09.minExpr   = 1018;
		NumericDisplay09.maxExpr   = 1019;
		NumericDisplay09.init();

		NumericDisplay10 = new CgpNumericDisplay(240, 120, 280, 140, panelContext, this);
		NumericDisplay10.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay10.variable = TagDB.Vars_Pump5.Timers.PumpRtdAlarmTime;
		NumericDisplay10.zeroSuppress = true;
		NumericDisplay10.zeroDisplay = true;
		NumericDisplay10.displayDigits = 3;
		NumericDisplay10.decimalPlaces = 0;
		NumericDisplay10.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay10.unitStrings = null;
		NumericDisplay10.fonts = fonts69;
		NumericDisplay10.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay10.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay10.enableInput = true;
		NumericDisplay10.displayPopupKeypad = true;
		NumericDisplay10.keypad = decKeypad;
		NumericDisplay10.beepOnTouch = false;
		NumericDisplay10.barcode = false;
		NumericDisplay10.frameColor = 0x00908c7f;
		NumericDisplay10.foreColor = 0x00aaa599;
		NumericDisplay10.textColor = 0x00ffffff;
		NumericDisplay10.text3DColor = 0x00000000;
		NumericDisplay10.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay10.changeColor = false;
		NumericDisplay10.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay10.drawObject = displayDraw0;
		NumericDisplay10.alwaysDrawBackground = true;
		NumericDisplay10.exprServer = exprServer;
		NumericDisplay10.useLocalMinMax  = true;
		NumericDisplay10.minExpr   = 1020;
		NumericDisplay10.maxExpr   = 1021;
		NumericDisplay10.init();

		NumericDisplay11 = new CgpNumericDisplay(280, 60, 320, 80, panelContext, this);
		NumericDisplay11.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay11.variable = TagDB.Vars_Pump6.Timers.VibrationAlarmTimer;
		NumericDisplay11.zeroSuppress = true;
		NumericDisplay11.zeroDisplay = true;
		NumericDisplay11.displayDigits = 3;
		NumericDisplay11.decimalPlaces = 0;
		NumericDisplay11.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay11.unitStrings = null;
		NumericDisplay11.fonts = fonts69;
		NumericDisplay11.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay11.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay11.enableInput = true;
		NumericDisplay11.displayPopupKeypad = true;
		NumericDisplay11.keypad = decKeypad;
		NumericDisplay11.beepOnTouch = false;
		NumericDisplay11.barcode = false;
		NumericDisplay11.frameColor = 0x00908c7f;
		NumericDisplay11.foreColor = 0x00aaa599;
		NumericDisplay11.textColor = 0x00ffffff;
		NumericDisplay11.text3DColor = 0x00000000;
		NumericDisplay11.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay11.changeColor = false;
		NumericDisplay11.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay11.drawObject = displayDraw0;
		NumericDisplay11.alwaysDrawBackground = true;
		NumericDisplay11.exprServer = exprServer;
		NumericDisplay11.useLocalMinMax  = true;
		NumericDisplay11.minExpr   = 1022;
		NumericDisplay11.maxExpr   = 1023;
		NumericDisplay11.init();

		NumericDisplay12 = new CgpNumericDisplay(280, 120, 320, 140, panelContext, this);
		NumericDisplay12.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay12.variable = TagDB.Vars_Pump6.Timers.PumpRtdAlarmTime;
		NumericDisplay12.zeroSuppress = true;
		NumericDisplay12.zeroDisplay = true;
		NumericDisplay12.displayDigits = 3;
		NumericDisplay12.decimalPlaces = 0;
		NumericDisplay12.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay12.unitStrings = null;
		NumericDisplay12.fonts = fonts69;
		NumericDisplay12.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay12.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay12.enableInput = true;
		NumericDisplay12.displayPopupKeypad = true;
		NumericDisplay12.keypad = decKeypad;
		NumericDisplay12.beepOnTouch = false;
		NumericDisplay12.barcode = false;
		NumericDisplay12.frameColor = 0x00908c7f;
		NumericDisplay12.foreColor = 0x00aaa599;
		NumericDisplay12.textColor = 0x00ffffff;
		NumericDisplay12.text3DColor = 0x00000000;
		NumericDisplay12.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay12.changeColor = false;
		NumericDisplay12.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay12.drawObject = displayDraw0;
		NumericDisplay12.alwaysDrawBackground = true;
		NumericDisplay12.exprServer = exprServer;
		NumericDisplay12.useLocalMinMax  = true;
		NumericDisplay12.minExpr   = 1024;
		NumericDisplay12.maxExpr   = 1025;
		NumericDisplay12.init();
		SilenceAlarmsBtn = new Switch_0012(160, 180, 240, 220, panelContext, this);
		SilenceAlarmsBtn.frameClr = 0x005d4833;
		SilenceAlarmsBtn.foreClr = 0x00227fe6;
		SilenceAlarmsBtn.backClr = 0x00000000;
		SilenceAlarmsBtn.pattern = 1;

		CgpFont	fonts84[];
		String	labels84[];
		fonts84 = new CgpFont[1];
		labels84 = new String[1];

		labels84[0] = "Silence\nAlarms";
		fonts84[0] = F15;

		SilenceAlarmsBtn.buzzer = true;

		SilenceAlarmsBtn.switchFonts = fonts84;
		SilenceAlarmsBtn.labels = labels84;

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
		SilenceAlarmsBtn.exprServer = exprServer;
		SilenceAlarmsBtn.alwaysDrawBackground = false;

		SilenceAlarmsBtn.init();
		Switch02 = new Switch_0012(80, 180, 160, 220, panelContext, this);
		Switch02.frameClr = 0x005d4833;
		Switch02.foreClr = 0x006ecc2a;
		Switch02.backClr = 0x00000000;
		Switch02.pattern = 1;

		CgpFont	fonts86[];
		String	labels86[];
		fonts86 = new CgpFont[1];
		labels86 = new String[1];

		labels86[0] = "Reset\nAll";
		fonts86[0] = F15;

		Switch02.buzzer = true;

		Switch02.switchFonts = fonts86;
		Switch02.labels = labels86;

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
		Switch02.exprServer = exprServer;
		Switch02.alwaysDrawBackground = false;

		Switch02.init();
		((CgpWindow)owner).drawBack();
		TagDB._UserLevel.addEventListener(Switch03, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay01, 0, panelContext);
		TagDB.Vars_Pump1.Timers.VibrationAlarmTimer.addEventListener(NumericDisplay01, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay02, 0, panelContext);
		TagDB.Vars_Pump1.Timers.PumpRtdAlarmTime.addEventListener(NumericDisplay02, 0, panelContext);
		TagDB._UserLevel.addEventListener(Switch04, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay03, 0, panelContext);
		TagDB.Vars_Pump2.Timers.VibrationAlarmTimer.addEventListener(NumericDisplay03, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay04, 0, panelContext);
		TagDB.Vars_Pump2.Timers.PumpRtdAlarmTime.addEventListener(NumericDisplay04, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay05, 0, panelContext);
		TagDB.Vars_Pump3.Timers.VibrationAlarmTimer.addEventListener(NumericDisplay05, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay06, 0, panelContext);
		TagDB.Vars_Pump3.Timers.PumpRtdAlarmTime.addEventListener(NumericDisplay06, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay07, 0, panelContext);
		TagDB.Vars_Pump4.Timers.VibrationAlarmTimer.addEventListener(NumericDisplay07, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay08, 0, panelContext);
		TagDB.Vars_Pump4.Timers.PumpRtdAlarmTime.addEventListener(NumericDisplay08, 0, panelContext);
		TagDB.Vars_Pump5.Timers.VibrationAlarmTimer.addEventListener(NumericDisplay09, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay09, 0, panelContext);
		TagDB.Vars_Pump5.Timers.PumpRtdAlarmTime.addEventListener(NumericDisplay10, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay10, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay11, 0, panelContext);
		TagDB.Vars_Pump6.Timers.VibrationAlarmTimer.addEventListener(NumericDisplay11, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay12, 0, panelContext);
		TagDB.Vars_Pump6.Timers.PumpRtdAlarmTime.addEventListener(NumericDisplay12, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[18];
		zOrderList[0] = Switch03;
		zOrderList[1] = NumericDisplay01;
		zOrderList[2] = NumericDisplay02;
		zOrderList[3] = Switch04;
		zOrderList[4] = Switch01;
		zOrderList[5] = NumericDisplay03;
		zOrderList[6] = NumericDisplay04;
		zOrderList[7] = NumericDisplay05;
		zOrderList[8] = NumericDisplay06;
		zOrderList[9] = NumericDisplay07;
		zOrderList[10] = NumericDisplay08;
		zOrderList[11] = NumericDisplay09;
		zOrderList[12] = NumericDisplay10;
		zOrderList[13] = NumericDisplay11;
		zOrderList[14] = NumericDisplay12;
		zOrderList[15] = SilenceAlarmsBtn;
		zOrderList[16] = Switch02;
		zOrderList[17] = decKeypad;
		theZstack = zOrderList;

		IgpTouch touchList[] =
		{
			decKeypad,
			Switch02,
			SilenceAlarmsBtn,
			NumericDisplay12,
			NumericDisplay11,
			NumericDisplay10,
			NumericDisplay09,
			NumericDisplay08,
			NumericDisplay07,
			NumericDisplay06,
			NumericDisplay05,
			NumericDisplay04,
			NumericDisplay03,
			Switch01,
			Switch04,
			NumericDisplay02,
			NumericDisplay01,
			Switch03,
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
		tagListVector.add(TagDB.Vars_Pump2.Timers.VibrationAlarmTimer);
		tagListVector.add(TagDB.Vars_Pump2.Timers.PumpRtdAlarmTime);
		tagListVector.add(TagDB.Vars_Pump3.Timers.VibrationAlarmTimer);
		tagListVector.add(TagDB.Vars_Pump3.Timers.PumpRtdAlarmTime);
		tagListVector.add(TagDB.Vars_Pump4.Timers.VibrationAlarmTimer);
		tagListVector.add(TagDB.Vars_Pump4.Timers.PumpRtdAlarmTime);
		tagListVector.add(TagDB.Vars_Pump5.Timers.VibrationAlarmTimer);
		tagListVector.add(TagDB.Vars_Pump5.Timers.PumpRtdAlarmTime);
		tagListVector.add(TagDB.Vars_Pump6.Timers.VibrationAlarmTimer);
		tagListVector.add(TagDB.Vars_Pump6.Timers.PumpRtdAlarmTime);
		tagListVector.add(TagDB._UserLevel);
		tagListVector.add(TagDB.Global_Process_Bits.logoutProcess);

		super.registerTagList(tagListVector);
	}

	public void onClose()
	{
		super.onClose();
		decKeypad.shutdown();

		Switch02.shutdown();

		SilenceAlarmsBtn.shutdown();

		NumericDisplay12.shutdown();

		NumericDisplay11.shutdown();

		NumericDisplay10.shutdown();

		NumericDisplay09.shutdown();

		NumericDisplay08.shutdown();

		NumericDisplay07.shutdown();

		NumericDisplay06.shutdown();

		NumericDisplay05.shutdown();

		NumericDisplay04.shutdown();

		NumericDisplay03.shutdown();

		Switch01.shutdown();

		Switch04.shutdown();

		NumericDisplay02.shutdown();

		NumericDisplay01.shutdown();

		Switch03.shutdown();
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
