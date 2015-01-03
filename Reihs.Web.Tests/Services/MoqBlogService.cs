using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;
using Visage.Services.Blog;

namespace Reihs.Web.Tests.Services
{
	public class MoqBlogService : IBlogService
	{
		public bool Delete(int PostId)
		{
			throw new NotImplementedException();
		}

		public bool Post(bPost value, string userName)
		{
			throw new NotImplementedException();
		}

		public bPost GetById(int PostId)
		{
			throw new NotImplementedException();
		}

		public IEnumerable<bPost> GetAll()
		{
			return MoqData.Posts();
		}

		public bool Update(int PostId, bPost value)
		{
			throw new NotImplementedException();
		}


		IEnumerable<Visage.Services.Models.PostModel> IBlogService.GetAll()
		{
			throw new NotImplementedException();
		}
	}
}
