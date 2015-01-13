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
			self.$scope.MapUrl = "https://www.google.com/maps?q=3685+Preston+Road,+Ste.+129+Frisco,+TX+75034&bav=on.2,or.r_cp.r_qf.&bvm=bv.83339334,d.cWc&biw=1366&bih=667&dpr=1&um=1&ie=UTF-8&sa=X&ei=Qaa0VP6YIq_HsQTu34DwBw&ved=0CAYQ_AUoAQ";

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