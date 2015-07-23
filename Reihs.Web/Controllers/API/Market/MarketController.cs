using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Reihs.Services.Market;
using Visage.Services.Handlers.Market;

namespace Reihs.Web.Controllers.API.Market
{
	[RoutePrefix("api/Market")]
	public class MarketController : ApiController
	{
		#region Dependencies
		public readonly IShoppingCartService CartService;
		
		#endregion

		#region Constructors
		public MarketController(IShoppingCartService cartService)
		{
			CartService = cartService;
		}
		#endregion

		[Route("Cart/Add/{ProductId}")]
		[HttpGet]
		public IHttpActionResult Post(int ProductId)
		{
			var currentContext = HttpContext.Current;

			//bool success = CartService.Add(ProductId, currentContext);

			string BadRequestMessage = "Item Could not be added";

			return Response(true, BadRequestMessage);
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
