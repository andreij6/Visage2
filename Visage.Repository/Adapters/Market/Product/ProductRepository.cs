using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Market;

namespace Visage.Repository.Adapters.Market.Product
{
	public class ProductRepository : IProductRepository
	{
		public mProduct GetById(int ProductId)
		{
			mProduct result = null;

			using (AppDB db = new AppDB())
			{

			}

			return result;
		}

		public IEnumerable<mProduct> GetAll()
		{
			IEnumerable<mProduct> results = Enumerable.Empty<mProduct>();

			using (AppDB db = new AppDB())
			{

			}

			return results;
		}

		public void Add(mProduct product)
		{
			using (AppDB db = new AppDB())
			{

			}
		}

		public void Remove(int ProductId)
		{
			using (AppDB db = new AppDB())
			{

			}
		}

		public void Update(int ProductId, mProduct product)
		{
			using (AppDB db = new AppDB())
			{

			}
		}
	}
}
