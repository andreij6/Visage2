using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;

namespace Visage.Services.Models
{
	public class PostModel
	{
		public int Id { get; set; }

		public int CategoryId { get; set; }

		public IEnumerable<string> Tags { get; set; }

		public string Title { get; set; }

		public string Subtitle { get; set; }

		public string Content { get; set; }

		public string Author { get; set; }

		public int Rating { get; set; }

		public int Likes { get; set; }

		public int Clicks { get; set; }

		public bool Public { get; set; }
	}
}
