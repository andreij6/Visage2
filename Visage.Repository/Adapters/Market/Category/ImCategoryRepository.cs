using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Market;

namespace Visage.Repository.Adapters.Market.Category
{
	public interface ImCategoryRepository
	{
		mCategory GetById(int CategoryId);

		IEnumerable<mCategory> GetAll();

		void Add(mCategory category);

		void Remove(int CategoryId);

		void Update(int CategoryId, mCategory category);
	}
}
