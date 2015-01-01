/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angularjs/angular-sanitize.d.ts" />


module AdminApp {

	var AdminApp = angular.module("AdminApp", ['ngRoute', 'ngSanitize']);

	Config.$inject = ['$routeProvider'];

	AdminApp.config(Config);

	AdminApp.controller('Index', Index);
	AdminApp.controller('LayoutCtrl', LayoutCtrl);
}