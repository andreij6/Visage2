module VisageApp {
	export class TestimonialCtrl {
		private $scope: Extensions.ITestimonialScope;
		private $location: ng.ILocationService;
		private $routeParams: IRouteParams;

		private init(): void {
			var self = this;
		}

		constructor(
			$scope: Extensions.ITestimonialScope,
			$location: ng.ILocationService,
			$routeParams: IRouteParams) {
			var self = this;
			self.$scope = $scope;
			self.$location = $location;
			self.$routeParams = $routeParams;

			var clients = [];

			//#region Treatments
			var botox = { Name: "Botox", Code: "fj" }
			var dysport = { Name: "Dysport", Code: "fj" }
			var photo = { Name: "Photofacial", Code: "pm" }
			var sculptra = { Name: "Sculptra", Code: "fj" }
			var fraxel = { Name: "Fraxel", Code: "sr" }
			var restylane = { Name: "Restylane", Code: "fj" }
			var forma = { Name: "Forma", Code: "st" }
			var microderma = { Name: "Microdermabrasion", Code: "mderm" }
			var tca = { Name: "TCA Peels", Code: "st" }
			var fractora = { Name: "Fractora", Code: "sr" }
			var hcg = { Name: "HCG Diet Program", Code: "bhcg" }
			var bodyfx = { Name: "BodyFX", Code: "bhcg" }
			var teartrough = { Name: "Filler-Tear Trough", Code: "" }
			var skincare = { Name: "Skin Care", Code: "" }
			var filler = { Name: "Fillers", Code: "" }
			var medica = { Name: "Skin Medica", Code: "" }

			//#endregion

			//#region Clients Setup
			var brad = {
				Name: "Brad",
				Age: "42",
				Current: false,
				ImagePath: "/",
				TreatmentString: "Photofacials and Dysport",
				TreatmentObjs: [photo, dysport],
				Story_Part_One: "Meet Brad, a 42-year-old Kentucky native, a successful entrepreneur who prides himself on “living a healthy lifestyle” that focuses on his family, a prominent career  and his own personal growth and fitness.",
				Story_Part_Two: "Because of his tireless commitment to health and fitness, he places a lot of pride on maintaining those aspects of his life, including his outward appearance.Brad really sought services to improve some of the wrinkles around his eyes and the sunspots that had developed from chronic sun exposure.",
				Story_Part_Three: "Brad really observed some significant changes in the pigmentation after even a single photofacial over three years ago.   “Between the consistent treatment with Botox and photofacials, my skin has really improved and, beyond my own observations, I  now get comments on the quality of my skin,” says Brad.  “Thanks for being a good friend and taking such good care of us.”"
			};

			var kim = {
				Name: "Kim",
				Age: "49",
				Current: false,
				ImagePath: "/",
				TreatmentString: "Botox and Sculptra",
				TreatmentObjs: [botox, sculptra],
				Story_Part_One: "Meet Kim, a very youthful 49 year-old mother of four, who presented to Le Beau Visage Aesthetic Center in 2012 primarily concerned with wanting to improve the “11’s” between my brows.",
				Story_Part_Two: "Kim is an accomplished woman who loves the outdoor and family activities; she wanted to find an aesthetic center that would help maintain her youthful appearance through non-surgical avenues.She has undergone a number of procedures including Botox, Scupltra,and Microdermabrasion.",
				Story_Part_Three: "The Sculptra has really helped improve the hollowing in her mid-face and temples.  “The whole experience has been wonderful, from the atmosphere, to the awesome staff, to the results.”",
				Story_Part_Four: "“If you are contemplating calling Le Beau – Do it!”"
			};

			var michelle = {
				Name: "Michelle",
				Age: "46",
				Current: false,
				ImagePath: "/",
				TreatmentString: "Botox, Fillers and Fraxel",
				TreatmentObjs: [botox, filler, fraxel],
				Story_Part_One: "“I have to admit, the first appointment I made with Dr. Riehs, I was so nervous.  Never having had any major facial procedures done, I had no idea what to expect.” She states that she expected to be fussed over and was concerned that her flaws may be escalated in an attempt to have more services.But, the exact opposite happened.",
				Story_Part_Two: "“When I met Dr. Riehs, I just felt reassured that I was in the right place. Dr. Riehs is dynamic, comforting and real.He was able to give me realistic expectation about the procedures I was considering…Im so glad I made that first appointment.”",
				Story_Part_Three: "Since her first appointment almost five years ago, Michelle has been treated with Fraxel, Photofacials and Restylane.She is overwhelmed with her skin.  “I have the best skin I have ever had.”",
				Story_Part_Four: ""
			};

			var iliana = {
				Name: "Iliana",
				Age: "43",
				Current: false,
				ImagePath: "/",
				TreatmentString: "Restylane and Botox",
				TreatmentObjs: [restylane, botox],
				Story_Part_One: "Iliana is  a 43 year old woman full of energy and charisma.  Her happy life is spent as a mother, wife and owner of the “cutest” dog in the world—Bruno(a French bulldog who really is the cutest thing in the world).",
				Story_Part_Two: 'This lively client first received her first treatment almost nine years ago and has been a constant in the Le Beau Visage facility ever since.She has had multiple Restylane treatments in the marionette lines and folds, along with many microdermabrasion and chemical peels and continues to be ecstatic about her skin and appearance.',
				Story_Part_Three: '“These guys are like my family. Thanks for everything!”',
				Story_Part_Four: ''
			};
			var shirley = {
				Name: "Shirley",
				Age: "66",
				Current: false,
				ImagePath: "/",
				TreatmentString: "Forma Skin Tightening",
				TreatmentObjs: [forma],
				Story_Part_One: "Shirley is one of the clinic sweethearts.  She is a 66 year-old and first presented to the clinic almost three years ago with the hopes of  “receiving a fresher, younger look.”  She especially hoped to find a treatment that would help provide some lifting and tightening across the jaw line and neck.",
				Story_Part_Two: "She has received a number of treatments ranging from Botox to Restylane and most recently, a skin - tightening laser, FORMA, for her neck and jaw line.Shirley has responded remarkably to the laser and is extremely pleased with her results.",
				Story_Part_Three: '“Dr. Riehs and his staff are always very caring.  All of my expectations were met and more.”',
				Story_Part_Four: ''
			};

			var jan = {
				Name: "Jan",
				Age: "66",
				Current: false,
				ImagePath: "/",
				TreatmentString: "Skin Medica and Sculptra",
				TreatmentObjs: [medica, sculptra],
				Story_Part_One: "Jan is another clinic sweetheart.  She is 66 years young and an avid golfer.  She quickly became a member of the Le Beau Visage family in summer of 2012.  “When I met with Dr.Riehs, he knew exactly what procedures would benefit me and explained each with  great detail.”  When Jan met with Dr.Riehs, she was reassured that Dr.Riehs would only recommend treatments that were right for her.For Jan, the reassurance and patience were pivotal components to the entire treatment process.  “When you have your treatments done, you are very comfortable and totally relaxed with great results.",
				Story_Part_Two: "Additionally, Jan is a huge proponent of the medical-based Skin Medica product line, particularly the TNS Essential Serum.This daily product has made a significant impact to her skin.  “I have used the Skin Medica products from the start…what a difference especially the TNS Serum!!I never want to be without it.”",
				Story_Part_Three: "",
				Story_Part_Four: ""
			};


			//#endregion

			clients.push(brad);
			clients.push(kim);

			function setCurrentClient() {
				var name = self.$routeParams["name"];

				for (var pos = 0; pos < clients.length; pos++) {
					if (clients[pos].Name === name) {
						self.$scope.Client = clients[pos];
						clients[pos].Current = true;
						self.$scope.TreatmentObjs = self.$scope.Client.TreatmentObjs;
						console.log(self.$scope.TreatmentObjs);
					}
				}
			}

			function menuTrigger() {
				if (!self.$scope.open)
					self.$scope.YouTubeMenu = ' dr-menu-open';
				else
					self.$scope.YouTubeMenu = '';

				self.$scope.open = !self.$scope.open;

			}

			function LightBoxTrigger($event: ng.IAngularEvent) {
				self.$scope.Image = $event["currentTarget"]["src"];
				self.$scope.Showing = true;
			}

			function GenerateImages() {
				var testimonialImages = ['Angela', 'Brad', 'Brandi', 'Chad', 'Debbie', 'Fernando', 'Hamidan', 'Iliana', 'Isabel', 'Jan', 'Kim', 'Liz', 'Lynn', 'Marlene', 'Michelle', 'Nancy', 'Peggy', 'Shirley', 'Tamme', 'Tara'];

				var imageLocation = '../../../Content/Images/Testimonials/';
				var ext = '.jpg';

				var result = [];

				for (var i = 0; i < testimonialImages.length; i++) {
					var src = imageLocation + testimonialImages[i] + ext;
					result.push(src);
				}

				return result;
			};

			self.$scope.Clients = clients;
			self.$scope.TestimonialImages = GenerateImages();
			self.$scope.Trigger = LightBoxTrigger;
			self.$scope.YouTubeMenu = '';
			self.$scope.MenuTrigger = menuTrigger;
			self.init();
			setCurrentClient();
		}
	}

	TestimonialCtrl.$inject = ['$scope', '$location', '$routeParams'];
} 