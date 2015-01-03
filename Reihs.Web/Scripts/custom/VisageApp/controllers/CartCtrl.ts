module VisageApp {
	export class CartCtrl {
		private $scope: Extensions.ICartScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ICartScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	CartCtrl.$inject = ['$scope'];
} 