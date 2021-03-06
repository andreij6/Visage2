﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Interfaces;

namespace Visage.Domain.Models.Main
{
	public class bPost : Audit, IRate
	{
		public int Id { get; set; }

		public int CategoryId { get; set; }

		public bCategory Category { get; set; }

		public virtual ICollection<bTag> Tags { get; set; }

		public string Title { get; set; }

		public string Subtitle { get; set; }

		public string Content { get; set; }

		public string AuthorId { get; set; }

		public ApplicationUser Author { get; set; }

		public int Rating { get; set; }

		public int Likes { get; set; }

		public int Clicks { get; set; }

		public bool Public { get; set; }
	}
}
