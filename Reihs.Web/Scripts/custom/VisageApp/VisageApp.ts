/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angularjs/angular-sanitize.d.ts" />


module VisageApp {

	var VisageApp = angular.module("VisageApp", ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

	Config.$inject = ['$routeProvider'];

	VisageApp.config(Config);

	VisageApp.factory('ContactAPIService', ['$http', '$q', ContactAPIService.Builder]);
	VisageApp.factory('MarketService', [MarketService.Builder]);
	VisageApp.factory('ProductService', ['$http', '$q', ProductService.Builder]);

	VisageApp.controller('Index', Index);
	VisageApp.controller('About', About);
	VisageApp.controller('Contact', Contact);
	VisageApp.controller('Blog', Blog);
	VisageApp.controller('Market', Market);
	VisageApp.controller('LayoutCtrl', LayoutCtrl);
	VisageApp.controller('CartCtrl', CartCtrl);
	VisageApp.controller('OrderCtrl', OrderCtrl);
	VisageApp.controller('ProductCtrl', ProductCtrl);
	VisageApp.controller('HeaderCtrl', HeaderCtrl);
	VisageApp.controller('GalleryCtrl', GalleryCtrl);
	VisageApp.controller('Treatments', Treatments);
	VisageApp.controller('Resources', Resources);
	VisageApp.controller('TeamCtrl', TeamCtrl);
	VisageApp.controller('LocationsCtrl', LocationsCtrl);
	VisageApp.controller('VideoCtrl', VideoCtrl);
	VisageApp.controller('TestimonialCtrl', TestimonialCtrl);
	VisageApp.controller('SiteMapCtrl', SiteMapCtrl);
	VisageApp.controller('SpecialCtrl', SpecialCtrl);
}