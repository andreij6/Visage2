using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;

namespace Visage.Services.Blog
{
	public class BlogService : IBlogService
	{
		public bool Delete(int PostId)
		{
			throw new NotImplementedException();
		}

		public bool Update(bPost value)
		{
			throw new NotImplementedException();
		}

		public bool Post(bPost value)
		{
			throw new NotImplementedException();
		}

		public bPost GetById(int PostId)
		{
			throw new NotImplementedException();
		}

		public IEnumerable<bPost> GetAll()
		{
			try
			{
				return Enumerable.Empty<bPost>();
			}
			catch
			{
				return null;
			}
		}
	}
}
