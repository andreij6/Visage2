using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models;
using Visage.Domain.Models.Main;
using Visage.Domain.Models.View;
using Visage.Repository.Interfaces;
using Visage.Services.Interfaces;

namespace Visage.Services.Handlers.Ticker.Implementations
{
	public class TickerService : ITickerService
	{
		protected readonly ITickerItemRepository TickerRepository;

		public TickerService(ITickerItemRepository tickerRepository)
		{
			TickerRepository = tickerRepository;
		}

		public bool Delete(int TickerId)
		{
			TickerRepository.Remove(TickerId);

			return true;
		}

		public TickerItem GetById(int TickerId)
		{
			return TickerRepository.GetById(TickerId);
		}

		public IEnumerable<TickerModel> GetAll()
		{
			var tickerItems =  TickerRepository.GetAll();

			return tickerItems.Select(x => new TickerModel(x));
		}

		public bool Update(int PostId, TickerItem value)
		{
			TickerRepository.Update(PostId, value);

			return true;
		}

		public bool Post(NewTickerItem value)
		{
			TickerItem item = new TickerItem(value);

			TickerRepository.Add(item);

			return true;
		}
	}
}
