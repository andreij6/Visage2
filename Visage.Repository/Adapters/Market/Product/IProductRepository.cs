using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Models.Market;

namespace Reihs.Repository.Adapters.Market.Product
{
	public interface IProductRepository
	{
		mProduct GetById(int ProductId);

		IEnumerable<mProduct> GetAll();

		void Add(mProduct product);

		void Remove(int ProductId);

		void Update(int ProductId, mProduct product);

	}
}
