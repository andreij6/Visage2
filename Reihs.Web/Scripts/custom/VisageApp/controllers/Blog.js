var VisageApp;
(function (VisageApp) {
    var Blog = (function () {
        function Blog($scope, $routeParams, postSvc) {
            var self = this;
            self.$scope = $scope;
            self.PostSvc = postSvc;

            function HandleFailedAPI(reson) {
            }

            function addPost(post, Id) {
                //console.log('here');
                if (post.Id == Id)
                    self.$scope.Post = post;
            }

            function GetAll() {
                self.PostSvc.getAll().then(function (data) {
                    self.$scope.Posts = data;

                    //console.log($routeParams.Id);
                    if ($routeParams.Id) {
                        self.$scope.Posts.forEach(function (post) {
                            return addPost(post, $routeParams.Id);
                        });
                    }
                }, function (reason) {
                    HandleFailedAPI(reason);
                });
            }

            self.$scope.GetAll = GetAll;

            self.init();
        }
        Blog.prototype.init = function () {
            var self = this;

            self.$scope.GetAll();
            //console.log(self.$scope.Posts);
        };
        return Blog;
    })();
    VisageApp.Blog = Blog;

    Blog.$inject = ['$scope', '$routeParams', 'PostDataService'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=Blog.js.map
