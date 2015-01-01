using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Reihs.Web.Controllers.API;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Web.Http;
using Visage.Repository.Models.Blog;
using System.Web.Http.Results;

namespace Reihs.Web.Tests.Controllers.API
{
	[TestClass]
	public class BlogControllerTest
	{
		[TestMethod]
		public void GetAllBlogs()
		{
			BlogController controller = new BlogController();

			IHttpActionResult actionResult = controller.Get();

			var contentResult = actionResult as OkNegotiatedContentResult<IEnumerable<bPost>>;

			Assert.IsNotNull(contentResult);
			Assert.IsNotNull(contentResult.Content);
		}

		//[TestMethod]
		//public void GetAllBlogsThrowsException()
		//{
		//	BlogController controller = new BlogController();

		//	IHttpActionResult actionResult = controller.Get();

		//	var contentResult = actionResult as BadRequestErrorMessageResult;

		//	Assert.IsNotNull(contentResult);
		//	Assert.IsNotNull(contentResult.Message);
		//	Assert.Equals(contentResult.Message, "No Blogs found");
		//}

		
	}
}
