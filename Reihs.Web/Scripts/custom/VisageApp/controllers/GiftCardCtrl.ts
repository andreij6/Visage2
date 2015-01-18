module VisageApp {
	export class GiftCardCtrl {
		private $scope: Extensions.IGiftCardScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IGiftCardScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	GiftCardCtrl.$inject = ['$scope'];
} 