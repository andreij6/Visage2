using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using RestSharp;
using Visage.Domain.Models.View;
using Visage.Services.Interfaces;

namespace Visage.Services.Handlers.Blog
{
	public class BlogSpotService : IBlogAPIService
	{
		public BlogViewModel Data { get; set; }

		public BlogSpotService()
		{

		}

		public BlogViewModel GetAll()
		{
			GetResponseData();

			return Data;
		}

		public BlogItem GetById(string blogId)
		{
			GetResponseData();

			var blogItem = Data.items.FirstOrDefault(x => x.friendlyUrl() == blogId);

			return blogItem;
		}

		public void GetResponseData()
		{
			var client = new RestClient("https://www.googleapis.com/blogger/v3/");
			//
			//5098336948783525034

			var request = new RestRequest("blogs/2321113543524186220/posts", Method.GET);

			request.AddQueryParameter("key", "AIzaSyDZlEa1FZrTvniovAsvB9y_3E4GkywB-sE");

			var response = client.Execute(request);

			Data = JsonConvert.DeserializeObject<BlogViewModel>(response.Content);
		}


	}
}
