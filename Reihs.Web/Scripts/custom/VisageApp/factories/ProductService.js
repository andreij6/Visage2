var VisageApp;
(function (VisageApp) {
    var ProductService = (function () {
        function ProductService($http, $q) {
            this.ProductAPI = "api/Products";

            this.httpService = $http;
            this.qService = $q;
        }
        ProductService.Builder = function ($http, $q) {
            return new ProductService($http, $q);
        };

        ProductService.prototype.getAll = function () {
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

        ProductService.prototype.getById = function (productId) {
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

        ProductService.prototype.addToCart = function (cmd, hosted_button_id) {
            var self = this;
            var deferred = self.qService.defer();

            var data = { cmd: cmd, hosted_button_id: hosted_button_id };

            self.httpService.post("api/PayPal/Add", data).then(function (result) {
                deferred.resolve(result);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };
        return ProductService;
    })();
    VisageApp.ProductService = ProductService;
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=ProductService.js.map
