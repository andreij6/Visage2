var VisageApp;
(function (VisageApp) {
    var OrderCtrl = (function () {
        function OrderCtrl($scope) {
            var self = this;
            self.$scope = $scope;

            self.$scope.test = "About Page";

            self.init();
        }
        OrderCtrl.prototype.init = function () {
            var self = this;
        };
        return OrderCtrl;
    })();
    VisageApp.OrderCtrl = OrderCtrl;

    OrderCtrl.$inject = ['$scope'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=OrderCtrl.js.map
