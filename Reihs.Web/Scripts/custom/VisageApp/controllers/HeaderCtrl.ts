module VisageApp {
	export class HeaderCtrl {
		private $scope: Extensions.IHeaderCtrlScope;
		private MarketSvc: MarketService;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IHeaderCtrlScope, MarketSvc: MarketService) {
			var self = this;
			self.$scope = $scope;
			self.$scope.SideOpen = false;
			self.$scope.ShoppingCart = MarketSvc.Cart;
			self.MarketSvc = MarketSvc;
			self.$scope.HasItems = false;

			self.$scope.addjQuery = function () {
					$('#s3slider').s3Slider({
						timeOut: 8000
					});
			}
			function UpdateSO() {
				if (self.$scope.SideOpen == true) {
					self.$scope.SideOpen = false;
				}
				else {
					self.$scope.SideOpen = true;
				}
			}

			function CloseSideBar(newValue, oldValue) {
				if (oldValue !== undefined) {
					if (newValue === true) {
						$('.row-offcanvas').addClass('active');
						$('.showhide').toggle();
					} else {
						if (newValue !== oldValue)
						{
							$('.row-offcanvas').removeClass('active');
							$('.showhide').toggle();
						}
					}


				}
			}
			
			function CartUpdated(event, data) {
				console.log("shoppingcart");
				
				if (self.$scope.ShoppingCart.length > 0)
					self.$scope.HasItems = true;
				else
					self.$scope.HasItems = false;

				console.log(self.$scope.ShoppingCart);
			}

			self.$scope.$watch('SideOpen', CloseSideBar);

			self.$scope.$on('CartItem-Added', CartUpdated);

			self.$scope.UpdateSO = UpdateSO;

			self.init();
		}
	}

	HeaderCtrl.$inject = ['$scope', 'MarketService'];
} 