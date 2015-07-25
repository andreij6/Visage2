var AdminApp;
(function (AdminApp) {
    var ProductDataService = (function () {
        function ProductDataService($http, $q) {
            this.ProductAPI = "api/Products";

            this.httpService = $http;
            this.qService = $q;
        }
        ProductDataService.Builder = function ($http, $q) {
            return new ProductDataService($http, $q);
        };

        ProductDataService.prototype.getAll = function () {
            var self = this;

            if (self.Products !== undefined) {
                return self.qService.when(this.Products);
            } else {
                var deferred = self.qService.defer();

                self.httpService.get(self.ProductAPI).then(function (result) {
                    self.Products = result.data;
                    deferred.resolve(self.Products);
                }, function (error) {
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        };

        ProductDataService.prototype.getById = function (productId) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.get(self.ProductAPI + "/" + productId).then(function (result) {
                self.Product = result.data;
                deferred.resolve(self.Product);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        ProductDataService.prototype.deleteProduct = function (product) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.delete(self.ProductAPI + "/Delete/" + product.Id).then(function (result) {
                var index = self.Products.indexOf(product);

                self.Products.splice(index, 1);

                deferred.resolve();
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        ProductDataService.prototype.update = function (product) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.put(self.ProductAPI + '/Edit/' + product.Id, product).then(function (result) {
                //console.log(result);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        ProductDataService.prototype.save = function (product) {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.post(self.ProductAPI + '/Post', product).then(function (result) {
                self.Products.push(product);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };
        return ProductDataService;
    })();
    AdminApp.ProductDataService = ProductDataService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=ProductDataService.js.map
