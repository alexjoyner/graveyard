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

public class Panel6 extends CgpPanel
{
	public Panel6XprSrv exprServer;

	public Switch_0009 Switch01;
	public CgpNumericDisplay PasswordLoginInput;
	public Switch_0010 Switch02;
	CgpFont F36_0;
	public CgpSmartKeypadString  stringKeypad;
	private CgpMasterPanel masterPanel = null;
	public int publishedTo()
		{
			return CgpSystem.HMI;
		}

	public void createStaticObjects()
	{
		exprServer = new Panel6XprSrv();

		setBacklightColor(0);
	}
	public String getPanelName()
	{
		return "LoginScreen";
	}
	public int getPanelID()
	{
		return 6;
	}

	public int getBackColor()
	{
		return 0x004c402a;
	}

	public void onOpen()
	{
		super.onOpen();

		Integer contextObject = new Integer(panelContext);

		CgpFont textFont0 = new CgpFont("TCP8x13", CgpFont.PLAIN, (byte)13, (byte)8);

		stringKeypad = new CgpSmartKeypadString(panelContext, this);
		stringKeypad.init();
		Switch01 = new Switch_0009(20, 20, 80, 40, panelContext, this);
		Switch01.frameClr = 0x006e726e;
		Switch01.foreClr = 0x00dd9933;
		Switch01.backClr = 0x00000000;
		Switch01.pattern = 1;

		CgpFont	fonts36[];
		String	labels36[];
		fonts36 = new CgpFont[1];
		labels36 = new String[1];

		labels36[0] = "Back";

		F36_0 = new CgpFont("TCP8x13", CgpFont.PLAIN, (byte)13, (byte)8);
		fonts36[0] = F36_0;

		Switch01.buzzer = true;

		Switch01.switchFonts = fonts36;
		Switch01.labels = labels36;

		int intArray0[] = {0x00ffffff, };
		Switch01.labelClr = intArray0;
		int intArray1[] = {0x00000000, };
		Switch01.label3DClr = intArray1;
		Switch01.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch01.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch01.alwaysDrawBackground = false;

		Switch01.init();

		PasswordLoginInput = new CgpNumericDisplay(120, 100, 280, 120, panelContext, this);
		PasswordLoginInput.dataType = CgpNumericDisplay.DATA_TYPE_STRING;
		PasswordLoginInput.variable = TagDB.PasswordLogin;
		PasswordLoginInput.writeOnlyMode = true;
		PasswordLoginInput.stringLength = 10;
		CgpFont	fonts55[][] = {
			{ textFont0 },
			};
		PasswordLoginInput.fonts = fonts55;
		PasswordLoginInput.horizontalAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		PasswordLoginInput.verticalAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		PasswordLoginInput.enableInput = true;
		PasswordLoginInput.displayPopupKeypad = true;
		PasswordLoginInput.keypad = stringKeypad;
		PasswordLoginInput.beepOnTouch = false;
		PasswordLoginInput.barcode = false;
		PasswordLoginInput.frameColor = 0x00c3c3bb;
		PasswordLoginInput.foreColor = 0x00c3c3bb;
		PasswordLoginInput.textColor = 0x00ffffff;
		PasswordLoginInput.text3DColor = 0x00000000;
		PasswordLoginInput.textBlinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		PasswordLoginInput.changeColor = false;
		PasswordLoginInput.blinkSpeed = CgpNumericDisplay.BLINK_TYPE_NONE;
		CgpNumericDisplayDraw displayDraw0 = new D_Display01(1,1,1,1);
		PasswordLoginInput.drawObject = displayDraw0;
		PasswordLoginInput.alwaysDrawBackground = false;
		PasswordLoginInput.init();
		Switch02 = new Switch_0010(200, 140, 260, 160, panelContext, this);
		Switch02.frameClr = 0x006ecc2a;
		Switch02.foreClr = 0x006ecc2a;
		Switch02.backClr = 0x00000000;
		Switch02.pattern = 1;

		CgpFont	fonts57[];
		String	labels57[];
		fonts57 = new CgpFont[1];
		labels57 = new String[1];

		labels57[0] = "Login";
		fonts57[0] = F36_0;

		Switch02.buzzer = true;

		Switch02.switchFonts = fonts57;
		Switch02.labels = labels57;

		Switch02.labelClr = intArray0;
		Switch02.label3DClr = intArray1;
		Switch02.horzAlign = CgpText.DISPLAY_ALIGNMENT_CENTER;
		Switch02.vertAlign = CgpText.DISPLAY_POSITION_MIDDLE;
		Switch02.scriptID0 = 1000;
		Switch02.exprServer = exprServer;
		Switch02.alwaysDrawBackground = false;

		Switch02.init();

		CgpText Text02 = new CgpText
		(
			"Password",
			CgpText.DISPLAY_ANGLE_0,	// displayAngle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// displayDirection
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// displayAlignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// displayPosition
			0,	// lineSpacing
			F36_0,
			0x00ffffff,	// TextColor
			0x00908c7f,	// BackColor
			40,	// x1
			100,	// y1
			120,	// x2
			120,	// y2
			CgpColor.makeTransparentColor(0x088d8c7f),	// BorderColor
			(byte)1,	// LineWidth
			CgpLinePattern.LINE_SOLID,
			0,
			this
		);
		Text02.set3DColor(0x00ff0000);
		((CgpWindow)owner).drawBack();
		TagDB.PasswordLogin.addEventListener(PasswordLoginInput, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[5];
		zOrderList[0] = Switch01;
		zOrderList[1] = PasswordLoginInput;
		zOrderList[2] = Switch02;
		zOrderList[3] = Text02;
		zOrderList[4] = stringKeypad;
		theZstack = zOrderList;

		IgpTouch touchList[] =
		{
			stringKeypad,
			Switch02,
			PasswordLoginInput,
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
		tagListVector.add(TagDB._UserLevel);
		tagListVector.add(TagDB.PasswordLogin);

		super.registerTagList(tagListVector);
	}

	public void onClose()
	{
		super.onClose();
		stringKeypad.shutdown();

		Switch02.shutdown();

		PasswordLoginInput.shutdown();

		Switch01.shutdown();
	}

	public boolean drawBackground(int gp)
	{
		CgpCanvas _g = new CgpCanvas(gp);

		// Rectangle01
		_g.fillRectWithBorder
		(
			0x00908c7f,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			40 + _dx,	// x
			100 + _dy,	// y
			81,	// width
			21,	// height
			0x00aaa599,	// fg color
			0x00aaa599,	// bg color
			1,	// fill pattern
			CgpRectangle.SQUARE_CORNERS,	// corner type
			10,	// arc width
			10	// arc height
		);
		PasswordLoginInput.drawBackground(_g);

		// Text01
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Security Login",	// text
			100 + _dx,	// x
			60 + _dy,	// y
			121,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F36_0	// font type
		);
		return true;
	}
	public CgpMasterPanel getMasterPanel()
	{
		return masterPanel;
	}

}
