var AdminApp;
(function (AdminApp) {
    var CategoryDataService = (function () {
        function CategoryDataService($http, $q) {
            this.CategoryAPI = "api/Category";

            this.httpService = $http;
            this.qService = $q;
        }
        CategoryDataService.Builder = function ($http, $q) {
            return new CategoryDataService($http, $q);
        };

        CategoryDataService.prototype.getAll = function () {
            var self = this;

            if (self.Categories !== undefined) {
                return self.qService.when(this.Categories);
            } else {
                var deferred = self.qService.defer();

                self.httpService.get(self.CategoryAPI + "/Get").then(function (result) {
                    self.Categories = result.data;
                    deferred.resolve(self.Categories);
                }, function (error) {
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        };

        CategoryDataService.prototype.getById = function (categoryId) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        CategoryDataService.prototype.deleteCategory = function (category) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.delete(self.CategoryAPI + "/Delete/" + category.Id).then(function (result) {
                var index = self.Categories.indexOf(category);

                self.Categories.splice(index, 1);

                deferred.resolve();
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        CategoryDataService.prototype.update = function (category) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        CategoryDataService.prototype.save = function (category) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.post(self.CategoryAPI + '/Post', category).then(function (result) {
                self.Categories.push(category);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };
        return CategoryDataService;
    })();
    AdminApp.CategoryDataService = CategoryDataService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=bCategoryDataService.js.map
