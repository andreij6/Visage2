using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;
using Visage.Repository.Models.Videos;

namespace Visage.Repository.Interfaces
{
	public interface IVideoRepository
	{
		IEnumerable<Video> GetAll();

		Video GetById(int videoId);
	}
}
