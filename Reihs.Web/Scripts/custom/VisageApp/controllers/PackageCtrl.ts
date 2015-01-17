module VisageApp {
	export class PackageCtrl {
		private $scope: Extensions.IPackageScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IPackageScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	PackageCtrl.$inject = ['$scope'];
}