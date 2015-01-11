module VisageApp {
	export class Treatments {
		private $scope: Extensions.ITreatmentScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ITreatmentScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	Treatments.$inject = ['$scope'];
} 