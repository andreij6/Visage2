var VisageApp;
(function (VisageApp) {
    var SpecialCtrl = (function () {
        function SpecialCtrl($scope) {
            var self = this;
            self.$scope = $scope;

            self.$scope.test = "About Page";

            self.init();
        }
        SpecialCtrl.prototype.init = function () {
            var self = this;
        };
        return SpecialCtrl;
    })();
    VisageApp.SpecialCtrl = SpecialCtrl;

    SpecialCtrl.$inject = ['$scope'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=SpecialCtrl.js.map
