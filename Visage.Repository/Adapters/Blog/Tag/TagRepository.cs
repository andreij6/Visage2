using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;
using Visage.Repository.Interfaces;

namespace Reihs.Repository.Adapters.Blog.Tag
{
	public class TagRepository : ITagRepository
	{
		public void Add(IEnumerable<string> tagNames, int postId)
		{
			using (AppDB db = new AppDB())
			{
				List<bTag> tags = new List<bTag>();
				bPost Post = db.bPosts.FirstOrDefault(x => x.Id == postId);

				foreach (var name in tagNames)
				{
					bTag newTag = new bTag
					{
						Name = name,
					};

					tags.Add(newTag);
					
				}

				db.bTags.AddRange(tags);
				db.SaveChanges();

				foreach (var tag in tags)
				{
					Post.Tags.Add(tag);
				}

				db.SaveChanges();
			}
		}
	}
}
