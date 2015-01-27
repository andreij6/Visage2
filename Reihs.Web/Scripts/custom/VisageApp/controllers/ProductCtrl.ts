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

			function GetProductById() {
				self.ProductSvc.getById($routeParams["id"]).then(
					function (data) {
						self.$scope.Product = data;
					},
					function (error) {
						console.log(error);
					});
			}

			function GetAll() {
				self.ProductSvc.getAll().then(
					function (data) {
						self.$scope.Products = data;
					},
					function (error) {
						console.log(error);
					});
			}

			GetAll();

			GetProductById();
			
			self.init();
		}
	}

	ProductCtrl.$inject = ['$scope', 'MarketService', 'ProductService', '$routeParams'];
} 