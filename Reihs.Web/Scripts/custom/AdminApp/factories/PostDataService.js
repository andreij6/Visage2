var AdminApp;
(function (AdminApp) {
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
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        PostDataService.prototype.Delete = function (post) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.delete(self.PostAPI + "/Delete/" + post.Id).then(function (result) {
                var index = self.Posts.indexOf(post);

                self.Posts.splice(index, 1);

                deferred.resolve();
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        PostDataService.prototype.update = function (post) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        PostDataService.prototype.save = function (post) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.post(self.PostAPI + '/Post', post).then(function (result) {
                self.Posts.push(post);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };
        return PostDataService;
    })();
    AdminApp.PostDataService = PostDataService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=PostDataService.js.map
