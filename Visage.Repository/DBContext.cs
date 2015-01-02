using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models;
using Visage.Repository.Models.Blog;
using Visage.Repository.Models.Market;

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

		public DbSet<bPost> bPosts { get; set; }
		public DbSet<bCategory> bCategories { get; set; }
		public DbSet<bTag> bTags { get; set; }

		//Market
		public DbSet<mCategory> mCategories { get; set; }

		public DbSet<mProduct> mProducts { get; set; }

		public DbSet<CartItem> ShoppingCartItems { get; set; }

		public DbSet<Order> Orders { get; set; }

		public DbSet<OrderDetail> OrderDetails { get; set; }

	}
}
