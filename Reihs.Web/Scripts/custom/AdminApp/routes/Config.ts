module AdminApp {
	export class Config {
		constructor($routeProvider: ng.route.IRouteProvider) {
			$routeProvider.when('/',
				{
					templateUrl: '/Templates/Admin/Home.html',
					controller: 'Index'
				}).otherwise({ redirectTo: '/' })
		}
	}
} 