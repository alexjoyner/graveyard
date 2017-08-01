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

public class Panel1 extends CgpPanel
{
	CgpFont F6;
	CgpFont F9;
	CgpFont F13;
	CgpFont F14;
	private CgpMasterPanel masterPanel = null;
	public int publishedTo()
		{
			return CgpSystem.HMI;
		}

	public void createStaticObjects()
	{

		setBacklightColor(0);
	}
	public String getPanelName()
	{
		return "Intro";
	}
	public int getPanelID()
	{
		return 1;
	}

	public int getBackColor()
	{
		return 0x004c402a;
	}

	public void onOpen()
	{
		super.onOpen();

		Integer contextObject = new Integer(panelContext);

		F6 = new CgpFont("TCP13x23", CgpFont.BOLD, (byte)23, (byte)13);

		F9 = new CgpFont("TCP13x23F", CgpFont.PLAIN, (byte)23, (byte)13);

		F13 = new CgpFont("TCP28x50", CgpFont.PLAIN, (byte)50, (byte)28);

		F14 = new CgpFont("TCP8x13", CgpFont.PLAIN, (byte)13, (byte)8);

		((CgpWindow)owner).drawBack();
		CgpAction Panel1Action1 = new CgpAction(new Panel1ActionScript1(), "DelayChangePanel");
		CgpPeriodicTrigger PeriodicAction1 = new CgpPeriodicTrigger(5000, CgpTimerManager.SCHEDULE_FORCE_SLEEP, Panel1Action1, panelContext);
		PeriodicAction1.onlyPublishTo(CgpSystem.HMI);


		registerTagList();
		postOnOpen();
	}

	public void registerTagList()
	{
		Vector tagListVector = new Vector();
		tagListVector.add(TagDB._UserApplicationLanguage);

		super.registerTagList(tagListVector);
	}

	public void onClose()
	{
		super.onClose();
		CgpPeriodicTrigger.shutdown(panelContext);
	}

	public boolean drawBackground(int gp)
	{
		CgpCanvas _g = new CgpCanvas(gp);

		// Text02
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x003b4ce6,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			3,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Pump Protection\nSystem",	// text
			0 + _dx,	// x
			140 + _dy,	// y
			320,	// width
			60,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F6	// font type
		);
		// GroupObject01_Rectangle01
		_g.fillRectWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			3,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			0 + _dx,	// x
			78 + _dy,	// y
			320,	// width
			60,	// height
			CgpColor.makeTransparentColor(0x08c0c0c0),	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.ARC_CORNERS,	// corner type
			30,	// arc width
			30	// arc height
		);
		// GroupObject01_Text03
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			0x00996633,	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"OKC Whitewater\nFacility",	// text
			0 + _dx,	// x
			78 + _dy,	// y
			320,	// width
			60,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F9	// font type
		);
		// Text01
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"KSB",	// text
			70 + _dx,	// x
			24 + _dy,	// y
			121,	// width
			41,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F13	// font type
		);
		// Text03
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"Version 2.0",	// text
			40 + _dx,	// x
			200 + _dy,	// y
			101,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F14	// font type
		);
		// Text04
		_g.drawStringWithBorder
		(
			CgpColor.makeTransparentColor(0x08ffffff),	// border color
			0x00ffffff,	// text color
			CgpColor.makeTransparentColor(0x08000000),	// bg color
			0x00ff0000,	// 3D color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			"July 2017",	// text
			180 + _dx,	// x
			200 + _dy,	// y
			101,	// width
			21,	// height
			CgpText.DISPLAY_ANGLE_0,	// display angle
			CgpText.DISPLAY_DIRECTION_HORIZONTAL,	// display direction
			CgpText.DISPLAY_ALIGNMENT_CENTER,	// display alignment
			CgpText.DISPLAY_POSITION_MIDDLE,	// display position
			0,	// line spacing
			F14	// font type
		);
		// GroupObject02_Rectangle01
		_g.fillRectWithBorder
		(
			0x00c3bfc3,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			181 + _dx,	// x
			13 + _dy,	// y
			50,	// width
			50,	// height
			0x00ffffff,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.ARC_CORNERS,	// corner type
			15,	// arc width
			15	// arc height
		);
		// GroupObject02_Polygon01
		int[] GroupObject02_N24 =
		{
			205 + _dx, 56 + _dy,
			196 + _dx, 62 + _dy,
			218 + _dx, 62 + _dy,
			218 + _dx, 56 + _dy,
			203 + _dx, 56 + _dy,
		};
		_g.fillPolygonWithBorder
		(
			GroupObject02_N24,	// array of points
			5,	// num of points
			0x00996633,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			0x00ffffff,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			(byte)1
		);
		// GroupObject02_Rectangle02
		_g.fillRectWithBorder
		(
			0x00c3bfc3,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			190 + _dx,	// x
			20 + _dy,	// y
			32,	// width
			36,	// height
			0x004c402a,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			CgpRectangle.ARC_CORNERS,	// corner type
			9,	// arc width
			9	// arc height
		);
		// GroupObject02_Ellipse01
		_g.fillOvalWithBorder
		(
			181 + _dx,	// x
			35 + _dy,	// y
			29,	// width
			28,	// height
			0x00996633,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			0x00ffffff	// line color
		);
		// GroupObject02_Ellipse02
		_g.fillOvalWithBorder
		(
			188 + _dx,	// x
			42 + _dy,	// y
			15,	// width
			14,	// height
			0x004c402a,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			0x00ffffff	// line color
		);
		// GroupObject02_Polygon02
		int[] GroupObject02_N20 =
		{
			181 + _dx, 51 + _dy,
			182 + _dx, 29 + _dy,
			186 + _dx, 23 + _dy,
			188 + _dx, 29 + _dy,
			188 + _dx, 52 + _dy,
		};
		_g.fillPolygonWithBorder
		(
			GroupObject02_N20,	// array of points
			5,	// num of points
			0x00996633,	// fg color
			0x00000000,	// bg color
			1,	// fill pattern
			0x00996633,	// border color
			1,	// line width
			CgpLinePattern.LINE_SOLID,	// line pattern
			(byte)1
		);
		return true;
	}
	public CgpMasterPanel getMasterPanel()
	{
		return masterPanel;
	}

}
