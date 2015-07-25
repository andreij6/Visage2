var VisageApp;
(function (VisageApp) {
    var PostDataService = (function () {
        function PostDataService($http, $q) {
            this.PostAPI = "api/Blog";

            this.httpService = $http;
            this.qService = $q;
        }
        PostDataService.Builder = function ($http, $q) {
            return new PostDataService($http, $q);
        };

        PostDataService.prototype.getAll = function () {
            var self = this;

            if (self.Posts !== undefined) {
                return self.qService.when(this.Posts);
            } else {
                var deferred = self.qService.defer();

                self.httpService.get(self.PostAPI + "/Get").then(function (result) {
                    //console.log(result);
                    self.Posts = result.data;
                    deferred.resolve(self.Posts);
                }, function (error) {
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        };

        PostDataService.prototype.getById = function (postId) {
            var self = this;

            if (self.Posts !== undefined) {
                return self.qService.when(this.Posts);
            } else {
                var deferred = self.qService.defer();

                self.httpService.get(self.PostAPI + "/Get/" + postId).then(function (result) {
                    //console.log(result);
                    self.Post = result.data;
                    deferred.resolve(self.Post);
                }, function (error) {
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        };
        return PostDataService;
    })();
    VisageApp.PostDataService = PostDataService;
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=PostDataService.js.map
