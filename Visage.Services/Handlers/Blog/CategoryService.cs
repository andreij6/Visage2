using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Adapters.Blog.Category;
using Visage.Domain.Models.Main;
using Visage.Domain.Models.View;
using Visage.Repository.Adapters.User;
using Visage.Repository.Interfaces;
using Visage.Services.Interfaces;

namespace Reihs.Services.Blog
{
	public class CategoryService : ICategoryService
	{
		#region Dependencies
		private readonly ICategoryRepository CategoryRepo;
		private readonly IUserRepository UserRepo;
		#endregion

		#region Constructors
		public CategoryService(ICategoryRepository crepo, IUserRepository urepo)
		{
			CategoryRepo = crepo;
			UserRepo = urepo;
		}
		#endregion

		public bool Delete(int id)
		{
			return CategoryRepo.Delete(id);
		}

		public IEnumerable<bCategoryModel> GetAll()
		{
			List<bCategoryModel> results = new List<bCategoryModel>();

			IEnumerable<bCategory> categories = CategoryRepo.GetAll();

			foreach (var cat in categories)
			{
				bCategoryModel category = new bCategoryModel(cat);
				results.Add(category);
			}

			return results;

		}

		public bCategory GetById(int id)
		{
			return CategoryRepo.GetById(id);
		}

		public bool Post(NewCategoryModel category)
		{
			bCategory add = new bCategory(category);

			return CategoryRepo.Add(add);
		}

		public bool Update(int id, bCategory category)
		{
			return CategoryRepo.Update(id, category);
		}
	}
}
