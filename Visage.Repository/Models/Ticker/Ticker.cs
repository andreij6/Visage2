using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models.Ticker
{
	public class TickerItem
	{
		public TickerItem() {}

		public TickerItem(NewTickerItem value)
		{
			this.Dates = value.Dates;
			this.Message = value.Message;
			this.Url = value.Url;
		}

		public int Id { get; set; }
		public string Dates { get; set; }
		public string Message { get; set; }
		public string Url { get; set; }
	}
}
