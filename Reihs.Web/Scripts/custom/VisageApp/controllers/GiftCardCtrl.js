var VisageApp;
(function (VisageApp) {
    var GiftCardCtrl = (function () {
        function GiftCardCtrl($scope) {
            var self = this;
            self.$scope = $scope;

            self.$scope.test = "About Page";

            self.init();
        }
        GiftCardCtrl.prototype.init = function () {
            var self = this;
        };
        return GiftCardCtrl;
    })();
    VisageApp.GiftCardCtrl = GiftCardCtrl;

    GiftCardCtrl.$inject = ['$scope'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=GiftCardCtrl.js.map
