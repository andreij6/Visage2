using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;

namespace Visage.Repository.Adapters.Blog.Category
{
	public class CategoryRepository : ICategoryRepository
	{
		public void AddIfNull(bCategory bCategory)
		{
			using(AppDB db = new AppDB())
			{
				bCategory Category = db.bCategories.FirstOrDefault(x => x.Name == bCategory.Name);

				if (Category == null)
				{
					db.bCategories.Add(bCategory);
					db.SaveChanges();
				}
			}
		}

		public bool Delete(int id)
		{
			bool result = false;

			using (AppDB db = new AppDB()) 
			{ 
				bCategory category = db.bCategories.FirstOrDefault(x => x.CategoryId == id);

				db.bCategories.Remove(category);
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
				category = db.bCategories.FirstOrDefault(x => x.CategoryId == category.CategoryId);
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
				bCategory oldCategory = db.bCategories.FirstOrDefault(x => x.CategoryId == id);

				oldCategory.Modified = DateTime.Now;
				oldCategory.Name = category.Name;
				oldCategory.Description = category.Description;

				int saved = db.SaveChanges();

				if (saved != null)
					result = true;
			}

			return result;
		}
	}
}
