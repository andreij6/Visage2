module VisageApp {
	export class GalleryCtrl {
		private $scope: Extensions.IGalleryScope;
		private $location: ng.ILocationService;

		private init(): void {
			var self = this;

			//check the query String
			
		}

		constructor($scope: Extensions.IGalleryScope, $location: ng.ILocationService) {
			var self = this;
			self.$scope = $scope;
			self.$scope.Showing = false;
			self.$scope.Image = "";
			self.$scope.allactive = "active";
			self.$scope.CurrentCategory = "All Categories";
			self.$location = $location;

			var botox =		{ UrlCode: "bx", Name: "Botox", Active: false };
			var facialInj =	{ UrlCode: "fi", Name: "Facial Injectibles", Active: false };
			var resurface =	{ UrlCode: "sr", Name: "Skin Resurfacing", Active: false };
			var tighten =		{ UrlCode: "st", Name: "Skin Tightening", Active: false };
			var pigmentation =	{ UrlCode: "pm", Name: "Pigmentation/Melasma", Active: false };
			var hcg =			{ UrlCode: "bsh", Name: "BodyShaping/HCG", Active: false };
			var laser =		{ UrlCode: "lhr", Name: "Laser Hair Removal", Active: false };
			var vein =		{ UrlCode: "vr", Name: "Vein Reduction", Active: false };

			var categories = [];

			categories.push(botox);
			categories.push(facialInj);
			categories.push(resurface);
			categories.push(tighten);
			categories.push(pigmentation);
			categories.push(hcg);
			categories.push(laser);
			categories.push(vein);

			//{ Name: "Microdermabrasion", Active: false },
			//{ Name: "Permanent Cosmetics", Active: false },

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
					self.$location.search('c', category['UrlCode']);
					self.$scope.CurrentCategory = category.Name;
				} else {
					self.$scope.allactive = "active";
					self.$scope.filterValue = {};
					self.$scope.CurrentCategory = "All Categories";
				}


			}

			function getProcedure(procedureCode: number) {
				var result = "";
				if (procedureCode === 1) {
					result = "Botox";
				}
				if (procedureCode === 2) {
					result = "Perlane";
				}

				if (procedureCode === 3) {
					result = "Restylane";
				}

				if (procedureCode === 4) {
					result = "Restylane Perlane";
				}

				if (procedureCode === 5) {
					result = "Sculptra";
				}

				if (procedureCode === 6) {
					result = "Voluma";
				}

				if (procedureCode === 7) {
					result = "BodyFX";
				}

				if (procedureCode === 8) {
					result = "LipoDissolve (Mesotherapy)";
				}

				if (procedureCode === 9) {
					result = "Laser Hair Removal";
				}

				if (procedureCode === 10) {
					result = "Fraxel";
				}

				if (procedureCode === 11) {
					result = "IPL Photo Facial";
				}

				if (procedureCode === 12) {
					result = "Fractora";
				}

				if (procedureCode === 13) {
					result = "Chemical Peel";
				}

				if (procedureCode === 14) {
					result = "Forma";
				}

				if (procedureCode === 15) {
					result = "Laser Vein Reduction";
				}

				if (procedureCode === 16) {
					result = "Sclerotherapy";
				}

				return result;
			}

			function addProcedure(procedureCode: number) {
				var result = "";
				if (procedureCode === 1) {
					result = "FacialInj/botox";
				} 
				if(procedureCode === 2){
					result = "FacialInj/perlane";
				}

				if (procedureCode === 3) {
					result = "FacialInj/restylane";
				}

				if (procedureCode === 4) {
					result = "FacialInj/restylane_perlane";
				}

				if (procedureCode === 5) {
					result = "FacialInj/sculptra";
				}

				if (procedureCode === 6) {
					result = "FacialInj/voluma";
				}

				if (procedureCode === 7) {
					result = "Bodyshaping/bodyfx";
				}

				if (procedureCode === 8) {
					result = "Bodyshaping/meso";
				}

				if (procedureCode === 9) {
					result = "LaserHair/lhr";
				}

				if (procedureCode ===  10) {
					result = "Pigmentation/fraxel";
				}

				if (procedureCode === 11) {
					result = "Pigmentation/ipl";
				}

				if (procedureCode === 12) {
					result = "SkinResurfacing/fractora";
				}

				if (procedureCode === 13) {
					result = "SkinResurfacing/peel";
				}

				if (procedureCode === 14) {
					result = "SkinTight/forma";
				}

				if (procedureCode === 15) {
					result = "VeinReduction/laservein";
				}

				if (procedureCode === 16) {
					result = "VeinReduction/sclero";
				}



				return result + "_";
			}

			function setimg(imageName: string, procedureCode: number) {
				var procedure = addProcedure(procedureCode);

				var name = procedure + imageName;
				return route + name + ext;
			}

			
			self.$scope.Categories = categories;

			var route = "../../Content/Images/Gallery/";
			var ext = ".jpg";
			

			self.$scope.Photos = [
				{ Name: getProcedure(1), Image: setimg("alex", 1), Category: botox },
				{ Name: getProcedure(1), Image: setimg("bruno", 1), Category: botox },
				{ Name: getProcedure(1), Image: setimg("cassy", 1), Category: botox },

				{ Name: getProcedure(2), Image: setimg("alida", 2), Category: facialInj },
				{ Name: getProcedure(2), Image: setimg("donna", 2), Category: facialInj },
				{ Name: getProcedure(3), Image: setimg("holland", 3), Category: facialInj },
				{ Name: getProcedure(3), Image: setimg("jennifer", 3), Category: facialInj },
				{ Name: getProcedure(3), Image: setimg("suzy", 3), Category: facialInj },
				{ Name: getProcedure(4), Image: setimg("alesia", 4), Category: facialInj },
				{ Name: getProcedure(4), Image: setimg("yolanda", 4), Category: facialInj },
				{ Name: getProcedure(5), Image: setimg("lisa", 5), Category: facialInj },
				{ Name: getProcedure(6), Image: setimg("diane", 6), Category: facialInj },

				//categoires[1] = Skin Resurfacing
				{ Name: getProcedure(12), Image: setimg("leslie_legs", 12), Category: resurface },
				{ Name: getProcedure(12), Image: setimg("leslie_neck", 12), Category: resurface },
				{ Name: getProcedure(12), Image: setimg("lynn", 12), Category: resurface },
				{ Name: getProcedure(12), Image: setimg("sandra", 12), Category: resurface },
				{ Name: getProcedure(13), Image: setimg("1", 13), Category: resurface },
				{ Name: getProcedure(13), Image: setimg("2", 13), Category: resurface },
				{ Name: getProcedure(13), Image: setimg("3", 13), Category: resurface },
				{ Name: getProcedure(13), Image: setimg("4", 13), Category: resurface },
				{ Name: getProcedure(13), Image: setimg("5", 13), Category: resurface },
				{ Name: getProcedure(13), Image: setimg("6", 13), Category: resurface },

				//categories[2] Skin tightening
				{ Name: getProcedure(14), Image: setimg("cheryl1", 14), Category: tighten },
				{ Name: getProcedure(14), Image: setimg("cheryl2", 14), Category: tighten },
				{ Name: getProcedure(14), Image: setimg("shirley", 14), Category: tighten },

				//VeinReduction
				{ Name: getProcedure(15), Image: setimg("gary", 15), Category: vein },
				{ Name: getProcedure(15), Image: setimg("nose", 15), Category: vein },
				{ Name: getProcedure(15), Image: setimg("nose2", 15), Category: vein },
																	  
				{ Name: getProcedure(16), Image: setimg("1", 16), Category: vein },
				{ Name: getProcedure(16), Image: setimg("2", 16), Category: vein },
				{ Name: getProcedure(16), Image: setimg("3", 16), Category: vein },
				//{ Name: getProcedure(16), Image: setimg("4", 16), Category: categories[6] },

				//Pigmentation
				{ Name: getProcedure(10), Image: setimg("joe1", 10), Category: pigmentation },
				{ Name: getProcedure(10), Image: setimg("terri", 10), Category: pigmentation },
				{ Name: getProcedure(11), Image: setimg("carol", 11), Category: pigmentation },
				{ Name: getProcedure(11), Image: setimg("david", 11), Category: pigmentation },
				{ Name: getProcedure(11), Image: setimg("paula", 11), Category: pigmentation },

				//Laser hair
				{ Name: getProcedure(9), Image: setimg("chest", 9), Category: laser },
				{ Name: getProcedure(9), Image: setimg("chin", 9), Category: laser },
				{ Name: getProcedure(9), Image: setimg("chin2", 9), Category: laser },
				{ Name: getProcedure(9), Image: setimg("lips", 9), Category: laser },
				
				//Bodyshaping
				{ Name: getProcedure(7), Image: setimg("tcwilde1", 7), Category: hcg },
				{ Name: getProcedure(7), Image: setimg("tcwilde2", 7), Category: hcg },
				{ Name: getProcedure(8), Image: setimg("crombie", 8), Category: hcg }

				
			]

			self.$scope.filterValue = {};

			function LightBoxTrigger($event: ng.IAngularEvent) {
				
				self.$scope.Image = $event["currentTarget"]["src"];
				self.$scope.Showing = true;
			}

			function findCategoryByName(name: string) {
				for (var position = 0; position < categories.length; position++) {
					console.log(position);
					var current = self.$scope.Categories[position];
					console.log(current);
					console.log(name);
					if (current["UrlCode"].toLowerCase() == name.toLowerCase()) {
						return current;
					}
				}
			}

			function CheckQueryString() {
				var params = self.$location.search();

				if (params['c'] !== undefined) {
					var localCategory = findCategoryByName(params['c']);
					if (localCategory !== undefined) {
						setFilter(localCategory);
					}
				}
			}

			self.$scope.Trigger = LightBoxTrigger;

			self.$scope.SetFilter = setFilter;
			
			self.init();
			CheckQueryString();
		}
	}

	GalleryCtrl.$inject = ['$scope', '$location'];
} 