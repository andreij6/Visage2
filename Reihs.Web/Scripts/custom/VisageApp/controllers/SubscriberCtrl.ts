module VisageApp {

	export class SubscriberCtrl {
		private $scope: Extensions.ISubscriberScope;
		private Service: EmailSubscriberService;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ISubscriberScope, SubscriberSvc: EmailSubscriberService, $interval: ng.IIntervalService) {
			var self = this;
			self.$scope = $scope;
			self.Service = SubscriberSvc;
			self.$scope.Subscriber = new Subscriber();

			self.$scope.Subscribe = function () {
				self.Service.subscribe(self.$scope.Subscriber).then(
					function (data) {
						console.log(data);
						self.$scope.Subscriber = new Subscriber();
						displaySuccessMessage();
					},
					function (error) {
						console.log(error);
						self.$scope.Subscriber = new Subscriber();
					});
			}

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
					countDown--
					if (countDown === 0) {
						self.$scope.SuccessMessage = "";
					}
				}, 1000);
			}

			var stop = function () {
				$interval.cancel(promise);
			};
		}
	}

	export class Subscriber {
		FirstName: string;
		LastName: string;
		Email: string;
	}

	SubscriberCtrl.$inject = ['$scope', 'EmailSubscriberService', '$interval'];
}