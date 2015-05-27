module VisageApp {
	export class HeaderCtrl {
		private $scope: Extensions.IHeaderCtrlScope;
		private MarketSvc: MarketService;
		private PostDataSvc: PostDataService;
		private ProductSvc: ProductService;
		private TickerSvc: TickerDataService;
		private $routeParams: IRouteParams;
		private Products: any;

		private init(): void {
			var self = this;

			function Affix() {
				$('#sidebar-inner').affix({
					offset: {
						top: 0,
					}
				});
			}

			Affix();
		}

		constructor(
			$scope: Extensions.IHeaderCtrlScope,
			MarketSvc: MarketService,
			postDataSvc: PostDataService,
			$location: ng.ILocationService,
			$anchorScroll: ng.IAnchorScrollService,
			tickerSvc: TickerDataService,
			$routeParams: IRouteParams,
			productSvc: ProductService)
		{
			var self = this;
			self.$scope = $scope;
			self.$scope.SideOpen = false;
			self.$scope.ShoppingCart = MarketSvc.Cart;
			self.MarketSvc = MarketSvc;
			self.PostDataSvc = postDataSvc;
			self.TickerSvc = tickerSvc;
			self.$scope.HasItems = false;
			self.$scope.IsAlertVisible = false;
			self.$routeParams = $routeParams;
			self.$scope.SearchFail = false;
			self.ProductSvc = productSvc;

			self.$scope.Navs = [
				new SideMenuItem('Home', 'fa-home', 1, '#/', true),
				new SideMenuItem('Team', 'fa-users', 2, '#/Team'),
				new SideMenuItem('About', 'fa-male', 3, '#/About'),
				new SideMenuItem('Market', 'fa-gift', 4, '#/Market'),
				new SideMenuItem('Treatment', 'fa-eyedropper', 5, '#/Treatments'),
				new SideMenuItem('Gallery', 'fa-file-image-o', 6, '#/Gallery'),
				new SideMenuItem('Resource', 'fa-newspaper-o', 7, '#/Resources'),
				new SideMenuItem('Contact', 'fa-phone-square', 8, '#/Contact')
			];

			self.$scope.addjQuery = function () {
				$('#s3slider').s3Slider({
					timeOut: 8000
				});
			}

			self.$scope.selected = undefined;

			function StoreDescription(name: string): string {
				return name + ': Shop ' + name + ' Products';
			}

			function StoreLink(name: string): string {
				return '/Market/Products/' + name;
			}

			self.$scope.SearchItems = [
				new SearchItem("Team: Meet the Staff", "/Team"),
				new SearchItem('About: Meet Dr. Riehs', '/About'),
				new SearchItem('Patient Stories', '/Stories'),
				
				//Break this up
				new SearchItem('New Patient Resources: Hippa Policy, Privacy Policy, Cancellation Policy, Health Information', '/Resources/NewPatients'),
				new SearchItem('Locations', '/Contact'),

				new SearchItem('Treatments: Botox, Microdermabrasion, and more', '/Treatments'),
				new SearchItem('Photo Gallery: Before and After Images', '/Gallery'),
				new SearchItem('SiteMap', '/SiteMap'),

				new SearchItem('Market: Shop at Lebeau Visage', '/Market'),

				new SearchItem(StoreDescription('SkinMedica'), StoreLink('SkinMedica')),
				new SearchItem(StoreDescription('Elta MD'), StoreLink('Elta MD')),
				new SearchItem(StoreDescription('RevitaLash'), StoreLink('RevitaLash')),
				new SearchItem(StoreDescription('Clarisonic'), StoreLink('Clarisonic')),
			];

			function HandleFailedAPI(message: any) {
				//console.log(message);
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
				if (self.$scope.ShoppingCart.length > 0) {
					self.$scope.HasItems = true;
					self.$scope.IsAlertVisible = true;
				}
				else {
					self.$scope.HasItems = false;
				}

			}

			function setNav(name: string) {
				for (var x in self.$scope.Navs) {
					if (self.$scope.Navs[x].Name === name) {
						self.$scope.Navs[x].TurnOn();
					}
					else {
						self.$scope.Navs[x].TurnOff();
					}
				}
				self.$scope.SideOpen = false;
			}

			function goToTop() {
				$location.hash('top');

				$anchorScroll();
			}

			function GetAllTickerItems() {
				self.TickerSvc.getAll().then(
					function (data) {
						self.$scope.Messages = data;
						//console.log(data);
					},
					function (reason) { HandleFailedAPI(reason) }
					);
			}

			function search() {
				var link = self.$scope.selected['Link'];

				if (link !== undefined) {
					$location.path(link);
					document.getElementById('search').className = 'closed';
					self.$scope.selected = undefined;
					self.$scope.SearchFail = false;
				} else {
					self.$scope.SearchFail = true;
				}
			}

			function GetProducts() {
				//console.log("get Products");
				self.ProductSvc.getAll().then(
					function (data) {
						self.Products = data;
						SetProductSearchItems();
					},
					function (error) {
						//console.log(error);
					});
			}

			function ProductDescription(name: string): string {
				return name;
			}

			function ProductLink(id: number): string {
				return "/Market/Item/" + id;
			}

			function SetProductSearchItems() {
				for (var x in self.Products) {
					self.$scope.SearchItems.push(new SearchItem(ProductDescription(self.Products[x].Name), ProductLink(self.Products[x].Id))); 
				}
			}


			self.$scope.Search = search;

			self.$scope.$watch('SideOpen', CloseSideBar);

			self.$scope.$on('CartItem-Added', CartUpdated);

			self.$scope.UpdateSO = UpdateSO;

			self.$scope.SetNav = setNav;

			self.$scope.GoToTop = goToTop;

			self.init();
			GetAllTickerItems();
			GetProducts();
			
			
		}
	}

	export class SideMenuItem {

		constructor(public Name, public Icon, public OrderNumber, public Link, public IsActive = false) {
		}

		TurnOn(): void {
			this.IsActive = true;
		}

		TurnOff(): void {
			this.IsActive = false;
		}
	}

	export class SearchItem {
		constructor(public Description, public Link) {

		}
	}

	HeaderCtrl.$inject = ['$scope', 'MarketService', 'PostDataService', '$location', '$anchorScroll', 'TickerDataService', '$routeParams', 'ProductService'];
} 