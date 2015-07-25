var AdminApp;
(function (AdminApp) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '/Templates/Admin/Home.html',
                controller: 'Index'
            }).when('/Blogs', {
                templateUrl: 'Templates/Admin/Blogs/Index.html',
                controller: 'Blogs'
            }).when('/Blogs/Manage', {
                templateUrl: 'Templates/Admin/Blogs/Manage.html',
                controller: 'Blogs'
            }).when('/Blogs/Edit/:Id', {
                templateUrl: 'Templates/Admin/Blogs/New.html',
                controller: 'Blogs'
            }).when('/Blogs/New', {
                templateUrl: 'Templates/Admin/Blogs/New.html',
                controller: 'Blogs'
            }).when('/Blogs/Category/New', {
                templateUrl: 'Templates/Admin/Blogs/NewCategory.html',
                controller: 'Blogs'
            }).when('/Market', {
                templateUrl: 'Templates/Admin/Market/Index.html',
                controller: 'MarketCtrl'
            }).when('/Market/Orders', {
                templateUrl: 'Templates/Admin/Market/Orders.html',
                controller: 'MarketCtrl'
            }).when('/Market/Products', {
                templateUrl: 'Templates/Admin/Market/Products/List.html',
                controller: 'MarketCtrl'
            }).when('/Market/Products/New', {
                templateUrl: 'Templates/Admin/Market/Products/CreateEdit.html',
                controller: 'ProductCtrl'
            }).when('/Market/Products/Edit/:Id', {
                templateUrl: 'Templates/Admin/Market/Products/CreateEdit.html',
                controller: 'ProductCtrl'
            }).when('/Ticker', {
                templateUrl: 'Templates/Admin/Ticker/List.html',
                controller: 'TickerCtrl'
            }).when('/Ticker/New', {
                templateUrl: 'Templates/Admin/Ticker/New.html',
                controller: 'TickerCtrl'
            }).otherwise({ redirectTo: '/' });
        }
        return Config;
    })();
    AdminApp.Config = Config;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=Config.js.map
