var AdminApp;
(function (AdminApp) {
    var MarketCtrl = (function () {
        function MarketCtrl($scope, productSvc) {
            var self = this;
            self.$scope = $scope;

            self.ProductSvc = productSvc;

            function HandleFailedAPI(error) {
            }

            function getAll() {
                self.ProductSvc.getAll().then(function (data) {
                    self.$scope.Products = data;
                }, function (error) {
                    //console.log(error);
                });
            }

            self.$scope.GetAll = getAll;

            self.init();
        }
        MarketCtrl.prototype.init = function () {
            var self = this;

            self.$scope.GetAll();
        };
        return MarketCtrl;
    })();
    AdminApp.MarketCtrl = MarketCtrl;

    MarketCtrl.$inject = ['$scope', 'ProductDataService'];
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=MarketCtrl.js.map
