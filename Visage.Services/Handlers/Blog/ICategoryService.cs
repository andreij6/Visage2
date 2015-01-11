using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Models.Blog;
using Reihs.Repository.ViewModels;

namespace Reihs.Services.Blog
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
