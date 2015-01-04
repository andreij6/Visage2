module AdminApp {
	export class PostDataService {
		public Posts: Array<Extensions.bPost>;
		private PostAPI: string;
		private httpService: ng.IHttpService;
		private qService: ng.IQService;

		constructor($http: ng.IHttpService, $q: ng.IQService){
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

		getById(postId: number) {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		Delete(post: Extensions.bPost): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.delete(self.PostAPI + "/Delete/" + post.Id).then(function (result) {

				var index = self.Posts.indexOf(post);

				self.Posts.splice(index, 1);

				deferred.resolve();
			}, function (error) {
					deferred.reject(error);
				});

			return deferred.promise;
		}

		update(post: Extensions.bPost): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();
			return deferred.promise;
		}

		save(post: Extensions.bPost): ng.IPromise<any> {
			var self = this;
			var deferred = self.qService.defer();

			self.httpService.post(self.PostAPI + '/Post', post).then(
				function (result) {
					self.Posts.push(post);
				},
				function (error) { deferred.reject(error); });

			return deferred.promise;
		}

	}
}