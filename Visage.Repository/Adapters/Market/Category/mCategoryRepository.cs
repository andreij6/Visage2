using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Market;

namespace Visage.Repository.Adapters.Market.Category
{
	public class mCategoryRepository : ImCategoryRepository
	{
		public mCategory GetById(int CategoryId)
		{
			mCategory result = null;

			using (AppDB db = new AppDB())
			{
				result = db.mCategories.FirstOrDefault(x => x.Id == CategoryId);
			}

			return result;
		}

		public IEnumerable<mCategory> GetAll()
		{
			IEnumerable<mCategory> results = Enumerable.Empty<mCategory>();

			using (AppDB db = new AppDB())
			{
				results = db.mCategories.ToList();
			}

			return results;
		}

		public void Add(mCategory category)
		{
			using (AppDB db = new AppDB())
			{
				db.mCategories.Add(category);
				db.SaveChanges();
			}
		}

		public void Remove(int CategoryId)
		{
			using (AppDB db = new AppDB())
			{
				var category = db.mCategories.FirstOrDefault(x => x.Id == CategoryId);
				db.mCategories.Remove(category);
				db.SaveChanges();
			}
		}

		public void Update(int CategoryId, mCategory category)
		{
			using (AppDB db = new AppDB())
			{
				throw new NotImplementedException();
			}
		}
	}
}
