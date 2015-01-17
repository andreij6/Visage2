using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Models.Blog;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using Microsoft.AspNet.Identity.EntityFramework;
using Reihs.Repository.Models;
using Microsoft.AspNet.Identity;
using Reihs.Repository.Models.Market;

namespace Reihs.Repository
{
	public static class Seeder
	{
		public static void Seed(AppDB context)
		{
			SeedUserInfo(context);

			SeedBlogInfo(context);
			
			SeedMarketInfo(context);
		}

		#region Market Seeders
		private static void SeedMarketInfo(AppDB context)
		{
			SeedProducts(context);
			SeedCartItems(context);
			SeedOrderDetails(context);
			SeedOrders(context);
		}


		private static void SeedOrders(AppDB context)
		{
			
		}

		private static void SeedOrderDetails(AppDB context)
		{
			
		}

		private static void SeedCartItems(AppDB context)
		{
			
		}

		private static void SeedProducts(AppDB context)
		{
			context.mProducts.AddOrUpdate(x => x.Id,
					new mProduct
					{
						Name = "Lytera® Skin Brightening Complex",
						Brand = "SkinMedica",
						UnitPrice = 125.0
					},
					new mProduct
					{
						Name = "AHA / BHA Cleanser",
						Brand = "SkinMedica",
						UnitPrice = 46.0
					},
					new mProduct
					{
						Name = "AHA/BHA Cream",
						Brand = "SkinMedica",
						UnitPrice = 42.0
					},
					new mProduct
					{
						Name = "Daily Physical Defense® Sunscreen Broad Spectrum SPF 30+",
						Brand = "SkinMedica",
						UnitPrice = 46.0
					},
					new mProduct
					{
						Name = "Dermal Repair Cream",
						Brand = "SkinMedica",
						UnitPrice = 124.0
					},
					new mProduct
					{
						Name = "Environmental Defense Sunscreen™ SPF 50+ with UV ProPlex™",
						Brand = "SkinMedica",
						UnitPrice = 46.0
					},
					new mProduct
					{
						Name = "Facial Cleanser",
						Brand = "SkinMedica",
						UnitPrice = 36.0
					},
					new mProduct
					{
						Name = "Hydrating Complex",
						Brand = "SkinMedica",
						UnitPrice = 84.0
					},
					new mProduct
					{
						Name = "Purifying Foaming Wash",
						Brand = "SkinMedica",
						UnitPrice = 42.0
					},
					new mProduct
					{
						Name = "Redness Relief CalmPlex",
						Brand = "SkinMedica",
						UnitPrice = 84.0
					},
					new mProduct
					{
						Name = "Rejuvenative Moisturizer",
						Brand = "SkinMedica",
						UnitPrice = 56.0
					},
					new mProduct
					{
						Name = "Rejuvenative Toner",
						Brand = "SkinMedica",
						UnitPrice = 36.0
					},
					new mProduct
					{
						Name = "Retinol Complex .25",
						Brand = "SkinMedica",
						UnitPrice = 60.0
					},
					new mProduct
					{
						Name = "Retinol Complex 0.5",
						Brand = "SkinMedica",
						UnitPrice = 75.0
					},
					new mProduct
					{
						Name = "Retinol Complex 1.0",
						Brand = "SkinMedica",
						UnitPrice = 90.0
					},
					new mProduct
					{
						Name = "Scar Recovery Gel with Centelline™ (0.5 Oz.)",
						Brand = "SkinMedica",
						UnitPrice = 42.0
					},
					new mProduct
					{
						Name = "Scar Recovery Gel with Centelline™ (2 Oz.)",
						Brand = "SkinMedica",
						UnitPrice = 98.0
					},
					new mProduct
					{
						Name = "Sensitive Skin Cleanser",
						Brand = "SkinMedica",
						UnitPrice = 36.0
					},
					new mProduct
					{
						Name = "TNS Ceramide Treatment Cream™",
						Brand = "SkinMedica",
						UnitPrice = 66.0
					},
					new mProduct
					{
						Name = "TNS Essential Serum®",
						Brand = "SkinMedica",
						UnitPrice = 270.0
					},
					new mProduct
					{
						Name = "TNS Eye Repair™",
						Brand = "SkinMedica",
						UnitPrice = 98.0
					},
					new mProduct
					{
						Name = "TNS Illuminating Eye Cream®",
						Brand = "SkinMedica",
						UnitPrice = 88.0
					},
					new mProduct
					{
						Name = "TNS Lip Plump System®",
						Brand = "SkinMedica",
						UnitPrice = 58.0
					},
					new mProduct
					{
						Name = "TNS Recovery Complex®",
						Brand = "SkinMedica",
						UnitPrice = 172.0
					},
					new mProduct
					{
						Name = "TNS Ultimate Daily Moisturizer™ SPF 20 Sunscreen",
						Brand = "SkinMedica",
						UnitPrice = 88.0
					},
					new mProduct
					{
						Name = "Ultra Sheer Moisturizer",
						Brand = "SkinMedica",
						UnitPrice = 56.0
					},
					new mProduct
					{
						Name = "Uplifting Eye Serum™",
						Brand = "SkinMedica",
						UnitPrice = 58.0
					},
					new mProduct
					{
						Name = "Vitamin C+E Complex",
						Brand = "SkinMedica",
						UnitPrice = 98.0
					}

				);

			context.SaveChanges();
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
