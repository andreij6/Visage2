using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Services.Models
{
	//{
	//	"lists": [{ "id": "1574416253" }],
	//	"email_addresses": [{
	//		  "email_address": "delete_me@yahoo.com"
	//	   }],
	//	   "first_name": "Bob",
	//	   "last_name": "Sample"
	//}
	public class SubscriberRequestModel
	{
		public SubscriberRequestModel()
		{
			lists = new List<ContactList>();
			email_addresses = new List<EmailAddress>();
		}
		public List<ContactList> lists { get; set; }
		public List<EmailAddress> email_addresses { get; set; }
		public string first_name { get; set; }
		public string last_name { get; set; }
	}

	public class EmailAddress
	{
		public EmailAddress(string email)
		{
			this.email_address = email;
		}
		public string email_address { get; set; }
	}

	public class ContactList
	{
		public ContactList(string id)
		{
			this.id = id;
		}
		public string id { get; set; }

	}
}
