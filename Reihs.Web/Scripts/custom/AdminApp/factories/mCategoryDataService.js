var AdminApp;
(function (AdminApp) {
    var mCategoryDataService = (function () {
        function mCategoryDataService($http, $q) {
            this.CategoryAPI = "api/mCategory";

            this.httpService = $http;
            this.qService = $q;
        }
        mCategoryDataService.Builder = function ($http, $q) {
            return new mCategoryDataService($http, $q);
        };

        mCategoryDataService.prototype.getById = function (categoryId) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        mCategoryDataService.prototype.deleteCategory = function (category) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        mCategoryDataService.prototype.update = function (category) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };

        mCategoryDataService.prototype.save = function (category) {
            var self = this;
            var deferred = self.qService.defer();
            return deferred.promise;
        };
        return mCategoryDataService;
    })();
    AdminApp.mCategoryDataService = mCategoryDataService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=mCategoryDataService.js.map
