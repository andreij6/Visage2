module VisageApp {
	export class About {
		private $scope: Extensions.IAboutScope;
		private open: boolean;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IAboutScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "About Page";

			function menuTrigger() {
				if (!self.open) 
					self.$scope.YouTubeMenu = ' dr-menu-open';
				else
					self.$scope.YouTubeMenu = '';

				self.open = !self.open;
				
			}

			self.open = false;

			self.$scope.YouTubeMenu = '';

			self.$scope.MenuTrigger = menuTrigger;

			self.init();

			self.$scope.SideNavs = [
				{ Text: 'Team', Url: '#/Team' },
				{ Text: 'Testimonials', Url: '#/Testimonials' },
				{ Text: 'Videos', Url: '#/Videos' },
				{ Text: 'Locations', Url: '#/Locations'}
			] 
		}
	}

	About.$inject = ['$scope'];
}