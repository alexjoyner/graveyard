package Projects.Target1;

import gpclasses.userScripts.*;
import gpclasses.userScripts.CgpUserScript;
import gpclasses.baseclasses.*;
import gpclasses.system.*;
import gpclasses.util.misc.*;
import gpclasses.plugins.script.*;
import gpclasses.plugins.diag.*;
import gpclasses.util.io.*;
import java.util.Hashtable;

public class ActionScript2 extends CgpUserScript
{
	public void run()
	{
end:{//-------------------------------------
//Script Created: Jul 18, 2017
//
// Description:
//
//-------------------------------------
boolean isAuthenticated =TagDB._UserLevel.getIntValue(0)>0;
int TripValueSetpointsScreenID =4;
int LoginScreenID =6;
if(isAuthenticated){
TagDB._CurPanelID.write(TripValueSetpointsScreenID,0);
}else{
TagDB._CurPanelID.write(LoginScreenID,0);
}
}
	}
}
