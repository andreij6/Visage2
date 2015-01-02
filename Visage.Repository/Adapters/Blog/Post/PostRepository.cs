using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;

namespace Visage.Repository.Adapters.Blog.Post
{
	public class PostRepository : IPostRepository
	{
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
				result = db.bPosts.FirstOrDefault(x => x.Id == PostId);
			}

			return result;
		}

		public IEnumerable<bPost> GetAll()
		{
			IEnumerable<bPost> results = Enumerable.Empty<bPost>();

			using (AppDB db = new AppDB())
			{
				results = db.bPosts.ToList();
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
	}
}
