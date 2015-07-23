using System.Web.Http;
using Visage.Domain.Models;
using Visage.Domain.Models.View;
using Visage.Services.Handlers.Subscriber;
using Visage.Services.Interfaces;

namespace Reihs.Web.Controllers.API
{
	[RoutePrefix("api/ConstantContact")]
	public class ConstantContactController : ApiController
	{
		private readonly ISubscriberService Service;
		public ConstantContactController(ISubscriberService service)
		{
			Service = service;
		}

		[Route()]
		[HttpPost]
		public void Post([FromBody]SubscriberModel value)
		{
			Service.Subscribe(value);
		}
	}
}
