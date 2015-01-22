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
				//$('dr-menu').addClass(' dr-menu-open');
				console.log('hello');
			}

			self.$scope.YouTubeMenu = 'dr-menu';

			self.$scope.MenuTrigger = menuTrigger;

			self.init();
		}
	}

	About.$inject = ['$scope'];
}