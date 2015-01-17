module VisageApp {
	export class Market {
		private $scope: Extensions.IMarketScope;
		private ProductSvc: ProductService;

		private init(): void {
			var self = this;

			self.$scope.GetProducts();
		}

		constructor($scope: Extensions.IMarketScope, productSvc: ProductService) {
			var self = this;
			self.$scope = $scope;
			self.ProductSvc = productSvc;

			var nav = "../../../Templates/Front/Market/Partials/";

			var categories = [
				{ Name: "SkinMedica", url: nav + "SkinMedica.html" },
				{ Name: "Elta MD", url: nav + "EltaMD.html" },
				{ Name: "RevitaLash", url: nav + "RevitaLash.html" },
				{ Name: "Clarisonic", url: nav + "Clarisonic.html" }
			];
			var templates = [
				{ name: "Index", url: nav + "Index.html" },
				{ name: "SkinMedica", url: nav + "Category2.html" },
				{ name: "Category3", url: nav + "Category3.html" },
				{ name: "Category4", url: nav + "Category4.html" },
			];

			function setTemplate(name: string) {
				for (var temp in templates) {
					if (templates[temp].name == name)
						self.$scope.template = templates[temp];
				}
			}

			function GetProducts() {
				self.ProductSvc.getAll().then(
					function (data) {
						self.$scope.Products = data;
						console.log(data);
						console.log(self.$scope.Products);
					},
					function (error) {
						console.log(error);
					});
				console.log(self.$scope.Products);
			}

			self.$scope.GetProducts = GetProducts;

			self.$scope.Products = self.ProductSvc.Products;

			console.log(self.$scope.Products);
			console.log(self.ProductSvc.Products);

			self.$scope.SetTemplate = setTemplate;

			self.$scope.templates = templates;

			self.$scope.Categories = categories;

			self.$scope.template = { name: "Index", url: nav + "Index.html" };

			self.init();
			
		}
	}

	Market.$inject = ['$scope', 'ProductService'];
}