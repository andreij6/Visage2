module VisageApp {
	export class GalleryCtrl {
		private $scope: Extensions.IGalleryScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.IGalleryScope) {
			var self = this;
			self.$scope = $scope;
			self.$scope.Showing = false;
			self.$scope.Image = "";
			self.$scope.allactive = "active";

			var categories = [
				{ Name: "Facial Injectebles", Active: false },
				{ Name: "Skin Resurfacing", Active: false },
				{ Name: "Skin Tightening", Active: false },
				{ Name: "Pigmentation/Melasma", Active: false },
				{ Name: "BodyShaping/HCG", Active: false },
				{ Name: "Microdermabrasion", Active: false },
				{ Name: "Permanent Cosmetics", Active: false },
				{ Name: "Laser Hair Removal", Active: false },
				{ Name: "Vein Reduction", Active: false }
			];

			function setFilter(category: any) {
				self.$scope.filterValue = category.Name;

				for(var x in self.$scope.Categories)
				{
					self.$scope.Categories[x].Active = "";
				}

				if (category.Active !== undefined) {
					category.Active = "active";
					self.$scope.allactive = "";
					self.$scope.filterValue = category;
				} else {
					self.$scope.allactive = "active";
					self.$scope.filterValue = {};
				}


			}

			self.$scope.Categories = categories;

			self.$scope.Photos = [
				{ Name: 'name', Image: "../../Content/Images/coffee-569178_1280.jpg", Category: categories[0] },
				{ Name: 'name', Image: "../../Content/Images/coffee-569178_1280.jpg", Category: categories[0] },
				{ Name: 'name', Image: "../../Content/Images/coffee-569178_1280.jpg", Category: categories[0] },

				{ Name: 'name', Image: "../../Content/Images/coffee-569178_1280.jpg", Category: categories[1] },
				{ Name: 'name', Image: "../../Content/Images/coffee-569178_1280.jpg", Category: categories[1] },
				{ Name: 'name', Image: "../../Content/Images/coffee-569178_1280.jpg", Category: categories[1] },

				{ Name: 'name', Image: "../../Content/Images/coffee-569178_1280.jpg", Category: categories[2] },
				{ Name: 'name', Image: "../../Content/Images/coffee-569178_1280.jpg", Category: categories[2] },
				{ Name: 'name', Image: "../../Content/Images/coffee-569178_1280.jpg", Category: categories[2] },
			]

			self.$scope.filterValue = {};

			function LightBoxTrigger($event: ng.IAngularEvent) {
				
				self.$scope.Image = $event["currentTarget"]["src"];
				self.$scope.Showing = true;
			}

			self.$scope.Trigger = LightBoxTrigger;

			self.$scope.SetFilter = setFilter;

			self.init();
		}
	}

	GalleryCtrl.$inject = ['$scope'];
} 