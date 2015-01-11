/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angularjs/angular-sanitize.d.ts" />


module VisageApp {

	var VisageApp = angular.module("VisageApp", ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

	Config.$inject = ['$routeProvider'];

	VisageApp.config(Config);

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
}