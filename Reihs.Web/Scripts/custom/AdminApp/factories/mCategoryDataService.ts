module AdminApp {
	export class mCategoryDataService {
		private httpService: ng.IHttpService;
		private qService: ng.IQService;
		private Categories: Array<Extensions.mCategory>;
		private CategoryAPI: string;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
			this.CategoryAPI = "api/mCategory";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): mCategoryDataService {
			return new mCategoryDataService($http, $q);
		}

		getById(categoryId: number) {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		deleteCategory(category: Extensions.mCategory): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		update(category: Extensions.mCategory): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		save(category: Extensions.mCategory): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}
	}
} 