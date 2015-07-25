var VisageApp;
(function (VisageApp) {
    var TestimonialCtrl = (function () {
        function TestimonialCtrl($scope, $location, $routeParams) {
            var self = this;
            self.$scope = $scope;
            self.$location = $location;
            self.$routeParams = $routeParams;

            var clients = [];

            //#region Treatments
            var botox = new Treatment("Botox", "fj");
            var dysport = new Treatment("Dysport", "fj");
            var photo = new Treatment("Photofacial", "pm");
            var sculptra = new Treatment("Sculptra", "fj");
            var fraxel = new Treatment("Fraxel", "sr");
            var restylane = new Treatment("Restylane", "fj");
            var forma = new Treatment("Forma", "st");
            var microderma = new Treatment("Microdermabrasion", "mderm");
            var tca = new Treatment("TCA Peels", "st");
            var fractora = new Treatment("Fractora", "sr");
            var hcg = new Treatment("HCG Diet Program", "bhcg");
            var bodyfx = new Treatment("BodyFX", "bhcg");
            var teartrough = new Treatment("Filler-Tear Trough", "");
            var skincare = new Treatment("Skin Care", "");
            var filler = new Treatment("Fillers", "");
            var medica = new Treatment("Skin Medica", "");
            var micro = new Treatment("Microdermabrasion", "");

            //#endregion
            //#region Clients Setup
            var brad = new Client("Brad", 42, false, true, "Photofacials and Dysport", [photo, dysport], "Meet Brad, a 42-year-old Kentucky native, a successful entrepreneur who prides himself on “living a healthy lifestyle” that focuses on his family, a prominent career  and his own personal growth and fitness.", "Because of his tireless commitment to health and fitness, he places a lot of pride on maintaining those aspects of his life, including his outward appearance.Brad really sought services to improve some of the wrinkles around his eyes and the sunspots that had developed from chronic sun exposure.", "Brad really observed some significant changes in the pigmentation after even a single photofacial over three years ago.   “Between the consistent treatment with Botox and photofacials, my skin has really improved and, beyond my own observations, I  now get comments on the quality of my skin,” says Brad.  “Thanks for being a good friend and taking such good care of us.”", '');

            var kim = new Client("Kim", 49, false, true, "Botox and Sculptra", [botox, sculptra], "Meet Kim, a very youthful 49 year-old mother of four, who presented to Le Beau Visage Aesthetic Center in 2012 primarily concerned with wanting to improve the “11’s” between my brows.", "Kim is an accomplished woman who loves the outdoor and family activities; she wanted to find an aesthetic center that would help maintain her youthful appearance through non-surgical avenues.She has undergone a number of procedures including Botox, Scupltra,and Microdermabrasion.", "The Sculptra has really helped improve the hollowing in her mid-face and temples.  “The whole experience has been wonderful, from the atmosphere, to the awesome staff, to the results.”", "“If you are contemplating calling Le Beau – Do it!”");

            var michelle = new Client("Michelle", 46, false, true, "Botox, Fillers and Fraxel", [botox, filler, fraxel], "“I have to admit, the first appointment I made with Dr. Riehs, I was so nervous.  Never having had any major facial procedures done, I had no idea what to expect.” She states that she expected to be fussed over and was concerned that her flaws may be escalated in an attempt to have more services.But, the exact opposite happened.", "“When I met Dr. Riehs, I just felt reassured that I was in the right place. Dr. Riehs is dynamic, comforting and real.He was able to give me realistic expectation about the procedures I was considering…Im so glad I made that first appointment.”", "Since her first appointment almost five years ago, Michelle has been treated with Fraxel, Photofacials and Restylane.She is overwhelmed with her skin.  “I have the best skin I have ever had.”", "");

            var iliana = new Client("Iliana", 43, false, true, "Restylane and Botox", [restylane, botox], 'Iliana is  a 43 year old woman full of energy and charisma.  Her happy life is spent as a mother, wife and owner of the “cutest” dog in the world—Bruno(a French bulldog who really is the cutest thing in the world).', 'This lively client first received her first treatment almost nine years ago and has been a constant in the Le Beau Visage facility ever since.She has had multiple Restylane treatments in the marionette lines and folds, along with many microdermabrasion and chemical peels and continues to be ecstatic about her skin and appearance.', '“These guys are like my family. Thanks for everything!”', '');

            var shirley = new Client("Shirley", 66, false, true, "Forma Skin Tightening", [forma], "Shirley is one of the clinic sweethearts.  She is a 66 year-old and first presented to the clinic almost three years ago with the hopes of  “receiving a fresher, younger look.”  She especially hoped to find a treatment that would help provide some lifting and tightening across the jaw line and neck.", "She has received a number of treatments ranging from Botox to Restylane and most recently, a skin - tightening laser, FORMA, for her neck and jaw line.Shirley has responded remarkably to the laser and is extremely pleased with her results.", '“Dr. Riehs and his staff are always very caring.  All of my expectations were met and more.”', '');

            var jan = new Client("Jan", 66, false, true, "Skin Medica and Sculptra", [medica, sculptra], "Jan is another clinic sweetheart.  She is 66 years young and an avid golfer.  She quickly became a member of the Le Beau Visage family in summer of 2012.  “When I met with Dr.Riehs, he knew exactly what procedures would benefit me and explained each with  great detail.”  When Jan met with Dr.Riehs, she was reassured that Dr.Riehs would only recommend treatments that were right for her.For Jan, the reassurance and patience were pivotal components to the entire treatment process.  “When you have your treatments done, you are very comfortable and totally relaxed with great results.", "Additionally, Jan is a huge proponent of the medical-based Skin Medica product line, particularly the TNS Essential Serum.This daily product has made a significant impact to her skin.  “I have used the Skin Medica products from the start…what a difference especially the TNS Serum!!I never want to be without it.”", "", "");

            var debbie = new Client("Debbie", 54, false, false, 'Microdermabrasion, Botox, Restylane & Photofacials', [micro, botox, restylane, photo], 'Debbie, a young and energetic 54 year-old, first presented to Le Beau Visage Aesthetic Center almost six years ago.  Debbie was new to Frisco and need to find a physician she could trust to advise her “age gracefully” with expertise.Debbie says playfully, “I was coming up to that dreaded big birthday, had middle school girls and wanted to make sure I started taking care of me.”', 'Debbie did her homework and had reviewed the internet to ensure the credibility of Dr. Riehs and Le Beau Visage Aesthetic Center.  She ultimately decided to get a complimentary', '', '');

            var angela = new Client("Angela", 38, false, true, 'Microdermabrasion', [micro], 'Angela started her journey at Le Beau Visage Aesthetic Center with microdermabrasion. She had recently moved to the north Dallas area and was searching for a cosmetic center that could offer a wide variety of services from spa to injectable services.She was immediately drawn to the facility because of the unique team of individuals.', 'She has been receiving microdermabrasions for several years and really loves the microdermabrasion program offered at Le Beau Visage, which allows for consistent monthly treatments at a minimum cost.', '“I love this office…while the office is extremely profession, they also are like a family. I love coming for my monthly microdermabrasion.”', '');

            var nancy = new Client("Nancy", 52, false, true, 'Fillers: Sculptura and Restylane', [filler, sculptra, restylane], "Nancy said that she wasn't happy with her appearance and was losing confidence before coming to Dr. Riehs’ office.It was word of mouth that introduced Nancy to the practice. She says her daughter- in -law, Angela, who sung high praises for Dr.Riehs and the team at Le Beau Visage Aesthetic Center, told her of the practice.Nancy shared a curiosity and excitement about seeing the results of Angela’s treatments and elected to visit the practice herself.She considered the benefits and prices of multiple procedures but did not want to be “overdone.”  Ultimately, she elected to undergo treatments using injectable fillers.", 'Additionally, she recently received the Fractora Laser treatment, along with fillers (Restylane and Sculptra)  and has continued to receive filler for a few years.While it took her a few months to see the effects of her laser treatment, her filler treatments were evident immediately.Nancy said that both treatments were very effective.', '"I would definitely do it again. I feel better about myself," says Nacny. "I have more confidence and feel like my outside matches my youthful ‘inside.’"', '');

            var tara = new Client("Tara", 43, false, true, 'Botox, Fillers, TCA Peels', [botox, filler, tca], '“I have known Dr. Riehs for almost 20 years and actually helped him open his practice here in Frisco.”  She jokes, “I was here in the early days and have almost done all the procedures.”  This vibrant, sophisticated woman really desires her reflection to match her very lively and gregarious personality.', 'Tara had her first TCA peel almost ten years ago and is still having them done.  “I love my skin and the peels have been monumental in helping maintain my collagen.” Tara laughs, “And, I love having Restylane placed in my lips.  I guess my secret will be out but now but what difference that has made in giving me a little more volume in my thin upper lip.”', '“He is very successful; he is well-accomplished…just a successful physician…I can’t say enough good things about Dr. Riehs.”  Tara’s choice to continue undergoing treatments really rests on a trust and commitment to embracing herself.   “When you are ready to undergo treatment, I suggest Dr.Riehs for acommitted, experienced and most important, “natural” result.”', '');

            var lynn = new Client("Lynn", 51, false, true, 'Fractora Laser Eye Treatment, Botox & Fillers)', [fractora, botox, filler], '“I found out about Dr. Riehs from another flight attendant who always looks fresh and fabulous.”  One of Lynn’s biggest concerns was undergoing treatments and then looking “overdone and unnatural.”    Lynn began undergoing treatments at Le Beau Visage Aesthetic Center in 2011; she engaged in a wide variety of treatments ranging from Botox and Fillers, to radiofrequency technology including Fractora and Forma.', 'Aside from the expertise provided by Dr. Riehs and the staff, a large component of my satisfaction really hinges on the very high degree of professionalism and friendliness of this office.  “The moment you walk in the door, you feel welcome and confortable.  The facility has a soothing and relaxing atmosphere… a total spa experience, with a highly credible medical team.”', 'Because of the “new me, I carry a sense of confidence that did not exist before; I thank Dr. Riehs and his wonderful staff.!”', '');

            var chad = new Client("Chad", 39, false, false, 'Botox and Fillers', [botox, filler], 'Chad, a 39 year young man, and prominent attorney, received his first cosmetic treatment at Le Beau Visage almost 4 years ago; his primary focus was using Botox around the corners of his eyes.', 'Chad laughes, “The real reason I came to see you occurred after I saw a photograph of my eyes; I thought, ‘Wow, they are really wrinkled and it’s time.’”', 'Over the years, Chad has maintained his consistency with Botox but has also ventured into the filler arena, which surprisingly, has been the most compelling treatment thus far. “I never realized how much filler could really soften my appearance and help me look more youthful.”  Chad has never regretted stepping out of his comfort zone and using Juvederm.', '“Without a doubt, the Botox and Juvederm treatments are the easiest thing I do that have the biggest effect…and I recommend Le Beau Visage to everyone!”');

            var fernando = new Client("Fernando", 54, false, true, 'Microdermabrasion and Skin Care', [microderma, skincare], 'Fernando was born in Columbia and has been a Dallas native for over 30 years.  His career has focused extensively on customer service and hospitality.  These were important qualities when he was deciding an aesthetic facility.He says, “I love Dr. Riehs and his entire team.They are all very well trained and professional.  Hospitality is top of the line.”', 'Since beginning his microdermabrasion treatments in late 2005, Fernando has seen a tremendous change in the texture and quality of his skin.He is a big proponent of Skin Medica, particularly the TNS Essential Serum.', '“My skin looks better now that I am 54 than it did when I was 40.  The products provided and every single treatment that I have had done make me feel great. I feel 40!”', '');

            var liz = new Client("Liz", "", false, true, 'HCG & Body FX', [hcg, bodyfx], 'Liz, like so many of the patients at Le Beau Visage, was introduced to the facility through a friend, Susan.  She attended one of the twice-a - year expos where she met Dr. Riehs.  “I was getting very close to 50 years old…and felt like a I needed a pick - me -up.”  Like many patients, Liz was searching for the “perfect” place to have treatments performed. When she met Dr.Riehs, “He immediately put me at ease and the rest is history!”', 'In addition to injectable treatments, Liz engaged some body contouring services, including HCG Diet Program and Body FX.  She worked directly with the clinical nurse administrator for HCG and really valued the trust and dedication provided by the staff. After completing her HCG protocol, she lost more than 20 pounds.She has never felt better!!', '“I trust the advice I get here and I’ve never been steered in the wrong direction.  Le Beau Visage makes it EASY to grow older gracefully.”', '');

            var peggy = new Client("Peggy", 52, false, true, 'Filler-Tear Trough and Botox', [teartrough, botox], 'Like a lot of women, Peggy does not like the idea of getting older, but realizes “you just can not alter nature.”  “I want to look the best I can for whatever age I am.”', 'However, Peggy was particularly worried about getting filler,  especially since there are so many injectors in the area.Integrity is a one of the key components in finding the right cosmetic facility.', 'After reviewing Dr. Riehs’ credentials and speaking with him directly, she felt comfortable moving forward with Dr.Riehs as her cosmetic injector.  “He’ll tell me what I need and also what I don’t need, which is sometimes the most important part.”', 'Despite being very anxious about having filler placed under her eyes, she could not be more thrilled with the procedure.  “The tear trough really made all the difference!”');

            var isabel = new Client("Isabel", 55, false, false, 'Botox & Forma', [botox, forma], 'I came to Dr. Riehs because my mom never really engaged in anything luxurious for herself; so she has made it her mission to change that mentality for both herself and her daughters. “I just wanted to take care of me!”   Different from her rearing, Isabel now focuses on her own mental and physical well being.', 'Isabel has been receiving Botox in her brow furrows for several years.  Additionally, she has been using the newest laser technology to treat around her eyes—a radiofrequency procedure called Forma.  The treatments have helped increased the collagen and texture around the eye tissue.She has been overwhelmed with the treatment outcome.Quite simply, “I just love the way it makes me feel.”', '', '');

            var brandi = new Client("Brandi", 42, false, true, '(Microdermabrasion and Botox)', [microderma, botox], '“The best way you can halt time is with reinforcements,” jokes Brandi, who has been a patient at Dr. Riehs’ for a number of years.This vibrant woman began to seek out non-surgical treatments in 2012 after feeling a little aged--“I was feeling blah, boring and just plain old.”', 'Initially, Brandi started with microdermabrasion and then moved onto photofacials and Botox.  “These treatments have made a tremendous difference in my skin and how I feel about myself.”', '', '');

            var tamme = new Client("Tamme", 51, false, true, 'Fractora and Botox', [fractora, botox], 'Tamme said that she was not happy with the appearance of her eyes and was losing hope before coming to Dr.Riehs.It is the word of mouth that introduced Tamme to Dr. Riehs’ practice.', 'After initial treatments with Botox and Dysport around her eyes, she was interested in something more aggressive to treat the crêpe skin under the eyes.  She considers laser treatments but was not without concerns.', 'She received the Fractora skin resurfacing and firming and was sold!   Tamme feels that the treatments have really changed her eye texture!', '“I am definitely doing this again,” says Tamme.  “I have trusted Dr. Riehs for years and love my results.”');

            var marlene = new Client("Marlene", 60, false, true, 'Sculptra, Restylane and Botox', [sculptra, restylane, botox], '“I have been here since the early days.”', '“I originally came to the office because I wanted to look younger and fresher.  I have done a number of services from Botox to Restylane, but I think my favorite is the Sculptra.I love what it did to my cheeks and how it helped lift my face.”', 'While Marlene loves the immediate effect of some of the fillers like Restylane and Perlane, she has fallen in love with the slow changes that have occurred with non-traditional fillers, Sculptra.The product has been able to reposition her fallen lateral cheeks and provide a lift throughout the entire face. “I have been going to Dr.Riehs for the past 7 years and have no intention of leaving.He has taken years off my aging face…or at least kept my face on ice,” says Marlene, with a smile.', '');

            var maria = new Client("Maria", 51, false, true, 'Fraxel, Microdermabrasion & Botox', [fraxel, microderma, botox], 'Meet Maria, a beautifully elegant 51 year old, who first presented to the facility in 2006 because she was feeling her “skin looked a little dull.”', 'She began her cosmetic history with a series of microdermabrasions to improve the texture and reduce the dark pigmentation.Several years later, Maria, with direction from Dr.Riehs, elected to undergo melasma treatment with the Fraxel laser.The treatment modality tremendously improved her hyperpigmentation and she has been singing its praises ever since. She says, “I get this treatment twice yearly.Thanks to Dr.Riehs and his helpful staff, my skin has improved!”', '', '');

            lynn.HasActiveShot = false;
            lynn.HasHeadShot = false;

            debbie.HasHeadShot = false;
            debbie.HasActiveShot = false;

            marlene.HasActiveShot = false;

            shirley.HasHeadShot = false;

            clients.push(brad);
            clients.push(michelle);
            clients.push(iliana);
            clients.push(shirley);
            clients.push(jan);
            clients.push(debbie);
            clients.push(angela);
            clients.push(nancy); //once her information is filled out we'll add her back
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
            clients.push(maria);

            //#endregion
            function setCurrentClient() {
                var name = self.$routeParams["name"];

                for (var pos = 0; pos < clients.length; pos++) {
                    if (clients[pos].Name === name) {
                        self.$scope.Client = clients[pos];
                        clients[pos].Current = true;
                        self.$scope.TreatmentObjs = self.$scope.Client.TreatmentObjs;

                        //console.log(self.$scope.TreatmentObjs);
                        self.$scope.VideoTemplate = clients[pos].VideoTemplateString();
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

            function LightBoxTrigger($event) {
                self.$scope.Image = $event["currentTarget"]["src"];
                self.$scope.Showing = true;
            }

            self.$scope.Clients = clients;
            self.$scope.Trigger = LightBoxTrigger;
            self.$scope.YouTubeMenu = '';
            self.$scope.MenuTrigger = menuTrigger;
            self.init();
            setCurrentClient();
        }
        TestimonialCtrl.prototype.init = function () {
            var self = this;
        };
        return TestimonialCtrl;
    })();
    VisageApp.TestimonialCtrl = TestimonialCtrl;

    var Client = (function () {
        function Client(Name, Age, IsCurrent, HasVideo, TreatmentString, TreatmentObjs, Story_Part_One, Story_Part_Two, Story_Part_Three, Story_Part_Four) {
            this.Name = Name;
            this.Age = Age;
            this.IsCurrent = IsCurrent;
            this.HasVideo = HasVideo;
            this.TreatmentString = TreatmentString;
            this.TreatmentObjs = TreatmentObjs;
            this.Story_Part_One = Story_Part_One;
            this.Story_Part_Two = Story_Part_Two;
            this.Story_Part_Three = Story_Part_Three;
            this.Story_Part_Four = Story_Part_Four;
            this.HasHeadShot = true;
            this.HasActiveShot = true;
        }
        Object.defineProperty(Client, "TESTIMONIAL_PATH", {
            get: function () {
                return "../../../Content/Images/Testimonials/";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Client, "PATIENT_PATH", {
            get: function () {
                return "../../../Content/Images/Patients/";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Client, "VIDEO_PATH", {
            get: function () {
                return "../../../Templates/Front/About/StoryVideos/";
            },
            enumerable: true,
            configurable: true
        });

        Client.prototype.VideoTemplateString = function () {
            return Client.VIDEO_PATH + this.Name + ".html";
        };

        Client.prototype.HeadShotImage = function () {
            return Client.PATIENT_PATH + this.Name + "_Head.jpg";
        };

        Client.prototype.ActiveImage = function () {
            return Client.PATIENT_PATH + this.Name + "_Active.jpg";
        };

        Client.prototype.TestimonialPath = function () {
            return Client.TESTIMONIAL_PATH + this.Name + ".jpg";
        };
        return Client;
    })();
    VisageApp.Client = Client;

    var Treatment = (function () {
        function Treatment(Name, Code) {
            this.Name = Name;
            this.Code = Code;
        }
        return Treatment;
    })();
    VisageApp.Treatment = Treatment;

    TestimonialCtrl.$inject = ['$scope', '$location', '$routeParams'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=TestimonialCtrl.js.map
