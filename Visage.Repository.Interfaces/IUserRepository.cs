using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;

namespace Visage.Repository.Interfaces
{
	public interface IUserRepository
	{
		ApplicationUser GetByName(string userName);

		bool IsUserAdmin(string userName);
	}
}
