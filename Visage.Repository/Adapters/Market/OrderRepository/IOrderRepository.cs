using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Models.Market;

namespace Reihs.Repository.Adapters.Market.OrderRepository
{
	public interface IOrderRepository
	{
		Order GetById(int OrderId);

		IEnumerable<Order> GetAll();

		void Add(Order order);

		void Remove(int OrderId);

		void Update(int OrderId, Order order);
	}
}
