using System.Web.Http;
using Visage.Services.Handlers.Subscriber;
using Visage.Services.Models;

namespace Reihs.Web.Controllers.API
{
	[RoutePrefix("api/ConstantContact")]
	public class ConstantContactController : ApiController
	{
		private readonly ISubscriberService Service;
		public ConstantContactController()
		{
			Service = new SubscriberService();
		}

		[Route()]
		[HttpPost]
		public void Post([FromBody]SubscriberModel value)
		{
			Service.Subscribe(value);
		}
	}
}
