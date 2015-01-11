﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.ViewModels;

namespace Reihs.Repository.Models.Blog
{
	public class bCategory : Audit
	{
		public bCategory()
		{

		}

		public bCategory(NewCategoryModel category)
		{
			this.Name = category.Name;
			this.Description = category.Description;
		}
		[Key]
		public int Id { get; set; }

		public string Name { get; set; }

		public string Description { get; set; }

		public IEnumerable<bPost> Posts { get; set; }
	}
}
