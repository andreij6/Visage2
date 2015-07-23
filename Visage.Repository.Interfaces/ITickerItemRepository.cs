using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;

namespace Visage.Repository.Interfaces
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
