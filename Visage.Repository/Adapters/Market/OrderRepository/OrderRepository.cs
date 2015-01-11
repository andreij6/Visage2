using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reihs.Repository.Models.Market;

namespace Reihs.Repository.Adapters.Market.OrderRepository
{
	public class OrderRepository : IOrderRepository, IOrderDetailRepository
	{
		#region Order
		public Order GetById(int OrderId)
		{
			Order result = null;

			using (AppDB db = new AppDB())
			{
				result = db.Orders.FirstOrDefault(x => x.Id == OrderId);
			}

			return result;
		}

		public IEnumerable<Order> GetAll()
		{
			IEnumerable<Order> results = Enumerable.Empty<Order>();

			using (AppDB db = new AppDB())
			{
				results = db.Orders.ToList();
			}

			return results;
		}

		public void Add(Order order)
		{
			using (AppDB db = new AppDB())
			{
				db.Orders.Add(order);
				db.SaveChanges();
			}
		}

		public void Remove(int OrderId)
		{
			using (AppDB db = new AppDB())
			{
				var order = db.Orders.FirstOrDefault(x => x.Id == OrderId);
				db.Orders.Remove(order);
				db.SaveChanges();
			}
		}

		public void Update(int OrderId, Order order)
		{
			using (AppDB db = new AppDB())
			{
				throw new NotImplementedException();
			}
		}
		#endregion

		#region OrderDetail
		OrderDetail IOrderDetailRepository.GetById(int OrderDetailId)
		{
			OrderDetail orderDetail = null;

			using (AppDB db = new AppDB())
			{
				orderDetail = db.OrderDetails.FirstOrDefault(x => x.OrderDetailId == OrderDetailId);
			}

			return orderDetail;
		}

		IEnumerable<OrderDetail> IOrderDetailRepository.GetAll()
		{
			IEnumerable<OrderDetail> results = Enumerable.Empty<OrderDetail>();

			using (AppDB db = new AppDB())
			{
				results = db.OrderDetails.ToList();
			}

			return results;
		}

		public void Add(OrderDetail order)
		{
			using (AppDB db = new AppDB())
			{
				db.OrderDetails.Add(order);
				db.SaveChanges();
			}
		}

		public void Update(int OrderDetailId, OrderDetail order)
		{
			using (AppDB db = new AppDB())
			{
				throw new NotImplementedException();
			}
		}
		#endregion
	}
}
