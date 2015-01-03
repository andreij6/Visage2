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

			function HandleFailedAPI(reson: any): void {

			}

			function GetAllPosts(): void {
				self.postSvc.getAll().then(
					function (data) {
						self.$scope.Posts = data;
					},
					function (reason) { HandleFailedAPI(reason) });
			}

			function EditPost(post: Extensions.bPost): void {

			}

			function DeletePost(post: Extensions.bPost): void {
				
			}

			function Save(post: Extensions.bPost): void {
				console.log(post);
				post.Public = false;

				self.postSvc.save(post).then(
					function (data) { },
					function (reason) { HandleFailedAPI(reason) });
			}

			function Publish(post: Extensions.bPost): void {
				post.Public = true;

				self.postSvc.save(post).then(
					function (data) { },
					function (reason) { HandleFailedAPI(reason) });
			}

			self.$scope.GetAllPosts = GetAllPosts;
			self.$scope.DeletePosts = DeletePost;
			self.$scope.EditPosts = EditPost;
			self.$scope.Save = Save;
			self.$scope.Publish = Publish;
			
			self.init();
		}
	}

	Blogs.$inject = ['$scope', 'PostDataService'];
} 