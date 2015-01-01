module AdminApp {
	export class Index {
		private $scope: Admin_Extensions.IIndexScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Admin_Extensions.IIndexScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Your are in the Admin Home";

			self.init();
		}
	}

	Index.$inject = ['$scope'];
}