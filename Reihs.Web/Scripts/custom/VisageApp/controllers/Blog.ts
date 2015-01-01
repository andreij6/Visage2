module VisageApp {
	export class Blog {
		private $scope: Extensions.IBlogScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IBlogScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Blog Page";

			self.init();
		}
	}

	Blog.$inject = ['$scope'];
}