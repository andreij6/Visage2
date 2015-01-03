using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Market;

namespace Visage.Repository.Adapters.Market.OrderRepository
{
	public class OrderRepository : IOrderRepository, IOrderDetailRepository
	{
		#region Order
		public Order GetById(int OrderId)
		{
			Order result = null;
			using (AppDB db = new AppDB())
			{ 
			}

			return result;
		}

		public IEnumerable<Order> GetAll()
		{
			IEnumerable<Order> results = Enumerable.Empty<Order>();

			using (AppDB db = new AppDB())
			{ }

			return results;
		}

		public void Add(Order order)
		{
			using (AppDB db = new AppDB())
			{ }
		}

		public void Remove(int OrderId)
		{
			using (AppDB db = new AppDB())
			{ }
		}

		public void Update(int OrderId, Order order)
		{
			using (AppDB db = new AppDB())
			{

			}
		}
		#endregion

		#region OrderDetail
		OrderDetail IOrderDetailRepository.GetById(int OrderDetailId)
		{
			OrderDetail orderDetail = null;

			using (AppDB db = new AppDB())
			{ }

			return orderDetail;
		}

		IEnumerable<OrderDetail> IOrderDetailRepository.GetAll()
		{
			IEnumerable<OrderDetail> results = Enumerable.Empty<OrderDetail>();

			using (AppDB db = new AppDB())
			{ }

			return results;
		}

		public void Add(OrderDetail order)
		{
			using (AppDB db = new AppDB())
			{ }
		}

		public void Update(int OrderDetailId, OrderDetail order)
		{
			using (AppDB db = new AppDB())
			{ }
		}
		#endregion
	}
}
