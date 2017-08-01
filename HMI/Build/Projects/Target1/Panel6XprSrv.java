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

public class Panel6XprSrv extends CgpExpressionServer
{
	public void executeExpression(int _caseNumber)
	{
		switch (_caseNumber)
		{
			case 1000:
				{
end:{//-------------------------------------
//Script Created: Jul 17, 2017
//
// Description:
//
//-------------------------------------

String user,login;
// SystemAdminName = "Admin",
// SystemAdminPassword = "abcdefghij";

// 1. Get entered user name and password then reset
user ="Admin";
login =TagDB.PasswordLogin.getStringValue(0);
TagDB.UserLogin.write("",0);
TagDB.PasswordLogin.write("",0);

// 2. If either user or password is empty exit script
if(user.length()==0)
break end;
if(login.length()==0)
break end;

CgpSecurityControl.securityControl.login(user,login);
boolean isAuthenticated =TagDB._UserLevel.getIntValue(0)>0;
if(isAuthenticated){
TagDB._CurPanelID.write(4,0);
}
}				}
				return;
		}
	}

}
