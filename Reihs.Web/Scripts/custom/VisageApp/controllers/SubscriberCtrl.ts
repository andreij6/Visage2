module VisageApp {

	export class SubscriberCtrl {
		private $scope: Extensions.ISubscriberScope;
		private Service: EmailSubscriberService;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ISubscriberScope, SubscriberSvc: EmailSubscriberService) {
			var self = this;
			self.$scope = $scope;
			self.Service = SubscriberSvc;
			self.$scope.Subscriber = new Subscriber();

			self.$scope.Subscribe = function () {
				self.Service.subscribe(self.$scope.Subscriber).then(
					function (data) {
						console.log(data);
						self.$scope.Subscriber = new Subscriber();
					},
					function (error) {
						console.log(error);
						self.$scope.Subscriber = new Subscriber();
					});
			}
		}
	}

	export class Subscriber {
		FirstName: string;
		LastName: string;
		Email: string;
	}

	SubscriberCtrl.$inject = ['$scope', 'EmailSubscriberService'];
}