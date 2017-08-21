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

public class Panel3 extends CgpPanel
{
	public Panel3XprSrv exprServer;

	public Switch_0007 Switch01;
	public CgpNumericDisplay Vibration_M1_Display;
	public CgpNumericDisplay Vibration_M1_Display01;
	public CgpNumericDisplay Vibration_M1_Display02;
	public CgpNumericDisplay Vibration_M1_Display03;
	public CgpNumericDisplay Vibration_M1_Display04;
	public Switch_0008 Switch03;
	public Switch_0011 Switch04;
	public CgpNumericDisplay Vibration_M1_Display05;
	public CgpNumericDisplay Vibration_M1_Display06;
	public CgpNumericDisplay Vibration_M1_Display07;
	public CgpNumericDisplay Vibration_M1_Display08;
	public CgpNumericDisplay Vibration_M1_Display09;
	public CgpNumericDisplay Vibration_M1_Display10;
	public CgpNumericDisplay Vibration_M1_Display11;
	public CgpNumericDisplay Vibration_M1_Display12;
	public CgpNumericDisplay Vibration_M1_Display13;
	public CgpNumericDisplay Vibration_M1_Display14;
	public CgpNumericDisplay Vibration_M1_Display15;
	public CgpNumericDisplay Vibration_M1_Display16;
	public CgpNumericDisplay Vibration_M1_Display17;
	public CgpNumericDisplay Vibration_M1_Display18;
	public CgpNumericDisplay Vibration_M1_Display19;
	public CgpNumericDisplay Vibration_M1_Display20;
	public CgpNumericDisplay Vibration_M1_Display21;
	public CgpNumericDisplay Vibration_M1_Display22;
	public CgpNumericDisplay Vibration_M1_Display23;
	public CgpNumericDisplay Vibration_M1_Display24;
	public CgpNumericDisplay Vibration_M1_Display25;
	public CgpNumericDisplay Vibration_M1_Display26;
	public CgpNumericDisplay Vibration_M1_Display27;
	public CgpNumericDisplay Vibration_M1_Display28;
	public CgpNumericDisplay Vibration_M1_Display29;
	public Switch_0012 SilenceAlarmsBtn;
	public Switch_0012 Switch02;
	CgpFont F1;
	CgpFont F30;
	CgpFont F91;
	CgpFont F92;
	private CgpMasterPanel masterPanel = null;
	public int publishedTo()
		{
			return CgpSystem.HMI;
		}

