using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models.Blog
{
	public class bCategory : Audit
	{
		public int CategoryId { get; set; }

		public string Name { get; set; }

		public IEnumerable<bPost> Posts { get; set; }
	}
}
