module AdminApp {
	export class ProductDataService {
		private httpService: ng.IHttpService;
		private qService: ng.IQService;
		private Products: Array<Extensions.Product>;
		private ProductAPI: string;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
			this.ProductAPI = "api/Product";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): ProductDataService {
			return new ProductDataService($http, $q);
		}

		getAll() {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		getById(productId: number) {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		deleteProduct(product: Extensions.Product): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		update(product: Extensions.Product): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		save(product: Extensions.Product): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}
	}
} 