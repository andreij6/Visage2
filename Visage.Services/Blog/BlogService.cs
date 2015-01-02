using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Adapters.Blog.Category;
using Visage.Repository.Adapters.Blog.Post;
using Visage.Repository.Adapters.Blog.Tag;
using Visage.Repository.Adapters;
using Visage.Repository.Models;
using Visage.Repository.Models.Blog;
using Visage.Repository.Adapters.User;

namespace Visage.Services.Blog
{
	public class BlogService : IBlogService
	{
		#region Dependencies
		private readonly IPostRepository PostRepo;
		private readonly ICategoryRepository CategoryRepo;
		private readonly ITagRepository TagRepo;
		private readonly IUserRepository UserRepo;
		#endregion

		#region Constructors
		public BlogService()
		{
			PostRepo = new PostRepository();
			CategoryRepo = new CategoryRepository();
			TagRepo = new TagRepository();
			UserRepo = new UserRepository();
		}

		public BlogService(IPostRepository postrepo, ICategoryRepository catrepo, ITagRepository tagrepo)
		{
			PostRepo = postrepo;
			CategoryRepo = catrepo;
			TagRepo = tagrepo;
		}
		#endregion

		public bool Delete(int PostId)
		{
			return PostRepo.Delete(PostId);
		}

		public bool Update(int PostId, bPost value)
		{
			return PostRepo.Update(PostId, value);
		}

		public bool Post(bPost value, string userName)
		{
			ApplicationUser user = UserRepo.GetByName(userName);

			CategoryRepo.AddIfNull(value.Category);

			TagRepo.Add(value.Tags);

			return PostRepo.Add(value);
		}

		public bPost GetById(int PostId)
		{
			return PostRepo.GetById(PostId);
		}

		public IEnumerable<bPost> GetAll()
		{
			return PostRepo.GetAll();
		}
	}
}
