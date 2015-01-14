module VisageApp {
	export class ProductCtrl {
		private $scope: Extensions.IProductScope;
		private MarketService: MarketService;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IProductScope, MarketSvc: MarketService) {
			var self = this;
			self.$scope = $scope;
			self.MarketService = MarketSvc;

			function addtocart(product: Extensions.Product) {

				console.log(product);
				var date = new Date();

				var cartItem = {
					ItemId: "itemId",
					CartId: "CartId",
					Quantity: 1,
					DateCreated: date.toLocaleDateString(),
					ProductId: 4, Product: product
				}

				self.MarketService.AddCartItem(cartItem);

				self.$scope.$root.$broadcast('CartItem-Added');
				
			}

			self.$scope.Product = {
				Id: 4,
				Category: 1,
				Name: "Skin Lotion",
				Description: "This is a great product. You should buy it. Buy it filler filler filler ipsum",
				ImagePath: "../../Content/Images/coffee-569178_1280.jpg",
				Brand: "SkinMedica",
				UnitPrice: 10.25
			};

			self.$scope.AddToCart = addtocart;

			self.init();
		}
	}

	ProductCtrl.$inject = ['$scope', 'MarketService'];
} 