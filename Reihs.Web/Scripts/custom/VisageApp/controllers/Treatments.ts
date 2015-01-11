module VisageApp {
	export class Treatments {

		private $scope: Extensions.ITreatmentScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ITreatmentScope) {

			var self = this;

			self.$scope = $scope;

			var nav = "../../../Templates/Front/Treatments/Partials/";

			var templates = [
				{ name: "Index", url: nav + "Index.html" },
				{ name: "Other", url: nav + "Other.html" },
				{ name: "ChangeMyName", url: nav + "ChangeMyName.html" }
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

	Treatments.$inject = ['$scope'];
} 