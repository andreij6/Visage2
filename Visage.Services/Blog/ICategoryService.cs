using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;
using Visage.Repository.ViewModels;

namespace Visage.Services.Blog
{
	public interface ICategoryService
	{
		bool Delete(int id);

		IEnumerable<bCategoryModel> GetAll();

		bCategory GetById(int id);

		bool Post(NewCategoryModel category);

		bool Update(int id, bCategory category);
	}
}
