using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Adapters.User
{
	public interface IUserRepository
	{
		Models.ApplicationUser GetByName(string userName);
	}
}
