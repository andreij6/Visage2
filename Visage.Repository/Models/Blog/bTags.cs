using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reihs.Repository.Models.Blog
{
	public class bTag
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public virtual ICollection<bPost> Blogs { get; set; }

	}
}
