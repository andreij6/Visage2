using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;

namespace Visage.Services.Blog
{
	public interface ICategoryService
	{
		bool Delete(int id);

		IEnumerable<bCategory> GetAll();

		bCategory GetById(int id);

		bool Post(bCategory category);

		bool Update(int id, bCategory category);
	}
}
