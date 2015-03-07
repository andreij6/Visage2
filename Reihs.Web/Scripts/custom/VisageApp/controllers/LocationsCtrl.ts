module VisageApp {
	export class LocationsCtrl {
		private $scope: Extensions.ILocationsScope;
		private PossibleValues;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ILocationsScope) {
			var self = this;
			self.$scope = $scope;

			self.init();

			var services = [
				{ category: "Wrinkle Reduction", treatments: ["Botox", "Dysport"] },
				{ category: "Fillers", treatments: ["Restylane", 'Restylane Silk', 'Perlane', 'Juvederm', 'Voluma', 'Sculptra'] },
				{ category: 'Vein Reduction', treatments: ['Laser Vein Therapy', 'Sclerotherapy'] },
				{ category: 'Pigmentation', treatments: ['IPL Photo Facial', 'Chemical Peels'] },
				{ category: 'Fat Reduction', treatments: ['HCG Diet', 'LipoDissolve'] },
				{ category: 'Microdermabrasion' }, { category: 'Laser Hair Removal' }, { category: 'Skin Resurfacing'}
			]

			//#region Location Objects
			var Frisco =
				{
					Active: '',
					Name: 'Frisco (Main)',
					Address: '3685 Preston Road, Ste. 129 Frisco, TX 75034',
					Email: 'info@lebeauvisagemedspa.com',
					Phone: '+214 705 7676',
					Phonetel: 'tel:+12147057676',
					Toll: '+1 866 54 BOTOX',
					Tolltell: 'tel:+18665426869',
					Photo: "../../../Content/Images/Locations/Frisco.jpg",
					Hours: 'Mon,Wed-Th: 9a-5p; Tues: 11a-8p; Fri: 9a-1:30p',
					Services: services,
					MapUrl: ''
				};
			var Dallas =
				{
					Active: '',
					Name: 'Dallas',
					Address: 'Lovers Lane',
					Email: 'info@lebeauvisagemedspa.com',
					Phone: '+214 705 7676',
					Phonetel: 'tel:+12147057676',
					Toll: '+1 866 54 BOTOX',
					Tolltel: 'tel:+18665426869',
					Photo: "../../../Content/Images/Locations/Dallas.JPG",
					//Hours: 'Mon,Wed-Th: 9a-5p; Tues: 11a-8p; Fri: 9a-1:30p',
					Services: services,
					MapUrl: ''
				};
			var LaSchl =
				{
					Active: '',
					Name: 'Schulenburg Clinic',
					Address: '40 East Avenue Schulenburg, TX 78956',
					Email: 'info@lebeauvisagemedspa.com',
					Phone: '+214 705 7676',
					Phonetel: 'tel:+12147057676',
					Toll: '+1 866 54 BOTOX',
					Tolltel: 'tel:+18665426869',
					Photo: "../../../Content/Images/Locations/Schulenburg.JPG",
					//Hours: 'Mon,Wed-Th: 9a-5p; Tues: 11a-8p; Fri: 9a-1:30p',
					Services: services,
					MapUrl: ''
				};
			//#endregion

			function setActive(name: string) {
				for (var x in self.$scope.Locations)
				{
					if (self.$scope.Locations[x].Name === name) {
						self.$scope.Active = x;
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

			self.$scope.Frisco = Frisco;
			self.$scope.Dallas = Dallas;
			self.$scope.LaSchl = LaSchl;

			self.$scope.Locations = [self.$scope.Frisco, self.$scope.Dallas, self.$scope.LaSchl];
			self.$scope.Others = [self.$scope.Dallas, self.$scope.LaSchl];
			self.$scope.Active = 0;

			self.$scope.$watch('Active', function (newValue, oldValue) {
				self.$scope.Locations[oldValue].Active = '';
				self.$scope.Locations[newValue].Active = 'active-pill';

				var removed = self.$scope.Locations.splice(newValue, 1);

				self.$scope.Others = self.$scope.Locations;

				self.$scope.Locations = [self.$scope.Frisco, self.$scope.Dallas, self.$scope.LaSchl];
			});
			self.$scope.YouTubeMenu = '';

			self.$scope.SetActive = setActive;

			self.$scope.MenuTrigger = menuTrigger;

		}
	}

	LocationsCtrl.$inject = ['$scope'];
} 