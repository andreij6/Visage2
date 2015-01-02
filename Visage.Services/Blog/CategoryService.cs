using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Adapters.Blog.Category;
using Visage.Repository.Adapters.User;
using Visage.Repository.Models.Blog;

namespace Visage.Services.Blog
{
	public class CategoryService : ICategoryService
	{
		#region Dependencies
		private readonly ICategoryRepository CategoryRepo;
		private readonly IUserRepository UserRepo;
		#endregion

		#region Constructors
		public CategoryService()
		{
			CategoryRepo = new CategoryRepository();
			UserRepo = new UserRepository();
		}

		public CategoryService(ICategoryRepository catRepo, IUserRepository userRepo)
		{
			CategoryRepo = catRepo;
			UserRepo = userRepo;
		}
		#endregion

		public bool Delete(int id)
		{
			return CategoryRepo.Delete(id);
		}

		public IEnumerable<bCategory> GetAll()
		{
			return CategoryRepo.GetAll();
		}

		public bCategory GetById(int id)
		{
			return CategoryRepo.GetById(id);
		}

		public bool Post(bCategory category)
		{
			return CategoryRepo.Add(category);
		}

		public bool Update(int id, bCategory category)
		{
			return CategoryRepo.Update(id, category);
		}
	}
}
