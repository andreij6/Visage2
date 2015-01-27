using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Adapters.Blog.Category;
using Reihs.Repository.Adapters.Blog.Post;
using Reihs.Repository.Adapters.Blog.Tag;
using Reihs.Repository.Adapters;
using Reihs.Repository.Models;
using Reihs.Repository.Models.Blog;
using Reihs.Repository.Adapters.User;
using Reihs.Services.Models;

namespace Reihs.Services.Blog
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

		public bPost GetById(int PostId)
		{
			return PostRepo.GetById(PostId);
		}

		public IEnumerable<PostModel> GetAll()
		{
			IEnumerable<bPost> bposts = PostRepo.GetAll();
			List<PostModel> results = new List<PostModel>();

			foreach (var post in bposts)
			{
				var tags = post.Tags.Select(x => x.Name);

				PostModel newPost = new PostModel
				{
					Id = post.Id,
					CategoryId = post.CategoryId,
					Created = post.Created,
					Tags = tags,
					Title = post.Title,
					Subtitle = post.Subtitle,
					Content = post.Content,
					Author = post.Author.UserName,
					Rating = post.Rating,
					Likes = post.Likes,
					Clicks = post.Clicks,
					Public = post.Public
				};

				results.Add(newPost);
			}

			return results;
		}

		public bool Post(NewPostModel value)
		{
			ApplicationUser user = UserRepo.GetByName(value.Author);

			bCategory category = CategoryRepo.AddIfNull(value.Category);

			int postId = PostRepo.Add(value, category);

			TagRepo.Add(value.Tags, postId);

			return true;
		}
	}
}
