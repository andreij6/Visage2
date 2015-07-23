using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;

namespace Visage.Repository.Interfaces
{
	public interface IShoppingCartRepository
	{
		CartItem GetCartItem(string ShoppingCartId, int ProductId);

		mProduct GetProductById(int ProductId);

		void AddtoCart(CartItem cartItem);

		IEnumerable<CartItem> GetCartItems(string ShoppingCartId);

		void RemoveFromCart(CartItem myItem);

		void RemoveFromCart(IEnumerable<CartItem> cartItems);

		void SetCartId(string userName, IEnumerable<CartItem> shoppingCart);

		void SaveChanges();
	}
}
