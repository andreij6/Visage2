using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository;
using Visage.Domain.Models.Main;
using Visage.Repository.Interfaces;

namespace Visage.Repository.Adapters.User
{
	public class UserRepository : IUserRepository
	{
		public ApplicationUser GetByName(string userName)
		{
			ApplicationUser user = null;

			using (AppDB db = new AppDB())
			{
				DbSet<ApplicationUser> users = db.Users as DbSet<ApplicationUser>;
				user = users.Include("Roles").FirstOrDefault(x => x.UserName == userName);
			}

			return user;
		}

		public bool IsUserAdmin(string userName)
		{
			bool isAdmin = false;

			ApplicationUser user = GetByName(userName);

			if (user.Roles.Count() == 0)
				return isAdmin;

			using (AppDB db = new AppDB())
			{
				var roles = db.Roles.ToList();

				foreach (var role in user.Roles)
				{
					foreach (var storedRole in roles)
					{
						if (storedRole.Name == "Admin" || storedRole.Name == "SuperAdmin")
						{
							if (role.RoleId == storedRole.Id)
							{
								isAdmin = true;
							}
						}
					}
				}
			}

			return isAdmin;
		}
	}
}
