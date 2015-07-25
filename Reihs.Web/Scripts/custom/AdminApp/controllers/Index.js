var AdminApp;
(function (AdminApp) {
    var Index = (function () {
        function Index($scope) {
            var self = this;
            self.$scope = $scope;

            self.$scope.test = "Your are in the Admin Home";

            self.init();
        }
        Index.prototype.init = function () {
            var self = this;
        };
        return Index;
    })();
    AdminApp.Index = Index;

    Index.$inject = ['$scope'];
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=Index.js.map
