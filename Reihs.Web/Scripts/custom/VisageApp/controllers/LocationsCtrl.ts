module VisageApp {
	export class LocationsCtrl {
		private $scope: Extensions.ILocationsScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ILocationsScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	LocationsCtrl.$inject = ['$scope'];
} 