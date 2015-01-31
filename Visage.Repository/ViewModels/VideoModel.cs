using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Videos;

namespace Visage.Repository.ViewModels
{
	public class VideoModel : IVideo
	{
		private Video video;

		public VideoModel(Video video)
		{
			this.Id = video.Id;
			Name = video.Name;
			Image = video.Image;
			this.Url = video.Url;
		}
		public int Id { get; set; }

		public string Name { get; set; }

		public string Image { get; set; }

		public string Url { get; set; }
	}
}
