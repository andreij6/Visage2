using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models.Market
{
	public class mCategory
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public string Description { get; set; }

		public IEnumerable<mProduct> Products { get; set; }
	}
}
