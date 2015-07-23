using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Visage.Domain.Models.Main;
using Visage.Domain.Models.View;
using Visage.Services.Handlers.Ticker;
using Visage.Services.Handlers.Ticker.Implementations;
using Visage.Services.Interfaces;

namespace Reihs.Web.Controllers.API
{
	[RoutePrefix("api/Ticker")]
	public class TickerController : ApiController
	{
		#region Dependencies
		protected readonly ITickerService TickerService;
		#endregion

		#region Constructors
		public TickerController(ITickerService tickerService)
		{
			TickerService = tickerService;
		}
		#endregion

		[Route("Get")]
		[HttpGet]
		public IEnumerable<TickerModel> Get()
		{
			IEnumerable<TickerModel> posts = TickerService.GetAll();

			return posts;
		}

		[Route("Get/{PostId:int}")]
		[HttpGet]
		public IHttpActionResult Get(int tickerId)
		{
			TickerItem post = TickerService.GetById(tickerId);

			if (post != null)
				return Ok<TickerItem>(post);
			else
				return Response(false, "Ticker with Id " + tickerId + " not found");
		}

		[Route("Post")]
		[HttpPost]
		public void Post([FromBody]NewTickerItem value)
		{
			bool success = TickerService.Post(value);
		}

		[Route("Update/{PostId:int}")]
		[HttpPut]
		public IHttpActionResult Put(int TickerId, [FromBody]TickerItem value)
		{
			bool success = TickerService.Update(TickerId, value);

			string BadRequestMessage = String.Format("Ticker with Id: {0} did not update", TickerId);

			return Response(success, BadRequestMessage);
		}

		[Route("Delete/{PostId:int}")]
		[HttpDelete]
		public IHttpActionResult Delete(int TickerId)
		{
			bool success = TickerService.Delete(TickerId);

			string BadRequestMessage = String.Format("Blog with Id: {0} did not delete", TickerId);

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
