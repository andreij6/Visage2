using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;

namespace Visage.Repository.Interfaces
{
	public interface IOrderDetailRepository
	{
		OrderDetail GetById(int OrderDetailId);

		IEnumerable<OrderDetail> GetAll();

		void Add(OrderDetail order);

		void Remove(int OrderDetailId);

		void Update(int OrderDetailId, OrderDetail order);
	}
}
