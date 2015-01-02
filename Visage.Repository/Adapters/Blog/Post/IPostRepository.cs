using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Adapters.Blog.Post
{
	public interface IPostRepository
	{
		bool Add(Models.Blog.bPost value);

		Models.Blog.bPost GetById(int PostId);

		IEnumerable<Models.Blog.bPost> GetAll();

		bool Update(int PostId, Models.Blog.bPost value);

		bool Delete(int PostId);
	}
}
