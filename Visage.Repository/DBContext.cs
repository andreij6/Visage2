﻿using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Videos;
using Visage.Domain.Models.Main;

namespace Reihs.Repository
{
	public class AppDB : IdentityDbContext<ApplicationUser>
	{
		public AppDB()
			: base("DefaultConnection", throwIfV1Schema: false)
		{
			this.Configuration.LazyLoadingEnabled = true;
		}

		public static AppDB Create()
		{
			return new AppDB();
		}


		public DbSet<bPost> bPosts { get; set; }
		public DbSet<bCategory> bCategories { get; set; }
		public DbSet<bTag> bTags { get; set; }

		//Market
		public DbSet<pTags> pCategories { get; set; }
		public DbSet<mTags> mTags { get; set; }
		public DbSet<mProduct> mProducts { get; set; }
		public DbSet<CartItem> ShoppingCartItems { get; set; }
		public DbSet<Order> Orders { get; set; }
		public DbSet<OrderDetail> OrderDetails { get; set; }
		public DbSet<mPackage> Packages { get; set; }

		//TickerItems
		public DbSet<TickerItem> TickerItems { get; set; }

		//Videos
		public DbSet<Video> Videos { get; set; }

	}
}
