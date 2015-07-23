using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;

namespace Visage.Repository.Interfaces
{
	public interface IProductRepository
	{
		mProduct GetById(int ProductId);

		IEnumerable<mProduct> GetAll();

		void Add(mProduct product);

		void Remove(int ProductId);

		void Update(int ProductId, IProduct product);

	}
}
