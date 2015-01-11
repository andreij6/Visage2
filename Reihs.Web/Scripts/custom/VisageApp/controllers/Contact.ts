module VisageApp {
	export class Contact {
		private $scope: Extensions.IContactScope;
		private ApiService: ContactAPIService;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IContactScope, apiService: ContactAPIService) {
			var self = this;
			self.$scope = $scope;
			self.ApiService = apiService;

			function SendMessage(message: Extensions.ContactMessage) {
				self.ApiService.sendMessage(message).then(
					function (data) { console.log("send me to the success message");},
					function (error) { console.log(error); });
			}

			self.$scope.sendMessage = SendMessage;

			self.init();
		}
	}

	Contact.$inject = ['$scope', 'ContactAPIService'];
}