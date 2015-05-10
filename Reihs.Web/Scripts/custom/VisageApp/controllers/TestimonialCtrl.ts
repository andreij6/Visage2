module VisageApp {
	export class TestimonialCtrl {
		private $scope: Extensions.ITestimonialScope;
		private $location: ng.ILocationService;
		private $routeParams: IRouteParams;

		private init(): void {
			var self = this;
		}

		constructor(
			$scope: Extensions.ITestimonialScope,
			$location: ng.ILocationService,
			$routeParams: IRouteParams) {
			var self = this;
			self.$scope = $scope;
			self.$location = $location;
			self.$routeParams = $routeParams;

			var clients = [];

			//#region Treatments
			var botox = { Name: "Botox", Code: "fi"}

			//#endregion

			//#region Clients Setup
			var kim = {
				Name: "Kim",
				Current: false,
				ImagePath: "/",
				TreatmentString: "Botox, Something Else",
				TreatmentObjs: [botox],
				Story_Part_One: "text",
				Story_Part_Two: "text",
				Story_Part_Three: "text"
			};

			var brad = { Name: "Brad", Current: false, ImagePath: "/", TreatmentString: "Some History", TreatmentObjs: [botox], Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: "" };

			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			var name = { Name: "", Current: false, ImagePath: "", TreatmentString: "", TreatmentObjs: [], VideoImg: "", TestimonialImg: "", Story_Part_One: "", Story_Part_Two: "", Story_Part_Three: ""}
			//#endregion

			clients.push(kim);
			clients.push(brad);

			function setCurrentClient() {
				var name = self.$routeParams["name"];

				for (var pos = 0; pos < clients.length; pos++) {
					if (clients[pos].Name === name) {
						self.$scope.Client = clients[pos];
						clients[pos].Current = true;
						self.$scope.TreatmentObjs = self.$scope.Client.TreatmentObjs;
						console.log(self.$scope.TreatmentObjs);
					}
				}
			}

			function menuTrigger() {
				if (!self.$scope.open)
					self.$scope.YouTubeMenu = ' dr-menu-open';
				else
					self.$scope.YouTubeMenu = '';

				self.$scope.open = !self.$scope.open;

			}

			function LightBoxTrigger($event: ng.IAngularEvent) {
				self.$scope.Image = $event["currentTarget"]["src"];
				self.$scope.Showing = true;
			}

			function GenerateImages() {
				var testimonialImages = ['Angela', 'Brad', 'Brandi', 'Chad', 'Debbie', 'Fernando', 'Hamidan', 'Iliana', 'Isabel', 'Jan', 'Kim', 'Liz', 'Lynn', 'Marlene', 'Michelle', 'Nancy', 'Peggy', 'Shirley', 'Tamme', 'Tara'];
				
				var imageLocation = '../../../Content/Images/Testimonials/';
				var ext = '.jpg';

				var result = [];

				for (var i = 0; i < testimonialImages.length; i++) {
					var src = imageLocation + testimonialImages[i] + ext;
					result.push(src);
				}

				return result;
			};

			self.$scope.Clients = clients;
			self.$scope.TestimonialImages = GenerateImages();
			self.$scope.Trigger = LightBoxTrigger;
			self.$scope.YouTubeMenu = '';
			self.$scope.MenuTrigger = menuTrigger;
			self.init();
			setCurrentClient();
		}
	}

	TestimonialCtrl.$inject = ['$scope', '$location', '$routeParams'];
} 