using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Repository.Models.Market;

namespace Visage.Repository.Adapters.Market
{
	public class ShoppingCartRepository : IShoppingCartRepository
	{
		public CartItem GetCartItem(string ShoppingCartId, int ProductId)
		{
			CartItem cartItem = null;

			using(AppDB db = new AppDB())
			{
				cartItem = db.ShoppingCartItems
							.SingleOrDefault(c => c.CartId == ShoppingCartId
									&& c.ProductId == ProductId);
			}

			return cartItem;
		}

		public mProduct GetProductById(int ProductId)
		{
			mProduct product = null;

			using (AppDB db = new AppDB())
			{
				product = db.mProducts.FirstOrDefault(x => x.Id == ProductId);
			}

			return product;
		}

		public void AddtoCart(CartItem cartItem)
		{
			using (AppDB db = new AppDB())
			{
				db.ShoppingCartItems.Add(cartItem);
				db.SaveChanges();
			}
		}

		public IEnumerable<CartItem> GetCartItems(string ShoppingCartId)
		{
			IEnumerable<CartItem> cartItems = Enumerable.Empty<CartItem>();

			using (AppDB db = new AppDB())
			{
				cartItems = db.ShoppingCartItems.Where(c => c.CartId == ShoppingCartId).ToList();
			}

			return cartItems;
		}

		public void RemoveFromCart(CartItem myItem)
		{
			using (AppDB db = new AppDB())
			{
				db.ShoppingCartItems.Remove(myItem);
				db.SaveChanges();
			}
		}

		public void RemoveFromCart(IEnumerable<CartItem> cartItems)
		{
			using (AppDB db = new AppDB())
			{
				db.ShoppingCartItems.RemoveRange(cartItems);
				db.SaveChanges();
			}
		}

		public void SetCartId(string userName, IEnumerable<CartItem> shoppingCart)
		{
			using (AppDB db = new AppDB())
			{
				foreach (CartItem item in shoppingCart)
				{
					item.CartId = userName;
				}

				db.SaveChanges();
			}
		}

		public void SaveChanges()
		{
			using (AppDB db = new AppDB())
			{
				db.SaveChanges();
			}
		}
	}
}
