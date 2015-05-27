module VisageApp {
	export class PostDataService {
		public Posts: Array<Extensions.bPost>;
		private PostAPI: string;
		private httpService: ng.IHttpService;
		private qService: ng.IQService;
		private Post: Extensions.bPost;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
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
					//console.log(result);
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

			if (self.Posts !== undefined) {
				return self.qService.when(this.Posts);
			} else {
				var deferred = self.qService.defer();

				self.httpService.get(self.PostAPI + "/Get/" + postId).then(function (result: any) {
					//console.log(result);
					self.Post = result.data;
					deferred.resolve(self.Post);
				}, function (error) {
						deferred.reject(error);
					});
			}

			return deferred.promise;
		}

	}
}