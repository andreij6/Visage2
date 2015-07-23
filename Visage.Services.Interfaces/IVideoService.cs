using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.ViewModels.View;

namespace Visage.Services.Interfaces
{
	public interface IVideoService
	{
		IEnumerable<VideoModel> GetAll();

		VideoModel GetById(int videoId);
	}
}
