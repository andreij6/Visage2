module VisageApp {
	export class GalleryCtrl {
		private $scope: Extensions.IGalleryScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IGalleryScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Gallery";

			self.init();
		}
	}

	GalleryCtrl.$inject = ['$scope'];
} 