package Projects.Target1;

import gpclasses.baseclasses.*;
import gpclasses.system.*;
import gpclasses.tags.*;
import gpclasses.trends.*;
import gpclasses.macroobjects.*;

public class TagDB1
{
	public static Object classFactory2(int tagFieldIdentifier)
	{
		TagDB.Authorization01 = new _DDT105();
		TagDB.Authorization01.UserName = new CgpStringTag("Authorization01.UserName", TagDB.startNumber + 0, false, "", 20, false, -1);
		TagDB.Authorization01.UserPW = new CgpStringTag("Authorization01.UserPW", TagDB.startNumber + 1, false, "", 20, false, -1);
		TagDB.Authorization01.Result = new CgpIntTag("Authorization01.Result", 1, TagDB.startNumber + 2, false, 0, false, -1);
		TagDB.Authorization01.Result.setMinMaxValues(-2147483648, 2147483647, true);
		TagDB.UserLogin = new CgpStringTag("UserLogin", TagDB.startNumber + 3, false, "", 10, false, -1);

		TagDB.PasswordLogin = new CgpStringTag("PasswordLogin", TagDB.startNumber + 4, false, "", 10, false, -1);

		TagDB.Global_Process_Bits.logoutProcess = new CgpDiscreteTag("Global_Process_Bits.logoutProcess", 1, TagDB.startNumber + 14, false, false, false, -1);

		TagDB.Global_Process_Bits.GotoSetup = new CgpDiscreteTag("Global_Process_Bits.GotoSetup", 1, TagDB.startNumber + 25, false, false, false, -1);

		TagDB._IPAddressStatus = new CgpDiscreteTag("_IPAddressStatus", 1, TagDB.startNumber + 121, false, false, false, -1);


		return TagDB2.classFactory3(tagFieldIdentifier);
	}

}
