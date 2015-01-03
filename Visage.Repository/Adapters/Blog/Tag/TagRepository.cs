﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;

namespace Visage.Repository.Adapters.Blog.Tag
{
	public class TagRepository : ITagRepository
	{
		public void Add(IEnumerable<bTag> tags)
		{
			using (AppDB db = new AppDB())
			{
				db.bTags.AddRange(tags);
				db.SaveChanges();
			}
		}
	}
}