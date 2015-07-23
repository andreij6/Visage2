using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Domain.Models.Main
{
	public class mPackage
	{
		[Key]
		public int PackageId { get; set; }

		public virtual ICollection<pTags> Categories { get; set; }

		public string Name { get; set; }

		public double UnitPrice { get; set; }
	}
}
