module VisageApp {
	export class LayoutCtrl {
		private $scope: Extensions.ILayoutScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ILayoutScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Your are In the Layout";

			self.init();
		}
	}

	LayoutCtrl.$inject = ['$scope'];
}