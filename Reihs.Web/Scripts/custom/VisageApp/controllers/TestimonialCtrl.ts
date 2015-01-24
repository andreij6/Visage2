module VisageApp {
	export class TestimonialCtrl {
		private $scope: Extensions.ITestimonialScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ITestimonialScope) {
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

	TestimonialCtrl.$inject = ['$scope'];
} 