using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Adapters.User;
using Visage.Repository.Models;
using Visage.Repository.Models.Blog;

namespace Visage.Repository.Adapters.Blog.Post
{
	public class PostRepository : IPostRepository
	{
		private readonly IUserRepository UserRepo;
		public PostRepository()
		{
			UserRepo = new UserRepository();
		}

		public bool Add(bPost value)
		{
			bool result = false;

			using (AppDB db = new AppDB())
			{
				try
				{
					db.bPosts.Add(value);
					db.SaveChanges();
					result = true;
				}
				catch (DbEntityValidationException e)
				{
					foreach (var eve in e.EntityValidationErrors)
					{
						Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
						    eve.Entry.Entity.GetType().Name, eve.Entry.State);
						foreach (var ve in eve.ValidationErrors)
						{
							Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
							    ve.PropertyName, ve.ErrorMessage);
						}
					}
					result = false;
				}
			}

			return result;
		}

		public bPost GetById(int PostId)
		{
			bPost result = null;
			
			using (AppDB db = new AppDB())
			{
				result = db.bPosts.Include("Tags")
								.Include("Category")
								.Include("Author")
								.FirstOrDefault(x => x.Id == PostId);
			}

			return result;
		}

		public IEnumerable<bPost> GetAll()
		{
			IEnumerable<bPost> results = Enumerable.Empty<bPost>();

			using (AppDB db = new AppDB())
			{
				results = db.bPosts.Include("Tags").Include("Category").Include("Author").ToList();
			}

			return results;
		}

		public bool Update(int PostId, bPost value)
		{
			bool result = false;

			using (AppDB db = new AppDB())
			{
				bPost oldBlog = db.bPosts.FirstOrDefault(x => x.Id == PostId);

				oldBlog.Title = value.Title;
				oldBlog.Subtitle = value.Subtitle;
				oldBlog.Tags = value.Tags;
				oldBlog.Content = value.Content;
				oldBlog.Modified = DateTime.Now;

				int id = db.SaveChanges();

				if (id != null)
					result = true;
			}

			return result;
		}

		public bool Delete(int PostId)
		{
			bool result = false;

			using (AppDB db = new AppDB())
			{
				bPost post = db.bPosts.FirstOrDefault(x => x.Id == PostId);

				db.bPosts.Remove(post);

				int id = db.SaveChanges();

				if (id != null)
					result = true;
			}

			return result;
		}

		public int Add(NewPostModel value, bCategory category)
		{
			int id = 0;

			using (AppDB db = new AppDB())
			{
				ApplicationUser user = UserRepo.GetByName(value.Author);

				bPost post = new bPost();

				post.Public = value.Public;
				post.Title = value.Title;
				post.Subtitle = value.Subtitle;
				post.Content = value.Content;
				post.AuthorId = user.Id;
				post.Created = DateTime.Now;
				post.Modified = DateTime.Now;
				post.Category = category;
				post.CategoryId = category.Id;
				post.Clicks = 0;
				post.Rating = 0;
				post.Likes = 0;
				post.Tags = Enumerable.Empty<bTag>() as ICollection<bTag>;

				db.bPosts.Add(post);

				try
				{
					db.SaveChanges();
					id = db.bPosts.FirstOrDefault(x => x.Title == post.Title && x.Subtitle == post.Subtitle).Id;
				}
				catch (DbEntityValidationException e)
				{
					foreach (var eve in e.EntityValidationErrors)
					{
						Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
						    eve.Entry.Entity.GetType().Name, eve.Entry.State);
						foreach (var ve in eve.ValidationErrors)
						{
							Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
							    ve.PropertyName, ve.ErrorMessage);
						}
					}
				}
				
			}

			return id;
		}
	}
}
