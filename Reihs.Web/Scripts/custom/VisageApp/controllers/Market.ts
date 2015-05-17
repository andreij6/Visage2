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

			function HasImage(value) {
				return value["ImagePath"] !== undefined && value["ImagePath"] !== null;
			}

			function SetFeaturedProducts() {
				var filtered = self.$scope.Products.filter(HasImage);
				var result = [];

				for (var x = 0; x < 5; x++) {
					var rand = filtered[Math.floor(Math.random() * filtered.length)];

					result.push(rand);
				}

				return result;
			}

			function GetProducts() {
				console.log("get Products");
				self.ProductSvc.getAll().then(
					function (data) {
						self.$scope.Products = data;

						self.$scope.FeaturedProducts = SetFeaturedProducts();
						console.log(self.$scope.FeaturedProducts);
					},
					function (error) {
						console.log(error);
					});
			}

			function menuTrigger() {
				if (!self.$scope.open)
					self.$scope.YouTubeMenu = ' dr-menu-open';
				else
					self.$scope.YouTubeMenu = '';

				self.$scope.open = !self.$scope.open;

			}

			function hiLo() {
				console.log("Hi Lo");
				self.$scope.OrderBy.Parameter = '-UnitPrice';
				self.$scope.OrderBy.HiLoClass = ' btn btn-theme-brown ';
				self.$scope.OrderBy.LoHiClass = 'btn btn-theme-dark'
			}

			function loHi() {
				console.log("Lo Hi");
				self.$scope.OrderBy.Parameter = 'UnitPrice';
				self.$scope.OrderBy.HiLoClass = ' btn btn-theme-dark';
				self.$scope.OrderBy.LoHiClass = 'btn btn-theme-brown';
			}

			self.$scope.LoHi = loHi;
			self.$scope.HiLo = hiLo;

			self.$scope.GetProducts = GetProducts;

			self.$scope.Products = self.ProductSvc.Products;

			self.$scope.templates = templates;

			self.$scope.Categories = categories;

			self.$scope.Category = $routeParams["Category"];

			self.$scope.template = { name: "Index", url: nav + "Index.html" };

			self.$scope.YouTubeMenu = '';

			self.$scope.MenuTrigger = menuTrigger;

			self.$scope.OrderBy = new OrderBy("btn btn-theme-dark", "btn btn-theme-dark", "Name.length");

			function addToCart(cmd: string, hosted_button_id: string) {
				self.ProductSvc.addToCart(cmd, hosted_button_id).then(
					function (data) {
						console.log(data);
					},
					function (error) {
						console.log(error);
					});
			}

			self.$scope.AddToCart = addToCart;

			self.init();
			
		}
	}

	export class OrderBy {

		constructor(public LoHiClass, public HiLoClass, public Parameter) { }

	}



	Market.$inject = ['$scope', 'ProductService', '$location', '$routeParams'];
}