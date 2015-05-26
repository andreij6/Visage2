//Used to Create Update and Delete a single Product 

module AdminApp {
	export class ProductCtrl {
		private $scope: Admin_Extensions.IProductScope;
		private ProductSvc: ProductDataService;

		private init(): void {
			var self = this;
			
		}

		constructor(
			$scope: Admin_Extensions.IProductScope,
			$location: ng.ILocationService,
			$routeParams: IRouteParams,
			productSvc: ProductDataService)
		{
			var self = this;
			self.$scope = $scope;
			self.ProductSvc = productSvc;

			function HandleFailedAPI(error: any) { }

			function edit(product: Extensions.Product) {
				self.ProductSvc.update(product).then(
					function (data) {
					},
					function (error) {
						console.log(error);
					});

				$location.path('/Market/Products');
			}

			function getSingle(Id: number) {
				self.ProductSvc.getById(Id).then(
					function (data) {
						self.$scope.Product = data;
						console.log("Data:");
						console.log(data);
						console.log("Product");
						console.log(self.$scope.Product);

					},
					function (error) {
						HandleFailedAPI(error);
					});
			}

			function save(Product: Extensions.Product) {
				self.ProductSvc.save(Product).then(
					function (data) {

					}, function (error) {
						HandleFailedAPI(error);
					});

				$location.path('/Market/Products');
			}

			function deleteProduct(Product: Extensions.Product) {
				self.ProductSvc.deleteProduct(Product).then(
					function (data) {
						console.log(data);
					}, function (error) { HandleFailedAPI(error) });
			}

			function SetStage() {
				if ($routeParams.Id) {
					self.$scope.PageTitle = "Edit";
					self.$scope.Editing = true;
					getSingle($routeParams.Id);
				} else {
					self.$scope.Editing = false;
					self.$scope.PageTitle = "New Product";
				}
			}

			SetStage();

			self.$scope.Delete = deleteProduct;
			self.$scope.Edit = edit;
			self.$scope.Save = save;

			self.init();
		}

	}

	ProductCtrl.$inject = ['$scope', '$location', '$routeParams', 'ProductDataService'];
}