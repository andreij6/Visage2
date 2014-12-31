using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models;
using Visage.Repository.Models.Blog;

namespace Visage.Repository
{
	public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
	{
		public ApplicationDbContext()
			: base("DefaultConnection", throwIfV1Schema: false)
		{
		}

		public static ApplicationDbContext Create()
		{
			return new ApplicationDbContext();
		}

		public DbSet<bPost> Posts { get; set; }
		public DbSet<bCategory> Categories { get; set; }
		public DbSet<bTag> Tags { get; set; }


	}
}
