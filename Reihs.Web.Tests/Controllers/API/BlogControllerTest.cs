using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Reihs.Web.Controllers.API;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Web.Http;
using Reihs.Repository.Models.Blog;
using System.Web.Http.Results;
using Reihs.Web.Tests.Services;

namespace Reihs.Web.Tests.Controllers.API
{
	[TestClass]
	public class BlogControllerTest
	{
		//[TestMethod]
		//public void GetAllBlogs()
		//{
		//	MoqBlogService blogService = new MoqBlogService();

		//	BlogController controller = new BlogController(blogService);

		//	IHttpActionResult actionResult = controller.Get();

		//	var contentResult = actionResult as OkNegotiatedContentResult<IEnumerable<bPost>>;

		//	Assert.IsNotNull(contentResult);
		//	Assert.IsNotNull(contentResult.Content);
		//}

		[TestMethod]
		public void GetBlogById()
		{
			//using real DB
			BlogController controller = new BlogController();

			IHttpActionResult actionResult = controller.Get(1);

			var contentResult = actionResult as OkNegotiatedContentResult<bPost>;

			Assert.IsNotNull(contentResult);
			Assert.IsNotNull(contentResult.Content);
			Assert.AreEqual(contentResult.Content.Title, "My first Blog Post");
		}

	}
}
