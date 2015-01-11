module VisageApp {

	export class ContactAPIService {
		private httpService: ng.IHttpService;
		private qService: ng.IQService;
		private ContactAPI: string;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
			this.ContactAPI = "api/ContactUs";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): ContactAPIService {
			return new ContactAPIService($http, $q);
		}

		sendMessage(message: Extensions.ContactMessage) {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.post(self.ContactAPI, message).then(function (result) {
				deferred.resolve();
			}, function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}

	}
} 