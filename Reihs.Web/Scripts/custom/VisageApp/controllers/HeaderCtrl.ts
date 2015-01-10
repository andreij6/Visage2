module VisageApp {
	export class HeaderCtrl {
		private $scope: Extensions.IHeaderCtrlScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IHeaderCtrlScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.template = { name: 'home', url: "../../../Templates/Front/Headers/HomeHeader.html" };

			self.$scope.addjQuery = function () {
					$('#s3slider').s3Slider({
						timeOut: 8000
					});
			}

			self.init();
		}
	}

	HeaderCtrl.$inject = ['$scope'];
} 