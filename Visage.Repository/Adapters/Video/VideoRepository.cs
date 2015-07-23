using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository;
using Visage.Domain.Models.Main;
using Visage.Repository.Interfaces;
using Visage.Repository.Models.Videos;

namespace Visage.Repository.Adapters.VideoRepo
{
	public class VideoRepository : IVideoRepository
	{
		public IEnumerable<Video> GetAll()
		{
			var result = new List<Video>();

			using (AppDB db = new AppDB()) {
				result = db.Videos.ToList();
			}

			return result;
		}

		public Video GetById(int videoId)
		{
			Video result = null;

			using (AppDB db = new AppDB()) {
				result = db.Videos.FirstOrDefault(x => x.Id == videoId);
			}

			return result;
		}
	}
}
