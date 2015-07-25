var VisageApp;
(function (VisageApp) {
    var ProductCtrl = (function () {
        function ProductCtrl($scope, MarketSvc, productSvc, $routeParams) {
            var self = this;
            self.$scope = $scope;
            self.MarketService = MarketSvc;
            self.ProductSvc = productSvc;
            self.$routeParams = $routeParams;

            function GetProductById() {
                self.ProductSvc.getById($routeParams["id"]).then(function (data) {
                    self.$scope.Product = data;
                }, function (error) {
                    //console.log(error);
                });
            }

            function GetAll() {
                self.ProductSvc.getAll().then(function (data) {
                    self.$scope.Products = data;
                    //console.log(data);
                }, function (error) {
                    //console.log(error);
                });
            }

            GetAll();

            GetProductById();

            self.init();
        }
        ProductCtrl.prototype.init = function () {
            var self = this;
        };
        return ProductCtrl;
    })();
    VisageApp.ProductCtrl = ProductCtrl;

    ProductCtrl.$inject = ['$scope', 'MarketService', 'ProductService', '$routeParams'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=ProductCtrl.js.map
