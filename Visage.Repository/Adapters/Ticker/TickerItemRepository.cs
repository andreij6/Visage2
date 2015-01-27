using Reihs.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Ticker;

namespace Visage.Repository.Adapters.Ticker
{
	public class TickerItemRepository : ITickerItemRepository
	{
		private readonly AppDB Data;
		public TickerItemRepository()
		{
			Data = new AppDB();
		}
		public TickerItem GetById(int tickerId)
		{
			TickerItem result = Data.TickerItems.FirstOrDefault(t => t.Id == tickerId);

			Data.Dispose();

			return result;
		}

		public IEnumerable<TickerItem> GetAll()
		{
			IEnumerable<TickerItem> results = Data.TickerItems.ToList();

			Data.Dispose();

			return results;
		}

		public void Add(TickerItem ticker)
		{
			Data.TickerItems.Add(ticker);

			Data.SaveChanges();

			Data.Dispose();
		}

		public void Remove(int tickerId)
		{
			Data.TickerItems.Remove(Data.TickerItems.FirstOrDefault(x => x.Id == tickerId));

			Data.SaveChanges();

			Data.Dispose();
		}

		public void Update(int TickerId, TickerItem Ticker)
		{
			TickerItem oldTicker = Data.TickerItems.FirstOrDefault(x => x.Id == TickerId);

			oldTicker.Message = Ticker.Message;
			oldTicker.Dates = Ticker.Dates;
			oldTicker.Url = Ticker.Url;

			Data.SaveChanges();

			Data.Dispose();
		}
	}
}
