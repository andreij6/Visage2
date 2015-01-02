using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Market;

namespace Visage.Repository.Adapters.Market
{
	public class MarketRepository : IMarketRepository
	{
		public CartItem GetCartItem(string ShoppingCartId, int ProductId)
		{
			throw new NotImplementedException();
		}

		public mProduct GetProductById(int ProductId)
		{
			throw new NotImplementedException();
		}

		public void AddtoCart(CartItem cartItem)
		{
			throw new NotImplementedException();
		}

		public void SaveChanges()
		{
			throw new NotImplementedException();
		}

		public IEnumerable<CartItem> GetCartItems(string ShoppingCartId)
		{
			throw new NotImplementedException();
		}


		public void RemoveFromCart(CartItem myItem)
		{
			throw new NotImplementedException();
		}

		public void UpdateCartItem(CartItem myItem, int quantity)
		{
			throw new NotImplementedException();
		}

		public void RemoveFromCart(IEnumerable<CartItem> cartItems)
		{
			throw new NotImplementedException();
		}


		public void SetCartId(string userName)
		{
			throw new NotImplementedException();
		}
	}
}
