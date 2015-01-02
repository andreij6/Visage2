using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models.Blog
{
	public class bCategory : Audit
	{
		[Key]
		public int Id { get; set; }

		public string Name { get; set; }

		public string Description { get; set; }

		public IEnumerable<bPost> Posts { get; set; }
	}
}
