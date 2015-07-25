var VisageApp;
(function (VisageApp) {
    var Index = (function () {
        function Index($scope, $interval) {
            var self = this;
            self.$scope = $scope;
            self.$interval = $interval;
            self.currentClass = "banner-1";
            self.classes = ["banner-2", "banner-3"];
            self.$scope.test = "Your are Home";

            self.init();
        }
        Index.prototype.init = function () {
            var self = this;

            function moveCarousel() {
                $('.carousel').carousel();

                $('#myCarousel').removeClass(self.currentClass);
                $('#myCarousel').addClass(self.classes[1]);

                self.classes.unshift(self.currentClass);
                self.currentClass = self.classes.pop();
            }

            self.$interval(moveCarousel, 8000);
        };
        return Index;
    })();
    VisageApp.Index = Index;

    Index.$inject = ['$scope', '$interval'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=Index.js.map
