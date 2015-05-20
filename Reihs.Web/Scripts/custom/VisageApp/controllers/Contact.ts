module VisageApp {

	export class Contact {
		private $scope: Extensions.IContactScope;
		private ApiService: ContactAPIService;

		constructor($scope: Extensions.IContactScope, apiService: ContactAPIService) {
			var self = this;
			self.$scope = $scope;
			self.ApiService = apiService;
			self.$scope.MapUrl = "https://www.google.com/maps?q=3685+Preston+Road,+Ste.+129+Frisco,+TX+75034&bav=on.2,or.r_cp.r_qf.&bvm=bv.83339334,d.cWc&biw=1366&bih=667&dpr=1&um=1&ie=UTF-8&sa=X&ei=Qaa0VP6YIq_HsQTu34DwBw&ved=0CAYQ_AUoAQ";
			self.$scope.LocationImage = "";
			self.$scope.sendMessage = self.SendMessage;
			self.$scope.ShowImage = showImage;

			function showImage(location: ContactInfo): void {
				self.$scope.LocationImage = location.SetImage();

				self.$scope.Showing = true;
			}

			self.init();
			self.setupContactInfo();
		}

		private init(): void {
			var self = this;
		}

		setupContactInfo(): void {
			var Frisco = new ContactInfo(
				'Frisco (Main)',
				'3685 Preston Road, Ste. 129 Frisco, TX 75034',
				'+214 705 7676',
				'Mon,Wed,Thurs: 9a-5p; Tues:11a-8p, Fri:9a-1:30p, Sat: By Appointment Only!',
				'Frisco.jpg',
				'https://www.google.com/maps?q=3685+Preston+Road,+Ste.+129+Frisco,+TX+75034&bav=on.2,or.r_cp.r_qf.&bvm=bv.83339334,d.cWc&biw=1366&bih=667&dpr=1&um=1&ie=UTF-8&sa=X&ei=Qaa0VP6YIq_HsQTu34DwBw&ved=0CAYQ_AUoAQ');

			var Dallas = new ContactInfo(
				'Dallas',
				'4306 Lovers Lane Dallas, TX 75225',
				'+214 705 7676',
				'Thurs: 10a-4p;',
				'Dallas.JPG',
				'https://www.google.com/maps/place/4306+Lovers+Ln,+Dallas,+TX+75225/@32.851151,-96.8091285,17z/data=!3m1!4b1!4m2!3m1!1s0x864e9e5f23ea8b73:0xe2f724676b36f5a7');

			var Schulenburg = new ContactInfo(
				'Schulenburg Clinic',
				'40 East Avenue Schulenburg, TX 78956',
				'+214 705 7676',
				' June 19th; August 14th; September 25th; December 4th: 10a-5p;',
				'Schulenburg.JPG',
				'https://www.google.com/maps/place/40+East+Ave,+Schulenburg,+TX+78956/@29.6861593,-96.8988671,17z/data=!3m1!4b1!4m2!3m1!1s0x86439738980a6b01:0xc5ab458711593d7e');

			this.$scope.Locations = [Frisco, Dallas, Schulenburg];
		}

		SendMessage() {
			this.ApiService.sendMessage(this.$scope.Message).then(
				function (data) { console.log("send me to the success message"); },
				function (error) { console.log(error); });
		}
	}

	export class ContactInfo {
		constructor(
			public Name,
			public Address,
			public Phone,
			public Hours,
			public ImageName,
			public MapUrl) { }

		public SetImage(): string {
			return '../../Content/Images/Locations/' + this.ImageName;
		}
	}

	Contact.$inject = ['$scope', 'ContactAPIService'];
}