module VisageApp {

	export class MarketService {
		public Cart: Array<Extensions.CartItem>;

		constructor() {
			this.Cart = [];
		}

		public static Builder(): MarketService {
			return new MarketService();
		}

		AddCartItem(product: Extensions.CartItem) {
			var self = this;

			self.Cart.push(product);
		}

		RemoveCartItem(ProductId: number) {
			var self = this;

			for (var x in self.Cart)
			{
				if (self.Cart[x].ProductId = ProductId)
					self.Cart.splice(x, 1);
			}
		}

		
	}
}  