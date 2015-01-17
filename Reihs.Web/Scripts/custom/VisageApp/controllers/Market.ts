module VisageApp {
	export class Market {
		private $scope: Extensions.IMarketScope;
		private ProductSvc: ProductService;
		private $location: ng.ILocationService;
		private $routeParams: ng.route.IRouteParamsService;

		private init(): void {
			var self = this;

			self.$scope.GetProducts();
		}

		constructor($scope: Extensions.IMarketScope, productSvc: ProductService, $location: ng.ILocationService, $routeParams: ng.route.IRouteParamsService) {
			var self = this;
			self.$scope = $scope;
			self.ProductSvc = productSvc;
			self.$location = $location;


			var nav = "../../../Templates/Front/Market/Partials/";

			var categories = [
				{ Name: "SkinMedica" },
				{ Name: "Elta MD" },
				{ Name: "RevitaLash" },
				{ Name: "Clarisonic" }
			];

			var templates = [
				{ name: "Index", url: nav + "Index.html" },
			];

			console.log("Market Initiated");

			function GetProducts() {
				self.ProductSvc.getAll().then(
					function (data) {
						self.$scope.Products = data;
					},
					function (error) {
						console.log(error);
					});
			}

			self.$scope.GetProducts = GetProducts;

			self.$scope.Products = self.ProductSvc.Products;

			self.$scope.templates = templates;

			self.$scope.Categories = categories;

			self.$scope.Category = $routeParams["Category"];

			self.$scope.template = { name: "Index", url: nav + "Index.html" };

			self.init();
			
		}
	}

	Market.$inject = ['$scope', 'ProductService', '$location', '$routeParams'];
}