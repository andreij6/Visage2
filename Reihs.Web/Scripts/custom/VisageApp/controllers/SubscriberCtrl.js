var VisageApp;
(function (VisageApp) {
    var SubscriberCtrl = (function () {
        function SubscriberCtrl($scope, SubscriberSvc, $interval) {
            var self = this;
            self.$scope = $scope;
            self.Service = SubscriberSvc;
            self.$scope.Subscriber = new Subscriber();

            self.$scope.Subscribe = function () {
                self.Service.subscribe(self.$scope.Subscriber).then(function (data) {
                    console.log(data);
                    self.$scope.Subscriber = new Subscriber();
                    displaySuccessMessage();
                }, function (error) {
                    console.log(error);
                    self.$scope.Subscriber = new Subscriber();
                });
            };

            self.$scope.$watch("Subscriber.Email", function (newValue, oldValue) {
                if (newValue !== undefined) {
                    if (newValue.length > 5) {
                        self.$scope.FormInvalid = false;
                    } else {
                        self.$scope.FormInvalid = true;
                    }
                } else {
                    self.$scope.FormInvalid = true;
                }
            });

            self.$scope.FormInvalid = true;
            var promise;

            var displaySuccessMessage = function () {
                self.$scope.SuccessMessage = "Thanks for subscribing to our mailing list";
                var countDown = 10;

                var promise = $interval(function () {
                    countDown--;
                    if (countDown === 0) {
                        self.$scope.SuccessMessage = "";
                    }
                }, 1000);
            };

            var stop = function () {
                $interval.cancel(promise);
            };
        }
        SubscriberCtrl.prototype.init = function () {
            var self = this;
        };
        return SubscriberCtrl;
    })();
    VisageApp.SubscriberCtrl = SubscriberCtrl;

    var Subscriber = (function () {
        function Subscriber() {
        }
        return Subscriber;
    })();
    VisageApp.Subscriber = Subscriber;

    SubscriberCtrl.$inject = ['$scope', 'EmailSubscriberService', '$interval'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=SubscriberCtrl.js.map
