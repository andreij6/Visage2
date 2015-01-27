module VisageApp {
	export class Blog {
		private $scope: Extensions.IBlogScope;
		private PostSvc: PostDataService;

		private init(): void {
			var self = this;

			self.$scope.GetAll();
			console.log(self.$scope.Posts);
		}

		constructor(
					$scope: Extensions.IBlogScope,
					$routeParams: IRouteParams,
					postSvc: PostDataService) {
			var self = this;
			self.$scope = $scope;
			self.PostSvc = postSvc;

			function HandleFailedAPI(reson: any): void {

			}

			function addPost(post: Extensions.bPost, Id: number): void {
				console.log('here');
				if (post.Id == Id)
					self.$scope.Post = post;
			}

			function GetAll(): void {
				self.PostSvc.getAll().then(
					function (data) {
						self.$scope.Posts = data;
						console.log($routeParams.Id);
						if ($routeParams.Id) {
							self.$scope.Posts.forEach(post => addPost(post, $routeParams.Id));
						}

					},
					function (reason) { HandleFailedAPI(reason) });
			}

			self.$scope.GetAll = GetAll;

			self.init();


		}
	}

	Blog.$inject = ['$scope', '$routeParams', 'PostDataService'];
}