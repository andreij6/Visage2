module VisageApp {
	export class SiteMapCtrl {
		private $scope: Extensions.ISiteMapScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ISiteMapScope) {
			var self = this;
			self.$scope = $scope;

			self.$scope.Pages = [
				{ Name: 'Home', Url: '#/' },
				{ Name: 'About', Url: '#/About' },
				{ Name: 'Contact', Url: '#/Contact' },
				{ Name: 'Photo Gallery', Url: '#/Gallery' },
				{ Name: 'Our Locations', Url: '#/Locations' },
				{ Name: 'Market', Url: '#/Market' },
				{ Name: 'Treatments', Url: '#/Treatments' },
				{ Name: 'Testimonials', Url: '#/Testimonials' },
				{ Name: 'Patient Resources', Url: '#/Resources' },
				{ Name: 'New Patient', Url: '#/Resources/NewPatients' },
				{ Name: 'Fact Sheets', Url: '#/Resources/FactSheets' },
				{ Name: 'Post Care', Url: '#/Resources/PostCare' },
				{ Name: 'Videos', Url: '#/Videos'}
			]

			self.init();
		}
	}

	SiteMapCtrl.$inject = ['$scope'];
} 