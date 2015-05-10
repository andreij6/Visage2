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
				Story_Part_One: 'Iliana is  a 43 year old woman full of energy and charisma.  Her happy life is spent as a mother, wife and owner of the “cutest” dog in the world—Bruno(a French bulldog who really is the cutest thing in the world).',
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

            var debbie = {
                Name: "Debbie",
                Age: "54",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Microdermabrasion, Botox, Restylane & Photofacials',
                TreatmentObjs: [micro, botox,restylane,photo],
                Story_Part_One: 'Debbie, a young and energetic 54 year-old, first presented to Le Beau Visage Aesthetic Center almost six years ago.  Debbie was new to Frisco and need to find a physician she could trust to advise her “age gracefully” with expertise.Debbie says playfully, “I was coming up to that dreaded big birthday, had middle school girls and wanted to make sure I started taking care of me.”',
                Story_Part_Two: 'Debbie did her homework and had reviewed the internet to ensure the credibility of Dr. Riehs and Le Beau Visage Aesthetic Center.  She ultimately decided to get a complimentary',
                Story_Part_Three: '',
                Story_Part_Four: ''
            };

            var angela = {
                Name: "Angela",
                Age: "38",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Microdermabrasion',
                TreatmentObjs: [micro],
                Story_Part_One: 'Angela started her journey at Le Beau Visage Aesthetic Center with microdermabrasion. She had recently moved to the north Dallas area and was searching for a cosmetic center that could offer a wide variety of services from spa to injectable services.She was immediately drawn to the facility because of the unique team of individuals.',
                Story_Part_Two: 'She has been receiving microdermabrasions for several years and really loves the microdermabrasion program offered at Le Beau Visage, which allows for consistent monthly treatments at a minimum cost.',
                Story_Part_Three: '“I love this office…while the office is extremely profession, they also are like a family. I love coming for my monthly microdermabrasion.”',
                Story_Part_Four: ''
            };

            var nancy = {
                Name: "Nancy",
                Age: "52",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Fillers: Sculptura and Restylane',
                TreatmentObjs: [filler, sculptra, restylane],
                Story_Part_One: "Nancy said that she wasn't happy with her appearance and was losing confidence before coming to Dr. Riehs’ office.It was word of mouth that introduced Nancy to the practice. She says her daughter- in -law, Angela, who sung high praises for Dr.Riehs and the team at Le Beau Visage Aesthetic Center, told her of the practice.Nancy shared a curiosity and excitement about seeing the results of Angela’s treatments and elected to visit the practice herself.She considered the benefits and prices of multiple procedures but did not want to be “overdone.”  Ultimately, she elected to undergo treatments using injectable fillers.",
                Story_Part_Two: 'Additionally, she recently received the Fractora Laser treatment, along with fillers (Restylane and Sculptra)  and has continued to receive filler for a few years.While it took her a few months to see the effects of her laser treatment, her filler treatments were evident immediately.Nancy said that both treatments were very effective.',
                Story_Part_Three: '"I would definitely do it again. I feel better about myself," says Nacny. "I have more confidence and feel like my outside matches my youthful ‘inside.’"',
                Story_Part_Four: ''
            };

            var tara = {
                Name: "Tara",
                Age: "43",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Botox, Fillers, TCA Peels',
                TreatmentObjs: [botox, filler, tca],
                Story_Part_One: '“I have known Dr. Riehs for almost 20 years and actually helped him open his practice here in Frisco.”  She jokes, “I was here in the early days and have almost done all the procedures.”  This vibrant, sophisticated woman really desires her reflection to match her very lively and gregarious personality.',
                Story_Part_Two: 'Tara had her first TCA peel almost ten years ago and is still having them done.  “I love my skin and the peels have been monumental in helping maintain my collagen.” Tara laughs, “And, I love having Restylane placed in my lips.  I guess my secret will be out but now but what difference that has made in giving me a little more volume in my thin upper lip.”',
                Story_Part_Three: '“He is very successful; he is well-accomplished…just a successful physician…I can’t say enough good things about Dr. Riehs.”  Tara’s choice to continue undergoing treatments really rests on a trust and commitment to embracing herself.   “When you are ready to undergo treatment, I suggest Dr.Riehs for acommitted, experienced and most important, “natural” result.”',
                Story_Part_Four: ''
            };

            var nancy = {
                Name: "Nancy",
                Age: "52",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Fillers: Sculptura and Restylane',
                TreatmentObjs: [filler, sculptra, restylane],
                Story_Part_One: '',
                Story_Part_Two: '',
                Story_Part_Three: '',
                Story_Part_Four: ''
            };

            var lynn = {
                Name: "Lynn",
                Age: "51",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Fractora Laser Eye Treatment, Botox & Fillers)',
                TreatmentObjs: [fractora, botox, filler],
                Story_Part_One: '“I found out about Dr. Riehs from another flight attendant who always looks fresh and fabulous.”  One of Lynn’s biggest concerns was undergoing treatments and then looking “overdone and unnatural.”    Lynn began undergoing treatments at Le Beau Visage Aesthetic Center in 2011; she engaged in a wide variety of treatments ranging from Botox and Fillers, to radiofrequency technology including Fractora and Forma.',
                Story_Part_Two: 'Aside from the expertise provided by Dr. Riehs and the staff, a large component of my satisfaction really hinges on the very high degree of professionalism and friendliness of this office.  “The moment you walk in the door, you feel welcome and confortable.  The facility has a soothing and relaxing atmosphere… a total spa experience, with a highly credible medical team.”',
                Story_Part_Three: 'Because of the “new me, I carry a sense of confidence that did not exist before; I thank Dr. Riehs and his wonderful staff.!”',
                Story_Part_Four: ''
            };

            var chad = {
                Name: "Chad",
                Age: "39",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Botox and Fillers',
                TreatmentObjs: [botox, filler],
                Story_Part_One: 'Chad, a 39 year young man, and prominent attorney, received his first cosmetic treatment at Le Beau Visage almost 4 years ago; his primary focus was using Botox around the corners of his eyes.',
                Story_Part_Two: 'Chad laughes, “The real reason I came to see you occurred after I saw a photograph of my eyes; I thought, ‘Wow, they are really wrinkled and it’s time.’”',
                Story_Part_Three: 'Over the years, Chad has maintained his consistency with Botox but has also ventured into the filler arena, which surprisingly, has been the most compelling treatment thus far. “I never realized how much filler could really soften my appearance and help me look more youthful.”  Chad has never regretted stepping out of his comfort zone and using Juvederm.',
                Story_Part_Four: '“Without a doubt, the Botox and Juvederm treatments are the easiest thing I do that have the biggest effect…and I recommend Le Beau Visage to everyone!”'
            };

            var fernando = {
                Name: "Fernando",
                Age: "54",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Microdermabrasion and Skin Care',
                TreatmentObjs: [microderma, skincare],
                Story_Part_One: 'Fernando was born in Columbia and has been a Dallas native for over 30 years.  His career has focused extensively on customer service and hospitality.  These were important qualities when he was deciding an aesthetic facility.He says, “I love Dr. Riehs and his entire team.They are all very well trained and professional.  Hospitality is top of the line.”',
                Story_Part_Two: 'Since beginning his microdermabrasion treatments in late 2005, Fernando has seen a tremendous change in the texture and quality of his skin.He is a big proponent of Skin Medica, particularly the TNS Essential Serum.',
                Story_Part_Three: '“My skin looks better now that I am 54 than it did when I was 40.  The products provided and every single treatment that I have had done make me feel great. I feel 40!”',
                Story_Part_Four: ''
            };

            var liz = {
                Name: "Liz",
                Age: ""
                Current: false,
                ImagePath: "/",
                TreatmentString: 'HCG & Body FX',
                TreatmentObjs: [hcg, bodyfx],
                Story_Part_One: 'Liz, like so many of the patients at Le Beau Visage, was introduced to the facility through a friend, Susan.  She attended one of the twice-a - year expos where she met Dr. Riehs.  “I was getting very close to 50 years old…and felt like a I needed a pick - me -up.”  Like many patients, Liz was searching for the “perfect” place to have treatments performed. When she met Dr.Riehs, “He immediately put me at ease and the rest is history!”',
                Story_Part_Two: 'In addition to injectable treatments, Liz engaged some body contouring services, including HCG Diet Program and Body FX.  She worked directly with the clinical nurse administrator for HCG and really valued the trust and dedication provided by the staff. After completing her HCG protocol, she lost more than 20 pounds.She has never felt better!!',
                Story_Part_Three: '“I trust the advice I get here and I’ve never been steered in the wrong direction.  Le Beau Visage makes it EASY to grow older gracefully.”',
                Story_Part_Four: ''
            };

            var peggy = {
                Name: "Peggy",
                Age: "52",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Filler-Tear Trough and Botox',
                TreatmentObjs: [teartrough, botox],
                Story_Part_One: 'Like a lot of women, Peggy does not like the idea of getting older, but realizes “you just can not alter nature.”  “I want to look the best I can for whatever age I am.”',
                Story_Part_Two: 'However, Peggy was particularly worried about getting filler,  especially since there are so many injectors in the area.Integrity is a one of the key components in finding the right cosmetic facility.',
                Story_Part_Three: 'After reviewing Dr. Riehs’ credentials and speaking with him directly, she felt comfortable moving forward with Dr.Riehs as her cosmetic injector.  “He’ll tell me what I need and also what I don’t need, which is sometimes the most important part.”',
                Story_Part_Four: 'Despite being very anxious about having filler placed under her eyes, she could not be more thrilled with the procedure.  “The tear trough really made all the difference!”'
            };

            var isabel = {
                Name: "Isabel",
                Age: "55",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Botox & Forma',
                TreatmentObjs: [botox,forma],
                Story_Part_One: 'I came to Dr. Riehs because my mom never really engaged in anything luxurious for herself; so she has made it her mission to change that mentality for both herself and her daughters. “I just wanted to take care of me!”   Different from her rearing, Isabel now focuses on her own mental and physical well being.',
                Story_Part_Two: 'Isabel has been receiving Botox in her brow furrows for several years.  Additionally, she has been using the newest laser technology to treat around her eyes—a radiofrequency procedure called Forma.  The treatments have helped increased the collagen and texture around the eye tissue.She has been overwhelmed with the treatment outcome.Quite simply, “I just love the way it makes me feel.”',
                Story_Part_Three: '',
                Story_Part_Four: ''
            };

            var brandi = {
                Name: "Brandi",
                Age: "42",
                Current: false,
                ImagePath: "/",
                TreatmentString: '(Microdermabrasion and Botox)',
                TreatmentObjs: [microderma,botox],
                Story_Part_One: '“The best way you can halt time is with reinforcements,” jokes Brandi, who has been a patient at Dr. Riehs’ for a number of years.This vibrant woman began to seek out non-surgical treatments in 2012 after feeling a little aged--“I was feeling blah, boring and just plain old.”',
                Story_Part_Two: 'Initially, Brandi started with microdermabrasion and then moved onto photofacials and Botox.  “These treatments have made a tremendous difference in my skin and how I feel about myself.”',
                Story_Part_Three: '',
                Story_Part_Four: ''
            };

            var tamme = {
                Name: "Tamme",
                Age: "51",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Fractora and Botox',
                TreatmentObjs: [fractora,botox],
                Story_Part_One: 'Tamme said that she was not happy with the appearance of her eyes and was losing hope before coming to Dr.Riehs.It is the word of mouth that introduced Tamme to Dr. Riehs’ practice.',
                Story_Part_Two: 'After initial treatments with Botox and Dysport around her eyes, she was interested in something more aggressive to treat the crêpe skin under the eyes.  She considers laser treatments but was not without concerns.',
                Story_Part_Three: 'She received the Fractora skin resurfacing and firming and was sold!   Tamme feels that the treatments have really changed her eye texture!',
                Story_Part_Four: '“I am definitely doing this again,” says Tamme.  “I have trusted Dr. Riehs for years and love my results.”'
            };

            var marlene = {
                Name: "Marlene",
                Age: "60",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Sculptra, Restylane and Botox',
                TreatmentObjs: [sculptra, restylane, botox],
                Story_Part_One: '“I have been here since the early days.”',
                Story_Part_Two: '“I originally came to the office because I wanted to look younger and fresher.  I have done a number of services from Botox to Restylane, but I think my favorite is the Sculptra.I love what it did to my cheeks and how it helped lift my face.”',
                Story_Part_Three: 'While Marlene loves the immediate effect of some of the fillers like Restylane and Perlane, she has fallen in love with the slow changes that have occurred with non-traditional fillers, Sculptra.The product has been able to reposition her fallen lateral cheeks and provide a lift throughout the entire face. “I have been going to Dr.Riehs for the past 7 years and have no intention of leaving.He has taken years off my aging face…or at least kept my face on ice,” says Marlene, with a smile.',
                Story_Part_Four: ''
            };

            var hamidan = {
                Name: "Hamidan",
                Age: "51",
                Current: false,
                ImagePath: "/",
                TreatmentString: 'Fraxel, Microdermabrasion & Botox',
                TreatmentObjs: [fraxel, microderma,botox],
                Story_Part_One: 'Meet Hamidan, a beautifully elegant 51 year old, who first presented to the facility in 2006 because she was feeling her “skin looked a little dull.”',
                Story_Part_Two: 'She began her cosmetic history with a series of microdermabrasions to improve the texture and reduce the dark pigmentation.Several years later, Hamidan, with direction from Dr.Riehs, elected to undergo melasma treatment with the Fraxel laser.The treatment modality tremendously improved her hyperpigmentation and she has been singing its praises ever since. She says, “I get this treatment twice yearly.Thanks to Dr.Riehs and his helpful staff, my skin has improved!”',
                Story_Part_Three: '',
                Story_Part_Four: ''
            };



			//#endregion

				clients.push(brad);
            clients.push(michelle);
            clients.push(iliana);
            clients.push(shirley);
            clients.push(jan);
            clients.push(debbie);
            clients.push(angela);
            clients.push(nancy);
            clients.push(tara);
            clients.push(lynn);
            clients.push(chad);
            clients.push(fernando);
            clients.push(liz);
            clients.push(peggy);
            clients.push(isabel);
            clients.push(brandi);
            clients.push(tamme);
            clients.push(marlene);
            clients.push(hamidan);

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