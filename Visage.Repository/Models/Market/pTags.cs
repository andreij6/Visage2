using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models.Market
{
	public class pTags
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public virtual ICollection<mPackage> Packages { get; set; }
	}
}
