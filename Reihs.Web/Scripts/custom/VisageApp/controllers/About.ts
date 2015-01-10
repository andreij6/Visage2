module VisageApp {
	export class About {
		private $scope: Extensions.IAboutScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IAboutScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	About.$inject = ['$scope'];
}