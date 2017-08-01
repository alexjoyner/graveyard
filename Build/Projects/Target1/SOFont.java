package Projects.Target1;
import gpclasses.graphics.*;
public class SOFont
{
	CgpFont	fonts[];
	int	langNums[];
	public SOFont(CgpFont _fonts[], int _langNums[])
	{
		fonts = _fonts;
		langNums = _langNums;
	}
	public CgpFont GetFont()
	{
		for(int i = 0; i < langNums.length; i++)
		{
			if(TagDB._UserApplicationLanguage.getIntValue() == langNums[i])
				return fonts[i];
		}
		return fonts[0];
	}
}
