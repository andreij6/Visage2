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
				{ name: "FacialInject", url: nav + "FacialInjectibles.html" },
				{ name: "Pigment", url: nav + "Pigment.html" },
				{ name: "SkinResurface", url: nav + "SkinResurface.html" },
				{ name: "SkinTight", url: nav + "SkinTight.html" },
				{ name: "Bodyshaping", url: nav + "Bodyshaping.html" },
				{ name: "Microderma", url: nav + "Microderma.html" },
				{ name: "PermCos", url: nav + "PermCos.html" },
				{ name: "LaserHair", url: nav + "LaserHair.html" },
				{ name: "VeinReduce", url: nav + "VeinReduce.html" }
			];

			function setTemplate(name: string) {
				for (var temp in templates) {
					if (templates[temp].name == name)
						self.$scope.template = templates[temp];
				}
			}

			function menuTrigger() {
				if (!self.$scope.open)
					self.$scope.YouTubeMenu = ' dr-menu-open';
				else
					self.$scope.YouTubeMenu = '';

				self.$scope.open = !self.$scope.open;

			}

			self.$scope.SetTemplate = setTemplate;

			self.$scope.templates = templates;

			self.$scope.template = { name: "Index", url: nav + "Index.html" };

			self.$scope.YouTubeMenu = '';

			self.$scope.MenuTrigger = menuTrigger;

			self.init();
		}
	}

	Treatments.$inject = ['$scope'];
} 