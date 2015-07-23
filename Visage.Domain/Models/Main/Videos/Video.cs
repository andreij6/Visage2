using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Videos;

namespace Visage.Domain.Models.Main
{
	public class Video : IVideo
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public string Image { get; set; }

		public string Url { get; set; }

	}
}
