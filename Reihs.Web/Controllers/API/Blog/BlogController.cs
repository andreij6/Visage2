using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Visage.Services.Blog;

namespace Reihs.Web.Controllers.API
{
	public class BlogController : ApiController
	{
		#region Dependencies
		public IBlogService BlogService { get; set; }
		#endregion

		#region Constructors
		public BlogController()
		{
			BlogService = new BlogService();
		}

		public BlogController(IBlogService blogService)
		{
			BlogService = blogService;
		}
		#endregion

		// GET: api/Blog
		public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET: api/Blog/5
		public string Get(int id)
		{
			return "value";
		}

		// POST: api/Blog
		public void Post([FromBody]string value)
		{
		}

		// PUT: api/Blog/5
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE: api/Blog/5
		public void Delete(int id)
		{
		}
	}
}
