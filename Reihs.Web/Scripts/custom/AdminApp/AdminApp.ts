/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angularjs/angular-sanitize.d.ts" />
/// <reference path="factories/postdataservice.ts" />


module AdminApp {

	var AdminApp = angular.module("AdminApp", ['ngRoute', 'ngSanitize', 'textAngular', 'ui.bootstrap']);

	Config.$inject = ['$routeProvider'];

	AdminApp.config(Config);

	AdminApp.factory('PostDataService', ['$http', '$q', PostDataService.PDSFactory]);
	AdminApp.factory('CategoryDataService', ['$http', '$q', CategoryDataService.CDSFactory]);
	AdminApp.factory('OrderDataService', ['$http', '$q', OrderDataService.ODSFactory]);
	AdminApp.factory('mCategoryDataService', ['$http', '$q', mCategoryDataService.CDSFactory]);
	AdminApp.factory('ProductDataService', ['$http', '$q', ProductDataService.PDSFactory]);

	AdminApp.controller('Index', Index);
	AdminApp.controller('LayoutCtrl', LayoutCtrl);
	AdminApp.controller('Blogs', Blogs);
	AdminApp.controller('MarketCtrl', MarketCtrl);
}