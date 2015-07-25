//Used to Create Update and Delete a single Product
var AdminApp;
(function (AdminApp) {
    var ProductCtrl = (function () {
        function ProductCtrl($scope, $location, $routeParams, productSvc) {
            var self = this;
            self.$scope = $scope;
            self.ProductSvc = productSvc;

            function HandleFailedAPI(error) {
            }

            function edit(product) {
                self.ProductSvc.update(product).then(function (data) {
                }, function (error) {
                    //console.log(error);
                });

                $location.path('/Market/Products');
            }

            function getSingle(Id) {
                self.ProductSvc.getById(Id).then(function (data) {
                    self.$scope.Product = data;
                    //console.log("Data:");
                    //console.log(data);
                    //console.log("Product");
                    //console.log(self.$scope.Product);
                }, function (error) {
                    HandleFailedAPI(error);
                });
            }

            function save(Product) {
                self.ProductSvc.save(Product).then(function (data) {
                }, function (error) {
                    HandleFailedAPI(error);
                });

                $location.path('/Market/Products');
            }

            function deleteProduct(Product) {
                self.ProductSvc.deleteProduct(Product).then(function (data) {
                    //console.log(data);
                }, function (error) {
                    HandleFailedAPI(error);
                });
            }

            function SetStage() {
                if ($routeParams.Id) {
                    self.$scope.PageTitle = "Edit";
                    self.$scope.Editing = true;
                    getSingle($routeParams.Id);
                } else {
                    self.$scope.Editing = false;
                    self.$scope.PageTitle = "New Product";
                }
            }

            SetStage();

            self.$scope.Delete = deleteProduct;
            self.$scope.Edit = edit;
            self.$scope.Save = save;

            self.init();
        }
        ProductCtrl.prototype.init = function () {
            var self = this;
        };
        return ProductCtrl;
    })();
    AdminApp.ProductCtrl = ProductCtrl;

    ProductCtrl.$inject = ['$scope', '$location', '$routeParams', 'ProductDataService'];
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=ProductCtrl.js.map
