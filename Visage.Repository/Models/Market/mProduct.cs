using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models.Market
{
	public class mProduct
	{
		public int Id { get; set; }

		public int? CategoryId { get; set; }

		public virtual mCategory Category { get; set; }

		public string Name { get; set; }

		public string Description { get; set; }

		public string ImagePath { get; set; }

		public string Brand { get; set; }

		public double UnitPrice { get; set; }
	}
}
