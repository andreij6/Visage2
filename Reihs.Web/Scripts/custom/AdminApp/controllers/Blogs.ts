module AdminApp {
	export class Blogs {
		private $scope: Admin_Extensions.IBlogScope;
		private postSvc: PostDataService;
		private catSvc: CategoryDataService;
		private $location: ng.ILocationService;

		private init(): void {
			var self = this;

			self.$scope.GetAll();
			self.$scope.cGetAll();
		}

		constructor($scope: Admin_Extensions.IBlogScope, $location: ng.ILocationService, $routeParams: IRouteParams, postSvc: PostDataService, catSvc: CategoryDataService) {
			var self = this;
			self.$scope = $scope;
			self.postSvc = postSvc;
			self.catSvc = catSvc;
			self.$location = $location;
			self.$scope.Editing = false;
			
			//Helpers
			function HandleFailedAPI(reson: any): void {

			}

			function addPost(post: Extensions.bPost, Id: number): void {
				if (post.Id == Id)
					self.$scope.Post = post;
			}

			//Registered Functions
			function Print(): void {
				console.log(self.$scope.Post);
				console.log(self.$scope.Editing);
			}

			//Post
			function GetAll(): void {
				self.postSvc.getAll().then(
					function (data) {
						self.$scope.Posts = data;

						if ($routeParams.Id) {
							self.$scope.Posts.forEach(post => addPost(post, $routeParams.Id));
							self.$scope.Editing = true;
						}
							
					},
					function (reason) { HandleFailedAPI(reason) });
			}

			function EditPost(post: Extensions.bPost): void {

			}

			function Delete(post: Extensions.bPost): void {
				self.postSvc.Delete(post).then(
					function (data) {
						console.log(data);
					}, function (error) { HandleFailedAPI(error) });
			}

			function Save(post: Extensions.bPost): void {
				post.Public ? post.Public = post.Public : post.Public = false
				
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

			function EditLink(post: Extensions.bPost): void {
				self.$location.path('/Blogs/Edit/' + post.Id);
			}

			//Category
			function GetAllCategories(): void {
				
			}

			function EditCategory(category: Extensions.bCategory): void {
			}

			function UpdateCategory(category: Extensions.bCategory): void {
			}

			function DeleteCategory(category: Extensions.bCategory): void {
			}

			function SaveCategory(category: Extensions.bCategory): void {
			}


			//Registration
			self.$scope.GetAll = GetAll;
			self.$scope.Delete = Delete;
			self.$scope.Edit = EditPost;
			self.$scope.Save = Save;
			self.$scope.Publish = Publish;
			self.$scope.EditLink = EditLink;
			self.$scope.Print = Print;

			self.$scope.cGetAll = GetAllCategories;
			self.$scope.cEdit = EditCategory;
			self.$scope.cUpdate = UpdateCategory;
			self.$scope.cDelete = DeleteCategory;
			self.$scope.cSave = SaveCategory;

			self.init();
		}
	}

	Blogs.$inject = ['$scope', '$location', '$routeParams','PostDataService', 'CategoryDataService'];
} 