﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models.Ticker
{
	public class TickerItem
	{
		public int Id { get; set; }
		public string Dates { get; set; }

		public string Message { get; set; }

		public string Url { get; set; }
	}
}