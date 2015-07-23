using Reihs.Repository.Adapters.Market.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.ViewModels;
using Visage.Services.Interfaces;
using Visage.Domain.Models.Main;
using Visage.Domain.Models.View;
using Visage.Repository.Interfaces;

namespace Visage.Services.Handlers.Market
{
	public class ProductService : IProductService
	{
		public readonly IProductRepository ProductRepo;

		public ProductService(IProductRepository repo)
		{
			ProductRepo = repo;
		}

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


		public void Delete(int productId)
		{
			ProductRepo.Remove(productId);
		}

		public void Save(NewProductModel product)
		{
			mProduct newProd = new mProduct();

			newProd.Brand = product.Brand;
			newProd.Categories = product.Categories;
			newProd.Description = product.Description;
			newProd.ImagePath = product.ImagePath;
			newProd.Name = product.Name;
			newProd.PayPalId = product.PayPalId;
			newProd.UnitPrice = product.UnitPrice;

			ProductRepo.Add(newProd);
		}

		public void Update(int ProductId, NewProductModel value)
		{
			ProductRepo.Update(ProductId, value);
		}
	}
}
