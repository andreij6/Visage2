using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models;

namespace Visage.Repository.Adapters.User
{
	public class UserRepository : IUserRepository
	{
		public ApplicationUser GetByName(string userName)
		{
			ApplicationUser user = null;

			using (AppDB db = new AppDB())
			{
				user = db.Users.FirstOrDefault(x => x.UserName == userName);
			}

			return user;
		}
	}
}
