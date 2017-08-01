package Projects.Target1;

import gpclasses.baseclasses.*;
import gpclasses.system.*;
import java.lang.System;
import gpclasses.plugins.script.*;
import java.util.Date;
import gpclasses.plugins.diag.*;
import gpclasses.util.misc.*;
import gpclasses.userScripts.*;
import gpclasses.util.io.*;

public class Panel5XprSrv extends CgpExpressionServer
{
	public void executeExpression(int _caseNumber)
	{
		switch (_caseNumber)
		{
			case 1000:
				{
end:{//-------------------------------------
//Script Created: Jul 18, 2017
//
// Description:
//
//-------------------------------------
boolean isAuthenticated =TagDB._UserLevel.getIntValue(0)>0;
if(isAuthenticated){
TagDB._CurPanelID.write(4,0);
}else{
TagDB._CurPanelID.write(5,0);
}
}				}
				return;
		}
	}

	public int executeIntExpression(int i)
	{
		switch (i)
		{
			case 1001:
			case 1003:
				{
					quality = CgpTag.TAG_QUALITY_GOOD;
					return (0);
				}
			case 1002:
			case 1004:
				{
					quality = CgpTag.TAG_QUALITY_GOOD;
					return (999);
				}
			case 1005:
				{
					quality = TagDB._UserLevel.getTagDataQuality();
					if ((TagDB._UserLevel.getIntValue(0))>0)
						return 1;
					else
						return 0;
				}
		}
		return 0;
	}

}
