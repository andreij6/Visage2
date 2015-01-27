module AdminApp {
	export class TickerCtrl {
		private $scope: Admin_Extensions.ITickerScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Admin_Extensions.ITickerScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Your are in the Admin Home";

			self.init();
		}
	}

	TickerCtrl.$inject = ['$scope'];
}