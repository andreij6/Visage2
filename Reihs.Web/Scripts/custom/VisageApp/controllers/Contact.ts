module VisageApp {
	export class Contact {
		private $scope: Extensions.IContactScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IContactScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Contact Page";

			self.init();
		}
	}

	Contact.$inject = ['$scope'];
}