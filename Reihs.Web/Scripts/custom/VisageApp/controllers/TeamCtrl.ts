module VisageApp {
	export class TeamCtrl {
		private $scope: Extensions.ITeamScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ITeamScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			self.init();
		}
	}

	TeamCtrl.$inject = ['$scope'];
} 