var VisageApp;
(function (VisageApp) {
    var MarketService = (function () {
        function MarketService() {
            this.Cart = [];
        }
        MarketService.Builder = function () {
            return new MarketService();
        };

        MarketService.prototype.AddCartItem = function (product) {
            var self = this;

            self.Cart.push(product);
        };

        MarketService.prototype.RemoveCartItem = function (ProductId) {
            var self = this;

            for (var x in self.Cart) {
                if (self.Cart[x].ProductId = ProductId)
                    self.Cart.splice(x, 1);
            }
        };
        return MarketService;
    })();
    VisageApp.MarketService = MarketService;
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=MarketService.js.map
