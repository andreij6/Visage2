module AdminApp {
	export class CategoryDataService {
		private Categories: Array<Extensions.bCategory>;
		private CategoryAPI: string;
		private httpService: ng.IHttpService;
		private qService: ng.IQService;

		constructor($http: ng.IHttpService, $q: ng.IQService){
			this.CategoryAPI = "api/Category";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): CategoryDataService {
			return new CategoryDataService($http, $q);
		}

		getAll(): ng.IPromise<any> {
			var self = this;

			if (self.Categories !== undefined) {
				return self.qService.when(this.Categories);
			} else {
				var deferred = self.qService.defer();

				self.httpService.get(self.CategoryAPI + "/Get").then(function (result: any) {
					self.Categories = result.data;
					deferred.resolve(self.Categories);
				}, function (error) {
						deferred.reject(error);
					});
			}

			return deferred.promise;
		}

		getById(categoryId: number) {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		deleteCategory(category: Extensions.bCategory): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.delete(self.CategoryAPI + "/Delete/" + category.Id).then(function (result) {

				var index = self.Categories.indexOf(category);

				self.Categories.splice(index, 1);

				deferred.resolve();
			}, function (error) {
					deferred.reject(error);
			});

			return deferred.promise;
		}

		update(category: Extensions.bCategory): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		save(category: Extensions.bCategory): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.post(self.CategoryAPI + '/Post', category).then(
				function (result) {
					self.Categories.push(category);
				},
				function (error) { deferred.reject(error); });

			return deferred.promise;
		}
	}
} 