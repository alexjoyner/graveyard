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
	public Switch_0008 Switch02;
	public Switch_0008 Switch03;
	public Switch_0008 SilenceAlarmsBtn;
	public Switch_0011 Switch04;
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
		Switch02 = new Switch_0008(80, 180, 160, 220, panelContext, this);
		Switch02.frameClr = 0x005d4833;
		Switch02.foreClr = 0x006ecc2a;
		Switch02.backClr = 0x00000000;
		Switch02.pattern = 1;

		CgpFont	fonts53[];
		String	labels53[];
		fonts53 = new CgpFont[1];
		labels53 = new String[1];

		labels53[0] = "Reset\nAll";
		fonts53[0] = F1;

		Switch02.buzzer = true;

		Switch02.switchFonts = fonts53;
		Switch02.labels = labels53;

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
		SilenceAlarmsBtn = new Switch_0008(160, 180, 240, 220, panelContext, this);
		SilenceAlarmsBtn.frameClr = 0x005d4833;
		SilenceAlarmsBtn.foreClr = 0x00227fe6;
		SilenceAlarmsBtn.backClr = 0x00000000;
		SilenceAlarmsBtn.pattern = 1;

		CgpFont	fonts55[];
		String	labels55[];
		fonts55 = new CgpFont[1];
		labels55 = new String[1];

		labels55[0] = "Silence\nAlarms";
		fonts55[0] = F1;

		SilenceAlarmsBtn.buzzer = true;

		SilenceAlarmsBtn.switchFonts = fonts55;
		SilenceAlarmsBtn.labels = labels55;

		SilenceAlarmsBtn.labelClr = intArray0;
		SilenceAlarmsBtn.label3DClr = intArray1;
		SilenceAlarmsBtn.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		SilenceAlarmsBtn.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		SilenceAlarmsBtn.bit0 = TagDB.System_Vars.SilenceAlarms;
		SilenceAlarmsBtn.alwaysDrawBackground = false;

		SilenceAlarmsBtn.init();

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
			"% of Full Scale",
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
		((CgpWindow)owner).drawBack();
		TagDB.Vars_Pump1.CurrentTemps.Vibration.addEventListener(Vibration_M1_Display, 0, panelContext);
		TagDB.Vars_Pump1.CurrentTemps.Motor_1_Temp.addEventListener(Vibration_M1_Display01, 0, panelContext);
		TagDB.Vars_Pump1.CurrentTemps.Motor_2_Temp.addEventListener(Vibration_M1_Display02, 0, panelContext);
		TagDB.Vars_Pump1.CurrentTemps.Motor_3_Temp.addEventListener(Vibration_M1_Display03, 0, panelContext);
		TagDB.Vars_Pump1.CurrentTemps.Bottom_Bearing_Temp.addEventListener(Vibration_M1_Display04, 0, panelContext);
		TagDB._UserLevel.addEventListener(Switch04, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[40];
		zOrderList[0] = Switch01;
		zOrderList[1] = Vibration_M1_Display;
		zOrderList[2] = Vibration_M1_Display01;
		zOrderList[3] = Vibration_M1_Display02;
		zOrderList[4] = Vibration_M1_Display03;
		zOrderList[5] = Vibration_M1_Display04;
		zOrderList[6] = Switch02;
		zOrderList[7] = Switch03;
		zOrderList[8] = SilenceAlarmsBtn;
		zOrderList[9] = GroupObject03_Rectangle01;
		zOrderList[10] = GroupObject03_Rectangle06;
		zOrderList[11] = GroupObject03_Rectangle11;
		zOrderList[12] = GroupObject03_Rectangle16;
		zOrderList[13] = GroupObject03_Rectangle21;
		zOrderList[14] = GroupObject01_Rectangle01;
		zOrderList[15] = GroupObject01_Rectangle06;
		zOrderList[16] = GroupObject01_Rectangle11;
		zOrderList[17] = GroupObject01_Rectangle16;
		zOrderList[18] = GroupObject01_Rectangle21;
		zOrderList[19] = GroupObject04_Rectangle01;
		zOrderList[20] = GroupObject04_Rectangle06;
		zOrderList[21] = GroupObject04_Rectangle11;
		zOrderList[22] = GroupObject04_Rectangle16;
		zOrderList[23] = GroupObject04_Rectangle21;
		zOrderList[24] = GroupObject05_Rectangle01;
		zOrderList[25] = GroupObject05_Rectangle06;
		zOrderList[26] = GroupObject05_Rectangle11;
		zOrderList[27] = GroupObject05_Rectangle16;
		zOrderList[28] = GroupObject05_Rectangle21;
		zOrderList[29] = GroupObject06_Rectangle01;
		zOrderList[30] = GroupObject06_Rectangle06;
		zOrderList[31] = GroupObject06_Rectangle11;
		zOrderList[32] = GroupObject06_Rectangle16;
		zOrderList[33] = GroupObject06_Rectangle21;
		zOrderList[34] = Line01;
		zOrderList[35] = Line02;
		zOrderList[36] = Text02;
		zOrderList[37] = Text07;
		zOrderList[38] = Text06;
		zOrderList[39] = Switch04;
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
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Vibration);
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Motor_1_Temp);
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Motor_2_Temp);
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Motor_3_Temp);
		tagListVector.add(TagDB.Vars_Pump1.CurrentTemps.Bottom_Bearing_Temp);
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

		Switch03.shutdown();

		Switch02.shutdown();

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
