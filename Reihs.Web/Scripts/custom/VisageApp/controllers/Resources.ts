module VisageApp {
	export class Resources {
		private $scope: Extensions.IResourcesScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IAboutScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Resources Page";

			self.init();
		}
	}

	Resources.$inject = ['$scope'];
}