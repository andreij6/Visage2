module VisageApp {
	export class Index {
		private $scope: Extensions.IIndexScope;
		private $interval: ng.IIntervalService;
		private currentClass: string;
		private classes: Array<string>;

		private init(): void {
			var self = this;
			
			function moveCarousel() {
				$('.carousel').carousel();

				$('#myCarousel').removeClass(self.currentClass);
				$('#myCarousel').addClass(self.classes[1]);

				self.classes.unshift(self.currentClass);
				self.currentClass = self.classes.pop();
			}

			self.$interval(moveCarousel, 8000);
		}

		constructor($scope: Extensions.IIndexScope, $interval: ng.IIntervalService) {
			var self = this;
			self.$scope = $scope;
			self.$interval = $interval;
			self.currentClass = "bollard";
			self.classes = ["mother", "winter"];
			self.$scope.test = "Your are Home";

			
		
			self.init();
		}
	}

	Index.$inject = ['$scope', '$interval'];
}