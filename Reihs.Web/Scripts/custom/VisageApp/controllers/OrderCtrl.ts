module VisageApp {
	export class OrderCtrl {
		private $scope: Extensions.IOrderScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IOrderScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	OrderCtrl.$inject = ['$scope'];
} 