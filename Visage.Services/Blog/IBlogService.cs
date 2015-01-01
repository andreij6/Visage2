using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;

namespace Visage.Services.Blog
{
	public interface IBlogService
	{
		bool Delete(int PostId);

		bool Update(bPost value);

		bool Post(bPost value);

		bPost GetById(int PostId);

		IEnumerable<bPost> GetAll();
	}
}
