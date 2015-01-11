using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Models.Blog;

namespace Reihs.Repository.Adapters.Blog.Category
{
	public interface ICategoryRepository
	{
		bool Delete(int id);

		IEnumerable<bCategory> GetAll();

		bCategory GetById(int id);

		bool Add(bCategory category);

		bool Update(int id, bCategory category);

		bCategory AddIfNull(string CategoryName);
	}
}
