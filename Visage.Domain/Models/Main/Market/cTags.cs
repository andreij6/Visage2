using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Domain.Models.Main
{
	public class mTags
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public virtual ICollection<mProduct> Products { get; set; }
	}
}
