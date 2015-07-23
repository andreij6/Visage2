using SendGrid;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using Reihs.Services.Handlers.Contact;
using System.Web.Configuration;
using Visage.Services.Interfaces;
using Visage.Domain.Models.View;

namespace Reihs.Web.Controllers.API
{
	[RoutePrefix("api/ContactUs")]
	public class ContactController : ApiController
	{
		private readonly IContactUsService contactService;
		public ContactController(IContactUsService service)
		{
			contactService = service;
		}

		[Route()]
		[HttpPost]
		public void Post([FromBody]ContactMessage value)
		{
			var username = WebConfigurationManager.AppSettings["SendGridUserName"];
			var pswd = WebConfigurationManager.AppSettings["SendGridPswd"];

			contactService.Send(value, username, pswd);
			
		}
	}
}
