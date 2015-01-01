module VisageApp {
	export class Index {
		private $scope: Extensions.IIndexScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IIndexScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Your are Home";

			self.init();
		}
	}

	Index.$inject = ['$scope'];
}