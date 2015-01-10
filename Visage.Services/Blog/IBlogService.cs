﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Blog;
using Visage.Services.Models;

namespace Visage.Services.Blog
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
