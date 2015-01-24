module VisageApp {
	export class TeamCtrl {
		private $scope: Extensions.ITeamScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ITeamScope) {
			var self = this;
			self.$scope = $scope;

			function menuTrigger() {
				if (!self.$scope.open)
					self.$scope.YouTubeMenu = ' dr-menu-open';
				else
					self.$scope.YouTubeMenu = '';

				self.$scope.open = !self.$scope.open;

			}

			self.$scope.YouTubeMenu = '';

			self.$scope.MenuTrigger = menuTrigger;

			self.init();
		}
	}

	TeamCtrl.$inject = ['$scope'];
} 