module VisageApp {
	export class Resources {
		private $scope: Extensions.IResourcesScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IResourcesScope) {
			var self = this;
			self.$scope = $scope;

			var nav = "../../../Templates/Front/Resources/Partials/";

			var templates = [
				{ name: "Index", url: nav + "Index.html" },
				{ name: "IPLPost", url: nav + "PostCare/IPLPhotofacial.html" },
				{ name: "LSHPost", url: nav + "PostCare/LaserHairReduction.html" },
				{ name: "SclPost", url: nav + "PostCare/Sclerotherapy.html" },
				{ name: "TCAPost", url: nav + "PostCare/TCAPeel.html" },
				{ name: "MesoPost", url: nav + "PostCare/Mesotherapy.html" },
				{ name: "Fraxel", url: nav + "FactSheets/Fraxel.html"},
				{ name: "LV", url: nav + "FactSheets/LegVein.html" },
				{ name: "Scl", url: nav + "FactSheets/Sclerotherapy.html" },
				{ name: "IPL", url: nav + "FactSheets/IPL.html" },
				{ name: "NonTCA", url: nav + "FactSheets/NonTCA.html" },
				{ name: "LSH", url: nav + "FactSheets/LaserHairRemoval.html" },
				{ name: "LFLV", url: nav + "FactSheets/LFLV.html" }
			];

			function setTemplate(name: string) {
				for (var temp in templates) {
					if (templates[temp].name == name)
						self.$scope.template = templates[temp];
				}
			}

			self.$scope.template = templates[0];

			self.$scope.SetTemplate = setTemplate;

			self.$scope.Pages = [];

			self.init();
		}
	}

	Resources.$inject = ['$scope'];
}