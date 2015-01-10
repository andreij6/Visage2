using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;

namespace Visage.Repository.Adapters.Blog.Tag
{
	public interface ITagRepository
	{
		void Add(IEnumerable<string> enumerable, int postId);
	}
}
