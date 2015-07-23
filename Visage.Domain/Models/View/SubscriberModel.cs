using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Domain.Models.View
{
	//{
	//	"lists": [{ "id": "1574416253" }],
	//	"email_addresses": [{
	//		  "email_address": "delete_me@yahoo.com"
	//	   }],
	//	   "first_name": "Bob",
	//	   "last_name": "Sample"
	//}
	public class SubscriberModel
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }

		public SubscriberRequestModel makeSubcriber()
		{
			SubscriberRequestModel r = new SubscriberRequestModel();
			r.first_name = this.FirstName;
			r.last_name = this.LastName;
			r.email_addresses.Add(new EmailAddress(this.Email));
			r.lists.Add(new ContactList("1574416253"));
			return r;
		}
	}
}
