module VisageApp {

	export class TickerDataService {
		private httpService: ng.IHttpService;
		private qService: ng.IQService;
		private Messages: Array<Extensions.TickerMessage>;
		private TickerAPI: string;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
			this.TickerAPI = "api/Ticker";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): TickerDataService {
			return new TickerDataService($http, $q);
		}

		getAll(): ng.IPromise<any> {
			var self = this;

			if (self.Messages !== undefined) {
				return self.qService.when(this.Messages);
			} else {
				var deferred = self.qService.defer();

				self.httpService.get(self.TickerAPI + "/Get").then(
					function (result: any) {
						self.Messages = result.data;
						deferred.resolve(self.Messages);
					}, function (error) {
						deferred.reject(error);
					});
			}

			return deferred.promise;
		}

		getById(orderId: number) {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		deleteOrder(ticker: Extensions.TickerMessage): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		update(ticker: Extensions.TickerMessage): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		save(ticker: Extensions.TickerMessage): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			console.log(ticker);

			self.httpService.post(self.TickerAPI + '/Post',
				{ "Message": ticker.Message, "Dates": ticker.Dates, "Url": ticker.Url }).then(
				function (result) {
					console.log(ticker);
					self.Messages.push(ticker);
				}, function (error) {
					deferred.reject(error);
				});

			return deferred.promise;
		}
	}
} 