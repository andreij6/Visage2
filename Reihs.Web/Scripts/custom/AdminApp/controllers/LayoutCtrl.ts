module AdminApp {
	export class LayoutCtrl {
		private $scope: Admin_Extensions.ILayoutScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Admin_Extensions.ILayoutScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Your are In the Admin Layout";

			self.init();
		}
	}

	LayoutCtrl.$inject = ['$scope'];
}