using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Market;

namespace Visage.Repository.Adapters.Market
{
	public interface IMarketRepository
	{
		CartItem GetCartItem(string ShoppingCartId, int ProductId);

		mProduct GetProductById(int ProductId);

		void AddtoCart(CartItem cartItem);

		void SaveChanges();

		IEnumerable<CartItem> GetCartItems(string ShoppingCartId);

		void RemoveFromCart(CartItem myItem);

		void UpdateCartItem(CartItem myItem, int quantity);

		void RemoveFromCart(IEnumerable<CartItem> cartItems);

		void SetCartId(string userName);
	}
}
