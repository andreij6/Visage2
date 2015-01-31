using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models.Videos
{
	public class Video : IVideo
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public string Image { get; set; }

		public string Url { get; set; }

	}
}
