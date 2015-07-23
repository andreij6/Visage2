using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;
using Visage.Domain.Models.View;

namespace Visage.Services.Interfaces
{
	public interface ITickerService
	{
		bool Delete(int TickerId);

		TickerItem GetById(int TickerId);

		IEnumerable<TickerModel> GetAll();

		bool Update(int PostId, TickerItem value);

		bool Post(NewTickerItem value);
	}
}
