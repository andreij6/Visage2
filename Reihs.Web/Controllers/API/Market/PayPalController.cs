using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Visage.Services.Handlers.Market;

namespace Reihs.Web.Controllers.API.Market
{
	[RoutePrefix("api/PayPal")]
	public class PayPalController : ApiController
	{
		public readonly IPayPalService PayPal;

		public PayPalController()
		{
			PayPal = new PayPalService();
		}

		[Route("Add")]
		[HttpPost]
		public Task GetAllProducts([FromBody] PayPalItem item)
		{
			return PayPal.AddItemToCart(item.cmd, item.hosted_button_id);
		}
	}

	public class PayPalItem
	{
		public string cmd { get; set; }
		public string hosted_button_id { get; set; }
	}
}
