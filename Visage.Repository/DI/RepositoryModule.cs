using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.DI;

namespace Visage.Repository.DI
{
	public class RepositoryModule : VisageModuleBase
	{
		public override ProjectTypes Order
		{
			get { return ProjectTypes.Repository; }
		}

		protected override void DoRegistrations()
		{

		}
	}
}
