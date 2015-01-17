module VisageApp {
	export class ProductService {
		private httpService: ng.IHttpService;
		private qService: ng.IQService;
		public Products: Array<Extensions.Product>;
		private ProductAPI: string;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
			this.ProductAPI = "api/Products";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): ProductService {
			return new ProductService($http, $q);
		}

		getAll() {
			var self = this;

			if (self.Products !== undefined) {
				return self.qService.when(this.Products);
			} else {
				var deferred = self.qService.defer();

				self.httpService.get(self.ProductAPI).then(
					function (result: any) {
						self.Products = result.data;
						deferred.resolve(self.Products);
					}, function (error) {
						deferred.reject(error);
					});
			}

			return deferred.promise;
		}


		getById(productId: number) {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

	}
}  