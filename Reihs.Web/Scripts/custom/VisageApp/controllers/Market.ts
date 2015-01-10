module VisageApp {
	export class Market {
		private $scope: Extensions.IMarketScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IMarketScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Market Place";

			self.init();
		}
	}

	Market.$inject = ['$scope'];
}