using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.DI;

namespace Visage.Services.DI
{
	public class ServiceModule : VisageModuleBase
	{
		public override ProjectTypes Order
		{
			get { return ProjectTypes.Services; }
		}

		protected override void DoRegistrations()
		{

		}
	}
}
