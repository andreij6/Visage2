module AdminApp {
	export class Blogs {
		private $scope: Admin_Extensions.IBlogScope;
		private postSvc: PostDataService;

		private init(): void {
			var self = this;

			self.$scope.GetAllPosts();
			console.log(self.$scope.Posts);
		}

		constructor($scope: Admin_Extensions.IBlogScope, postSvc: PostDataService) {
			var self = this;
			self.$scope = $scope;
			self.postSvc = postSvc;

			function GetAllPosts(): void {
				self.postSvc.getAll().then(function (data) {
					self.$scope.Posts = data;
				});
			}

			function EditPost(post: Extensions.bPost): void {

			}

			function DeletePost(post: Extensions.bPost): void {
				
			}

			self.$scope.GetAllPosts = GetAllPosts;
			self.$scope.DeletePosts = DeletePost;
			self.$scope.EditPosts = EditPost;
			
			self.init();
		}
	}

	Blogs.$inject = ['$scope', 'PostDataService'];
} 