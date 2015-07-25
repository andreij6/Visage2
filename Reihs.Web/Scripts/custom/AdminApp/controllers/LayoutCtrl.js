var AdminApp;
(function (AdminApp) {
    var LayoutCtrl = (function () {
        function LayoutCtrl($scope) {
            var self = this;
            self.$scope = $scope;

            self.$scope.test = "Your are In the Admin Layout";

            self.init();
        }
        LayoutCtrl.prototype.init = function () {
            var self = this;
        };
        return LayoutCtrl;
    })();
    AdminApp.LayoutCtrl = LayoutCtrl;

    LayoutCtrl.$inject = ['$scope'];
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=LayoutCtrl.js.map
