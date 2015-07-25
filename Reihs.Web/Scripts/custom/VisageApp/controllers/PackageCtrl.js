var VisageApp;
(function (VisageApp) {
    var PackageCtrl = (function () {
        function PackageCtrl($scope) {
            var self = this;
            self.$scope = $scope;

            self.$scope.test = "About Page";

            self.init();
        }
        PackageCtrl.prototype.init = function () {
            var self = this;
        };
        return PackageCtrl;
    })();
    VisageApp.PackageCtrl = PackageCtrl;

    PackageCtrl.$inject = ['$scope'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=PackageCtrl.js.map
