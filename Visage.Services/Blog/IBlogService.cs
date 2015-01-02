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

		bool Post(bPost value, string userName);

		bPost GetById(int PostId);

		IEnumerable<bPost> GetAll();

		bool Update(int PostId, bPost value);
	}
}
