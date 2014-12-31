﻿/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angularjs/angular-sanitize.d.ts" />


module VisageApp {

	var VisageApp = angular.module("VisageApp", ['ngRoute', 'ngSanitize']);

	Config.$inject = ['$routeProvider'];

	VisageApp.config(Config);

}