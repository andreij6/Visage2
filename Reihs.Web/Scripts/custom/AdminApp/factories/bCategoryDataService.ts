module AdminApp {
	export class CategoryDataService {
		private Categories: Array<Extensions.bCategory>;
		private CategoryAPI: string;
		private httpService: ng.IHttpService;
		private qService: ng.IQService;

		constructor($http: ng.IHttpService, $q: ng.IQService)
		{
			this.CategoryAPI = "api/Category";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): CategoryDataService {
			return new CategoryDataService($http, $q);
		}

		getAll(): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
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
			return deferred.promise;
		}
	}
} 