﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Ticker;

namespace Visage.Services.Models
{
	public class TickerModel
	{
		public TickerModel()
		{

		}

		public TickerModel(TickerItem tickerItem)
		{
			this.Message = tickerItem.Message;
			this.Url = tickerItem.Url;
			this.Dates = tickerItem.Dates;
		}

		public string Dates { get; set; }

		public string Url { get; set; }

		public string Message { get; set; }
	}
}
