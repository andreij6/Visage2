module VisageApp {
	export class Config {
		constructor($routeProvider: ng.route.IRouteProvider) {
			$routeProvider.when('/',
				{
					templateUrl: '/Templates/Front/Home.html',
					controller: 'Index'
				}).when('/About',
				{
					templateUrl: '/Templates/Front/About.html',
					controller: 'About'
				}
				).when('/Contact',
				{
					templateUrl: '/Templates/Front/Contact.html',
					controller: 'Contact'
				}
				).when('/Blog',
				{
					templateUrl: '/Templates/Front/Blog/Index.html',
					controller: 'Blog'
				}
				).when('/Gallery',
				{
					templateUrl: '/Templates/Front/Gallery.html',
					controller: 'GalleryCtrl'
				}).when('/Locations',
				{
					templateUrl: 'Templates/Front/Locations.html',
					controller: 'LocationsCtrl'
				}).when('/Market',
				{
					templateUrl: 'Templates/Front/Market/Index.html',
					controller: 'Market'
				}
				).when('/Market/Special/GiftCards',
				{
					templateUrl: 'Templates/Front/Market/GiftCards.html',
					controller: 'GiftCardCtrl'
				}).when('/Market/Treatments/:Product',
				{
					templateUrl: 'Templates/Front/Market/Packages.html',
					controller: 'Market'
				}).when('/Market/Packages/:Id',
				{
					templateUrl: 'Templates/Front/Market/PackageDetail.html',
					controller: 'PackageCtrl'
				}).when('/Market/Products/:Category',
				{
					templateUrl: 'Templates/Front/Market/ProductList.html',
					controller: 'Market'
				}).when('/Market/Item/:id',
				{
					templateUrl: 'Templates/Front/Market/ProductDetail.html',
					controller: 'ProductCtrl'
				}
				).when('/Market/Cart',
				{
					templateUrl: 'Templates/Front/Market/CartDetail.html',
					controller: 'CartCtrl'
				}).when('/Market/Purchase',
				{
					templateUrl: 'Templates/Front/Market/Checkout.html',
					controller: 'OrderCtrl'
				}).when('/Market/Purchase/Success',
				{
					templateUrl: 'Templates/Front/Market/CompletedOrder.html',
					controller: 'OrderCtrl'
				}).when('/Treatments',
				{
					templateUrl: 'Templates/Front/Treatments/Index.html',
					controller: 'Treatments'
				}).when('/Team',
				{
					templateUrl: 'Templates/Front/Team.html',
					controller: 'TeamCtrl'
				}).when('/Testimonials',
				{
					templateUrl: 'Templates/Front/Testimonials.html',
					controller: 'TestimonialCtrl'
				}).when('/Resources',
				{
					templateUrl: 'Templates/Front/Resources/Index.html',
					controller: 'Resources'
				}).when('/Resources/NewPatients',
				{
					templateUrl: 'Templates/Front/Resources/NewPatients.html',
					controller: 'Resources'
				}).when('/Resources/PostCare', {
					templateUrl: 'Templates/Front/Resources/PostCare.html',
					controller: 'Resources'
				}).when('/Resources/FactSheets',
				{
					templateUrl: 'Templates/Front/Resources/FactSheets.html',
					controller: 'Resources'
				}).when('/SiteMap',
				{
					templateUrl: 'Templates/Front/SiteMap.html',
					controller: 'SiteMapCtrl'
				}).when('/Special/Event',
				{
					templateUrl: 'Templates/Front/Special/Events.html',
					controller: 'SpecialCtrl'
				}).when('/Videos',
				{
					templateUrl: 'Templates/Front/Videos.html',
					controller: 'VideoCtrl'
				}).otherwise({ redirectTo: '/' });

			
		}
	}
} 