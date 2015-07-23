using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;
using Visage.Repository.Adapters.VideoRepo;
using Visage.Repository.Interfaces;
using Visage.Repository.Models.Videos;
using Visage.Repository.ViewModels;
using Visage.Repository.ViewModels.View;
using Visage.Services.Interfaces;

namespace Visage.Services.Handlers.Videos
{
	public class VideoService : IVideoService
	{
		protected readonly IVideoRepository Repository;

		public VideoService(IVideoRepository repo)
		{
			Repository = repo;
		}

		public IEnumerable<VideoModel> GetAll()
		{
			IEnumerable<Video> videos = Repository.GetAll();

			List<VideoModel> videoModels = new List<VideoModel>();

			foreach (var video in videos) 
			{
				VideoModel result = new VideoModel(video);
				videoModels.Add(result);
			}

			return videoModels;
		}

		public VideoModel GetById(int videoId)
		{
			Video video = Repository.GetById(videoId);

			return new VideoModel(video);
		}
	}
}
