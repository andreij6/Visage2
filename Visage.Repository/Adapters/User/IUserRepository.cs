using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reihs.Repository.Adapters.User
{
	public interface IUserRepository
	{
		Models.ApplicationUser GetByName(string userName);

		bool IsUserAdmin(string userName);
	}
}
