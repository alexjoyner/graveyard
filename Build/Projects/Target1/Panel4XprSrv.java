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

public class Panel4XprSrv extends CgpExpressionServer
{
	public int executeIntExpression(int i)
	{
		switch (i)
		{
			case 1000:
			case 1002:
			case 1004:
			case 1006:
			case 1008:
				{
					quality = CgpTag.TAG_QUALITY_GOOD;
					return (0);
				}
			case 1001:
			case 1003:
			case 1005:
			case 1007:
			case 1009:
				{
					quality = CgpTag.TAG_QUALITY_GOOD;
					return (999);
				}
			case 1010:
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
