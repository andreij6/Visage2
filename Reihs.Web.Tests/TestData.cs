using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reihs.Web.Tests
{
//	public class TestPostRepo : IPostRepository
//	{
//	//	public TestPostRepo()
//	//	{
//	//		IList<Product> products = new List<Product>
//	//		 {
//	//			new Product { ProductId = 1, Name = "C# Unleashed",
//	//			    Description = "Short description here", Price = 49.99 },
//	//			new Product { ProductId = 2, Name = "ASP.Net Unleashed",
//	//			    Description = "Short description here", Price = 59.99 },
//	//			new Product { ProductId = 3, Name = "Silverlight Unleashed",
//	//			    Description = "Short description here", Price = 29.99 }
//	//		 };
 
//	//	  // Mock the Products Repository using Moq
//	//	  Mock<IProductRepository> mockProductRepository = new Mock<IProductRepository>();

//	//	  // Return all the products
//	//	  mockProductRepository.Setup(mr => mr.FindAll()).Returns(products);

//	//	  // return a product by Id
//	//	  mockProductRepository.Setup(mr => mr.FindById(
//	//		 It.IsAny<int>())).Returns((int i) => products.Where(
//	//		 x => x.ProductId == i).Single());

//	//	  // return a product by Name
//	//	  mockProductRepository.Setup(mr => mr.FindByName(
//	//		 It.IsAny<string>())).Returns((string s) => products.Where(
//	//		 x => x.Name == s).Single());

//	//	  // Allows us to test saving a product
//	//	  mockProductRepository.Setup(mr => mr.Save(It.IsAny<Product>())).Returns(
//	//		 (Product target) =>
//	//		 {
//	//			DateTime now = DateTime.Now;
 
//	//			if (target.ProductId.Equals(default(int)))
//	//			{
//	//			    target.DateCreated = now;
//	//			    target.DateModified = now;
//	//			    target.ProductId = products.Count() + 1;
//	//			    products.Add(target);
//	//			}
//	//			else
//	//			{
//	//			    var original = products.Where(
//	//				   q => q.ProductId == target.ProductId).Single();
 
//	//			    if (original == null)
//	//			    {
//	//				   return false;
//	//			    }
 
//	//			    original.Name = target.Name;
//	//			    original.Price = target.Price;
//	//			    original.Description = target.Description;
//	//			    original.DateModified = now;
//	//			}
 
//	//			return true;
//	//		 });
 
//	//	  // Complete the setup of our Mock Product Repository
//	//	  this.MockProductsRepository = mockProductRepository.Object
//	//	}
//	//	public bool Add(bPost value)
//	//	{
//	//		throw new NotImplementedException();
//	//	}

//	//	public bPost GetById(int PostId)
//	//	{
//	//		throw new NotImplementedException();
//	//	}

//	//	public IEnumerable<bPost> GetAll()
//	//	{
//	//		throw new NotImplementedException();
//	//	}

//	//	public bool Update(int PostId, bPost value)
//	//	{
//	//		throw new NotImplementedException();
//	//	}

//	//	public bool Delete(int PostId)
//	//	{
//	//		throw new NotImplementedException();
//	//	}
//	//}
}
