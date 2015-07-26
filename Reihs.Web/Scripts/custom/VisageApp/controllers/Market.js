var VisageApp;
(function (VisageApp) {
    var Market = (function () {
        function Market($scope, productSvc, $location, $routeParams) {
            var self = this;
            self.$scope = $scope;
            self.ProductSvc = productSvc;
            self.$location = $location;

            var nav = "../../../Templates/Front/Market/Partials/";

            var brands = [
                { Name: "SkinMedica" },
                { Name: "Elta MD" },
                { Name: "RevitaLash" },
                { Name: "Clarisonic" },
                { Name: "Colorscience" }
            ];

            var categories = [
                { Name: "Acne" },
                { Name: "Age Defense" },
                { Name: "Brighteners" },
                { Name: "Brow" },
                { Name: "Cleansers and Toners" },
                { Name: "Moisturizers" },
                { Name: "Redness Relief" },
                { Name: "Retinols" },
                { Name: "Scar Recovery" },
                { Name: "Sunscreens" },
                { Name: "Systems and Kits" }
            ];

            function everyThird(index) {
                //console.log('here');
                if (index == 0)
                    return false;

                if (index % 3 === 0)
                    return true;
                else
                    return false;
            }

            self.$scope.EveryThird = everyThird;

            var templates = [
                { name: "Index", url: nav + "Index.html" }
            ];

            function HasImage(value) {
                return value["ImagePath"] !== undefined && value["ImagePath"] !== null;
            }

            function SetFeaturedProducts() {
                var filtered = self.$scope.Products.filter(HasImage);
                var result = [];

                for (var x = 0; x < 5; x++) {
                    var rand = filtered[Math.floor(Math.random() * filtered.length)];

                    result.push(rand);
                }

                return result;
            }

            function GetProducts() {
                //console.log("get Products");
                self.ProductSvc.getAll().then(function (data) {
                    self.$scope.Products = data;

                    self.$scope.FeaturedProducts = SetFeaturedProducts();
                    self.$scope.BrandProducts = self.$scope.Products.filter(FilterCategory);
                }, function (error) {
                    //console.log(error);
                });
            }

            self.$scope.currentPage = 1;

            self.$scope.setPage = function (pageNo) {
                self.$scope.currentPage = pageNo;
            };

            function menuTrigger() {
                if (!self.$scope.open)
                    self.$scope.YouTubeMenu = ' dr-menu-open';
                else
                    self.$scope.YouTubeMenu = '';

                self.$scope.open = !self.$scope.open;
            }

            function hiLo() {
                //console.log("Hi Lo");
                self.$scope.OrderBy.Parameter = '-UnitPrice';
                self.$scope.OrderBy.HiLoClass = ' btn btn-theme-brown ';
                self.$scope.OrderBy.LoHiClass = 'btn btn-theme-dark';
            }

            function loHi() {
                //console.log("Lo Hi");
                self.$scope.OrderBy.Parameter = 'UnitPrice';
                self.$scope.OrderBy.HiLoClass = ' btn btn-theme-dark';
                self.$scope.OrderBy.LoHiClass = 'btn btn-theme-brown';
            }

            function FilterCategory(value) {
                //console.log('filtering');
                //console.log(value);
                if ($routeParams["brd"] === "" || $routeParams["brd"] === undefined) {
                    return value["Brand"] == $routeParams["cat"];
                } else {
                    return value["MainCategory"] == $routeParams["brd"];
                }
            }

            function goToProductPage(product) {
                $location.path('/Market/Item/' + product.Id);
            }

            function setFilter() {
                if (self.$scope.Category == "" || self.$scope.Category == undefined) {
                    self.$scope.FilterQuery = { Brand: self.$scope.Brand };
                    self.$scope.PageHeading = self.$scope.Brand;
                    console.log("Heading: " + self.$scope.PageHeading);
                } else {
                    self.$scope.FilterQuery = { MainCategory: self.$scope.Category };
                    self.$scope.PageHeading = self.$scope.Category;
                    console.log("Heading: " + self.$scope.PageHeading);
                }
            }

            self.$scope.GoToProductPage = goToProductPage;
            self.$scope.LoHi = loHi;
            self.$scope.HiLo = hiLo;

            self.$scope.GetProducts = GetProducts;

            self.$scope.Products = self.ProductSvc.Products;

            self.$scope.templates = templates;

            self.$scope.Brands = brands;
            self.$scope.Categories = categories;

            self.$scope.Category = $routeParams["cat"];
            self.$scope.Brand = $routeParams["brd"];

            self.$scope.FilterQuery = setFilter();

            self.$scope.template = { name: "Index", url: nav + "Index.html" };

            self.$scope.YouTubeMenu = '';

            self.$scope.MenuTrigger = menuTrigger;

            self.$scope.OrderBy = new OrderBy("btn btn-theme-dark", "btn btn-theme-dark", "Name.length");

            function addToCart(cmd, hosted_button_id) {
                self.ProductSvc.addToCart(cmd, hosted_button_id).then(function (data) {
                    //console.log(data);
                }, function (error) {
                    //console.log(error);
                });
            }

            self.$scope.AddToCart = addToCart;

            self.init();
        }
        Market.prototype.init = function () {
            var self = this;

            self.$scope.GetProducts();
        };
        return Market;
    })();
    VisageApp.Market = Market;

    var OrderBy = (function () {
        function OrderBy(LoHiClass, HiLoClass, Parameter) {
            this.LoHiClass = LoHiClass;
            this.HiLoClass = HiLoClass;
            this.Parameter = Parameter;
        }
        return OrderBy;
    })();
    VisageApp.OrderBy = OrderBy;

    Market.$inject = ['$scope', 'ProductService', '$location', '$routeParams'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=Market.js.map
