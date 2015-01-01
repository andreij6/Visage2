using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Visage.Repository.Models.Blog;
using Visage.Services.Blog;

namespace Reihs.Web.Controllers.API
{
	[RoutePrefix("api/Blog")]
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

		[Route("Get")]
		public IHttpActionResult Get()
		{
			IEnumerable<bPost> posts = BlogService.GetAll();

			if (posts != null)
				return Ok<IEnumerable<bPost>>(posts);
			else
				return Response(false, "No Blogs found");
		}

		[Route("Get/{PostId:int}")]
		public IHttpActionResult Get(int PostId)
		{
			bPost post = BlogService.GetById(PostId);

			if (post != null)
				return Ok<bPost>(post);
			else
				return Response(false, "Blog with Id " + PostId + " not found");
		}

		[Route("Get")]
		public IHttpActionResult Post([FromBody]bPost value)
		{
			bool success = BlogService.Post(value);

			string BadRequestMessage = "Blog Could not be created";

			return Response(success, BadRequestMessage);
		}

		[Route("Update/{PostId:int}")]
		public IHttpActionResult Put(int PostId, [FromBody]bPost value)
		{
			bool success = BlogService.Update(value);

			string BadRequestMessage = String.Format("Blog with Id: {0} did not update", PostId);

			return Response(success, BadRequestMessage);
		}

		[Route("Delete/{PostId:int}")]
		public IHttpActionResult Delete(int PostId)
		{
			bool success = BlogService.Delete(PostId);

			string BadRequestMessage = String.Format("Blog with Id: {0} did not delete", PostId);

			return Response(success, BadRequestMessage);
		}

		[NonAction]
		public IHttpActionResult Response(bool success, string BadRequestMessage)
		{
			if (success)
			{
				return Ok();
			}
			else
			{
				return BadRequest(BadRequestMessage);
			}
		}
	}
}
