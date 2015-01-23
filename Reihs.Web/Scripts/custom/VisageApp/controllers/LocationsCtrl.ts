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
					Services: [],
					MapUrl: ''
				};
			var Dallas =
				{
					Active: '',
					Name: 'Dallas',
					Address: '',
					Email: 'info@lebeauvisagemedspa.com',
					Phone: '',
					Phonetel: '',
					Toll: '+1 866 54 BOTOX',
					Tolltel: 'tel:+18665426869',
					Services: [],
					MapUrl: ''
				};
			var LaSchl =
				{
					Active: '',
					Name: 'La Grange-Schulenburg',
					Address: '',
					Email: 'info@lebeauvisagemedspa.com',
					Phone: '',
					Phonetel: '',
					Toll: '+1 866 54 BOTOX',
					Tolltel: 'tel:+18665426869',
					Services: [],
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

			self.$scope.SetActive = setActive;

		}
	}

	LocationsCtrl.$inject = ['$scope'];
} 