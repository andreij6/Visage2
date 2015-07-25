/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angularjs/angular-sanitize.d.ts" />
var VisageApp;
(function (_VisageApp) {
    var VisageApp = angular.module("VisageApp", ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'angular-loading-bar']);

    _VisageApp.Config.$inject = ['$routeProvider'];

    VisageApp.config(_VisageApp.Config);

    VisageApp.factory('ContactAPIService', ['$http', '$q', _VisageApp.ContactAPIService.Builder]);
    VisageApp.factory('MarketService', [_VisageApp.MarketService.Builder]);
    VisageApp.factory('ProductService', ['$http', '$q', _VisageApp.ProductService.Builder]);
    VisageApp.factory('PostDataService', ['$http', '$q', _VisageApp.PostDataService.Builder]);
    VisageApp.factory('TickerDataService', ['$http', '$q', _VisageApp.TickerDataService.Builder]);
    VisageApp.factory('EmailSubscriberService', ['$http', '$q', _VisageApp.EmailSubscriberService.Builder]);

    VisageApp.controller('Index', _VisageApp.Index);
    VisageApp.controller('About', _VisageApp.About);
    VisageApp.controller('Contact', _VisageApp.Contact);
    VisageApp.controller('Blog', _VisageApp.Blog);
    VisageApp.controller('Market', _VisageApp.Market);
    VisageApp.controller('LayoutCtrl', _VisageApp.LayoutCtrl);
    VisageApp.controller('CartCtrl', _VisageApp.CartCtrl);
    VisageApp.controller('OrderCtrl', _VisageApp.OrderCtrl);
    VisageApp.controller('ProductCtrl', _VisageApp.ProductCtrl);
    VisageApp.controller('HeaderCtrl', _VisageApp.HeaderCtrl);
    VisageApp.controller('GalleryCtrl', _VisageApp.GalleryCtrl);
    VisageApp.controller('Treatments', _VisageApp.Treatments);
    VisageApp.controller('Resources', _VisageApp.Resources);
    VisageApp.controller('TeamCtrl', _VisageApp.TeamCtrl);
    VisageApp.controller('LocationsCtrl', _VisageApp.LocationsCtrl);
    VisageApp.controller('VideoCtrl', _VisageApp.VideoCtrl);
    VisageApp.controller('TestimonialCtrl', _VisageApp.TestimonialCtrl);
    VisageApp.controller('SiteMapCtrl', _VisageApp.SiteMapCtrl);
    VisageApp.controller('SpecialCtrl', _VisageApp.SpecialCtrl);
    VisageApp.controller('PackageCtrl', _VisageApp.PackageCtrl);
    VisageApp.controller('GiftCardCtrl', _VisageApp.GiftCardCtrl);
    VisageApp.controller('SubscriberCtrl', _VisageApp.SubscriberCtrl);

    VisageApp.run([
        '$rootScope', '$templateCache', function ($rootScope, $templateCache) {
            $rootScope.$on('$viewContentLoaded', function () {
                $templateCache.removeAll();
            });
        }]);
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=VisageApp.js.map
