var VisageApp;
(function (VisageApp) {
    var LayoutCtrl = (function () {
        function LayoutCtrl($scope) {
            var self = this;
            self.$scope = $scope;

            self.$scope.test = "Your are In the Layout";

            self.init();
        }
        LayoutCtrl.prototype.init = function () {
            var self = this;
        };
        return LayoutCtrl;
    })();
    VisageApp.LayoutCtrl = LayoutCtrl;

    LayoutCtrl.$inject = ['$scope'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=LayoutCtrl.js.map
