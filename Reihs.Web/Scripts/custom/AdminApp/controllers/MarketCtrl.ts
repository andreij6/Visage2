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

			self.$scope.GetAll = getAll;

			self.init();
		}
	}

	MarketCtrl.$inject = ['$scope', 'ProductDataService'];
}  