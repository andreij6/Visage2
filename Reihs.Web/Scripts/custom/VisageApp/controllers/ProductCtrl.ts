module VisageApp {
	export class ProductCtrl {
		private $scope: Extensions.IProductScope;
		private MarketService: MarketService;
		private ProductSvc: ProductService;
		private $routeParams: ng.route.IRouteParamsService;
		

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IProductScope, MarketSvc: MarketService, productSvc: ProductService, $routeParams: ng.route.IRouteParamsService) {
			var self = this;
			self.$scope = $scope;
			self.MarketService = MarketSvc;
			self.ProductSvc = productSvc;
			self.$routeParams = $routeParams;
			self.$scope.Quantity = 1;

			function addtocart(product: Extensions.Product, quantity: number) {

				var date = new Date();

				var cartItem = {
					ItemId: "itemId",
					CartId: "CartId",
					Quantity: quantity,
					DateCreated: date.toLocaleDateString(),
					ProductId: 4, Product: product
				}

				self.MarketService.AddCartItem(cartItem);

				self.$scope.$root.$broadcast('CartItem-Added');
				
			}

			self.$scope.AddToCart = addtocart;

			function GetProductById() {
				self.ProductSvc.getById($routeParams["id"]).then(
					function (data) {
						self.$scope.Product = data;
					},
					function (error) {
						console.log(error);
					});
			}

			GetProductById();
			
			self.init();
		}
	}

	ProductCtrl.$inject = ['$scope', 'MarketService', 'ProductService', '$routeParams'];
} 