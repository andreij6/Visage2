using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Videos;

namespace Visage.Repository.Adapters.VideoRepo
{
	public interface IVideoRepository
	{
		IEnumerable<Video> GetAll();

		Video GetById(int videoId);
	}
}
