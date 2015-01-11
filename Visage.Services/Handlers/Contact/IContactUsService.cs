using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.ViewModels;

namespace Visage.Services.Handlers.Contact
{
	public interface IContactUsService
	{
		void Send(ContactMessage value);
	}
}
