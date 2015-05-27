module AdminApp {
	export class TickerCtrl {
		private $scope: Admin_Extensions.ITickerScope;
		private $location: ng.ILocationService;
		private TickerSvc: TickerDataService;

		private init(): void {
			var self = this;
		}

		constructor(
				$scope: Admin_Extensions.ITickerScope,
				$location: ng.ILocationService,
				tickerSvc: TickerDataService)
		{
			var self = this;
			self.$scope = $scope;
			self.$location = $location;
			self.TickerSvc = tickerSvc;

			function cancel() {
				clearInputs();
			}

			function isMessageEmpty() {
				if (self.$scope.Message === undefined) {
					return true;
				}
				return false;
			}

			function isValid() {
				if (self.$scope.Message.Dates === ""
					|| self.$scope.Message.Message === undefined
					|| self.$scope.Message.Message.length < 5 
					|| self.$scope.Message.Url === undefined
					|| self.$scope.Message.Url.length < 4)
				{
					return false;
				}

				return true;
			}

			function NotifyInValid() {
				alert("Ticker Message Not Valid. \n Message Must be at least 5 characters."
					+ "\n Url Must be at least 4 characters."
					+ "\n Date Must be included");
			}

			function HandleFailedAPI(message: any) {
				//console.log(message);
			}

			function actualSave() {
				self.TickerSvc.save(self.$scope.Message);
				clearInputs();
			}

			function clearInputs() {
				self.$scope.Message.Dates = "";
				self.$scope.Message.Message = "";
				self.$scope.Message.Url = "";
			}

			function save() {
				if (isMessageEmpty()) return;

				if (isValid()) {
					actualSave();
					self.$location.path('/Ticker');
				} else {
					NotifyInValid();
				}
			}

			function saveNew() {
				if (isMessageEmpty()) return;

				if (isValid()) {
					actualSave();
				} else {
					NotifyInValid();
				}
			}

			function GetAllTickerItems() {
				self.TickerSvc.getAll().then(
					function (data) {
						self.$scope.Messages = data;
					},
					function (reason) { HandleFailedAPI(reason) }
					);
			}

			self.$scope.Save = save;
			self.$scope.SaveNew = saveNew;
			self.$scope.Cancel = cancel;

			self.init();
			GetAllTickerItems();
		}
	}

	TickerCtrl.$inject = ['$scope', '$location', 'TickerDataService'];
}