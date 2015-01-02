﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Visage.Repository.Models.Market;
using Visage.Services.Market;

namespace Reihs.Web.Controllers.API.Market
{
	public class MarketController : ApiController
	{
		#region Dependencies
		public IShoppingCartService CartService { get; set; }
		#endregion

		#region Constructors
		public MarketController()
		{
			CartService = new ShoppingCartService();
		}

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

			bool success = CartService.Add(ProductId, currentContext);

			string BadRequestMessage = "Item Could not be added";

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
