using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models.Blog
{
	public class NewPostModel
	{
		public string Category { get; set; }

		public IEnumerable<string> Tags { get; set; }

		public string Title { get; set; }

		public string Subtitle { get; set; }

		public string Content { get; set; }

		public string Author { get; set; }

		public bool Public { get; set; }
	}
}
