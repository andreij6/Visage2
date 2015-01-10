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
				).when('/Market',
				{
					templateUrl: 'Templates/Front/Market/Index.html',
					controller: 'Market'
				}
				).when('/Market/Product/:name',
				{
					templateUrl: 'Templates/Front/Market/ProductDetail.html',
					controller: 'ProductCtrl'
				}
				).when('/Market/Cart',
				{
					templateUrl: 'Templates/Front/Market/CartDetail.html',
					controller: 'CartCtrl'
				}).when('/Market/Order',
				{
					templateUrl: 'Templates/Front/Market/Checkout.html',
					controller: 'OrderCtrl'
				}).when('/Market/OrderSuccess',
				{
					templateUrl: 'Templates/Front/Market/CompletedOrder.html',
					controller: 'OrderCtrl'
				}).otherwise({ redirectTo: '/' })
		}
	}
} 