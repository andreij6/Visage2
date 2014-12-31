using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Reihs.Web.Controllers.API;
using System.Collections.Generic;
using System.Collections;
using System.Linq;

namespace Reihs.Web.Tests.Controllers.API
{
	[TestClass]
	public class BlogControllerTest
	{
		[TestMethod]
		public void Get()
		{
			BlogController controller = new BlogController();

			IEnumerable<string> result = controller.Get();

			List<string> results = result.ToList();

			Assert.AreEqual(results.Count, 2);
		}
	}
}
