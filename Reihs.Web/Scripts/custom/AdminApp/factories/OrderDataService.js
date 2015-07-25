var AdminApp;
(function (AdminApp) {
    var OrderDataService = (function () {
        function OrderDataService($http, $q) {
            this.OrderAPI = "api/Order";

            this.httpService = $http;
            this.qService = $q;
        }
        OrderDataService.Builder = function ($http, $q) {
            return new OrderDataService($http, $q);
        };

        OrderDataService.prototype.getById = function (orderId) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        OrderDataService.prototype.deleteOrder = function (order) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        OrderDataService.prototype.update = function (order) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        OrderDataService.prototype.save = function (order) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };
        return OrderDataService;
    })();
    AdminApp.OrderDataService = OrderDataService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=OrderDataService.js.map
