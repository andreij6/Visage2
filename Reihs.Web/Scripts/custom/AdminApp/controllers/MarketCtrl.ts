module AdminApp {
	export class MarketCtrl {
		private $scope: Admin_Extensions.IMarketScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Admin_Extensions.IMarketScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Market";

			self.init();
		}
	}

	MarketCtrl.$inject = ['$scope'];
}  