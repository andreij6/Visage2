module VisageApp {

	export class About {
		private $scope: Extensions.IAboutScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IAboutScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			function menuTrigger() {
				if (!self.$scope.open) 
					self.$scope.YouTubeMenu = ' dr-menu-open';
				else
					self.$scope.YouTubeMenu = '';

				self.$scope.open = !self.$scope.open;
				
			}

			self.$scope.open = false;

			self.$scope.YouTubeMenu = '';

			self.$scope.MenuTrigger = menuTrigger;

			self.init();

			self.$scope.SideNavs = [
				{ Text: 'Team', Url: '#/Team' },
				{ Text: 'Patient Stories', Url: '#/Stories' },
				{ Text: 'Locations & Contact', Url: '#/Contact' }
			] 
		}
	}

	About.$inject = ['$scope'];
}