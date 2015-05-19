module VisageApp {
	export class Contact {
		private $scope: Extensions.IContactScope;
		private ApiService: ContactAPIService;

		constructor($scope: Extensions.IContactScope, apiService: ContactAPIService) {
			var self = this;
			self.$scope = $scope;
			self.ApiService = apiService;
			self.$scope.MapUrl = "https://www.google.com/maps?q=3685+Preston+Road,+Ste.+129+Frisco,+TX+75034&bav=on.2,or.r_cp.r_qf.&bvm=bv.83339334,d.cWc&biw=1366&bih=667&dpr=1&um=1&ie=UTF-8&sa=X&ei=Qaa0VP6YIq_HsQTu34DwBw&ved=0CAYQ_AUoAQ";

			self.$scope.sendMessage = self.SendMessage;
			self.$scope.ShowImage = self.showImage;

			self.init();
			self.setupContactInfo();
		}

		private init(): void {
			var self = this;
		}

		private setupContactInfo(): void {
			var Frisco = new ContactInfo('', '', '', '', '');
			var Dallas = new ContactInfo('', '', '', '', '');
			var Schulenburg = new ContactInfo('', '', '', '', '');

			var locations = [Frisco, Dallas, Schulenburg];
		}

		private showImage(code: string) {
			var self = this;

			self.$scope.Showing = true;

			switch (code) {
				case 'D':
					self.$scope.LocationImage = "../../Content/Images/Locations/Dallas.JPG";
					break;
				case 'S':
					self.$scope.LocationImage = "../../Content/Images/Locations/Schulenburg.JPG";
					break;
				case 'F':
					self.$scope.LocationImage = "../../Content/Images/Locations/Frisco.jpg";
					break;
				default:
					break;
			}
		}

		private SendMessage() {
			this.ApiService.sendMessage(this.$scope.Message).then(
				function (data) { console.log("send me to the success message"); },
				function (error) { console.log(error); });
		}
	}

	export class ContactInfo {

		constructor(public Address, public Phone, public Hours, public ImageCode, public MapUrl) { }


	}

	Contact.$inject = ['$scope', 'ContactAPIService'];
}