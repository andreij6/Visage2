using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.ViewModels;
using SendGrid;
using System.Net.Mail;
using System.Net;

namespace Reihs.Services.Handlers.Contact
{
	public class ContactUsService : IContactUsService
	{
		public void Send(ContactMessage value, string username, string pswd)
		{
			var myMessage = new SendGridMessage();

			myMessage.From = new MailAddress("john@example.com");

			// Add multiple addresses to the To field.
			List<String> recipients = new List<String>
			{
			    @"Andre Jones <andreij6@gmail.com>"
			};

			myMessage.AddTo(recipients);

			myMessage.Subject = "Testing the SendGrid Library";

			myMessage.Html = "<p>Contact Us Submission</p>" +
				"<ul><li> Name: "+ value.Name +"<li>"+
					"<li>Email:"+ value.Email +"<li>"+
					"<li>Phone Number:"+ value.PhoneNumber +"<li>"+
				"</ul>";
			
			myMessage.Text = "Contact Us Submission \n Name: " + value.Name + "Email: " + value.Email + "Phone Number:" + value.PhoneNumber;

			var credentials = new NetworkCredential(username, pswd);

			var transportWeb = new SendGrid.Web(credentials);

			transportWeb.Deliver(myMessage);
		}
	}
}