	public void createStaticObjects()
	{
		exprServer = new Panel3XprSrv();

		setBacklightColor(0);
	}
	public String getPanelName()
	{
		return "Vibration_Rtd_Sensor_Readings";
	}
	public int getPanelID()
	{
		return 3;
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

		F30 = new CgpFont("TCP6x10", CgpFont.PLAIN, (byte)10, (byte)6);

		CgpFont textFont0 = new CgpFont("TCP8x13", CgpFont.PLAIN, (byte)13, (byte)8);

		Switch01 = new Switch_0007(0, 180, 80, 220, panelContext, this);
		Switch01.frameClr = 0x005d4833;
		Switch01.foreClr = 0x00dd9933;
		Switch01.backClr = 0x00000000;
		Switch01.pattern = 1;

		CgpFont	fonts18[];
		String	labels18[];
		fonts18 = new CgpFont[1];
		labels18 = new String[1];

		labels18[0] = "Main\nMenu";
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
		Switch01.panelChange0 = 2;
		Switch01.alwaysDrawBackground = false;

		Switch01.init();

		Vibration_M1_Display = new CgpNumericDisplay(80, 60, 120, 80, panelContext, this);
		Vibration_M1_Display.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display.variable = TagDB.Vars_Pump1.CurrentTemps.Vibration;
		Vibration_M1_Display.zeroSuppress = true;
		Vibration_M1_Display.zeroDisplay = true;
		Vibration_M1_Display.displayDigits = 3;
		Vibration_M1_Display.decimalPlaces = 0;
		Vibration_M1_Display.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display.unitStrings = null;
		CgpFont	fonts48[][] = {
			{ textFont0 },
			};
		Vibration_M1_Display.fonts = fonts48;
		Vibration_M1_Display.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display.enableInput = false;
		Vibration_M1_Display.barcode = false;
		Vibration_M1_Display.frameColor = 0x00908c7f;
		Vibration_M1_Display.foreColor = 0x00aaa599;
		Vibration_M1_Display.textColor = 0x00ffffff;
		Vibration_M1_Display.text3DColor = 0x00000000;
		Vibration_M1_Display.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display.changeColor = false;
		Vibration_M1_Display.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		CgpNumericDisplayDraw displayDraw0 = new D_Display01(1,1,1,1);
		Vibration_M1_Display.drawObject = displayDraw0;
		Vibration_M1_Display.alwaysDrawBackground = false;
		Vibration_M1_Display.init();

		Vibration_M1_Display01 = new CgpNumericDisplay(80, 80, 120, 100, panelContext, this);
		Vibration_M1_Display01.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display01.variable = TagDB.Vars_Pump1.CurrentTemps.Motor_1_Temp;
		Vibration_M1_Display01.zeroSuppress = true;
		Vibration_M1_Display01.zeroDisplay = true;
		Vibration_M1_Display01.displayDigits = 3;
		Vibration_M1_Display01.decimalPlaces = 0;
		Vibration_M1_Display01.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display01.unitStrings = null;
		Vibration_M1_Display01.fonts = fonts48;
		Vibration_M1_Display01.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display01.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display01.enableInput = false;
		Vibration_M1_Display01.barcode = false;
		Vibration_M1_Display01.frameColor = 0x00908c7f;
		Vibration_M1_Display01.foreColor = 0x00aaa599;
		Vibration_M1_Display01.textColor = 0x00ffffff;
		Vibration_M1_Display01.text3DColor = 0x00000000;
		Vibration_M1_Display01.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display01.changeColor = false;
		Vibration_M1_Display01.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display01.drawObject = displayDraw0;
		Vibration_M1_Display01.alwaysDrawBackground = true;
		Vibration_M1_Display01.init();

		Vibration_M1_Display02 = new CgpNumericDisplay(80, 100, 120, 120, panelContext, this);
		Vibration_M1_Display02.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display02.variable = TagDB.Vars_Pump1.CurrentTemps.Motor_2_Temp;
		Vibration_M1_Display02.zeroSuppress = true;
		Vibration_M1_Display02.zeroDisplay = true;
		Vibration_M1_Display02.displayDigits = 3;
		Vibration_M1_Display02.decimalPlaces = 0;
		Vibration_M1_Display02.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display02.unitStrings = null;
		Vibration_M1_Display02.fonts = fonts48;
		Vibration_M1_Display02.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display02.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display02.enableInput = false;
		Vibration_M1_Display02.barcode = false;
		Vibration_M1_Display02.frameColor = 0x00908c7f;
		Vibration_M1_Display02.foreColor = 0x00aaa599;
		Vibration_M1_Display02.textColor = 0x00ffffff;
		Vibration_M1_Display02.text3DColor = 0x00000000;
		Vibration_M1_Display02.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display02.changeColor = false;
		Vibration_M1_Display02.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display02.drawObject = displayDraw0;
		Vibration_M1_Display02.alwaysDrawBackground = true;
		Vibration_M1_Display02.init();

		Vibration_M1_Display03 = new CgpNumericDisplay(80, 120, 120, 140, panelContext, this);
		Vibration_M1_Display03.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display03.variable = TagDB.Vars_Pump1.CurrentTemps.Motor_3_Temp;
		Vibration_M1_Display03.zeroSuppress = true;
		Vibration_M1_Display03.zeroDisplay = true;
		Vibration_M1_Display03.displayDigits = 3;
		Vibration_M1_Display03.decimalPlaces = 0;
		Vibration_M1_Display03.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display03.unitStrings = null;
		Vibration_M1_Display03.fonts = fonts48;
		Vibration_M1_Display03.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display03.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display03.enableInput = false;
		Vibration_M1_Display03.barcode = false;
		Vibration_M1_Display03.frameColor = 0x00908c7f;
		Vibration_M1_Display03.foreColor = 0x00aaa599;
		Vibration_M1_Display03.textColor = 0x00ffffff;
		Vibration_M1_Display03.text3DColor = 0x00000000;
		Vibration_M1_Display03.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display03.changeColor = false;
		Vibration_M1_Display03.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display03.drawObject = displayDraw0;
		Vibration_M1_Display03.alwaysDrawBackground = true;
		Vibration_M1_Display03.init();

		Vibration_M1_Display04 = new CgpNumericDisplay(80, 140, 120, 160, panelContext, this);
		Vibration_M1_Display04.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display04.variable = TagDB.Vars_Pump1.CurrentTemps.Bottom_Bearing_Temp;
		Vibration_M1_Display04.zeroSuppress = true;
		Vibration_M1_Display04.zeroDisplay = true;
		Vibration_M1_Display04.displayDigits = 3;
		Vibration_M1_Display04.decimalPlaces = 0;
		Vibration_M1_Display04.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display04.unitStrings = null;
		Vibration_M1_Display04.fonts = fonts48;
		Vibration_M1_Display04.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display04.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display04.enableInput = false;
		Vibration_M1_Display04.barcode = false;
		Vibration_M1_Display04.frameColor = 0x00908c7f;
		Vibration_M1_Display04.foreColor = 0x00aaa599;
		Vibration_M1_Display04.textColor = 0x00ffffff;
		Vibration_M1_Display04.text3DColor = 0x00000000;
		Vibration_M1_Display04.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display04.changeColor = false;
		Vibration_M1_Display04.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display04.drawObject = displayDraw0;
		Vibration_M1_Display04.alwaysDrawBackground = true;
		Vibration_M1_Display04.init();
		Switch03 = new Switch_0008(240, 180, 320, 220, panelContext, this);
		Switch03.frameClr = 0x005d4833;
		Switch03.foreClr = 0x00aaa599;
		Switch03.backClr = 0x00000000;
		Switch03.pattern = 1;

		CgpFont	fonts54[];
		String	labels54[];
		fonts54 = new CgpFont[1];
		labels54 = new String[1];

		labels54[0] = "Setup";
		fonts54[0] = F1;

		Switch03.buzzer = true;

		Switch03.switchFonts = fonts54;
		Switch03.labels = labels54;

		Switch03.labelClr = intArray0;
		Switch03.label3DClr = intArray1;
		Switch03.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch03.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch03.bit0 = TagDB.Global_Process_Bits.GotoSetup;
		Switch03.alwaysDrawBackground = false;

		Switch03.init();

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

		CgpRectangle GroupObject01_Rectangle01 = new CgpRectangle
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

		CgpRectangle GroupObject01_Rectangle06 = new CgpRectangle
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

		CgpRectangle GroupObject01_Rectangle11 = new CgpRectangle
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

		CgpRectangle GroupObject01_Rectangle16 = new CgpRectangle
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

		CgpRectangle GroupObject01_Rectangle21 = new CgpRectangle
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

		CgpRectangle GroupObject04_Rectangle01 = new CgpRectangle
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

		CgpRectangle GroupObject04_Rectangle06 = new CgpRectangle
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

		CgpRectangle GroupObject04_Rectangle11 = new CgpRectangle
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

		CgpRectangle GroupObject04_Rectangle16 = new CgpRectangle
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

		CgpRectangle GroupObject04_Rectangle21 = new CgpRectangle
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

		CgpRectangle GroupObject05_Rectangle01 = new CgpRectangle
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

		CgpRectangle GroupObject05_Rectangle06 = new CgpRectangle
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

		CgpRectangle GroupObject05_Rectangle11 = new CgpRectangle
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

		CgpRectangle GroupObject05_Rectangle16 = new CgpRectangle
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

		CgpRectangle GroupObject05_Rectangle21 = new CgpRectangle
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

		CgpRectangle GroupObject06_Rectangle01 = new CgpRectangle
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

		CgpRectangle GroupObject06_Rectangle06 = new CgpRectangle
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

		CgpRectangle GroupObject06_Rectangle11 = new CgpRectangle
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

		CgpRectangle GroupObject06_Rectangle16 = new CgpRectangle
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

		CgpRectangle GroupObject06_Rectangle21 = new CgpRectangle
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

		CgpPolyLine Line02 = new CgpPolyLine
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

		CgpText Text02 = new CgpText
		(
			"Vibration",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F30,
			0x0011c3f4,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			0,	// x1
			60,	// y1
			80,	// x2
			75,	// y2
			CgpColor.makeTransparentColor(0x08ffffff),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		Text02.set3DColor(0x00ff0000);

		F91 = new CgpFont("PF Utah (WF) S", CgpFont.PLAIN, (byte)9, (byte)0);

		CgpText Text07 = new CgpText
		(
			"% of Fullscale",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F91,
			0x00ffffff,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			0,	// x1
			69,	// y1
			80,	// x2
			81,	// y2
			CgpColor.makeTransparentColor(0x08ffffff),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		Text07.set3DColor(0x00ff0000);

		F92 = new CgpFont("PF Utah (WF) S", CgpFont.PLAIN, (byte)10, (byte)0);

		CgpText Text06 = new CgpText
		(
			"Bottom Bearing",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F92,
			0x0011c3f4,	// TextColor
			CgpColor.makeTransparentColor(0x08000000),	// BackColor
			0,	// x1
			140,	// y1
			80,	// x2
			160,	// y2
			CgpColor.makeTransparentColor(0x087e6245),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		Text06.set3DColor(0x00ff0000);
		Switch04 = new Switch_0011(0, 220, 320, 240, panelContext, this);
		Switch04.frameClr = 0x006e726e;
		Switch04.foreClr = 0x003b4ce6;
		Switch04.backClr = 0x00000000;
		Switch04.pattern = 1;

		CgpFont	fonts95[];
		String	labels95[];
		fonts95 = new CgpFont[1];
		labels95 = new String[1];

		labels95[0] = "Log Out";
		fonts95[0] = F1;

		Switch04.buzzer = true;
		Switch04.visibID = 1000;

		Switch04.switchFonts = fonts95;
		Switch04.labels = labels95;

		Switch04.labelClr = intArray0;
		Switch04.label3DClr = intArray1;
		Switch04.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch04.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch04.bit0 = TagDB.Global_Process_Bits.logoutProcess;
		Switch04.exprServer = exprServer;
		Switch04.alwaysDrawBackground = false;

		Switch04.init();

		Vibration_M1_Display05 = new CgpNumericDisplay(120, 60, 160, 80, panelContext, this);
		Vibration_M1_Display05.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display05.variable = TagDB.Vars_Pump2.CurrentTemps.Vibration;
		Vibration_M1_Display05.zeroSuppress = true;
		Vibration_M1_Display05.zeroDisplay = true;
		Vibration_M1_Display05.displayDigits = 3;
		Vibration_M1_Display05.decimalPlaces = 0;
		Vibration_M1_Display05.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display05.unitStrings = null;
		Vibration_M1_Display05.fonts = fonts48;
		Vibration_M1_Display05.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display05.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display05.enableInput = false;
		Vibration_M1_Display05.barcode = false;
		Vibration_M1_Display05.frameColor = 0x00908c7f;
		Vibration_M1_Display05.foreColor = 0x00aaa599;
		Vibration_M1_Display05.textColor = 0x00ffffff;
		Vibration_M1_Display05.text3DColor = 0x00000000;
		Vibration_M1_Display05.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display05.changeColor = false;
		Vibration_M1_Display05.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display05.drawObject = displayDraw0;
		Vibration_M1_Display05.alwaysDrawBackground = true;
		Vibration_M1_Display05.exprServer = exprServer;
		Vibration_M1_Display05.init();

		Vibration_M1_Display06 = new CgpNumericDisplay(120, 80, 160, 100, panelContext, this);
		Vibration_M1_Display06.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display06.variable = TagDB.Vars_Pump2.CurrentTemps.Motor_1_Temp;
		Vibration_M1_Display06.zeroSuppress = true;
		Vibration_M1_Display06.zeroDisplay = true;
		Vibration_M1_Display06.displayDigits = 3;
		Vibration_M1_Display06.decimalPlaces = 0;
		Vibration_M1_Display06.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display06.unitStrings = null;
		Vibration_M1_Display06.fonts = fonts48;
		Vibration_M1_Display06.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display06.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display06.enableInput = false;
		Vibration_M1_Display06.barcode = false;
		Vibration_M1_Display06.frameColor = 0x00908c7f;
		Vibration_M1_Display06.foreColor = 0x00aaa599;
		Vibration_M1_Display06.textColor = 0x00ffffff;
		Vibration_M1_Display06.text3DColor = 0x00000000;
		Vibration_M1_Display06.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display06.changeColor = false;
		Vibration_M1_Display06.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display06.drawObject = displayDraw0;
		Vibration_M1_Display06.alwaysDrawBackground = true;
		Vibration_M1_Display06.exprServer = exprServer;
		Vibration_M1_Display06.init();

		Vibration_M1_Display07 = new CgpNumericDisplay(120, 100, 160, 120, panelContext, this);
		Vibration_M1_Display07.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display07.variable = TagDB.Vars_Pump2.CurrentTemps.Motor_2_Temp;
		Vibration_M1_Display07.zeroSuppress = true;
		Vibration_M1_Display07.zeroDisplay = true;
		Vibration_M1_Display07.displayDigits = 3;
		Vibration_M1_Display07.decimalPlaces = 0;
		Vibration_M1_Display07.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display07.unitStrings = null;
		Vibration_M1_Display07.fonts = fonts48;
		Vibration_M1_Display07.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display07.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display07.enableInput = false;
		Vibration_M1_Display07.barcode = false;
		Vibration_M1_Display07.frameColor = 0x00908c7f;
		Vibration_M1_Display07.foreColor = 0x00aaa599;
		Vibration_M1_Display07.textColor = 0x00ffffff;
		Vibration_M1_Display07.text3DColor = 0x00000000;
		Vibration_M1_Display07.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display07.changeColor = false;
		Vibration_M1_Display07.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display07.drawObject = displayDraw0;
		Vibration_M1_Display07.alwaysDrawBackground = true;
		Vibration_M1_Display07.exprServer = exprServer;
		Vibration_M1_Display07.init();

		Vibration_M1_Display08 = new CgpNumericDisplay(120, 120, 160, 140, panelContext, this);
		Vibration_M1_Display08.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display08.variable = TagDB.Vars_Pump2.CurrentTemps.Motor_3_Temp;
		Vibration_M1_Display08.zeroSuppress = true;
		Vibration_M1_Display08.zeroDisplay = true;
		Vibration_M1_Display08.displayDigits = 3;
		Vibration_M1_Display08.decimalPlaces = 0;
		Vibration_M1_Display08.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display08.unitStrings = null;
		Vibration_M1_Display08.fonts = fonts48;
		Vibration_M1_Display08.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display08.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display08.enableInput = false;
		Vibration_M1_Display08.barcode = false;
		Vibration_M1_Display08.frameColor = 0x00908c7f;
		Vibration_M1_Display08.foreColor = 0x00aaa599;
		Vibration_M1_Display08.textColor = 0x00ffffff;
		Vibration_M1_Display08.text3DColor = 0x00000000;
		Vibration_M1_Display08.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display08.changeColor = false;
		Vibration_M1_Display08.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display08.drawObject = displayDraw0;
		Vibration_M1_Display08.alwaysDrawBackground = true;
		Vibration_M1_Display08.exprServer = exprServer;
		Vibration_M1_Display08.init();

		Vibration_M1_Display09 = new CgpNumericDisplay(120, 140, 160, 160, panelContext, this);
		Vibration_M1_Display09.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display09.variable = TagDB.Vars_Pump2.CurrentTemps.Bottom_Bearing_Temp;
		Vibration_M1_Display09.zeroSuppress = true;
		Vibration_M1_Display09.zeroDisplay = true;
		Vibration_M1_Display09.displayDigits = 3;
		Vibration_M1_Display09.decimalPlaces = 0;
		Vibration_M1_Display09.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display09.unitStrings = null;
		Vibration_M1_Display09.fonts = fonts48;
		Vibration_M1_Display09.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display09.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display09.enableInput = false;
		Vibration_M1_Display09.barcode = false;
		Vibration_M1_Display09.frameColor = 0x00908c7f;
		Vibration_M1_Display09.foreColor = 0x00aaa599;
		Vibration_M1_Display09.textColor = 0x00ffffff;
		Vibration_M1_Display09.text3DColor = 0x00000000;
		Vibration_M1_Display09.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display09.changeColor = false;
		Vibration_M1_Display09.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display09.drawObject = displayDraw0;
		Vibration_M1_Display09.alwaysDrawBackground = true;
		Vibration_M1_Display09.exprServer = exprServer;
		Vibration_M1_Display09.init();

		Vibration_M1_Display10 = new CgpNumericDisplay(160, 60, 200, 80, panelContext, this);
		Vibration_M1_Display10.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display10.variable = TagDB.Vars_Pump3.CurrentTemps.Vibration;
		Vibration_M1_Display10.zeroSuppress = true;
		Vibration_M1_Display10.zeroDisplay = true;
		Vibration_M1_Display10.displayDigits = 3;
		Vibration_M1_Display10.decimalPlaces = 0;
		Vibration_M1_Display10.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display10.unitStrings = null;
		Vibration_M1_Display10.fonts = fonts48;
		Vibration_M1_Display10.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display10.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display10.enableInput = false;
		Vibration_M1_Display10.barcode = false;
		Vibration_M1_Display10.frameColor = 0x00908c7f;
		Vibration_M1_Display10.foreColor = 0x00aaa599;
		Vibration_M1_Display10.textColor = 0x00ffffff;
		Vibration_M1_Display10.text3DColor = 0x00000000;
		Vibration_M1_Display10.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display10.changeColor = false;
		Vibration_M1_Display10.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display10.drawObject = displayDraw0;
		Vibration_M1_Display10.alwaysDrawBackground = true;
		Vibration_M1_Display10.exprServer = exprServer;
		Vibration_M1_Display10.init();

		Vibration_M1_Display11 = new CgpNumericDisplay(160, 80, 200, 100, panelContext, this);
		Vibration_M1_Display11.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display11.variable = TagDB.Vars_Pump3.CurrentTemps.Motor_1_Temp;
		Vibration_M1_Display11.zeroSuppress = true;
		Vibration_M1_Display11.zeroDisplay = true;
		Vibration_M1_Display11.displayDigits = 3;
		Vibration_M1_Display11.decimalPlaces = 0;
		Vibration_M1_Display11.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display11.unitStrings = null;
		Vibration_M1_Display11.fonts = fonts48;
		Vibration_M1_Display11.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display11.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display11.enableInput = false;
		Vibration_M1_Display11.barcode = false;
		Vibration_M1_Display11.frameColor = 0x00908c7f;
		Vibration_M1_Display11.foreColor = 0x00aaa599;
		Vibration_M1_Display11.textColor = 0x00ffffff;
		Vibration_M1_Display11.text3DColor = 0x00000000;
		Vibration_M1_Display11.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display11.changeColor = false;
		Vibration_M1_Display11.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display11.drawObject = displayDraw0;
		Vibration_M1_Display11.alwaysDrawBackground = true;
		Vibration_M1_Display11.exprServer = exprServer;
		Vibration_M1_Display11.init();

		Vibration_M1_Display12 = new CgpNumericDisplay(160, 100, 200, 120, panelContext, this);
		Vibration_M1_Display12.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display12.variable = TagDB.Vars_Pump3.CurrentTemps.Motor_2_Temp;
		Vibration_M1_Display12.zeroSuppress = true;
		Vibration_M1_Display12.zeroDisplay = true;
		Vibration_M1_Display12.displayDigits = 3;
		Vibration_M1_Display12.decimalPlaces = 0;
		Vibration_M1_Display12.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display12.unitStrings = null;
		Vibration_M1_Display12.fonts = fonts48;
		Vibration_M1_Display12.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display12.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display12.enableInput = false;
		Vibration_M1_Display12.barcode = false;
		Vibration_M1_Display12.frameColor = 0x00908c7f;
		Vibration_M1_Display12.foreColor = 0x00aaa599;
		Vibration_M1_Display12.textColor = 0x00ffffff;
		Vibration_M1_Display12.text3DColor = 0x00000000;
		Vibration_M1_Display12.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display12.changeColor = false;
		Vibration_M1_Display12.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display12.drawObject = displayDraw0;
		Vibration_M1_Display12.alwaysDrawBackground = true;
		Vibration_M1_Display12.exprServer = exprServer;
		Vibration_M1_Display12.init();

		Vibration_M1_Display13 = new CgpNumericDisplay(160, 120, 200, 140, panelContext, this);
		Vibration_M1_Display13.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display13.variable = TagDB.Vars_Pump3.CurrentTemps.Motor_3_Temp;
		Vibration_M1_Display13.zeroSuppress = true;
		Vibration_M1_Display13.zeroDisplay = true;
		Vibration_M1_Display13.displayDigits = 3;
		Vibration_M1_Display13.decimalPlaces = 0;
		Vibration_M1_Display13.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display13.unitStrings = null;
		Vibration_M1_Display13.fonts = fonts48;
		Vibration_M1_Display13.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display13.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display13.enableInput = false;
		Vibration_M1_Display13.barcode = false;
		Vibration_M1_Display13.frameColor = 0x00908c7f;
		Vibration_M1_Display13.foreColor = 0x00aaa599;
		Vibration_M1_Display13.textColor = 0x00ffffff;
		Vibration_M1_Display13.text3DColor = 0x00000000;
		Vibration_M1_Display13.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display13.changeColor = false;
		Vibration_M1_Display13.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display13.drawObject = displayDraw0;
		Vibration_M1_Display13.alwaysDrawBackground = true;
		Vibration_M1_Display13.exprServer = exprServer;
		Vibration_M1_Display13.init();

		Vibration_M1_Display14 = new CgpNumericDisplay(160, 140, 200, 160, panelContext, this);
		Vibration_M1_Display14.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display14.variable = TagDB.Vars_Pump3.CurrentTemps.Bottom_Bearing_Temp;
		Vibration_M1_Display14.zeroSuppress = true;
		Vibration_M1_Display14.zeroDisplay = true;
		Vibration_M1_Display14.displayDigits = 3;
		Vibration_M1_Display14.decimalPlaces = 0;
		Vibration_M1_Display14.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display14.unitStrings = null;
		Vibration_M1_Display14.fonts = fonts48;
		Vibration_M1_Display14.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display14.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display14.enableInput = false;
		Vibration_M1_Display14.barcode = false;
		Vibration_M1_Display14.frameColor = 0x00908c7f;
		Vibration_M1_Display14.foreColor = 0x00aaa599;
		Vibration_M1_Display14.textColor = 0x00ffffff;
		Vibration_M1_Display14.text3DColor = 0x00000000;
		Vibration_M1_Display14.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display14.changeColor = false;
		Vibration_M1_Display14.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display14.drawObject = displayDraw0;
		Vibration_M1_Display14.alwaysDrawBackground = true;
		Vibration_M1_Display14.exprServer = exprServer;
		Vibration_M1_Display14.init();

		Vibration_M1_Display15 = new CgpNumericDisplay(200, 60, 240, 80, panelContext, this);
		Vibration_M1_Display15.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display15.variable = TagDB.Vars_Pump4.CurrentTemps.Vibration;
		Vibration_M1_Display15.zeroSuppress = true;
		Vibration_M1_Display15.zeroDisplay = true;
		Vibration_M1_Display15.displayDigits = 3;
		Vibration_M1_Display15.decimalPlaces = 0;
		Vibration_M1_Display15.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display15.unitStrings = null;
		Vibration_M1_Display15.fonts = fonts48;
		Vibration_M1_Display15.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display15.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display15.enableInput = false;
		Vibration_M1_Display15.barcode = false;
		Vibration_M1_Display15.frameColor = 0x00908c7f;
		Vibration_M1_Display15.foreColor = 0x00aaa599;
		Vibration_M1_Display15.textColor = 0x00ffffff;
		Vibration_M1_Display15.text3DColor = 0x00000000;
		Vibration_M1_Display15.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display15.changeColor = false;
		Vibration_M1_Display15.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display15.drawObject = displayDraw0;
		Vibration_M1_Display15.alwaysDrawBackground = true;
		Vibration_M1_Display15.exprServer = exprServer;
		Vibration_M1_Display15.init();

		Vibration_M1_Display16 = new CgpNumericDisplay(200, 80, 240, 100, panelContext, this);
		Vibration_M1_Display16.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display16.variable = TagDB.Vars_Pump4.CurrentTemps.Motor_1_Temp;
		Vibration_M1_Display16.zeroSuppress = true;
		Vibration_M1_Display16.zeroDisplay = true;
		Vibration_M1_Display16.displayDigits = 3;
		Vibration_M1_Display16.useSeperator = true;
		Vibration_M1_Display16.decimalPlaces = 0;
		Vibration_M1_Display16.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display16.unitStrings = null;
		Vibration_M1_Display16.fonts = fonts48;
		Vibration_M1_Display16.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display16.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display16.enableInput = false;
		Vibration_M1_Display16.barcode = false;
		Vibration_M1_Display16.frameColor = 0x00908c7f;
		Vibration_M1_Display16.foreColor = 0x00aaa599;
		Vibration_M1_Display16.textColor = 0x00ffffff;
		Vibration_M1_Display16.text3DColor = 0x00000000;
		Vibration_M1_Display16.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display16.changeColor = false;
		Vibration_M1_Display16.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display16.drawObject = displayDraw0;
		Vibration_M1_Display16.alwaysDrawBackground = true;
		Vibration_M1_Display16.exprServer = exprServer;
		Vibration_M1_Display16.init();

		Vibration_M1_Display17 = new CgpNumericDisplay(200, 100, 240, 120, panelContext, this);
		Vibration_M1_Display17.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display17.variable = TagDB.Vars_Pump4.CurrentTemps.Motor_2_Temp;
		Vibration_M1_Display17.zeroSuppress = true;
		Vibration_M1_Display17.zeroDisplay = true;
		Vibration_M1_Display17.displayDigits = 3;
		Vibration_M1_Display17.decimalPlaces = 0;
		Vibration_M1_Display17.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display17.unitStrings = null;
		Vibration_M1_Display17.fonts = fonts48;
		Vibration_M1_Display17.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display17.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display17.enableInput = false;
		Vibration_M1_Display17.barcode = false;
		Vibration_M1_Display17.frameColor = 0x00908c7f;
		Vibration_M1_Display17.foreColor = 0x00aaa599;
		Vibration_M1_Display17.textColor = 0x00ffffff;
		Vibration_M1_Display17.text3DColor = 0x00000000;
		Vibration_M1_Display17.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display17.changeColor = false;
		Vibration_M1_Display17.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display17.drawObject = displayDraw0;
		Vibration_M1_Display17.alwaysDrawBackground = true;
		Vibration_M1_Display17.exprServer = exprServer;
		Vibration_M1_Display17.init();

		Vibration_M1_Display18 = new CgpNumericDisplay(200, 120, 240, 140, panelContext, this);
		Vibration_M1_Display18.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display18.variable = TagDB.Vars_Pump4.CurrentTemps.Motor_3_Temp;
		Vibration_M1_Display18.zeroSuppress = true;
		Vibration_M1_Display18.zeroDisplay = true;
		Vibration_M1_Display18.displayDigits = 3;
		Vibration_M1_Display18.decimalPlaces = 0;
		Vibration_M1_Display18.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display18.unitStrings = null;
		Vibration_M1_Display18.fonts = fonts48;
		Vibration_M1_Display18.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display18.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display18.enableInput = false;
		Vibration_M1_Display18.barcode = false;
		Vibration_M1_Display18.frameColor = 0x00908c7f;
		Vibration_M1_Display18.foreColor = 0x00aaa599;
		Vibration_M1_Display18.textColor = 0x00ffffff;
		Vibration_M1_Display18.text3DColor = 0x00000000;
		Vibration_M1_Display18.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display18.changeColor = false;
		Vibration_M1_Display18.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display18.drawObject = displayDraw0;
		Vibration_M1_Display18.alwaysDrawBackground = true;
		Vibration_M1_Display18.exprServer = exprServer;
		Vibration_M1_Display18.init();

		Vibration_M1_Display19 = new CgpNumericDisplay(200, 140, 240, 160, panelContext, this);
		Vibration_M1_Display19.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display19.variable = TagDB.Vars_Pump4.CurrentTemps.Bottom_Bearing_Temp;
		Vibration_M1_Display19.zeroSuppress = true;
		Vibration_M1_Display19.zeroDisplay = true;
		Vibration_M1_Display19.displayDigits = 3;
		Vibration_M1_Display19.decimalPlaces = 0;
		Vibration_M1_Display19.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display19.unitStrings = null;
		Vibration_M1_Display19.fonts = fonts48;
		Vibration_M1_Display19.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display19.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display19.enableInput = false;
		Vibration_M1_Display19.barcode = false;
		Vibration_M1_Display19.frameColor = 0x00908c7f;
		Vibration_M1_Display19.foreColor = 0x00aaa599;
		Vibration_M1_Display19.textColor = 0x00ffffff;
		Vibration_M1_Display19.text3DColor = 0x00000000;
		Vibration_M1_Display19.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display19.changeColor = false;
		Vibration_M1_Display19.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display19.drawObject = displayDraw0;
		Vibration_M1_Display19.alwaysDrawBackground = true;
		Vibration_M1_Display19.exprServer = exprServer;
		Vibration_M1_Display19.init();

		Vibration_M1_Display20 = new CgpNumericDisplay(240, 60, 280, 80, panelContext, this);
		Vibration_M1_Display20.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display20.variable = TagDB.Vars_Pump5.CurrentTemps.Vibration;
		Vibration_M1_Display20.zeroSuppress = true;
		Vibration_M1_Display20.zeroDisplay = true;
		Vibration_M1_Display20.displayDigits = 3;
		Vibration_M1_Display20.decimalPlaces = 0;
		Vibration_M1_Display20.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display20.unitStrings = null;
		Vibration_M1_Display20.fonts = fonts48;
		Vibration_M1_Display20.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display20.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display20.enableInput = false;
		Vibration_M1_Display20.barcode = false;
		Vibration_M1_Display20.frameColor = 0x00908c7f;
		Vibration_M1_Display20.foreColor = 0x00aaa599;
		Vibration_M1_Display20.textColor = 0x00ffffff;
		Vibration_M1_Display20.text3DColor = 0x00000000;
		Vibration_M1_Display20.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display20.changeColor = false;
		Vibration_M1_Display20.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display20.drawObject = displayDraw0;
		Vibration_M1_Display20.alwaysDrawBackground = true;
		Vibration_M1_Display20.exprServer = exprServer;
		Vibration_M1_Display20.init();

		Vibration_M1_Display21 = new CgpNumericDisplay(240, 80, 280, 100, panelContext, this);
		Vibration_M1_Display21.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display21.variable = TagDB.Vars_Pump5.CurrentTemps.Motor_1_Temp;
		Vibration_M1_Display21.zeroSuppress = true;
		Vibration_M1_Display21.zeroDisplay = true;
		Vibration_M1_Display21.displayDigits = 3;
		Vibration_M1_Display21.decimalPlaces = 0;
		Vibration_M1_Display21.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display21.unitStrings = null;
		Vibration_M1_Display21.fonts = fonts48;
		Vibration_M1_Display21.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display21.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display21.enableInput = false;
		Vibration_M1_Display21.barcode = false;
		Vibration_M1_Display21.frameColor = 0x00908c7f;
		Vibration_M1_Display21.foreColor = 0x00aaa599;
		Vibration_M1_Display21.textColor = 0x00ffffff;
		Vibration_M1_Display21.text3DColor = 0x00000000;
		Vibration_M1_Display21.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display21.changeColor = false;
		Vibration_M1_Display21.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display21.drawObject = displayDraw0;
		Vibration_M1_Display21.alwaysDrawBackground = true;
		Vibration_M1_Display21.exprServer = exprServer;
		Vibration_M1_Display21.init();

		Vibration_M1_Display22 = new CgpNumericDisplay(240, 100, 280, 120, panelContext, this);
		Vibration_M1_Display22.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display22.variable = TagDB.Vars_Pump5.CurrentTemps.Motor_2_Temp;
		Vibration_M1_Display22.zeroSuppress = true;
		Vibration_M1_Display22.zeroDisplay = true;
		Vibration_M1_Display22.displayDigits = 3;
		Vibration_M1_Display22.decimalPlaces = 0;
		Vibration_M1_Display22.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display22.unitStrings = null;
		Vibration_M1_Display22.fonts = fonts48;
		Vibration_M1_Display22.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display22.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display22.enableInput = false;
		Vibration_M1_Display22.barcode = false;
		Vibration_M1_Display22.frameColor = 0x00908c7f;
		Vibration_M1_Display22.foreColor = 0x00aaa599;
		Vibration_M1_Display22.textColor = 0x00ffffff;
		Vibration_M1_Display22.text3DColor = 0x00000000;
		Vibration_M1_Display22.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display22.changeColor = false;
		Vibration_M1_Display22.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display22.drawObject = displayDraw0;
		Vibration_M1_Display22.alwaysDrawBackground = true;
		Vibration_M1_Display22.exprServer = exprServer;
		Vibration_M1_Display22.init();

		Vibration_M1_Display23 = new CgpNumericDisplay(240, 120, 280, 140, panelContext, this);
		Vibration_M1_Display23.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display23.variable = TagDB.Vars_Pump5.CurrentTemps.Motor_3_Temp;
		Vibration_M1_Display23.zeroSuppress = true;
		Vibration_M1_Display23.zeroDisplay = true;
		Vibration_M1_Display23.displayDigits = 3;
		Vibration_M1_Display23.decimalPlaces = 0;
		Vibration_M1_Display23.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display23.unitStrings = null;
		Vibration_M1_Display23.fonts = fonts48;
		Vibration_M1_Display23.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display23.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display23.enableInput = false;
		Vibration_M1_Display23.barcode = false;
		Vibration_M1_Display23.frameColor = 0x00908c7f;
		Vibration_M1_Display23.foreColor = 0x00aaa599;
		Vibration_M1_Display23.textColor = 0x00ffffff;
		Vibration_M1_Display23.text3DColor = 0x00000000;
		Vibration_M1_Display23.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display23.changeColor = false;
		Vibration_M1_Display23.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display23.drawObject = displayDraw0;
		Vibration_M1_Display23.alwaysDrawBackground = true;
		Vibration_M1_Display23.exprServer = exprServer;
		Vibration_M1_Display23.init();

		Vibration_M1_Display24 = new CgpNumericDisplay(240, 140, 280, 160, panelContext, this);
		Vibration_M1_Display24.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display24.variable = TagDB.Vars_Pump5.CurrentTemps.Bottom_Bearing_Temp;
		Vibration_M1_Display24.zeroSuppress = true;
		Vibration_M1_Display24.zeroDisplay = true;
		Vibration_M1_Display24.displayDigits = 3;
		Vibration_M1_Display24.decimalPlaces = 0;
		Vibration_M1_Display24.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display24.unitStrings = null;
		Vibration_M1_Display24.fonts = fonts48;
		Vibration_M1_Display24.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display24.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display24.enableInput = false;
		Vibration_M1_Display24.barcode = false;
		Vibration_M1_Display24.frameColor = 0x00908c7f;
		Vibration_M1_Display24.foreColor = 0x00aaa599;
		Vibration_M1_Display24.textColor = 0x00ffffff;
		Vibration_M1_Display24.text3DColor = 0x00000000;
		Vibration_M1_Display24.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display24.changeColor = false;
		Vibration_M1_Display24.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display24.drawObject = displayDraw0;
		Vibration_M1_Display24.alwaysDrawBackground = true;
		Vibration_M1_Display24.exprServer = exprServer;
		Vibration_M1_Display24.init();

		Vibration_M1_Display25 = new CgpNumericDisplay(280, 60, 320, 80, panelContext, this);
		Vibration_M1_Display25.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display25.variable = TagDB.Vars_Pump6.CurrentTemps.Vibration;
		Vibration_M1_Display25.zeroSuppress = true;
		Vibration_M1_Display25.zeroDisplay = true;
		Vibration_M1_Display25.displayDigits = 3;
		Vibration_M1_Display25.decimalPlaces = 0;
		Vibration_M1_Display25.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display25.unitStrings = null;
		Vibration_M1_Display25.fonts = fonts48;
		Vibration_M1_Display25.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display25.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display25.enableInput = false;
		Vibration_M1_Display25.barcode = false;
		Vibration_M1_Display25.frameColor = 0x00908c7f;
		Vibration_M1_Display25.foreColor = 0x00aaa599;
		Vibration_M1_Display25.textColor = 0x00ffffff;
		Vibration_M1_Display25.text3DColor = 0x00000000;
		Vibration_M1_Display25.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display25.changeColor = false;
		Vibration_M1_Display25.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display25.drawObject = displayDraw0;
		Vibration_M1_Display25.alwaysDrawBackground = true;
		Vibration_M1_Display25.exprServer = exprServer;
		Vibration_M1_Display25.init();

		Vibration_M1_Display26 = new CgpNumericDisplay(280, 80, 320, 100, panelContext, this);
		Vibration_M1_Display26.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display26.variable = TagDB.Vars_Pump6.CurrentTemps.Motor_1_Temp;
		Vibration_M1_Display26.zeroSuppress = true;
		Vibration_M1_Display26.zeroDisplay = true;
		Vibration_M1_Display26.displayDigits = 3;
		Vibration_M1_Display26.decimalPlaces = 0;
		Vibration_M1_Display26.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display26.unitStrings = null;
		Vibration_M1_Display26.fonts = fonts48;
		Vibration_M1_Display26.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display26.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display26.enableInput = false;
		Vibration_M1_Display26.barcode = false;
		Vibration_M1_Display26.frameColor = 0x00908c7f;
		Vibration_M1_Display26.foreColor = 0x00aaa599;
		Vibration_M1_Display26.textColor = 0x00ffffff;
		Vibration_M1_Display26.text3DColor = 0x00000000;
		Vibration_M1_Display26.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display26.changeColor = false;
		Vibration_M1_Display26.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display26.drawObject = displayDraw0;
		Vibration_M1_Display26.alwaysDrawBackground = true;
		Vibration_M1_Display26.exprServer = exprServer;
		Vibration_M1_Display26.init();

		Vibration_M1_Display27 = new CgpNumericDisplay(280, 100, 320, 120, panelContext, this);
		Vibration_M1_Display27.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display27.variable = TagDB.Vars_Pump6.CurrentTemps.Motor_2_Temp;
		Vibration_M1_Display27.zeroSuppress = true;
		Vibration_M1_Display27.zeroDisplay = true;
		Vibration_M1_Display27.displayDigits = 3;
		Vibration_M1_Display27.decimalPlaces = 0;
		Vibration_M1_Display27.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display27.unitStrings = null;
		Vibration_M1_Display27.fonts = fonts48;
		Vibration_M1_Display27.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display27.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display27.enableInput = false;
		Vibration_M1_Display27.barcode = false;
		Vibration_M1_Display27.frameColor = 0x00908c7f;
		Vibration_M1_Display27.foreColor = 0x00aaa599;
		Vibration_M1_Display27.textColor = 0x00ffffff;
		Vibration_M1_Display27.text3DColor = 0x00000000;
		Vibration_M1_Display27.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display27.changeColor = false;
		Vibration_M1_Display27.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display27.drawObject = displayDraw0;
		Vibration_M1_Display27.alwaysDrawBackground = true;
		Vibration_M1_Display27.exprServer = exprServer;
		Vibration_M1_Display27.init();

		Vibration_M1_Display28 = new CgpNumericDisplay(280, 120, 320, 140, panelContext, this);
		Vibration_M1_Display28.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display28.variable = TagDB.Vars_Pump6.CurrentTemps.Motor_3_Temp;
		Vibration_M1_Display28.zeroSuppress = true;
		Vibration_M1_Display28.zeroDisplay = true;
		Vibration_M1_Display28.displayDigits = 3;
		Vibration_M1_Display28.decimalPlaces = 0;
		Vibration_M1_Display28.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display28.unitStrings = null;
		Vibration_M1_Display28.fonts = fonts48;
		Vibration_M1_Display28.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display28.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display28.enableInput = false;
		Vibration_M1_Display28.barcode = false;
		Vibration_M1_Display28.frameColor = 0x00908c7f;
		Vibration_M1_Display28.foreColor = 0x00aaa599;
		Vibration_M1_Display28.textColor = 0x00ffffff;
		Vibration_M1_Display28.text3DColor = 0x00000000;
		Vibration_M1_Display28.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display28.changeColor = false;
		Vibration_M1_Display28.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display28.drawObject = displayDraw0;
		Vibration_M1_Display28.alwaysDrawBackground = true;
		Vibration_M1_Display28.exprServer = exprServer;
		Vibration_M1_Display28.init();

		Vibration_M1_Display29 = new CgpNumericDisplay(280, 140, 320, 160, panelContext, this);
		Vibration_M1_Display29.dataType = CgpNumericDisplay.DATA_TYPE_INT;
		Vibration_M1_Display29.variable = TagDB.Vars_Pump6.CurrentTemps.Bottom_Bearing_Temp;
		Vibration_M1_Display29.zeroSuppress = true;
		Vibration_M1_Display29.zeroDisplay = true;
		Vibration_M1_Display29.displayDigits = 3;
		Vibration_M1_Display29.decimalPlaces = 0;
		Vibration_M1_Display29.displayFormat = CgpNumericDisplay.DISPLAY_FMT_DECIMAL;
		Vibration_M1_Display29.unitStrings = null;
		Vibration_M1_Display29.fonts = fonts48;
		Vibration_M1_Display29.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Vibration_M1_Display29.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Vibration_M1_Display29.enableInput = false;
		Vibration_M1_Display29.barcode = false;
		Vibration_M1_Display29.frameColor = 0x00908c7f;
		Vibration_M1_Display29.foreColor = 0x00aaa599;
		Vibration_M1_Display29.textColor = 0x00ffffff;
		Vibration_M1_Display29.text3DColor = 0x00000000;
		Vibration_M1_Display29.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display29.changeColor = false;
		Vibration_M1_Display29.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		Vibration_M1_Display29.drawObject = displayDraw0;
		Vibration_M1_Display29.alwaysDrawBackground = true;
		Vibration_M1_Display29.exprServer = exprServer;
		Vibration_M1_Display29.init();
		SilenceAlarmsBtn = new Switch_0012(160, 180, 240, 220, panelContext, this);
		SilenceAlarmsBtn.frameClr = 0x005d4833;
		SilenceAlarmsBtn.foreClr = 0x00227fe6;
		SilenceAlarmsBtn.backClr = 0x00000000;
		SilenceAlarmsBtn.pattern = 1;

		CgpFont	fonts122[];
		String	labels122[];
		fonts122 = new CgpFont[1];
		labels122 = new String[1];

		labels122[0] = "Silence\nAlarms";
		fonts122[0] = F1;

		SilenceAlarmsBtn.buzzer = true;

		SilenceAlarmsBtn.switchFonts = fonts122;
		SilenceAlarmsBtn.labels = labels122;

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

		CgpFont	fonts124[];
		String	labels124[];
		fonts124 = new CgpFont[1];
		labels124 = new String[1];

		labels124[0] = "Reset\nAll";
		fonts124[0] = F1;

		Switch02.buzzer = true;

		Switch02.switchFonts = fonts124;
		Switch02.labels = labels124;

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
		TagDB.Vars_Pump1.CurrentTemps.Vibration.addEventListener(Vibration_M1_Display, 0, panelContext);
		TagDB.Vars_Pump1.CurrentTemps.Motor_1_Temp.addEventListener(Vibration_M1_Display01, 0, panelContext);
		TagDB.Vars_Pump1.CurrentTemps.Motor_2_Temp.addEventListener(Vibration_M1_Display02, 0, panelContext);
		TagDB.Vars_Pump1.CurrentTemps.Motor_3_Temp.addEventListener(Vibration_M1_Display03, 0, panelContext);
		TagDB.Vars_Pump1.CurrentTemps.Bottom_Bearing_Temp.addEventListener(Vibration_M1_Display04, 0, panelContext);
		TagDB._UserLevel.addEventListener(Switch04, 0, panelContext);
		TagDB.Vars_Pump2.CurrentTemps.Vibration.addEventListener(Vibration_M1_Display05, 0, panelContext);
		TagDB.Vars_Pump2.CurrentTemps.Motor_1_Temp.addEventListener(Vibration_M1_Display06, 0, panelContext);
		TagDB.Vars_Pump2.CurrentTemps.Motor_2_Temp.addEventListener(Vibration_M1_Display07, 0, panelContext);
		TagDB.Vars_Pump2.CurrentTemps.Motor_3_Temp.addEventListener(Vibration_M1_Display08, 0, panelContext);
		TagDB.Vars_Pump2.CurrentTemps.Bottom_Bearing_Temp.addEventListener(Vibration_M1_Display09, 0, panelContext);
		TagDB.Vars_Pump3.CurrentTemps.Vibration.addEventListener(Vibration_M1_Display10, 0, panelContext);
		TagDB.Vars_Pump3.CurrentTemps.Motor_1_Temp.addEventListener(Vibration_M1_Display11, 0, panelContext);
		TagDB.Vars_Pump3.CurrentTemps.Motor_2_Temp.addEventListener(Vibration_M1_Display12, 0, panelContext);
		TagDB.Vars_Pump3.CurrentTemps.Motor_3_Temp.addEventListener(Vibration_M1_Display13, 0, panelContext);
		TagDB.Vars_Pump3.CurrentTemps.Bottom_Bearing_Temp.addEventListener(Vibration_M1_Display14, 0, panelContext);
		TagDB.Vars_Pump4.CurrentTemps.Vibration.addEventListener(Vibration_M1_Display15, 0, panelContext);
		TagDB.Vars_Pump4.CurrentTemps.Motor_1_Temp.addEventListener(Vibration_M1_Display16, 0, panelContext);
		TagDB.Vars_Pump4.CurrentTemps.Motor_2_Temp.addEventListener(Vibration_M1_Display17, 0, panelContext);
		TagDB.Vars_Pump4.CurrentTemps.Motor_3_Temp.addEventListener(Vibration_M1_Display18, 0, panelContext);
		TagDB.Vars_Pump4.CurrentTemps.Bottom_Bearing_Temp.addEventListener(Vibration_M1_Display19, 0, panelContext);
		TagDB.Vars_Pump5.CurrentTemps.Vibration.addEventListener(Vibration_M1_Display20, 0, panelContext);
		TagDB.Vars_Pump5.CurrentTemps.Motor_1_Temp.addEventListener(Vibration_M1_Display21, 0, panelContext);
		TagDB.Vars_Pump5.CurrentTemps.Motor_2_Temp.addEventListener(Vibration_M1_Display22, 0, panelContext);
		TagDB.Vars_Pump5.CurrentTemps.Motor_3_Temp.addEventListener(Vibration_M1_Display23, 0, panelContext);
		TagDB.Vars_Pump5.CurrentTemps.Bottom_Bearing_Temp.addEventListener(Vibration_M1_Display24, 0, panelContext);
		TagDB.Vars_Pump6.CurrentTemps.Vibration.addEventListener(Vibration_M1_Display25, 0, panelContext);
		TagDB.Vars_Pump6.CurrentTemps.Motor_1_Temp.addEventListener(Vibration_M1_Display26, 0, panelContext);
		TagDB.Vars_Pump6.CurrentTemps.Motor_2_Temp.addEventListener(Vibration_M1_Display27, 0, panelContext);
		TagDB.Vars_Pump6.CurrentTemps.Motor_3_Temp.addEventListener(Vibration_M1_Display28, 0, panelContext);
		TagDB.Vars_Pump6.CurrentTemps.Bottom_Bearing_Temp.addEventListener(Vibration_M1_Display29, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[65];
		zOrderList[0] = Switch01;
		zOrderList[1] = Vibration_M1_Display;
		zOrderList[2] = Vibration_M1_Display01;
		zOrderList[3] = Vibration_M1_Display02;
		zOrderList[4] = Vibration_M1_Display03;
		zOrderList[5] = Vibration_M1_Display04;
		zOrderList[6] = Switch03;
		zOrderList[7] = GroupObject03_Rectangle01;
		zOrderList[8] = GroupObject03_Rectangle06;
		zOrderList[9] = GroupObject03_Rectangle11;
		zOrderList[10] = GroupObject03_Rectangle16;
		zOrderList[11] = GroupObject03_Rectangle21;
		zOrderList[12] = GroupObject01_Rectangle01;
		zOrderList[13] = GroupObject01_Rectangle06;
		zOrderList[14] = GroupObject01_Rectangle11;
		zOrderList[15] = GroupObject01_Rectangle16;
		zOrderList[16] = GroupObject01_Rectangle21;
		zOrderList[17] = GroupObject04_Rectangle01;
		zOrderList[18] = GroupObject04_Rectangle06;
		zOrderList[19] = GroupObject04_Rectangle11;
		zOrderList[20] = GroupObject04_Rectangle16;
		zOrderList[21] = GroupObject04_Rectangle21;
		zOrderList[22] = GroupObject05_Rectangle01;
		zOrderList[23] = GroupObject05_Rectangle06;
		zOrderList[24] = GroupObject05_Rectangle11;
		zOrderList[25] = GroupObject05_Rectangle16;
		zOrderList[26] = GroupObject05_Rectangle21;
		zOrderList[27] = GroupObject06_Rectangle01;
		zOrderList[28] = GroupObject06_Rectangle06;
		zOrderList[29] = GroupObject06_Rectangle11;
		zOrderList[30] = GroupObject06_Rectangle16;
		zOrderList[31] = GroupObject06_Rectangle21;
		zOrderList[32] = Line01;
		zOrderList[33] = Line02;
		zOrderList[34] = Text02;
		zOrderList[35] = Text07;
		zOrderList[36] = Text06;
		zOrderList[37] = Switch04;
		zOrderList[38] = Vibration_M1_Display05;
		zOrderList[39] = Vibration_M1_Display06;
		zOrderList[40] = Vibration_M1_Display07;
		zOrderList[41] = Vibration_M1_Display08;
		zOrderList[42] = Vibration_M1_Display09;
		zOrderList[43] = Vibration_M1_Display10;
		zOrderList[44] = Vibration_M1_Display11;
		zOrderList[45] = Vibration_M1_Display12;
		zOrderList[46] = Vibration_M1_Display13;
		zOrderList[47] = Vibration_M1_Display14;
		zOrderList[48] = Vibration_M1_Display15;
		zOrderList[49] = Vibration_M1_Display16;
		zOrderList[50] = Vibration_M1_Display17;
		zOrderList[51] = Vibration_M1_Display18;
		zOrderList[52] = Vibration_M1_Display19;
		zOrderList[53] = Vibration_M1_Display20;
		zOrderList[54] = Vibration_M1_Display21;
		zOrderList[55] = Vibration_M1_Display22;
		zOrderList[56] = Vibration_M1_Display23;
		zOrderList[57] = Vibration_M1_Display24;
		zOrderList[58] = Vibration_M1_Display25;
		zOrderList[59] = Vibration_M1_Display26;
		zOrderList[60] = Vibration_M1_Display27;
		zOrderList[61] = Vibration_M1_Display28;
		zOrderList[62] = Vibration_M1_Display29;
		zOrderList[63] = SilenceAlarmsBtn;
		zOrderList[64] = Switch02;
		theZstack = zOrderList;

		IgpTouch touchList[] =
		{
			Switch02,
			SilenceAlarmsBtn,
			Switch04,
			Switch03,
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
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Vibration);
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Bottom_Bearing_Temp);
		tagListVector.add(TagDB.Vars_Pump2.CurrentTemps.Vibration);
		tagListVector.add(TagDB.Vars_Pump2.CurrentTemps.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump2.CurrentTemps.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump2.CurrentTemps.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump2.CurrentTemps.Bottom_Bearing_Temp);
		tagListVector.add(TagDB.Vars_Pump3.CurrentTemps.Vibration);
		tagListVector.add(TagDB.Vars_Pump3.CurrentTemps.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump3.CurrentTemps.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump3.CurrentTemps.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump3.CurrentTemps.Bottom_Bearing_Temp);
		tagListVector.add(TagDB.Vars_Pump4.CurrentTemps.Vibration);
		tagListVector.add(TagDB.Vars_Pump4.CurrentTemps.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump4.CurrentTemps.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump4.CurrentTemps.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump4.CurrentTemps.Bottom_Bearing_Temp);
		tagListVector.add(TagDB.Vars_Pump5.CurrentTemps.Vibration);
		tagListVector.add(TagDB.Vars_Pump5.CurrentTemps.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump5.CurrentTemps.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump5.CurrentTemps.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump5.CurrentTemps.Bottom_Bearing_Temp);
		tagListVector.add(TagDB.Vars_Pump6.CurrentTemps.Vibration);
		tagListVector.add(TagDB.Vars_Pump6.CurrentTemps.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump6.CurrentTemps.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump6.CurrentTemps.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump6.CurrentTemps.Bottom_Bearing_Temp);
		tagListVector.add(TagDB._UserLevel);
		tagListVector.add(TagDB.Global_Process_Bits.logoutProcess);
		tagListVector.add(TagDB.Global_Process_Bits.GotoSetup);

		super.registerTagList(tagListVector);
	}

	public void onClose()
	{
		super.onClose();

		Switch02.shutdown();

		SilenceAlarmsBtn.shutdown();

		Vibration_M1_Display29.shutdown();

		Vibration_M1_Display28.shutdown();

		Vibration_M1_Display27.shutdown();

		Vibration_M1_Display26.shutdown();

		Vibration_M1_Display25.shutdown();

		Vibration_M1_Display24.shutdown();

		Vibration_M1_Display23.shutdown();

		Vibration_M1_Display22.shutdown();

		Vibration_M1_Display21.shutdown();

		Vibration_M1_Display20.shutdown();

		Vibration_M1_Display19.shutdown();

		Vibration_M1_Display18.shutdown();

		Vibration_M1_Display17.shutdown();

		Vibration_M1_Display16.shutdown();

		Vibration_M1_Display15.shutdown();

		Vibration_M1_Display14.shutdown();

		Vibration_M1_Display13.shutdown();

		Vibration_M1_Display12.shutdown();

		Vibration_M1_Display11.shutdown();

		Vibration_M1_Display10.shutdown();

		Vibration_M1_Display09.shutdown();

		Vibration_M1_Display08.shutdown();

		Vibration_M1_Display07.shutdown();

		Vibration_M1_Display06.shutdown();

		Vibration_M1_Display05.shutdown();

		Switch04.shutdown();

		Switch03.shutdown();

		Vibration_M1_Display04.shutdown();

		Vibration_M1_Display03.shutdown();

		Vibration_M1_Display02.shutdown();

		Vibration_M1_Display01.shutdown();

		Vibration_M1_Display.shutdown();

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
			"Vibration & RTD Inputs",	// text
			40 + _dx,	// x
			0 + _dy,	// y
			241,	// width
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
			F30	// font type
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
			F30	// font type
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
			F30	// font type
		);
		Vibration_M1_Display.drawBackground(_g);

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
			F91	// font type
		);
		return true;
	}
	public CgpMasterPanel getMasterPanel()
	{
		return masterPanel;
	}

}
