var VisageApp;
(function (VisageApp) {
    var CartCtrl = (function () {
        function CartCtrl($scope) {
            var self = this;
            self.$scope = $scope;

            self.$scope.test = "About Page";

            self.init();
        }
        CartCtrl.prototype.init = function () {
            var self = this;
        };
        return CartCtrl;
    })();
    VisageApp.CartCtrl = CartCtrl;

    CartCtrl.$inject = ['$scope'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=CartCtrl.js.map
