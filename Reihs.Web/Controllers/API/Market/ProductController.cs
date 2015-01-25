using Reihs.Repository.Models.Market;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Visage.Services.Handlers.Market;

namespace Reihs.Web.Controllers.API.Market
{
	[RoutePrefix("api/Products")]
	public class ProductController : ApiController
	{
		public readonly IProductService ProductService;

		public ProductController()
		{
			ProductService = new ProductService();
		}

		[Route()]
		[HttpGet]
		public IEnumerable<mProduct> GetAllProducts()
		{
			return ProductService.GetAll();
		}

		[Route("{productId:int}")]
		[HttpGet]
		public mProduct GetById(int productId)
		{
			return ProductService.GetById(productId);
		}

		
	}
}
