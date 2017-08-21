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
	public Switch_0007 Timers;
	public CgpNumericDisplay NumericDisplay01;
	public CgpNumericDisplay NumericDisplay02;
	public CgpNumericDisplay NumericDisplay03;
	public CgpNumericDisplay NumericDisplay04;
	public CgpNumericDisplay NumericDisplay05;
	public Switch_0011 Switch04;
	public CgpNumericDisplay NumericDisplay06;
	public CgpNumericDisplay NumericDisplay07;
	public CgpNumericDisplay NumericDisplay08;
	public CgpNumericDisplay NumericDisplay09;
	public CgpNumericDisplay NumericDisplay10;
	public CgpNumericDisplay NumericDisplay11;
	public CgpNumericDisplay NumericDisplay12;
	public CgpNumericDisplay NumericDisplay13;
	public CgpNumericDisplay NumericDisplay14;
	public CgpNumericDisplay NumericDisplay15;
	public CgpNumericDisplay NumericDisplay16;
	public CgpNumericDisplay NumericDisplay17;
	public CgpNumericDisplay NumericDisplay18;
	public CgpNumericDisplay NumericDisplay19;
	public CgpNumericDisplay NumericDisplay20;
	public CgpNumericDisplay NumericDisplay21;
	public CgpNumericDisplay NumericDisplay22;
	public CgpNumericDisplay NumericDisplay23;
	public CgpNumericDisplay NumericDisplay24;
	public CgpNumericDisplay NumericDisplay25;
	public CgpNumericDisplay NumericDisplay26;
	public CgpNumericDisplay NumericDisplay27;
	public CgpNumericDisplay NumericDisplay28;
	public CgpNumericDisplay NumericDisplay29;
	public CgpNumericDisplay NumericDisplay30;
	public Switch_0012 SilenceAlarmsBtn;
	public Switch_0012 Switch02;
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

		NumericDisplay06 = new CgpNumericDisplay(120, 60, 160, 80, panelContext, this);
		NumericDisplay06.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay06.variable = TagDB.Vars_Pump2.SetPoints.Vibration;
		NumericDisplay06.zeroSuppress = true;
		NumericDisplay06.zeroDisplay = true;
		NumericDisplay06.displayDigits = 3;
		NumericDisplay06.decimalPlaces = 0;
		NumericDisplay06.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay06.unitStrings = null;
		NumericDisplay06.fonts = fonts107;
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
		NumericDisplay06.minExpr   = 1011;
		NumericDisplay06.maxExpr   = 1012;
		NumericDisplay06.init();

		NumericDisplay07 = new CgpNumericDisplay(120, 80, 160, 100, panelContext, this);
		NumericDisplay07.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay07.variable = TagDB.Vars_Pump2.SetPoints.Motor_1_Temp;
		NumericDisplay07.zeroSuppress = true;
		NumericDisplay07.zeroDisplay = true;
		NumericDisplay07.displayDigits = 3;
		NumericDisplay07.decimalPlaces = 0;
		NumericDisplay07.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay07.unitStrings = null;
		NumericDisplay07.fonts = fonts107;
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
		NumericDisplay07.minExpr   = 1013;
		NumericDisplay07.maxExpr   = 1014;
		NumericDisplay07.init();

		NumericDisplay08 = new CgpNumericDisplay(120, 100, 160, 120, panelContext, this);
		NumericDisplay08.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay08.variable = TagDB.Vars_Pump2.SetPoints.Motor_2_Temp;
		NumericDisplay08.zeroSuppress = true;
		NumericDisplay08.zeroDisplay = true;
		NumericDisplay08.displayDigits = 3;
		NumericDisplay08.decimalPlaces = 0;
		NumericDisplay08.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay08.unitStrings = null;
		NumericDisplay08.fonts = fonts107;
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
		NumericDisplay08.minExpr   = 1015;
		NumericDisplay08.maxExpr   = 1016;
		NumericDisplay08.init();

		NumericDisplay09 = new CgpNumericDisplay(120, 120, 160, 140, panelContext, this);
		NumericDisplay09.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay09.variable = TagDB.Vars_Pump2.SetPoints.Motor_3_Temp;
		NumericDisplay09.zeroSuppress = true;
		NumericDisplay09.zeroDisplay = true;
		NumericDisplay09.displayDigits = 3;
		NumericDisplay09.decimalPlaces = 0;
		NumericDisplay09.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay09.unitStrings = null;
		NumericDisplay09.fonts = fonts107;
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
		NumericDisplay09.minExpr   = 1017;
		NumericDisplay09.maxExpr   = 1018;
		NumericDisplay09.init();

		NumericDisplay10 = new CgpNumericDisplay(120, 140, 160, 160, panelContext, this);
		NumericDisplay10.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay10.variable = TagDB.Vars_Pump2.SetPoints.Bottom_Bearing_Temp;
		NumericDisplay10.zeroSuppress = true;
		NumericDisplay10.zeroDisplay = true;
		NumericDisplay10.displayDigits = 3;
		NumericDisplay10.decimalPlaces = 0;
		NumericDisplay10.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay10.unitStrings = null;
		NumericDisplay10.fonts = fonts107;
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
		NumericDisplay10.minExpr   = 1019;
		NumericDisplay10.maxExpr   = 1020;
		NumericDisplay10.init();

		NumericDisplay11 = new CgpNumericDisplay(160, 60, 200, 80, panelContext, this);
		NumericDisplay11.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay11.variable = TagDB.Vars_Pump3.SetPoints.Vibration;
		NumericDisplay11.zeroSuppress = true;
		NumericDisplay11.zeroDisplay = true;
		NumericDisplay11.displayDigits = 3;
		NumericDisplay11.decimalPlaces = 0;
		NumericDisplay11.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay11.unitStrings = null;
		NumericDisplay11.fonts = fonts107;
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
		NumericDisplay11.minExpr   = 1021;
		NumericDisplay11.maxExpr   = 1022;
		NumericDisplay11.init();

		NumericDisplay12 = new CgpNumericDisplay(160, 80, 200, 100, panelContext, this);
		NumericDisplay12.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay12.variable = TagDB.Vars_Pump3.SetPoints.Motor_1_Temp;
		NumericDisplay12.zeroSuppress = true;
		NumericDisplay12.zeroDisplay = true;
		NumericDisplay12.displayDigits = 3;
		NumericDisplay12.decimalPlaces = 0;
		NumericDisplay12.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay12.unitStrings = null;
		NumericDisplay12.fonts = fonts107;
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
		NumericDisplay12.minExpr   = 1023;
		NumericDisplay12.maxExpr   = 1024;
		NumericDisplay12.init();

		NumericDisplay13 = new CgpNumericDisplay(160, 100, 200, 120, panelContext, this);
		NumericDisplay13.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay13.variable = TagDB.Vars_Pump3.SetPoints.Motor_2_Temp;
		NumericDisplay13.zeroSuppress = true;
		NumericDisplay13.zeroDisplay = true;
		NumericDisplay13.displayDigits = 3;
		NumericDisplay13.decimalPlaces = 0;
		NumericDisplay13.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay13.unitStrings = null;
		NumericDisplay13.fonts = fonts107;
		NumericDisplay13.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay13.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay13.enableInput = true;
		NumericDisplay13.displayPopupKeypad = true;
		NumericDisplay13.keypad = decKeypad;
		NumericDisplay13.beepOnTouch = false;
		NumericDisplay13.barcode = false;
		NumericDisplay13.frameColor = 0x00908c7f;
		NumericDisplay13.foreColor = 0x00aaa599;
		NumericDisplay13.textColor = 0x00ffffff;
		NumericDisplay13.text3DColor = 0x00000000;
		NumericDisplay13.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay13.changeColor = false;
		NumericDisplay13.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay13.drawObject = displayDraw0;
		NumericDisplay13.alwaysDrawBackground = true;
		NumericDisplay13.exprServer = exprServer;
		NumericDisplay13.useLocalMinMax  = true;
		NumericDisplay13.minExpr   = 1025;
		NumericDisplay13.maxExpr   = 1026;
		NumericDisplay13.init();

		NumericDisplay14 = new CgpNumericDisplay(160, 120, 200, 140, panelContext, this);
		NumericDisplay14.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay14.variable = TagDB.Vars_Pump3.SetPoints.Motor_3_Temp;
		NumericDisplay14.zeroSuppress = true;
		NumericDisplay14.zeroDisplay = true;
		NumericDisplay14.displayDigits = 3;
		NumericDisplay14.decimalPlaces = 0;
		NumericDisplay14.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay14.unitStrings = null;
		NumericDisplay14.fonts = fonts107;
		NumericDisplay14.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay14.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay14.enableInput = true;
		NumericDisplay14.displayPopupKeypad = true;
		NumericDisplay14.keypad = decKeypad;
		NumericDisplay14.beepOnTouch = false;
		NumericDisplay14.barcode = false;
		NumericDisplay14.frameColor = 0x00908c7f;
		NumericDisplay14.foreColor = 0x00aaa599;
		NumericDisplay14.textColor = 0x00ffffff;
		NumericDisplay14.text3DColor = 0x00000000;
		NumericDisplay14.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay14.changeColor = false;
		NumericDisplay14.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay14.drawObject = displayDraw0;
		NumericDisplay14.alwaysDrawBackground = true;
		NumericDisplay14.exprServer = exprServer;
		NumericDisplay14.useLocalMinMax  = true;
		NumericDisplay14.minExpr   = 1027;
		NumericDisplay14.maxExpr   = 1028;
		NumericDisplay14.init();

		NumericDisplay15 = new CgpNumericDisplay(160, 140, 200, 160, panelContext, this);
		NumericDisplay15.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay15.variable = TagDB.Vars_Pump3.SetPoints.Bottom_Bearing_Temp;
		NumericDisplay15.zeroSuppress = true;
		NumericDisplay15.zeroDisplay = true;
		NumericDisplay15.displayDigits = 3;
		NumericDisplay15.decimalPlaces = 0;
		NumericDisplay15.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay15.unitStrings = null;
		NumericDisplay15.fonts = fonts107;
		NumericDisplay15.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay15.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay15.enableInput = true;
		NumericDisplay15.displayPopupKeypad = true;
		NumericDisplay15.keypad = decKeypad;
		NumericDisplay15.beepOnTouch = false;
		NumericDisplay15.barcode = false;
		NumericDisplay15.frameColor = 0x00908c7f;
		NumericDisplay15.foreColor = 0x00aaa599;
		NumericDisplay15.textColor = 0x00ffffff;
		NumericDisplay15.text3DColor = 0x00000000;
		NumericDisplay15.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay15.changeColor = false;
		NumericDisplay15.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay15.drawObject = displayDraw0;
		NumericDisplay15.alwaysDrawBackground = true;
		NumericDisplay15.exprServer = exprServer;
		NumericDisplay15.useLocalMinMax  = true;
		NumericDisplay15.minExpr   = 1029;
		NumericDisplay15.maxExpr   = 1030;
		NumericDisplay15.init();

		NumericDisplay16 = new CgpNumericDisplay(200, 60, 240, 80, panelContext, this);
		NumericDisplay16.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay16.variable = TagDB.Vars_Pump4.SetPoints.Vibration;
		NumericDisplay16.zeroSuppress = true;
		NumericDisplay16.zeroDisplay = true;
		NumericDisplay16.displayDigits = 3;
		NumericDisplay16.decimalPlaces = 0;
		NumericDisplay16.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay16.unitStrings = null;
		NumericDisplay16.fonts = fonts107;
		NumericDisplay16.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay16.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay16.enableInput = true;
		NumericDisplay16.displayPopupKeypad = true;
		NumericDisplay16.keypad = decKeypad;
		NumericDisplay16.beepOnTouch = false;
		NumericDisplay16.barcode = false;
		NumericDisplay16.frameColor = 0x00908c7f;
		NumericDisplay16.foreColor = 0x00aaa599;
		NumericDisplay16.textColor = 0x00ffffff;
		NumericDisplay16.text3DColor = 0x00000000;
		NumericDisplay16.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay16.changeColor = false;
		NumericDisplay16.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay16.drawObject = displayDraw0;
		NumericDisplay16.alwaysDrawBackground = true;
		NumericDisplay16.exprServer = exprServer;
		NumericDisplay16.useLocalMinMax  = true;
		NumericDisplay16.minExpr   = 1031;
		NumericDisplay16.maxExpr   = 1032;
		NumericDisplay16.init();

		NumericDisplay17 = new CgpNumericDisplay(200, 80, 240, 100, panelContext, this);
		NumericDisplay17.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay17.variable = TagDB.Vars_Pump4.SetPoints.Motor_1_Temp;
		NumericDisplay17.zeroSuppress = true;
		NumericDisplay17.zeroDisplay = true;
		NumericDisplay17.displayDigits = 3;
		NumericDisplay17.decimalPlaces = 0;
		NumericDisplay17.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay17.unitStrings = null;
		NumericDisplay17.fonts = fonts107;
		NumericDisplay17.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay17.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay17.enableInput = true;
		NumericDisplay17.displayPopupKeypad = true;
		NumericDisplay17.keypad = decKeypad;
		NumericDisplay17.beepOnTouch = false;
		NumericDisplay17.barcode = false;
		NumericDisplay17.frameColor = 0x00908c7f;
		NumericDisplay17.foreColor = 0x00aaa599;
		NumericDisplay17.textColor = 0x00ffffff;
		NumericDisplay17.text3DColor = 0x00000000;
		NumericDisplay17.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay17.changeColor = false;
		NumericDisplay17.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay17.drawObject = displayDraw0;
		NumericDisplay17.alwaysDrawBackground = true;
		NumericDisplay17.exprServer = exprServer;
		NumericDisplay17.useLocalMinMax  = true;
		NumericDisplay17.minExpr   = 1033;
		NumericDisplay17.maxExpr   = 1034;
		NumericDisplay17.init();

		NumericDisplay18 = new CgpNumericDisplay(200, 100, 240, 120, panelContext, this);
		NumericDisplay18.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay18.variable = TagDB.Vars_Pump4.SetPoints.Motor_2_Temp;
		NumericDisplay18.zeroSuppress = true;
		NumericDisplay18.zeroDisplay = true;
		NumericDisplay18.displayDigits = 3;
		NumericDisplay18.decimalPlaces = 0;
		NumericDisplay18.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay18.unitStrings = null;
		NumericDisplay18.fonts = fonts107;
		NumericDisplay18.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay18.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay18.enableInput = true;
		NumericDisplay18.displayPopupKeypad = true;
		NumericDisplay18.keypad = decKeypad;
		NumericDisplay18.beepOnTouch = false;
		NumericDisplay18.barcode = false;
		NumericDisplay18.frameColor = 0x00908c7f;
		NumericDisplay18.foreColor = 0x00aaa599;
		NumericDisplay18.textColor = 0x00ffffff;
		NumericDisplay18.text3DColor = 0x00000000;
		NumericDisplay18.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay18.changeColor = false;
		NumericDisplay18.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay18.drawObject = displayDraw0;
		NumericDisplay18.alwaysDrawBackground = true;
		NumericDisplay18.exprServer = exprServer;
		NumericDisplay18.useLocalMinMax  = true;
		NumericDisplay18.minExpr   = 1035;
		NumericDisplay18.maxExpr   = 1036;
		NumericDisplay18.init();

		NumericDisplay19 = new CgpNumericDisplay(200, 120, 240, 140, panelContext, this);
		NumericDisplay19.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay19.variable = TagDB.Vars_Pump4.SetPoints.Motor_3_Temp;
		NumericDisplay19.zeroSuppress = true;
		NumericDisplay19.zeroDisplay = true;
		NumericDisplay19.displayDigits = 3;
		NumericDisplay19.decimalPlaces = 0;
		NumericDisplay19.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay19.unitStrings = null;
		NumericDisplay19.fonts = fonts107;
		NumericDisplay19.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay19.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay19.enableInput = true;
		NumericDisplay19.displayPopupKeypad = true;
		NumericDisplay19.keypad = decKeypad;
		NumericDisplay19.beepOnTouch = false;
		NumericDisplay19.barcode = false;
		NumericDisplay19.frameColor = 0x00908c7f;
		NumericDisplay19.foreColor = 0x00aaa599;
		NumericDisplay19.textColor = 0x00ffffff;
		NumericDisplay19.text3DColor = 0x00000000;
		NumericDisplay19.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay19.changeColor = false;
		NumericDisplay19.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay19.drawObject = displayDraw0;
		NumericDisplay19.alwaysDrawBackground = true;
		NumericDisplay19.exprServer = exprServer;
		NumericDisplay19.useLocalMinMax  = true;
		NumericDisplay19.minExpr   = 1037;
		NumericDisplay19.maxExpr   = 1038;
		NumericDisplay19.init();

		NumericDisplay20 = new CgpNumericDisplay(200, 140, 240, 160, panelContext, this);
		NumericDisplay20.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay20.variable = TagDB.Vars_Pump4.SetPoints.Bottom_Bearing_Temp;
		NumericDisplay20.zeroSuppress = true;
		NumericDisplay20.zeroDisplay = true;
		NumericDisplay20.displayDigits = 3;
		NumericDisplay20.decimalPlaces = 0;
		NumericDisplay20.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay20.unitStrings = null;
		NumericDisplay20.fonts = fonts107;
		NumericDisplay20.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay20.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay20.enableInput = true;
		NumericDisplay20.displayPopupKeypad = true;
		NumericDisplay20.keypad = decKeypad;
		NumericDisplay20.beepOnTouch = false;
		NumericDisplay20.barcode = false;
		NumericDisplay20.frameColor = 0x00908c7f;
		NumericDisplay20.foreColor = 0x00aaa599;
		NumericDisplay20.textColor = 0x00ffffff;
		NumericDisplay20.text3DColor = 0x00000000;
		NumericDisplay20.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay20.changeColor = false;
		NumericDisplay20.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay20.drawObject = displayDraw0;
		NumericDisplay20.alwaysDrawBackground = true;
		NumericDisplay20.exprServer = exprServer;
		NumericDisplay20.useLocalMinMax  = true;
		NumericDisplay20.minExpr   = 1039;
		NumericDisplay20.maxExpr   = 1040;
		NumericDisplay20.init();

		NumericDisplay21 = new CgpNumericDisplay(240, 60, 280, 80, panelContext, this);
		NumericDisplay21.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay21.variable = TagDB.Vars_Pump5.SetPoints.Vibration;
		NumericDisplay21.zeroSuppress = true;
		NumericDisplay21.zeroDisplay = true;
		NumericDisplay21.displayDigits = 3;
		NumericDisplay21.decimalPlaces = 0;
		NumericDisplay21.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay21.unitStrings = null;
		NumericDisplay21.fonts = fonts107;
		NumericDisplay21.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay21.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay21.enableInput = true;
		NumericDisplay21.displayPopupKeypad = true;
		NumericDisplay21.keypad = decKeypad;
		NumericDisplay21.beepOnTouch = false;
		NumericDisplay21.barcode = false;
		NumericDisplay21.frameColor = 0x00908c7f;
		NumericDisplay21.foreColor = 0x00aaa599;
		NumericDisplay21.textColor = 0x00ffffff;
		NumericDisplay21.text3DColor = 0x00000000;
		NumericDisplay21.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay21.changeColor = false;
		NumericDisplay21.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay21.drawObject = displayDraw0;
		NumericDisplay21.alwaysDrawBackground = true;
		NumericDisplay21.exprServer = exprServer;
		NumericDisplay21.useLocalMinMax  = true;
		NumericDisplay21.minExpr   = 1041;
		NumericDisplay21.maxExpr   = 1042;
		NumericDisplay21.init();

		NumericDisplay22 = new CgpNumericDisplay(240, 80, 280, 100, panelContext, this);
		NumericDisplay22.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay22.variable = TagDB.Vars_Pump5.SetPoints.Motor_1_Temp;
		NumericDisplay22.zeroSuppress = true;
		NumericDisplay22.zeroDisplay = true;
		NumericDisplay22.displayDigits = 3;
		NumericDisplay22.decimalPlaces = 0;
		NumericDisplay22.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay22.unitStrings = null;
		NumericDisplay22.fonts = fonts107;
		NumericDisplay22.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay22.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay22.enableInput = true;
		NumericDisplay22.displayPopupKeypad = true;
		NumericDisplay22.keypad = decKeypad;
		NumericDisplay22.beepOnTouch = false;
		NumericDisplay22.barcode = false;
		NumericDisplay22.frameColor = 0x00908c7f;
		NumericDisplay22.foreColor = 0x00aaa599;
		NumericDisplay22.textColor = 0x00ffffff;
		NumericDisplay22.text3DColor = 0x00000000;
		NumericDisplay22.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay22.changeColor = false;
		NumericDisplay22.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay22.drawObject = displayDraw0;
		NumericDisplay22.alwaysDrawBackground = true;
		NumericDisplay22.exprServer = exprServer;
		NumericDisplay22.useLocalMinMax  = true;
		NumericDisplay22.minExpr   = 1043;
		NumericDisplay22.maxExpr   = 1044;
		NumericDisplay22.init();

		NumericDisplay23 = new CgpNumericDisplay(240, 100, 280, 120, panelContext, this);
		NumericDisplay23.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay23.variable = TagDB.Vars_Pump5.SetPoints.Motor_2_Temp;
		NumericDisplay23.zeroSuppress = true;
		NumericDisplay23.zeroDisplay = true;
		NumericDisplay23.displayDigits = 3;
		NumericDisplay23.decimalPlaces = 0;
		NumericDisplay23.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay23.unitStrings = null;
		NumericDisplay23.fonts = fonts107;
		NumericDisplay23.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay23.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay23.enableInput = true;
		NumericDisplay23.displayPopupKeypad = true;
		NumericDisplay23.keypad = decKeypad;
		NumericDisplay23.beepOnTouch = false;
		NumericDisplay23.barcode = false;
		NumericDisplay23.frameColor = 0x00908c7f;
		NumericDisplay23.foreColor = 0x00aaa599;
		NumericDisplay23.textColor = 0x00ffffff;
		NumericDisplay23.text3DColor = 0x00000000;
		NumericDisplay23.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay23.changeColor = false;
		NumericDisplay23.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay23.drawObject = displayDraw0;
		NumericDisplay23.alwaysDrawBackground = true;
		NumericDisplay23.exprServer = exprServer;
		NumericDisplay23.useLocalMinMax  = true;
		NumericDisplay23.minExpr   = 1045;
		NumericDisplay23.maxExpr   = 1046;
		NumericDisplay23.init();

		NumericDisplay24 = new CgpNumericDisplay(240, 120, 280, 140, panelContext, this);
		NumericDisplay24.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay24.variable = TagDB.Vars_Pump5.SetPoints.Motor_3_Temp;
		NumericDisplay24.zeroSuppress = true;
		NumericDisplay24.zeroDisplay = true;
		NumericDisplay24.displayDigits = 3;
		NumericDisplay24.decimalPlaces = 0;
		NumericDisplay24.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay24.unitStrings = null;
		NumericDisplay24.fonts = fonts107;
		NumericDisplay24.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay24.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay24.enableInput = true;
		NumericDisplay24.displayPopupKeypad = true;
		NumericDisplay24.keypad = decKeypad;
		NumericDisplay24.beepOnTouch = false;
		NumericDisplay24.barcode = false;
		NumericDisplay24.frameColor = 0x00908c7f;
		NumericDisplay24.foreColor = 0x00aaa599;
		NumericDisplay24.textColor = 0x00ffffff;
		NumericDisplay24.text3DColor = 0x00000000;
		NumericDisplay24.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay24.changeColor = false;
		NumericDisplay24.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay24.drawObject = displayDraw0;
		NumericDisplay24.alwaysDrawBackground = true;
		NumericDisplay24.exprServer = exprServer;
		NumericDisplay24.useLocalMinMax  = true;
		NumericDisplay24.minExpr   = 1047;
		NumericDisplay24.maxExpr   = 1048;
		NumericDisplay24.init();

		NumericDisplay25 = new CgpNumericDisplay(240, 140, 280, 160, panelContext, this);
		NumericDisplay25.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay25.variable = TagDB.Vars_Pump5.SetPoints.Bottom_Bearing_Temp;
		NumericDisplay25.zeroSuppress = true;
		NumericDisplay25.zeroDisplay = true;
		NumericDisplay25.displayDigits = 3;
		NumericDisplay25.decimalPlaces = 0;
		NumericDisplay25.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay25.unitStrings = null;
		NumericDisplay25.fonts = fonts107;
		NumericDisplay25.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay25.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay25.enableInput = true;
		NumericDisplay25.displayPopupKeypad = true;
		NumericDisplay25.keypad = decKeypad;
		NumericDisplay25.beepOnTouch = false;
		NumericDisplay25.barcode = false;
		NumericDisplay25.frameColor = 0x00908c7f;
		NumericDisplay25.foreColor = 0x00aaa599;
		NumericDisplay25.textColor = 0x00ffffff;
		NumericDisplay25.text3DColor = 0x00000000;
		NumericDisplay25.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay25.changeColor = false;
		NumericDisplay25.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay25.drawObject = displayDraw0;
		NumericDisplay25.alwaysDrawBackground = true;
		NumericDisplay25.exprServer = exprServer;
		NumericDisplay25.useLocalMinMax  = true;
		NumericDisplay25.minExpr   = 1049;
		NumericDisplay25.maxExpr   = 1050;
		NumericDisplay25.init();

		NumericDisplay26 = new CgpNumericDisplay(280, 60, 320, 80, panelContext, this);
		NumericDisplay26.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay26.variable = TagDB.Vars_Pump6.SetPoints.Vibration;
		NumericDisplay26.zeroSuppress = true;
		NumericDisplay26.zeroDisplay = true;
		NumericDisplay26.displayDigits = 3;
		NumericDisplay26.decimalPlaces = 0;
		NumericDisplay26.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay26.unitStrings = null;
		NumericDisplay26.fonts = fonts107;
		NumericDisplay26.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay26.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay26.enableInput = true;
		NumericDisplay26.displayPopupKeypad = true;
		NumericDisplay26.keypad = decKeypad;
		NumericDisplay26.beepOnTouch = false;
		NumericDisplay26.barcode = false;
		NumericDisplay26.frameColor = 0x00908c7f;
		NumericDisplay26.foreColor = 0x00aaa599;
		NumericDisplay26.textColor = 0x00ffffff;
		NumericDisplay26.text3DColor = 0x00000000;
		NumericDisplay26.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay26.changeColor = false;
		NumericDisplay26.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay26.drawObject = displayDraw0;
		NumericDisplay26.alwaysDrawBackground = true;
		NumericDisplay26.exprServer = exprServer;
		NumericDisplay26.useLocalMinMax  = true;
		NumericDisplay26.minExpr   = 1051;
		NumericDisplay26.maxExpr   = 1052;
		NumericDisplay26.init();

		NumericDisplay27 = new CgpNumericDisplay(280, 80, 320, 100, panelContext, this);
		NumericDisplay27.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay27.variable = TagDB.Vars_Pump6.SetPoints.Motor_1_Temp;
		NumericDisplay27.zeroSuppress = true;
		NumericDisplay27.zeroDisplay = true;
		NumericDisplay27.displayDigits = 3;
		NumericDisplay27.decimalPlaces = 0;
		NumericDisplay27.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay27.unitStrings = null;
		NumericDisplay27.fonts = fonts107;
		NumericDisplay27.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay27.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay27.enableInput = true;
		NumericDisplay27.displayPopupKeypad = true;
		NumericDisplay27.keypad = decKeypad;
		NumericDisplay27.beepOnTouch = false;
		NumericDisplay27.barcode = false;
		NumericDisplay27.frameColor = 0x00908c7f;
		NumericDisplay27.foreColor = 0x00aaa599;
		NumericDisplay27.textColor = 0x00ffffff;
		NumericDisplay27.text3DColor = 0x00000000;
		NumericDisplay27.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay27.changeColor = false;
		NumericDisplay27.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay27.drawObject = displayDraw0;
		NumericDisplay27.alwaysDrawBackground = true;
		NumericDisplay27.exprServer = exprServer;
		NumericDisplay27.useLocalMinMax  = true;
		NumericDisplay27.minExpr   = 1053;
		NumericDisplay27.maxExpr   = 1054;
		NumericDisplay27.init();

		NumericDisplay28 = new CgpNumericDisplay(280, 100, 320, 120, panelContext, this);
		NumericDisplay28.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay28.variable = TagDB.Vars_Pump6.SetPoints.Motor_2_Temp;
		NumericDisplay28.zeroSuppress = true;
		NumericDisplay28.zeroDisplay = true;
		NumericDisplay28.displayDigits = 3;
		NumericDisplay28.decimalPlaces = 0;
		NumericDisplay28.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay28.unitStrings = null;
		NumericDisplay28.fonts = fonts107;
		NumericDisplay28.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay28.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay28.enableInput = true;
		NumericDisplay28.displayPopupKeypad = true;
		NumericDisplay28.keypad = decKeypad;
		NumericDisplay28.beepOnTouch = false;
		NumericDisplay28.barcode = false;
		NumericDisplay28.frameColor = 0x00908c7f;
		NumericDisplay28.foreColor = 0x00aaa599;
		NumericDisplay28.textColor = 0x00ffffff;
		NumericDisplay28.text3DColor = 0x00000000;
		NumericDisplay28.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay28.changeColor = false;
		NumericDisplay28.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay28.drawObject = displayDraw0;
		NumericDisplay28.alwaysDrawBackground = true;
		NumericDisplay28.exprServer = exprServer;
		NumericDisplay28.useLocalMinMax  = true;
		NumericDisplay28.minExpr   = 1055;
		NumericDisplay28.maxExpr   = 1056;
		NumericDisplay28.init();

		NumericDisplay29 = new CgpNumericDisplay(280, 120, 320, 140, panelContext, this);
		NumericDisplay29.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay29.variable = TagDB.Vars_Pump6.SetPoints.Motor_3_Temp;
		NumericDisplay29.zeroSuppress = true;
		NumericDisplay29.zeroDisplay = true;
		NumericDisplay29.displayDigits = 3;
		NumericDisplay29.decimalPlaces = 0;
		NumericDisplay29.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay29.unitStrings = null;
		NumericDisplay29.fonts = fonts107;
		NumericDisplay29.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay29.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay29.enableInput = true;
		NumericDisplay29.displayPopupKeypad = true;
		NumericDisplay29.keypad = decKeypad;
		NumericDisplay29.beepOnTouch = false;
		NumericDisplay29.barcode = false;
		NumericDisplay29.frameColor = 0x00908c7f;
		NumericDisplay29.foreColor = 0x00aaa599;
		NumericDisplay29.textColor = 0x00ffffff;
		NumericDisplay29.text3DColor = 0x00000000;
		NumericDisplay29.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay29.changeColor = false;
		NumericDisplay29.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay29.drawObject = displayDraw0;
		NumericDisplay29.alwaysDrawBackground = true;
		NumericDisplay29.exprServer = exprServer;
		NumericDisplay29.useLocalMinMax  = true;
		NumericDisplay29.minExpr   = 1057;
		NumericDisplay29.maxExpr   = 1058;
		NumericDisplay29.init();

		NumericDisplay30 = new CgpNumericDisplay(280, 140, 320, 160, panelContext, this);
		NumericDisplay30.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		NumericDisplay30.variable = TagDB.Vars_Pump6.SetPoints.Bottom_Bearing_Temp;
		NumericDisplay30.zeroSuppress = true;
		NumericDisplay30.zeroDisplay = true;
		NumericDisplay30.displayDigits = 3;
		NumericDisplay30.decimalPlaces = 0;
		NumericDisplay30.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		NumericDisplay30.unitStrings = null;
		NumericDisplay30.fonts = fonts107;
		NumericDisplay30.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		NumericDisplay30.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		NumericDisplay30.enableInput = true;
		NumericDisplay30.displayPopupKeypad = true;
		NumericDisplay30.keypad = decKeypad;
		NumericDisplay30.beepOnTouch = false;
		NumericDisplay30.barcode = false;
		NumericDisplay30.frameColor = 0x00908c7f;
		NumericDisplay30.foreColor = 0x00aaa599;
		NumericDisplay30.textColor = 0x00ffffff;
		NumericDisplay30.text3DColor = 0x00000000;
		NumericDisplay30.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay30.changeColor = false;
		NumericDisplay30.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		NumericDisplay30.drawObject = displayDraw0;
		NumericDisplay30.alwaysDrawBackground = true;
		NumericDisplay30.exprServer = exprServer;
		NumericDisplay30.useLocalMinMax  = true;
		NumericDisplay30.minExpr   = 1059;
		NumericDisplay30.maxExpr   = 1060;
		NumericDisplay30.init();
		SilenceAlarmsBtn = new Switch_0012(160, 180, 240, 220, panelContext, this);
		SilenceAlarmsBtn.frameClr = 0x005d4833;
		SilenceAlarmsBtn.foreClr = 0x00227fe6;
		SilenceAlarmsBtn.backClr = 0x00000000;
		SilenceAlarmsBtn.pattern = 1;

		CgpFont	fonts139[];
		String	labels139[];
		fonts139 = new CgpFont[1];
		labels139 = new String[1];

		labels139[0] = "Silence\nAlarms";
		fonts139[0] = F1;

		SilenceAlarmsBtn.buzzer = true;

		SilenceAlarmsBtn.switchFonts = fonts139;
		SilenceAlarmsBtn.labels = labels139;

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

		CgpFont	fonts141[];
		String	labels141[];
		fonts141 = new CgpFont[1];
		labels141 = new String[1];

		labels141[0] = "Reset\nAll";
		fonts141[0] = F1;

		Switch02.buzzer = true;

		Switch02.switchFonts = fonts141;
		Switch02.labels = labels141;

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
		TagDB._Seconds.addEventListener(NumericDisplay06, 0, panelContext);
		TagDB.Vars_Pump2.SetPoints.Vibration.addEventListener(NumericDisplay06, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay07, 0, panelContext);
		TagDB.Vars_Pump2.SetPoints.Motor_1_Temp.addEventListener(NumericDisplay07, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay08, 0, panelContext);
		TagDB.Vars_Pump2.SetPoints.Motor_2_Temp.addEventListener(NumericDisplay08, 0, panelContext);
		TagDB.Vars_Pump2.SetPoints.Motor_3_Temp.addEventListener(NumericDisplay09, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay09, 0, panelContext);
		TagDB.Vars_Pump2.SetPoints.Bottom_Bearing_Temp.addEventListener(NumericDisplay10, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay10, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay11, 0, panelContext);
		TagDB.Vars_Pump3.SetPoints.Vibration.addEventListener(NumericDisplay11, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay12, 0, panelContext);
		TagDB.Vars_Pump3.SetPoints.Motor_1_Temp.addEventListener(NumericDisplay12, 0, panelContext);
		TagDB.Vars_Pump3.SetPoints.Motor_2_Temp.addEventListener(NumericDisplay13, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay13, 0, panelContext);
		TagDB.Vars_Pump3.SetPoints.Motor_3_Temp.addEventListener(NumericDisplay14, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay14, 0, panelContext);
		TagDB.Vars_Pump3.SetPoints.Bottom_Bearing_Temp.addEventListener(NumericDisplay15, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay15, 0, panelContext);
		TagDB.Vars_Pump4.SetPoints.Vibration.addEventListener(NumericDisplay16, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay16, 0, panelContext);
		TagDB.Vars_Pump4.SetPoints.Motor_1_Temp.addEventListener(NumericDisplay17, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay17, 0, panelContext);
		TagDB.Vars_Pump4.SetPoints.Motor_2_Temp.addEventListener(NumericDisplay18, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay18, 0, panelContext);
		TagDB.Vars_Pump4.SetPoints.Motor_3_Temp.addEventListener(NumericDisplay19, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay19, 0, panelContext);
		TagDB.Vars_Pump4.SetPoints.Bottom_Bearing_Temp.addEventListener(NumericDisplay20, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay20, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay21, 0, panelContext);
		TagDB.Vars_Pump5.SetPoints.Vibration.addEventListener(NumericDisplay21, 0, panelContext);
		TagDB.Vars_Pump5.SetPoints.Motor_1_Temp.addEventListener(NumericDisplay22, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay22, 0, panelContext);
		TagDB.Vars_Pump5.SetPoints.Motor_2_Temp.addEventListener(NumericDisplay23, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay23, 0, panelContext);
		TagDB.Vars_Pump5.SetPoints.Motor_3_Temp.addEventListener(NumericDisplay24, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay24, 0, panelContext);
		TagDB.Vars_Pump5.SetPoints.Bottom_Bearing_Temp.addEventListener(NumericDisplay25, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay25, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay26, 0, panelContext);
		TagDB.Vars_Pump6.SetPoints.Vibration.addEventListener(NumericDisplay26, 0, panelContext);
		TagDB.Vars_Pump6.SetPoints.Motor_1_Temp.addEventListener(NumericDisplay27, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay27, 0, panelContext);
		TagDB.Vars_Pump6.SetPoints.Motor_2_Temp.addEventListener(NumericDisplay28, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay28, 0, panelContext);
		TagDB.Vars_Pump6.SetPoints.Motor_3_Temp.addEventListener(NumericDisplay29, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay29, 0, panelContext);
		TagDB.Vars_Pump6.SetPoints.Bottom_Bearing_Temp.addEventListener(NumericDisplay30, 0, panelContext);
		TagDB._Seconds.addEventListener(NumericDisplay30, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[37];
		zOrderList[0] = Switch01;
		zOrderList[1] = Timers;
		zOrderList[2] = NumericDisplay01;
		zOrderList[3] = NumericDisplay02;
		zOrderList[4] = NumericDisplay03;
		zOrderList[5] = NumericDisplay04;
		zOrderList[6] = NumericDisplay05;
		zOrderList[7] = Line01;
		zOrderList[8] = Switch04;
		zOrderList[9] = NumericDisplay06;
		zOrderList[10] = NumericDisplay07;
		zOrderList[11] = NumericDisplay08;
		zOrderList[12] = NumericDisplay09;
		zOrderList[13] = NumericDisplay10;
		zOrderList[14] = NumericDisplay11;
		zOrderList[15] = NumericDisplay12;
		zOrderList[16] = NumericDisplay13;
		zOrderList[17] = NumericDisplay14;
		zOrderList[18] = NumericDisplay15;
		zOrderList[19] = NumericDisplay16;
		zOrderList[20] = NumericDisplay17;
		zOrderList[21] = NumericDisplay18;
		zOrderList[22] = NumericDisplay19;
		zOrderList[23] = NumericDisplay20;
		zOrderList[24] = NumericDisplay21;
		zOrderList[25] = NumericDisplay22;
		zOrderList[26] = NumericDisplay23;
		zOrderList[27] = NumericDisplay24;
		zOrderList[28] = NumericDisplay25;
		zOrderList[29] = NumericDisplay26;
		zOrderList[30] = NumericDisplay27;
		zOrderList[31] = NumericDisplay28;
		zOrderList[32] = NumericDisplay29;
		zOrderList[33] = NumericDisplay30;
		zOrderList[34] = SilenceAlarmsBtn;
		zOrderList[35] = Switch02;
		zOrderList[36] = decKeypad;
		theZstack = zOrderList;

		IgpTouch touchList[] =
		{
			decKeypad,
			Switch02,
			SilenceAlarmsBtn,
			NumericDisplay30,
			NumericDisplay29,
			NumericDisplay28,
			NumericDisplay27,
			NumericDisplay26,
			NumericDisplay25,
			NumericDisplay24,
			NumericDisplay23,
			NumericDisplay22,
			NumericDisplay21,
			NumericDisplay20,
			NumericDisplay19,
			NumericDisplay18,
			NumericDisplay17,
			NumericDisplay16,
			NumericDisplay15,
			NumericDisplay14,
			NumericDisplay13,
			NumericDisplay12,
			NumericDisplay11,
			NumericDisplay10,
			NumericDisplay09,
			NumericDisplay08,
			NumericDisplay07,
			NumericDisplay06,
			Switch04,
			NumericDisplay05,
			NumericDisplay04,
			NumericDisplay03,
			NumericDisplay02,
			NumericDisplay01,
			Timers,
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
		tagListVector.add(TagDB.Vars_Pump2.SetPoints.Vibration);
		tagListVector.add(TagDB.Vars_Pump2.SetPoints.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump2.SetPoints.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump2.SetPoints.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump2.SetPoints.Bottom_Bearing_Temp);
		tagListVector.add(TagDB.Vars_Pump3.SetPoints.Vibration);
		tagListVector.add(TagDB.Vars_Pump3.SetPoints.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump3.SetPoints.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump3.SetPoints.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump3.SetPoints.Bottom_Bearing_Temp);
		tagListVector.add(TagDB.Vars_Pump4.SetPoints.Vibration);
		tagListVector.add(TagDB.Vars_Pump4.SetPoints.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump4.SetPoints.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump4.SetPoints.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump4.SetPoints.Bottom_Bearing_Temp);
		tagListVector.add(TagDB.Vars_Pump5.SetPoints.Vibration);
		tagListVector.add(TagDB.Vars_Pump5.SetPoints.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump5.SetPoints.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump5.SetPoints.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump5.SetPoints.Bottom_Bearing_Temp);
		tagListVector.add(TagDB.Vars_Pump6.SetPoints.Vibration);
		tagListVector.add(TagDB.Vars_Pump6.SetPoints.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump6.SetPoints.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump6.SetPoints.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump6.SetPoints.Bottom_Bearing_Temp);
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

		NumericDisplay30.shutdown();

		NumericDisplay29.shutdown();

		NumericDisplay28.shutdown();

		NumericDisplay27.shutdown();

		NumericDisplay26.shutdown();

		NumericDisplay25.shutdown();

		NumericDisplay24.shutdown();

		NumericDisplay23.shutdown();

		NumericDisplay22.shutdown();

		NumericDisplay21.shutdown();

		NumericDisplay20.shutdown();

		NumericDisplay19.shutdown();

		NumericDisplay18.shutdown();

		NumericDisplay17.shutdown();

		NumericDisplay16.shutdown();

		NumericDisplay15.shutdown();

		NumericDisplay14.shutdown();

		NumericDisplay13.shutdown();

		NumericDisplay12.shutdown();

		NumericDisplay11.shutdown();

		NumericDisplay10.shutdown();

		NumericDisplay09.shutdown();

		NumericDisplay08.shutdown();

		NumericDisplay07.shutdown();

		NumericDisplay06.shutdown();

		Switch04.shutdown();

		NumericDisplay05.shutdown();

		NumericDisplay04.shutdown();

		NumericDisplay03.shutdown();

		NumericDisplay02.shutdown();

		NumericDisplay01.shutdown();

		Timers.shutdown();

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
