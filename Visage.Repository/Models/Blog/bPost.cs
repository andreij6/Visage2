using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Interfaces;

namespace Visage.Repository.Models.Blog
{
	public class bPost : Audit, IRate
	{
		public int Id { get; set; }

		public bCategory Category { get; set; }

		public string Title { get; set; }

		public string Subtitle { get; set; }

		public string Content { get; set; }

		public int Rating { get; set; }

		public int Likes { get; set; }

		public int Clicks { get; set; }
	}
}
