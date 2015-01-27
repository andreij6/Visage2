using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Ticker;

namespace Visage.Repository.Adapters.Ticker
{
	public interface ITickerItemRepository
	{
		TickerItem GetById(int tickerId);

		IEnumerable<TickerItem> GetAll();

		void Add(TickerItem ticker);

		void Remove(int tickerId);

		void Update(int TickerId, TickerItem Ticker);

	
	}
}
