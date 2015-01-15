module VisageApp {
	export class TestimonialCtrl {
		private $scope: Extensions.ITestimonialScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ITestimonialScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Testimonil Page";

			self.init();
		}
	}

	TestimonialCtrl.$inject = ['$scope'];
} 