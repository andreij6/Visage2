module VisageApp {
	export class VideoCtrl {
		private $scope: Extensions.IVideoScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IVideoScope) {
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

	VideoCtrl.$inject = ['$scope'];
} 