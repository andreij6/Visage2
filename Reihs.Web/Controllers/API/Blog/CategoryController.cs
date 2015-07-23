using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Reihs.Services.Blog;
using Visage.Domain.Models.View;
using Visage.Services.Interfaces;

namespace Reihs.Web.Controllers.API.Blog
{
	[RoutePrefix("api/Category")]
	public class CategoryController : ApiController
	{
		private readonly ICategoryService CatService;

		#region Controllers
		public CategoryController(ICategoryService service)
		{
			CatService = service;
		}

		#endregion

		[Route("Get")]
		[HttpGet]
		public IEnumerable<bCategoryModel> Get()
		{
			return CatService.GetAll();
		}

		[Route("Post")]
		[HttpPost]
		public void Post([FromBody] NewCategoryModel model)
		{
			CatService.Post(model);
		}

		[Route("Delete/{CategoryId:int}")]
		[HttpDelete]
		public void Remove(int CategoryId)
		{
			CatService.Delete(CategoryId);
		}
	}
}
