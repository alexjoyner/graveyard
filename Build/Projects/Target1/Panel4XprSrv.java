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
			case 1011:
			case 1013:
			case 1015:
			case 1017:
			case 1019:
			case 1021:
			case 1023:
			case 1025:
			case 1027:
			case 1029:
			case 1031:
			case 1033:
			case 1035:
			case 1037:
			case 1039:
			case 1041:
			case 1043:
			case 1045:
			case 1047:
			case 1049:
			case 1051:
			case 1053:
			case 1055:
			case 1057:
			case 1059:
				{
					quality = CgpTag.TAG_QUALITY_GOOD;
					return (0);
				}
			case 1001:
			case 1003:
			case 1005:
			case 1007:
			case 1009:
			case 1012:
			case 1014:
			case 1016:
			case 1018:
			case 1020:
			case 1022:
			case 1024:
			case 1026:
			case 1028:
			case 1030:
			case 1032:
			case 1034:
			case 1036:
			case 1038:
			case 1040:
			case 1042:
			case 1044:
			case 1046:
			case 1048:
			case 1050:
			case 1052:
			case 1054:
			case 1056:
			case 1058:
			case 1060:
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
