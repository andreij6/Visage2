module AdminApp {
	export class PostDataService {
		private Posts: Array<Extensions.bPost>;
		private PostAPI: string;
		private httpService: ng.IHttpService;
		private qService: ng.IQService;

		constructor($http: ng.IHttpService, $q: ng.IQService)
		{
			this.PostAPI = "api/Blog";

			this.httpService = $http;
			this.qService = $q;
		}

		public static Builder($http: ng.IHttpService, $q: ng.IQService): PostDataService {
			return new PostDataService($http, $q);
		}

		getAll(): ng.IPromise<any> {
			var self = this;

			if (self.Posts !== undefined) {
				return self.qService.when(this.Posts);
			} else {
				var deferred = self.qService.defer();

				self.httpService.get(self.PostAPI + "/Get").then(function (result: any) {
					console.log(result);
					self.Posts = result.data;
					deferred.resolve(self.Posts);
				}, function (error) {
						deferred.reject(error);
				});
			}

			return deferred.promise;
		}

		getById(blogId: number) {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		deletePost(blog: Extensions.bPost): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		update(blog: Extensions.bPost): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		save(blog: Extensions.bPost): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.post(self.PostAPI + '/Post', blog).then(
				function (result) {
					self.Posts.push(blog);
				},
				function (error) { deferred.reject(error); });

			return deferred.promise;
		}

		
	}
}