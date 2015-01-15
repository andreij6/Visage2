module VisageApp {
	export class SpecialCtrl {
		private $scope: Extensions.ISpecialScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ISpecialScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	SpecialCtrl.$inject = ['$scope'];
}