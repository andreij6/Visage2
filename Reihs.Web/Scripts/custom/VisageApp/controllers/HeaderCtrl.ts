module VisageApp {
	export class HeaderCtrl {
		private $scope: Extensions.IHeaderCtrlScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IHeaderCtrlScope) {
			var self = this;
			self.$scope = $scope;
			
			self.$scope.templates = [{ name: 'home', url: "../../../Templates/Front/Headers/HomeHeader.html" },
								{ name: 'others', url: "../../../Templates/Front/Headers/OtherHeaders.html"}]

			self.$scope.template = self.$scope.templates[0];

			self.$scope.addjQuery = function () {
					$('#s3slider').s3Slider({
						timeOut: 8000
					});
			}

			self.$scope.$on('$routeChangeStart', function (next, current) {
				if (current.$$route.controller == "Index" )
					self.$scope.template = self.$scope.templates[0];
				else
					self.$scope.template = self.$scope.templates[1];
			});

			self.init();
		}
	}

	HeaderCtrl.$inject = ['$scope'];
} 