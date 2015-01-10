module VisageApp {
	export class ProductCtrl {
		private $scope: Extensions.IProductScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IProductScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	ProductCtrl.$inject = ['$scope'];
} 