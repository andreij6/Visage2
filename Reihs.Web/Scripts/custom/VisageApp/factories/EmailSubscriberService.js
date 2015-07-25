var VisageApp;
(function (VisageApp) {
    var EmailSubscriberService = (function () {
        function EmailSubscriberService($http, $q) {
            this.SubscriberAPI = "api/ConstantContact";

            this.httpService = $http;
            this.qService = $q;
        }
        EmailSubscriberService.Builder = function ($http, $q) {
            return new EmailSubscriberService($http, $q);
        };

        EmailSubscriberService.prototype.subscribe = function (subscriber) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.post(self.SubscriberAPI, subscriber).then(function (result) {
                deferred.resolve();
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };
        return EmailSubscriberService;
    })();
    VisageApp.EmailSubscriberService = EmailSubscriberService;
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=EmailSubscriberService.js.map
