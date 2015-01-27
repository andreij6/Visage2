module AdminApp {
	export class MarketCtrl {
		private $scope: Admin_Extensions.IMarketScope;
		private ProductSvc: ProductDataService;

		private init(): void {
			var self = this;

			self.$scope.GetAll();
		}

		constructor($scope: Admin_Extensions.IMarketScope, productSvc: ProductDataService) {
			var self = this;
			self.$scope = $scope;

			self.ProductSvc = productSvc;

			function HandleFailedAPI(error: any) {

			}

			function getAll() {
				self.ProductSvc.getAll().then(
					function (data) {
						self.$scope.Products = data;
					},
					function (error) {
						console.log(error);
					});
			}

			function edit() { }

			function deleteProduct(Product: Extensions.Product) {
				self.ProductSvc.deleteProduct(Product).then(
					function (data) {
						console.log(data);
					}, function (error) { HandleFailedAPI(error) });
			}

			function save(Product: Extensions.Product) { }

			function getSingle(Id: number) { }

			self.$scope.Update = edit;
			self.$scope.Delete = deleteProduct;
			self.$scope.Save = save;
			self.$scope.GetById = getSingle;
			self.$scope.GetAll = getAll;

			self.init();
		}
	}

	MarketCtrl.$inject = ['$scope', 'ProductDataService'];
}  