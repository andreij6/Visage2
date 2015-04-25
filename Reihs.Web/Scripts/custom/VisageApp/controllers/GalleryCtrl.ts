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
				{ Name: "Facial Injectibles", Active: false },
				{ Name: "Skin Resurfacing", Active: false },
				{ Name: "Skin Tightening", Active: false },
				{ Name: "Pigmentation/Melasma", Active: false },
				{ Name: "BodyShaping/HCG", Active: false },
				{ Name: "Laser Hair Removal", Active: false },
				{ Name: "Vein Reduction", Active: false }
			];

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
				} else {
					self.$scope.allactive = "active";
					self.$scope.filterValue = {};
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
				//categories[0] = FacialInjectebles
				{ Name: getProcedure(1), Image: setimg("alex", 1), Category: categories[0] },
				{ Name: getProcedure(1), Image: setimg("bruno", 1), Category: categories[0] },
				{ Name: getProcedure(1), Image: setimg("cassy" , 1), Category: categories[0] },

				{ Name: getProcedure(2), Image: setimg("alida", 2), Category: categories[0] },
				{ Name: getProcedure(2), Image: setimg("donna", 2), Category: categories[0] },

				{ Name: getProcedure(3), Image: setimg("holland", 3), Category: categories[0] },
				{ Name: getProcedure(3), Image: setimg("jennifer", 3), Category: categories[0] },
				{ Name: getProcedure(3), Image: setimg("suzy", 3), Category: categories[0] },

				{ Name: getProcedure(4), Image: setimg("alesia", 4), Category: categories[0] },
				{ Name: getProcedure(4), Image: setimg("yolanda", 4), Category: categories[0] },
				{ Name: getProcedure(5), Image: setimg("lisa", 5), Category: categories[0] },

				{ Name: getProcedure(6), Image: setimg("diane", 6), Category: categories[0] },

				//categoires[1] = Skin Resurfacing
				{ Name: getProcedure(12), Image: setimg("leslie_legs", 12), Category: categories[1] },
				{ Name: getProcedure(12), Image: setimg("leslie_neck", 12), Category: categories[1] },
				{ Name: getProcedure(12), Image: setimg("lynn", 12), Category: categories[1] },
				{ Name: getProcedure(12), Image: setimg("sandra", 12), Category: categories[1] },
				
				{ Name: getProcedure(13), Image: setimg("1", 13), Category: categories[1] },
				{ Name: getProcedure(13), Image: setimg("2", 13), Category: categories[1] },
				{ Name: getProcedure(13), Image: setimg("3", 13), Category: categories[1] },
				{ Name: getProcedure(13), Image: setimg("4", 13), Category: categories[1] },
				{ Name: getProcedure(13), Image: setimg("5", 13), Category: categories[1] },
				{ Name: getProcedure(13), Image: setimg("6", 13), Category: categories[1] },

				//categories[2] Skin tightening
				{ Name: getProcedure(14), Image: setimg("cheryl1", 14), Category: categories[2] },
				{ Name: getProcedure(14), Image: setimg("cheryl2", 14), Category: categories[2] },
				{ Name: getProcedure(14), Image: setimg("shirley", 14), Category: categories[2] },

				//VeinReduction
				{ Name: getProcedure(15), Image: setimg("gary", 15), Category: categories[6] },
				{ Name: getProcedure(15), Image: setimg("nose", 15), Category: categories[6] },
				{ Name: getProcedure(15), Image: setimg("nose2", 15), Category: categories[6] },
																	  
				{ Name: getProcedure(16), Image: setimg("1", 16), Category: categories[6] },
				{ Name: getProcedure(16), Image: setimg("2", 16), Category: categories[6] },
				{ Name: getProcedure(16), Image: setimg("3", 16), Category: categories[6] },
				//{ Name: getProcedure(16), Image: setimg("4", 16), Category: categories[6] },

				//Pigmentation
				{ Name: getProcedure(10), Image: setimg("joe1", 10), Category: categories[3] },
				{ Name: getProcedure(10), Image: setimg("terri", 10), Category: categories[3] },

				{ Name: getProcedure(11), Image: setimg("carol", 11), Category: categories[3] },
				{ Name: getProcedure(11), Image: setimg("david", 11), Category: categories[3] },
				{ Name: getProcedure(11), Image: setimg("paula", 11), Category: categories[3] },

				//Laser hair
				{ Name: getProcedure(9), Image: setimg("chest", 9), Category: categories[5] },
				{ Name: getProcedure(9), Image: setimg("chin", 9), Category: categories[5] },
				{ Name: getProcedure(9), Image: setimg("chin2", 9), Category: categories[5] },
				{ Name: getProcedure(9), Image: setimg("lips", 9), Category: categories[5] },
				
				//Bodyshaping
				{ Name: getProcedure(7), Image: setimg("tcwilde1", 7), Category: categories[4] },
				{ Name: getProcedure(7), Image: setimg("tcwilde2", 7), Category: categories[4] },

				{ Name: getProcedure(8), Image: setimg("crombie", 8), Category: categories[4] },
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