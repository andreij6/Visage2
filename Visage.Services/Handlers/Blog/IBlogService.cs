using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Models.Blog;
using Reihs.Services.Models;

namespace Reihs.Services.Blog
{
	public interface IBlogService
	{
		bool Delete(int PostId);

		bPost GetById(int PostId);

		IEnumerable<PostModel> GetAll();

		bool Update(int PostId, bPost value);

		bool Post(NewPostModel value);
	}
}
