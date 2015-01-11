using Postal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Visage.Repository.ViewModels;
using Visage.Services.Handlers.Contact;

namespace Reihs.Web.Controllers.API
{
	[RoutePrefix("api/ContactUs")]
	public class ContactController : ApiController
	{
		private readonly IContactUsService contactService;
		public ContactController()
		{
			contactService = new ContactUsService();
		}

		[Route()]
		[HttpPost]
		public void Post([FromBody]ContactMessage value)
		{
			dynamic email = new Email("ContactUs");
			email.To = "andreij6@gmail.com";
			try
			{
				email.Send();
			}
			catch (Exception e)
			{

			}
			contactService.Send(value);
		}
	}
}
