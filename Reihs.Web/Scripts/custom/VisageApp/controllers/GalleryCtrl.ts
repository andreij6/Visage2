module VisageApp {
	export class GalleryCtrl {
		private $scope: Extensions.IGalleryScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IGalleryScope) {
			var self = this;
			self.$scope = $scope;
			self.$scope.Showing = false;
			self.$scope.Image = "";

			function LightBoxTrigger($event: ng.IAngularEvent) {
				
				self.$scope.Image = $event["currentTarget"]["src"];
				self.$scope.Showing = true;
			}

			self.$scope.Trigger = LightBoxTrigger;

			self.init();
		}
	}

	GalleryCtrl.$inject = ['$scope'];
} 