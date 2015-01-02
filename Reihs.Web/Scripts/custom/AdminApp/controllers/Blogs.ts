module AdminApp {
	export class Blogs {
		private $scope: Admin_Extensions.IBlogScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Admin_Extensions.IBlogScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.test = "Your are in the Admin Blog Page";

			self.init();
		}
	}

	Blogs.$inject = ['$scope'];
} 