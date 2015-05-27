module AdminApp {
	export class ProductDataService {
		private httpService: ng.IHttpService;
		private qService: ng.IQService;
		private Products: Array<Extensions.Product>;
		private ProductAPI: string;
		private Product: Extensions.Product;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
			this.ProductAPI = "api/Products";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): ProductDataService {
			return new ProductDataService($http, $q);
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

			self.httpService.get(self.ProductAPI + "/" + productId).then(
				function (result: any) {
					self.Product = result.data;
					deferred.resolve(self.Product);
				}, function (error) {
					deferred.reject(error);
				});

			return deferred.promise;
		}

		deleteProduct(product: Extensions.Product): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.delete(self.ProductAPI + "/Delete/" + product.Id).then(function (result) {
				var index = self.Products.indexOf(product);

				self.Products.splice(index, 1);

				deferred.resolve();
			}, function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}

		update(product: Extensions.Product): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.put(self.ProductAPI + '/Edit/' + product.Id, product).then(
				function (result) {
					//console.log(result);
				},
				function (error) { deferred.reject(error); });

			return deferred.promise;
		}

		save(product: Extensions.Product): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.post(self.ProductAPI + '/Post', product).then(
				function (result) {
					self.Products.push(product);
				},
				function (error) { deferred.reject(error); });

			return deferred.promise;
		}
	}
} 