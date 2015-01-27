using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Market;

namespace Reihs.Repository.Models.Market
{
	public class mProduct
	{
		public int Id { get; set; }

		public ICollection<mTags> Categories { get; set; }

		public string Name { get; set; }

		public string Description { get; set; }

		public string ImagePath { get; set; }

		public string Brand { get; set; }

		public double UnitPrice { get; set; }

		public string PayPalId { get; set; }
	}
}
