module AdminApp {
	export class Config {
		constructor($routeProvider: ng.route.IRouteProvider) {
			$routeProvider.when('/',
				{
					templateUrl: '/Templates/Admin/Home.html',
					controller: 'Index'
				}).when('/Blogs',
				{
					templateUrl: 'Templates/Admin/Blogs/Index.html',
					controller: 'Blogs'
				}).when('/Blogs/Manage',
				{
					templateUrl: 'Templates/Admin/Blogs/Manage.html',
					controller: 'Blogs'
				}).when('/Blogs/Edit/:Id',
				{
					templateUrl: 'Templates/Admin/Blogs/New.html',
					controller: 'Blogs'
				}).when('/Blogs/New',
				{
					templateUrl: 'Templates/Admin/Blogs/New.html',
					controller: 'Blogs'
				}
				).when('/Blogs/Category/New',
				{
					templateUrl: 'Templates/Admin/Blogs/NewCategory.html',
					controller: 'Blogs'
				}).when('/Market',
				{
					templateUrl: 'Templates/Admin/Market/Index.html',
					controller: 'MarketCtrl'
				}).when('/Market/Orders',
				{
					templateUrl: 'Templates/Admin/Market/Orders.html',
					controller: 'MarketCtrl'
				}).when('/Market/Products',
				{
					templateUrl: 'Templates/Admin/Market/Products.html',
					controller: 'MarketCtrl'
				}).otherwise({ redirectTo: '/' })
		}
	}
} 