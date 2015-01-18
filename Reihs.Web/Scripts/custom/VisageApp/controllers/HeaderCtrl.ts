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
			self.$scope.IsAlertVisible = false;

			self.$scope.HomeActive = true;
			self.$scope.AboutActive = false;
			self.$scope.MarketActive = false;
			self.$scope.CartActive = false;
			self.$scope.TreatmentActive = false;
			self.$scope.GalleryActive = false;
			self.$scope.ResourceActive = false;
			self.$scope.ContactActive = false;

			//#region Switches
			//#region On
			function homeOn() {
				self.$scope.HomeActive = true;
			}
			function aboutOn() {
				self.$scope.AboutActive = true;
			}
			function marketOn() {
				self.$scope.MarketActive = true;
			}
			function cartOn() {
				self.$scope.CartActive = true;
			}
			function treatmentOn() {
				self.$scope.TreatmentActive = true;
			}
			function galleryOn() {
				self.$scope.GalleryActive = true;
			}
			function resourceOn() {
				self.$scope.ResourceActive = true;
			}
			function contactOn() {
				self.$scope.ContactActive = true;
			}
			//#endregion
			//#region Off
			function homeOff() {
				self.$scope.HomeActive = false;
			}
			function aboutOff() {
				self.$scope.AboutActive = false;
			}
			function marketOff() {
				self.$scope.MarketActive = false;
			}
			function cartOff() {
				self.$scope.CartActive = false;
			}
			function treatmentOff() {
				self.$scope.TreatmentActive = false;
			}
			function galleryOff() {
				self.$scope.GalleryActive = false;
			}
			function resourceOff() {
				self.$scope.ResourceActive = false;
			}
			function contactOff() {
				self.$scope.ContactActive = false;
			}
			//#endregion
			//#endregion

			self.$scope.Navs = [
				{ name: 'Home', IsOn: self.$scope.HomeActive, action: homeOn, off: homeOff},
				{ name: 'About', IsOn: self.$scope.AboutActive, action: aboutOn, off: aboutOff},
				{ name: 'Market', IsOn: self.$scope.MarketActive, action: marketOn, off: marketOff },
				{ name: 'Cart', IsOn: self.$scope.CartActive, action: cartOn, off: cartOff},
				{ name: 'Treatment', IsOn: self.$scope.TreatmentActive, action: treatmentOn, off: treatmentOff },
				{ name: 'Gallery', IsOn: self.$scope.GalleryActive, action: galleryOn, off: galleryOff },
				{ name: 'Resource', IsOn: self.$scope.ResourceActive, action: resourceOn, off: resourceOff },
				{ name: 'Contact', IsOn: self.$scope.ContactActive, action: contactOn, off: contactOff }
			];

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
						if (newValue !== oldValue) {
							$('.row-offcanvas').removeClass('active');
							$('.showhide').toggle();
						}
					}


				}
			}

			function CartUpdated(event, data) {
				console.log("shoppingcart");

				if (self.$scope.ShoppingCart.length > 0) {
					self.$scope.HasItems = true;
					self.$scope.IsAlertVisible = true;
				}
				else {
					self.$scope.HasItems = false;
				}

				console.log(self.$scope.ShoppingCart);
			}

			function setNav(name: string) {
				console.log(self.$scope.Navs);
				for (var x in self.$scope.Navs)
				{
					if (self.$scope.Navs[x].name === name) {
						self.$scope.Navs[x].IsOn = true;
						self.$scope.Navs[x].action();
					}
					else {
						self.$scope.Navs[x].IsOn = false;
						self.$scope.Navs[x].off();
					}
				}
				self.$scope.SideOpen = false;
			}

			self.$scope.$watch('SideOpen', CloseSideBar);

			self.$scope.$on('CartItem-Added', CartUpdated);

			self.$scope.UpdateSO = UpdateSO;

			self.$scope.SetNav = setNav;

			self.init();
		}
	}

	HeaderCtrl.$inject = ['$scope', 'MarketService'];
} 