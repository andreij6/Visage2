module VisageApp {
	export class Config {
		constructor($routeProvider: ng.route.IRouteProvider) {
			$routeProvider.when('/',
				{

				}).otherwise({ redirectTo: '/'})
		}
	}
} 