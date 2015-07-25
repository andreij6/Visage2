using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Visage.Services.Interfaces;

namespace Reihs.Web.Controllers.MVC
{
	[AllowAnonymous]
	public class BlogController : Controller
	{
		public readonly IBlogAPIService Service;
		public BlogController(IBlogAPIService service)
		{
			Service = service;
		}

		// GET: Blog
		public ActionResult Index()
		{
			var blogs = Service.GetAll();

			return View(blogs);
		}

		[Route("{blogId}")]
		public ActionResult Detail(string blogId)
		{
			var blog = Service.GetById(blogId);

			return View(blog);
		}
	}
}