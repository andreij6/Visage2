var VisageApp;
(function (VisageApp) {
    var ContactAPIService = (function () {
        function ContactAPIService($http, $q) {
            this.ContactAPI = "api/ContactUs";

            this.httpService = $http;
            this.qService = $q;
        }
        ContactAPIService.Builder = function ($http, $q) {
            return new ContactAPIService($http, $q);
        };

        ContactAPIService.prototype.sendMessage = function (message) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.post(self.ContactAPI, message).then(function (result) {
                deferred.resolve();
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };
        return ContactAPIService;
    })();
    VisageApp.ContactAPIService = ContactAPIService;
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=ContactAPIService.js.map
