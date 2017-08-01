package Projects.Target1;
import gpclasses.graphics.*;
public class SOText
{
	CgpFont	fonts[];
	String	strings[];
	int	langNums[];
	public SOText(String _strings[], CgpFont _fonts[], int _langNums[])
	{
		strings = _strings;
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
	public String GetString()
	{
		for(int i = 0; i < langNums.length; i++)
		{
			if(TagDB._UserApplicationLanguage.getIntValue() == langNums[i])
				return strings[i];
		}
		return strings[0];
	}
}
