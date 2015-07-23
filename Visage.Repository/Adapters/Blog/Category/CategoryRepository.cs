using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;
using Visage.Repository.Interfaces;

namespace Reihs.Repository.Adapters.Blog.Category
{
	public class CategoryRepository : ICategoryRepository
	{
		public bool Delete(int id)
		{
			bool result = false;

			using (AppDB db = new AppDB()) 
			{ 
				bCategory category = db.bCategories.FirstOrDefault(x => x.Id == id);
				var associatedPosts = db.bPosts.Where(x => x.CategoryId == category.Id).ToList();
				bCategory unCategorized = db.bCategories.FirstOrDefault(x => x.Name == "UnCategorized");

				foreach (var post in associatedPosts)
				{
					post.CategoryId = unCategorized.Id;
				}

				db.SaveChanges();

				db.bCategories.Remove(category);

				db.SaveChanges();
			}

			return result;
		}

		public IEnumerable<bCategory> GetAll()
		{
			IEnumerable<bCategory> results = Enumerable.Empty<bCategory>();

			using (AppDB db = new AppDB()) 
			{
				results = db.bCategories.ToList();
			}

			return results;
		}

		public bCategory GetById(int id)
		{
			bCategory category = null;
			
			using (AppDB db = new AppDB()) 
			{
				category = db.bCategories.FirstOrDefault(x => x.Id == category.Id);
			}

			return category;
		}

		public bool Add(bCategory category)
		{
			bool result = false;

			using (AppDB db = new AppDB()) 
			{
				var saved = db.bCategories.Add(category);
				db.SaveChanges();

				if (saved != null)
					result = true;
			}

			return result;
		}

		public bool Update(int id, bCategory category)
		{
			bool result = false;

			using (AppDB db = new AppDB()) 
			{
				bCategory oldCategory = db.bCategories.FirstOrDefault(x => x.Id == id);

				oldCategory.Modified = DateTime.Now;
				oldCategory.Name = category.Name;
				oldCategory.Description = category.Description;

				int saved = db.SaveChanges();

				if (saved != null)
					result = true;
			}

			return result;
		}
		
		public bCategory AddIfNull(string CategoryName)
		{
			bCategory result = null;

			using (AppDB db = new AppDB())
			{
				bCategory Category = db.bCategories.FirstOrDefault(x => x.Name == CategoryName);

				if (Category == null)
				{
					bCategory category = new bCategory
					{
						Name = CategoryName,
						Created = DateTime.Now,
						Modified = DateTime.Now
					};

					db.bCategories.Add(category);
					int id = db.SaveChanges();
					category.Id = id;
					result = category;
				}
				else
				{
					result = Category;
				}
			}

			return result;
		}
	}
}
