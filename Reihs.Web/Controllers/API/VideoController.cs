using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Visage.Repository.ViewModels;
using Visage.Services.Handlers.Videos;

namespace Reihs.Web.Controllers.API
{
	[RoutePrefix("api/Videos")]
    public class VideoController : ApiController
    {
		private readonly IVideoService videoService;

		public VideoController()
		{
			videoService = new VideoService();
		}

		[Route()]
		[HttpGet]
		public IEnumerable<VideoModel> GetAll()
		{
			return videoService.GetAll();
		}

		[Route("{videoId}:int")]
		[HttpGet]
		public VideoModel GetById(int videoId)
		{
			return videoService.GetById(videoId);
		}



    }
}
