using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;
using Visage.Domain.Models.View;

namespace Visage.Services.Interfaces
{
	public interface IProductService
	{
		IEnumerable<mProduct> GetAll();

		mProduct GetById(int productId);

		void Delete(int productId);

		void Save(NewProductModel product);

		void Update(int ProductId, NewProductModel value);
	}
}
