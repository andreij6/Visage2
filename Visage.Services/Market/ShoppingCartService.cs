using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;
using Visage.Repository;
using Visage.Repository.Adapters.Market;
using Visage.Repository.Models.Market;

namespace Visage.Services.Market
{
	public class ShoppingCartService : IShoppingCartService
	{
		public string ShoppingCartId { get; set; }

		public const string CartSessionKey = "CartId";

		#region Dependencies
		private readonly IShoppingCartRepository MarketRepo;
		#endregion

		#region Constructors
		public ShoppingCartService(IShoppingCartRepository marketRepository)
		{
			MarketRepo = marketRepository;
		}

		public ShoppingCartService()
		{
			MarketRepo = new ShoppingCartRepository();
		}
		#endregion



		//public void AddToCart(int id)
		//{
		//	// Retrieve the product from the database.           
		//	ShoppingCartId = GetCartId();

		//	var cartItem = _db.ShoppingCartItems.SingleOrDefault(
		//	    c => c.CartId == ShoppingCartId
		//	    && c.ProductId == id);
		//	if (cartItem == null)
		//	{
		//		// Create a new cart item if no cart item exists.                 
		//		cartItem = new CartItem
		//		{
		//			ItemId = Guid.NewGuid().ToString(),
		//			ProductId = id,
		//			CartId = ShoppingCartId,
		//			Product = _db.Products.SingleOrDefault(
		//			 p => p.ProductID == id),
		//			Quantity = 1,
		//			DateCreated = DateTime.Now
		//		};

		//		_db.ShoppingCartItems.Add(cartItem);
		//	}
		//	else
		//	{
		//		// If the item does exist in the cart,                  
		//		// then add one to the quantity.                 
		//		cartItem.Quantity++;
		//	}
		//	_db.SaveChanges();
		//}

		public bool Add(int ProductId, HttpContext currentContext)
		{
			ShoppingCartId = GetCartId(currentContext);

			CartItem cartItem = MarketRepo.GetCartItem(ShoppingCartId, ProductId);

			if (cartItem == null)
			{
				// Create a new cart item if no cart item exists.                 
				cartItem = new CartItem
				{
					ItemId = Guid.NewGuid().ToString(),
					ProductId = ProductId,
					CartId = ShoppingCartId,
					Product = MarketRepo.GetProductById(ProductId),
					Quantity = 1,
					DateCreated = DateTime.Now
				};

				MarketRepo.AddtoCart(cartItem);
			}
			else
			{
				// If the item does exist in the cart,                  
				// then add one to the quantity.                 
				cartItem.Quantity++;
				MarketRepo.SaveChanges();
			}

			return true;
		}

		private string GetCartId(HttpContext currentContext)
		{
			if (currentContext.Session[CartSessionKey] == null)
			{
				if (!string.IsNullOrWhiteSpace(currentContext.User.Identity.Name))
				{
					currentContext.Session[CartSessionKey] = currentContext.User.Identity.Name;
				}
				else
				{
					// Generate a new random GUID using System.Guid class.     
					Guid tempCartId = Guid.NewGuid();
					currentContext.Session[CartSessionKey] = tempCartId.ToString();
				}
			}
			return currentContext.Session[CartSessionKey].ToString();
		}

		public IEnumerable<CartItem> GetCartItems(HttpContext currentContext)
		{
			ShoppingCartId = GetCartId(currentContext);

			return MarketRepo.GetCartItems(ShoppingCartId);
		}

		public decimal GetTotal(HttpContext currentContext)
		{
			ShoppingCartId = GetCartId(currentContext);

			decimal? total = decimal.Zero;

			IEnumerable<CartItem> CartItems = MarketRepo.GetCartItems(ShoppingCartId);

			total = (decimal?)CartItems.Select(x => (int?)x.Quantity * x.Product.UnitPrice).Sum();

			return total ?? decimal.Zero;
		}

		public void UpdateShoppingCartDatabase(String cartId, ShoppingCartUpdates[] CartItemUpdates, HttpContext currentContext)
		{

			try
			{
				int CartItemCount = CartItemUpdates.Count();

				IEnumerable<CartItem> myCart = GetCartItems(currentContext);

				foreach (var cartItem in myCart)
				{
					// Iterate through all rows within shopping cart list
					for (int i = 0; i < CartItemCount; i++)
					{
						if (cartItem.Product.Id == CartItemUpdates[i].ProductId)
						{
							if (CartItemUpdates[i].PurchaseQuantity < 1 || CartItemUpdates[i].RemoveItem == true)
							{
								RemoveItem(cartId, cartItem.ProductId);
							}
							else
							{
								UpdateItem(cartId, cartItem.ProductId, CartItemUpdates[i].PurchaseQuantity);
							}
						}
					}
				}
			}
			catch (Exception exp)
			{
				throw new Exception("ERROR: Unable to Update Cart Database - " + exp.Message.ToString(), exp);
			}

		}

		public void RemoveItem(string removeCartID, int removeProductID)
		{
			try
			{
				var myItem = MarketRepo.GetCartItem(removeCartID, removeProductID);

				if (myItem != null)
				{
					MarketRepo.RemoveFromCart(myItem);
				}
			}
			catch (Exception exp)
			{
				throw new Exception("ERROR: Unable to Remove Cart Item - " + exp.Message.ToString(), exp);
			}

		}

		public void UpdateItem(string updateCartID, int updateProductID, int quantity)
		{
			try
			{
				CartItem myItem = MarketRepo.GetCartItem(updateCartID, updateProductID);

				if (myItem != null)
				{
					myItem.Quantity = quantity;
					MarketRepo.SaveChanges();
				}
			}
			catch (Exception exp)
			{
				throw new Exception("ERROR: Unable to Update Cart Item - " + exp.Message.ToString(), exp);
			}

		}

		public void EmptyCart(HttpContext currentContext)
		{
			ShoppingCartId = GetCartId(currentContext);

			IEnumerable<CartItem> cartItems = MarketRepo.GetCartItems(ShoppingCartId);

			MarketRepo.RemoveFromCart(cartItems);
		}

		public int GetCount(HttpContext currentContext)
		{
			ShoppingCartId = GetCartId(currentContext);

			IEnumerable<CartItem> CartItems = MarketRepo.GetCartItems(ShoppingCartId);

			int? count = CartItems.Select(x => x.Quantity).Sum();

			return count ?? 0;
		}

		public void MigrateCart(string cartId, string userName)
		{
			IEnumerable<CartItem> shoppingCart = MarketRepo.GetCartItems(cartId);
			
			MarketRepo.SetCartId(userName, shoppingCart);

			HttpContext.Current.Session[CartSessionKey] = userName;

		}

		public struct ShoppingCartUpdates
		{
			public int ProductId;
			public int PurchaseQuantity;
			public bool RemoveItem;
		}
	}
}
