using Reihs.Repository.Adapters.Market.Product;
using Reihs.Repository.Models.Market;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Services.Handlers.Market
{
	public class ProductService : IProductService
	{
		public readonly IProductRepository ProductRepo;

		public ProductService()
		{
			ProductRepo = new ProductRepository();
		}

		public IEnumerable<mProduct> GetAll()
		{
			return ProductRepo.GetAll();
		}

		public mProduct GetById(int productId)
		{
			return ProductRepo.GetById(productId);
		}
	}
}
