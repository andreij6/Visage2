var AdminApp;
(function (AdminApp) {
    var Blogs = (function () {
        function Blogs($scope, $location, $routeParams, postSvc, catSvc) {
            var self = this;
            self.$scope = $scope;
            self.postSvc = postSvc;
            self.catSvc = catSvc;
            self.$location = $location;
            self.$scope.Editing = false;

            //#region Helper Functions
            function HandleFailedAPI(reson) {
            }

            function addPost(post, Id) {
                if (post.Id == Id)
                    self.$scope.Post = post;
            }

            function addCategory(category, post) {
                if (post) {
                    if (post.CategoryId == category.Id) {
                        self.$scope.Category = category;
                        self.$scope.Post.Category = category;
                    }
                }
            }

            //#endregion
            //#region Registered Functions
            function Print() {
                ////console.log(self.$scope.Post);
                ////console.log(self.$scope.Editing);
            }

            //#region Post Functions
            function GetAll() {
                self.postSvc.getAll().then(function (data) {
                    self.$scope.Posts = data;

                    if ($routeParams.Id) {
                        self.$scope.Posts.forEach(function (post) {
                            return addPost(post, $routeParams.Id);
                        });
                        self.$scope.Editing = true;
                    }
                }, function (reason) {
                    HandleFailedAPI(reason);
                });
            }

            function EditPost(post) {
            }

            function Delete(post) {
                self.postSvc.Delete(post).then(function (data) {
                    //console.log(data);
                }, function (error) {
                    HandleFailedAPI(error);
                });
            }

            function Save(post) {
                post.Public ? post.Public = post.Public : post.Public = false;

                self.postSvc.save(post).then(function (data) {
                }, function (reason) {
                    HandleFailedAPI(reason);
                });
            }

            function Publish(post) {
                post.Public = true;

                self.postSvc.save(post).then(function (data) {
                }, function (reason) {
                    HandleFailedAPI(reason);
                });
            }

            function Unpublish(post) {
                post.Public = false;

                self.postSvc.save(post).then(function (data) {
                }, function (reason) {
                    HandleFailedAPI(reason);
                });
            }

            function EditLink(post) {
                self.$location.path('/Blogs/Edit/' + post.Id);
            }

            //#endregion
            //#region Category Functions
            function GetAllCategories() {
                self.catSvc.getAll().then(function (data) {
                    self.$scope.Categories = data;

                    if ($routeParams.Id) {
                        self.$scope.Categories.forEach(function (cat) {
                            return addCategory(cat, self.$scope.Post);
                        });
                        self.$scope.Editing = true;
                    }
                }, function (reason) {
                    HandleFailedAPI(reason);
                });
            }

            function EditCategory(category) {
            }

            function UpdateCategory(category) {
            }

            function DeleteCategory(category) {
                self.catSvc.deleteCategory(category).then(function (data) {
                    //console.log(data);
                }, function (error) {
                    HandleFailedAPI(error);
                });
            }

            function SaveCategory(category) {
                //console.log("Saved");
                self.$location.path('/Blogs/Manage');
            }

            //#endregion
            //#endregion
            //#region Registering Functions
            self.$scope.GetAll = GetAll;
            self.$scope.Delete = Delete;
            self.$scope.Edit = EditPost;
            self.$scope.Save = Save;
            self.$scope.Publish = Publish;
            self.$scope.UnPublish = Unpublish;
            self.$scope.EditLink = EditLink;
            self.$scope.Print = Print;

            self.$scope.cGetAll = GetAllCategories;
            self.$scope.cEdit = EditCategory;
            self.$scope.cUpdate = UpdateCategory;
            self.$scope.cDelete = DeleteCategory;
            self.$scope.cSave = SaveCategory;

            //#endregion
            self.init();
        }
        Blogs.prototype.init = function () {
            var self = this;

            self.$scope.GetAll();
            self.$scope.cGetAll();
        };
        return Blogs;
    })();
    AdminApp.Blogs = Blogs;

    Blogs.$inject = ['$scope', '$location', '$routeParams', 'PostDataService', 'CategoryDataService'];
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=Blogs.js.map
