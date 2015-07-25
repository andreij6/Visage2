/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angularjs/angular-sanitize.d.ts" />
/// <reference path="factories/postdataservice.ts" />
/// <reference path="factories/tickerdataservice.ts" />
var AdminApp;
(function (_AdminApp) {
    var AdminApp = angular.module("AdminApp", ['ngRoute', 'ngSanitize', 'textAngular', 'ui.bootstrap']);

    _AdminApp.Config.$inject = ['$routeProvider'];

    AdminApp.config(_AdminApp.Config);

    AdminApp.factory('PostDataService', ['$http', '$q', _AdminApp.PostDataService.Builder]);
    AdminApp.factory('CategoryDataService', ['$http', '$q', _AdminApp.CategoryDataService.Builder]);
    AdminApp.factory('OrderDataService', ['$http', '$q', _AdminApp.OrderDataService.Builder]);
    AdminApp.factory('mCategoryDataService', ['$http', '$q', _AdminApp.mCategoryDataService.Builder]);
    AdminApp.factory('ProductDataService', ['$http', '$q', _AdminApp.ProductDataService.Builder]);
    AdminApp.factory('TickerDataService', ['$http', '$q', _AdminApp.TickerDataService.Builder]);

    AdminApp.controller('Index', _AdminApp.Index);
    AdminApp.controller('LayoutCtrl', _AdminApp.LayoutCtrl);
    AdminApp.controller('Blogs', _AdminApp.Blogs);
    AdminApp.controller('MarketCtrl', _AdminApp.MarketCtrl);
    AdminApp.controller('TickerCtrl', _AdminApp.TickerCtrl);
    AdminApp.controller('ProductCtrl', _AdminApp.ProductCtrl);
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=AdminApp.js.map
