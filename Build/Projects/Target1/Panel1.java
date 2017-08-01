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
	public Lamp_0001 Lamp01;
	public Lamp_0001 Lamp02;
	public Lamp_0001 Lamp03;
	private CgpMasterPanel masterPanel = null;

	public void createStaticObjects()
	{

		setBacklightColor(0);
	}
	public String getPanelName()
	{
		return "Panel1";
	}
	public int getPanelID()
	{
		return 1;
	}

	public void onOpen()
	{
		super.onOpen();

		Integer contextObject = new Integer(panelContext);

		Lamp01 = new Lamp_0001(0, 0, 79, 79, panelContext, this);
		int intArray0[] = {0x007f7f7f, 0x0000ff11, };
		Lamp01.foreClr = intArray0;
		int intArray1[] = {0x00000000, 0x00000000, };
		Lamp01.backClr = intArray1;
		int intArray2[] = {1, 1, };
		Lamp01.pattern = intArray2;
		Lamp01.controlTag01 = TagDB.PLC_ModbusEquipment01.Green_light;
		Lamp01.alwaysDrawBackground = false;

		Lamp01.init();
		Lamp02 = new Lamp_0001(80, 0, 159, 79, panelContext, this);
		int intArray3[] = {0x007f7f7f, 0x0000ffee, };
		Lamp02.foreClr = intArray3;
		Lamp02.backClr = intArray1;
		Lamp02.pattern = intArray2;
		Lamp02.controlTag01 = TagDB.PLC_ModbusEquipment01.Yellow_light;
		Lamp02.alwaysDrawBackground = false;

		Lamp02.init();
		Lamp03 = new Lamp_0001(160, 0, 239, 79, panelContext, this);
		int intArray4[] = {0x007f7f7f, 0x000000ff, };
		Lamp03.foreClr = intArray4;
		Lamp03.backClr = intArray1;
		Lamp03.pattern = intArray2;
		Lamp03.controlTag01 = TagDB.PLC_ModbusEquipment01.Red_light;
		Lamp03.alwaysDrawBackground = false;

		Lamp03.init();
		((CgpWindow)owner).drawBack();
		TagDB.PLC_ModbusEquipment01.Green_light.addEventListener(Lamp01, 0, panelContext);
		TagDB.PLC_ModbusEquipment01.Yellow_light.addEventListener(Lamp02, 0, panelContext);
		TagDB.PLC_ModbusEquipment01.Red_light.addEventListener(Lamp03, 0, panelContext);

		CgpGraphics zOrderList[] = new CgpGraphics[3];
		zOrderList[0] = Lamp01;
		zOrderList[1] = Lamp02;
		zOrderList[2] = Lamp03;
		theZstack = zOrderList;

		registerTagList();
		postOnOpen();
	}

	public void registerTagList()
	{
		Vector tagListVector = new Vector();
		tagListVector.add(TagDB._UserApplicationLanguage);
		tagListVector.add(TagDB.PLC_ModbusEquipment01.Green_light);
		tagListVector.add(TagDB.PLC_ModbusEquipment01.Red_light);
		tagListVector.add(TagDB.PLC_ModbusEquipment01.Yellow_light);

		super.registerTagList(tagListVector);
	}

	public void onClose()
	{
		super.onClose();

		Lamp03.shutdown();

		Lamp02.shutdown();

		Lamp01.shutdown();
	}
	public CgpMasterPanel getMasterPanel()
	{
		return masterPanel;
	}

}
