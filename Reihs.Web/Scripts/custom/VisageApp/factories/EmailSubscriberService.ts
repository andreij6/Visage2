module VisageApp {

	export class EmailSubscriberService {
		private httpService: ng.IHttpService;
		private qService: ng.IQService;
		private SubscriberAPI: string;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
			this.SubscriberAPI = "api/ConstantContact";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): EmailSubscriberService {
			return new EmailSubscriberService($http, $q);
		}

		subscribe(subscriber: Extensions.Subscriber) {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.post(self.SubscriberAPI, subscriber).then(function (result) {
				deferred.resolve();
			}, function (error) {
					deferred.reject(error);
				});

			return deferred.promise;
		}

	}
} 