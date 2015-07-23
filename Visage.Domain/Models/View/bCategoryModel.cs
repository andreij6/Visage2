using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;

namespace Visage.Domain.Models.View
{
	public class bCategoryModel
	{
		public int Id { get; set; }
		public string Name { get; set; }

		public string Description { get; set; }

		public bCategoryModel()
		{

		}

		public bCategoryModel(bCategory category)
		{
			this.Id = category.Id;
			this.Name = category.Name;
			this.Description = category.Description;
		}
	}
}
