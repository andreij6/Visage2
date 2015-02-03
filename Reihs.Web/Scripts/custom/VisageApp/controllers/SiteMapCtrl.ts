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
				{ Name: 'Blog', Url: '#/Blog' },
				{ Name: 'Contact', Url: '#/Contact' },
				{ Name: 'Fact Sheets', Url: '#/Resources/FactSheets' },
				{ Name: 'Gift Cards', Url: '#/Market/Special/GiftCards' },
				{ Name: 'Market', Url: '#/Market' },
				{ Name: 'Monthly Specials', Url: '#/Specials/Monthly'},
				{ Name: 'New Patient', Url: '#/Resources/NewPatients' },
				{ Name: 'Our Locations', Url: '#/Locations' },
				{ Name: 'Patient Resources', Url: '#/Resources' },
				{ Name: 'Photo Gallery', Url: '#/Gallery' },
				{ Name: 'Post Care', Url: '#/Resources/PostCare' },
				{ Name: 'Treatments', Url: '#/Treatments' },
				{ Name: 'Testimonials', Url: '#/Testimonials' },
				{ Name: 'Videos', Url: '#/Videos'}
			]

			self.init();
		}
	}

	SiteMapCtrl.$inject = ['$scope'];
} 