using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Resources;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository
{
	public static class Descriptions
	{
		public static string EvenUp()
		{
			return getString("EvenUp");
		}

		public static string SkinBrightening()
		{
			return getString("SkinBrightening");
		}

		public static string getString(string name)
		{
			return DescriptionsResource.SkinBrightening;
		}
	}
}
