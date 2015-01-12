module VisageApp {
	export class Market {
		private $scope: Extensions.IMarketScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IMarketScope) {
			var self = this;
			self.$scope = $scope;

			var nav = "../../../Templates/Front/Market/Partials/";

			var templates = [
				{ name: "Index", url: nav + "Index.html" },
				{ name: "ProductDetail", url: nav + "ProductDetail" }
			];

			function setTemplate(name: string) {
				for (var temp in templates) {
					if (templates[temp].name == name)
						self.$scope.template = templates[temp];
				}
			}

			self.$scope.SetTemplate = setTemplate;

			self.$scope.templates = templates;

			self.$scope.template = { name: "Index", url: nav + "Index.html" };

			self.init();
		}
	}

	Market.$inject = ['$scope'];
}