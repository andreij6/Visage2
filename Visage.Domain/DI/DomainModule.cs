using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Domain.DI
{
	public class DomainModule : VisageModuleBase
	{
		public override ProjectTypes Order
		{
			get { return ProjectTypes.Domain; }
		}

		protected override void DoRegistrations()
		{

		}
	}
}
