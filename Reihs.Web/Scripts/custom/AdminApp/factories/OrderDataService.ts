module AdminApp {
	export class OrderDataService {
		private httpService: ng.IHttpService;
		private qService: ng.IQService;
		private Orders: Array<Extensions.Order>;
		private OrderAPI: string;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
			this.OrderAPI = "api/Order";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): OrderDataService {
			return new OrderDataService($http, $q);
		}
		
		getById(orderId: number) {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		deleteOrder(order: Extensions.Order): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		update(order: Extensions.Order): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		save(order: Extensions.Order): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}
	}
}