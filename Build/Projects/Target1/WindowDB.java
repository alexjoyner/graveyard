package Projects.Target1;
import gpclasses.baseclasses.*;
import gpclasses.system.CgpWindow;

public class WindowDB extends CgpObject
{
	public static CgpWindow LogoutPopup = new CgpWindow(160, 120, CgpWindow.WIN_POP | CgpWindow.TL | CgpWindow.NO_FRAME | CgpWindow.NON_PERSISTENT );

	static {
		LogoutPopup.setPanelHistory(32);
	}
}
