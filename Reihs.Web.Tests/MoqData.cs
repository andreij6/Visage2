using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models;
using Visage.Repository.Models.Blog;

namespace Reihs.Web.Tests
{
	public static class MoqData
	{

		internal static IEnumerable<bPost> Posts()
		{
			ApplicationUser Andre = new ApplicationUser();
			Andre.Email = "andreij6@gmail.com";
			Andre.UserName = "andreij6";

			#region Categories
			IEnumerable<bCategory> categories = new List<bCategory>
			{
				new bCategory 
				{
					Id = 1,
					Name = "News",
					Description = "Visage in the news",
					Posts = Enumerable.Empty<bPost>()
				},
				new bCategory
				{
					Id = 2,
					Name = "Deals",
					Description = "Visage Daily Deals",
					Posts = Enumerable.Empty<bPost>()
				}
			};
			#endregion

			#region Posts
			IEnumerable<bPost> posts = new List<bPost>
			{
				new bPost 
				{ 
					Id = 1,
					Title = "My first Blog Post",
					Subtitle = "The subtitle is...",
					Content = "All this content is amazing",
					Rating = 10,
					Likes = 50,
					Clicks = 60,
					Author = Andre,
					Category = categories.First()
				},
				new bPost
				{
					Id = 1,
					Title = "My second Blog Post",
					Subtitle = "The subtitle is that I dont know",
					Content = "All about burgers and such",
					Rating = 2,
					Likes = 25,
					Clicks = 30,
					Author = Andre,
					Category = categories.Last()
				},
				new bPost
				{
					Id = 1,
					Title = "My third Blog Post",
					Subtitle = "The subtitle is a little stranger",
					Content = "All this content is amazing",
					Rating = 55,
					Likes = 5,
					Clicks = 20,
					Author = Andre,
					Category = categories.First()
				}
			};
			#endregion

			return posts;
		}
	}
}
