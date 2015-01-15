module VisageApp {
	export class VideoCtrl {
		private $scope: Extensions.IVideoScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IVideoScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	VideoCtrl.$inject = ['$scope'];
} 