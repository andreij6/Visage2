using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.View;

namespace Visage.Services.Interfaces
{
	public interface IContactUsService
	{
		void Send(ContactMessage value, string username, string password);
	}
}
