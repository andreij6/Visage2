var VisageApp;
(function (VisageApp) {
    var TickerDataService = (function () {
        function TickerDataService($http, $q) {
            this.TickerAPI = "api/Ticker";

            this.httpService = $http;
            this.qService = $q;
        }
        TickerDataService.Builder = function ($http, $q) {
            return new TickerDataService($http, $q);
        };

        TickerDataService.prototype.getAll = function () {
            var self = this;

            if (self.Messages !== undefined) {
                return self.qService.when(this.Messages);
            } else {
                var deferred = self.qService.defer();

                self.httpService.get(self.TickerAPI + "/Get").then(function (result) {
                    self.Messages = result.data;
                    deferred.resolve(self.Messages);
                }, function (error) {
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        };

        TickerDataService.prototype.getById = function (orderId) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        TickerDataService.prototype.deleteOrder = function (ticker) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        TickerDataService.prototype.update = function (ticker) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        TickerDataService.prototype.save = function (ticker) {
            var self = this;
            var deferred = self.qService.defer();

            //console.log(ticker);
            self.httpService.post(self.TickerAPI + '/Post', { "Message": ticker.Message, "Dates": ticker.Dates, "Url": ticker.Url }).then(function (result) {
                //console.log(ticker);
                self.Messages.push(ticker);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };
        return TickerDataService;
    })();
    VisageApp.TickerDataService = TickerDataService;
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=TickerDataService.js.map
