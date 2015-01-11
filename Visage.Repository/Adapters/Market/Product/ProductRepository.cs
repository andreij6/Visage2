using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Models.Market;

namespace Reihs.Repository.Adapters.Market.Product
{
	public class ProductRepository : IProductRepository
	{
		public mProduct GetById(int ProductId)
		{
			mProduct result = null;

			using (AppDB db = new AppDB())
			{
				result = db.mProducts.FirstOrDefault(x => x.Id == ProductId);
			}

			return result;
		}

		public IEnumerable<mProduct> GetAll()
		{
			IEnumerable<mProduct> results = Enumerable.Empty<mProduct>();

			using (AppDB db = new AppDB())
			{
				results = db.mProducts.ToList();
			}

			return results;
		}

		public void Add(mProduct product)
		{
			using (AppDB db = new AppDB())
			{
				db.mProducts.Add(product);
				db.SaveChanges();
			}
		}

		public void Remove(int ProductId)
		{
			using (AppDB db = new AppDB())
			{
				var prod = db.mProducts.FirstOrDefault(x => x.Id == ProductId);
				db.mProducts.Remove(prod);
			}
		}

		public void Update(int ProductId, mProduct product)
		{
			using (AppDB db = new AppDB())
			{
				throw new NotImplementedException();
			}
		}
	}
}
