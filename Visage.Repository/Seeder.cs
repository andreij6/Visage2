using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using Microsoft.AspNet.Identity.EntityFramework;
using Visage.Repository.Models;
using Microsoft.AspNet.Identity;

namespace Visage.Repository
{
	public static class Seeder
	{
		public static void Seed(AppDB context)
		{
			SeedUserInfo(context);

			SeedBlogInfo(context);
			
			//SeedMarketInfo(context);
		}

		#region Market Seeders
		private static void SeedMarketInfo(AppDB context)
		{
			SeedMarketCategories(context);
			SeedProducts(context);
			SeedCartItems(context);
			SeedOrderDetails(context);
			SeedOrders(context);
		}


		private static void SeedOrders(AppDB context)
		{
			throw new NotImplementedException();
		}

		private static void SeedOrderDetails(AppDB context)
		{
			throw new NotImplementedException();
		}

		private static void SeedCartItems(AppDB context)
		{
			throw new NotImplementedException();
		}

		private static void SeedProducts(AppDB context)
		{
			throw new NotImplementedException();
		}

		private static void SeedMarketCategories(AppDB context)
		{
			throw new NotImplementedException();
		}
		#endregion

		#region Blog Seeders
		private static void SeedBlogInfo(AppDB context)
		{
			SeedCategories(context);
			SeedTags(context);
			SeedPosts(context);
		}

		private static void SeedPosts(AppDB context)
		{
			#region Create Tags
			List<bTag> tags = context.bTags.ToList();

			List<bTag> blogOneTags = new List<bTag>();
			List<bTag> blogTwoTags = new List<bTag>();
			List<bTag> blogThreeTags = new List<bTag>();

			blogOneTags.Add(tags[1]);
			blogOneTags.Add(tags[2]);

			blogTwoTags.Add(tags[0]);

			blogThreeTags.Add(tags[1]);
			blogThreeTags.Add(tags[2]);
			blogThreeTags.Add(tags[0]);
			#endregion
			if (context.bPosts == null) 
			{
				throw new Exception("Context is null");
			}

			context.bPosts.AddOrUpdate(x => x.Id,
			   new bPost
			   {
				   Id = 1,
				   Title = "My first Blog Post",
				   Subtitle = "The subtitle is...",
				   Content = "All this content is amazing",
				   Rating = 10,
				   Likes = 50,
				   Clicks = 60,
				   AuthorId = context.Users.FirstOrDefault().Id,
				   Tags = blogOneTags,
				   CategoryId = 1,
				   Created = DateTime.Now.AddDays(-3),
				   Modified = DateTime.Now.AddDays(-2)
			   },
				new bPost
				{
					Id = 2,
					Title = "My second Blog Post",
					Subtitle = "The subtitle is that I dont know",
					Content = "All about burgers and such",
					Rating = 2,
					Likes = 25,
					Clicks = 30,
					AuthorId = context.Users.FirstOrDefault().Id,
					Tags = blogTwoTags,
					CategoryId = 2,
					Created = DateTime.Now.AddDays(-1),
					Modified = DateTime.Now.AddDays(-1)
				},
				new bPost
				{
					Id = 3,
					Title = "My third Blog Post",
					Subtitle = "The subtitle is a little stranger",
					Content = "All this content is amazing",
					Rating = 55,
					Likes = 5,
					Clicks = 20,
					AuthorId = context.Users.FirstOrDefault().Id,
					Tags = blogThreeTags,
					CategoryId = 1,
					Created = DateTime.Now,
					Modified = DateTime.Now
				}
			);

			context.SaveChanges();


		}

		private static void SeedTags(AppDB context)
		{
			context.bTags.AddOrUpdate(x => x.Id,
					new bTag
					{
						Id = 1,
						Name = "Flavor"
					},
					new bTag
					{
						Id = 2,
						Name = "Symbology"
					},
					new bTag
					{
						Id = 3,
						Name = "Arches"
					}
				);

			context.SaveChanges();
		}

		private static void SeedCategories(AppDB context)
		{
			context.bCategories.AddOrUpdate(x => x.Id,
					new bCategory
					{
						Id = 1,
						Name = "News",
						Description = "Visage in the news",
						Posts = Enumerable.Empty<bPost>(),
						Created = DateTime.Now.AddDays(-4),
						Modified = DateTime.Now
					},
					new bCategory
					{
						Id = 2,
						Name = "Deals",
						Description = "Visage Daily Deals",
						Posts = Enumerable.Empty<bPost>(),
						Created = DateTime.Now.AddDays(-3),
						Modified = DateTime.Now
					}
				);

			context.SaveChanges();
		}
		#endregion

		#region SeedUsers
		private static void SeedUserInfo(AppDB context)
		{
			SeedRoles(context);
			SeedUsers(context);
		}

		private static void SeedUsers(AppDB context)
		{
			if (!context.Roles.Any(r => r.Name == "SuperAdmin"))
			{
				var store = new RoleStore<IdentityRole>(context);
				var manager = new RoleManager<IdentityRole>(store);
				var role = new IdentityRole { Name = "SuperAdmin" };

				manager.Create(role);
			}

			if (!context.Users.Any(u => u.UserName == "andreij6@gmail.com"))
			{
				var store = new UserStore<ApplicationUser>(context);
				var manager = new UserManager<ApplicationUser>(store);
				var user = new ApplicationUser { UserName = "andreij6@gmail.com" };

				manager.Create(user, "ChangeItAsap!");
				manager.AddToRole(user.Id, "SuperAdmin");
			}

			context.SaveChanges();

		}

		private static void SeedRoles(AppDB context)
		{
			context.Roles.AddOrUpdate(r => r.Name,
					new IdentityRole
					{
						Name = "Editor"
					},
					new IdentityRole
					{
						Name = "User"
					}
				);
		}

		#endregion
	}
}
