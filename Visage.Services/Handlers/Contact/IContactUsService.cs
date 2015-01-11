using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.ViewModels;

namespace Reihs.Services.Handlers.Contact
{
	public interface IContactUsService
	{
		void Send(ContactMessage value, string username, string password);
	}
}
