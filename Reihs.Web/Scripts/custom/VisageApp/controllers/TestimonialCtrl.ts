module VisageApp {
	export class TestimonialCtrl {
		private $scope: Extensions.ITestimonialScope;

		private init(): void {
			var self = this;

			console.log(self.$scope.TestimonialImages);
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

			function LightBoxTrigger($event: ng.IAngularEvent) {
				self.$scope.Image = $event["currentTarget"]["src"];
				self.$scope.Showing = true;
			}

			function GenerateImages() {
				var testimonialImages = ['Angela', 'Brad', 'Brandi', 'Chad', 'Debbie', 'Fernando', 'Hamidan', 'Iliana', 'Isabel', 'Jan', 'Kim', 'Liz', 'Lynn', 'Marlene', 'Michelle', 'Nancy', 'Peggy', 'Shirley', 'Tamme', 'Tara'];
				
				var imageLocation = '../../../Content/Images/Testimonials/';
				var ext = '.jpg';

				var result = [];

				for (var i = 0; i < testimonialImages.length; i++) {
					var src = imageLocation + testimonialImages[i] + ext;
					result.push(src);
				}

				return result;
			};

			self.$scope.TestimonialImages = GenerateImages();

			self.$scope.Trigger = LightBoxTrigger;

			self.$scope.YouTubeMenu = '';

			self.$scope.MenuTrigger = menuTrigger;

			self.init();
		}
	}

	TestimonialCtrl.$inject = ['$scope'];
} 