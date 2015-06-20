module VisageApp {
	export class TeamCtrl {
		private $scope: Extensions.ITeamScope;

		private init(): void {
			var self = this;
		}

		constructor($scope: Extensions.ITeamScope) {
			var self = this;
			self.$scope = $scope;

			//#region Youtube Menu
			function menuTrigger() {
				if (!self.$scope.open)
					self.$scope.YouTubeMenu = ' dr-menu-open';
				else
					self.$scope.YouTubeMenu = '';

				self.$scope.open = !self.$scope.open;

			}

			self.$scope.YouTubeMenu = '';

			self.$scope.MenuTrigger = menuTrigger;
			//#endregion

			self.init();
			self.BuildStaffers();
			//console.log(self.$scope.TeamMembers);
		}

		BuildStaffers(): any {
			var self = this;
			self.$scope.TeamMembers = [];

			var drReihs = new Staffer(
				"Physician",
				"Owner and Full-time Physician of Le Beau Visage.",
				true,
				"Jason", "Riehs", 1);

			self.$scope.TeamMembers.push(drReihs);

			var RachelO = new Staffer(
				"Esthetician",
				"After having lived in New York several times, I am now happily settled here in Texas!  As a licensed esthetician since 2009, I have had great opportunities working with many different lasers and I love to make patients feel comfortable.   It is my passion to ensure everyone gets the most out of their treatments!",
				false,
				"Rachel", "Oteo", 2);

			self.$scope.TeamMembers.push(RachelO);

			var Jennifer = new Staffer(
                "Esthetician",
				"I was born and raised in Dallas, Texas.  I graduated top of the class from Paul Mitchell The School and have been part of this amazing industry for over 10 years.  Making people look and feel better about themselves is a truly rewarding experience that never gets old.  Thank you for letting me be a daily part of your life and here’s to many more years to come!",
				false,
				"Jennifer", "Manning", 3
				);

			self.$scope.TeamMembers.push(Jennifer);

			var Arden = new Staffer(
                "Esthetician",
				'',
				false,
				'Arden', 'Alexander', 4
				);

			self.$scope.TeamMembers.push(Arden);

			var RachelG = new Staffer(
				'Patient Coordinator',
				'I’m an Orange County girl, raised in Saudi Arabia, and settled in Texas.  I am currently attending Collin County Community College and later plan to earn a Bachelor of Science in Nursing from the University of North Texas.  My patients are my favorite part of my day.  When I’m not working, I love traveling, crafting, and being outdoors.  If you ever need a sushi date or a meaty steak, I’m your girl!',
				false,
				'Rachel', 'Gonzalez', 5
				);

			self.$scope.TeamMembers.push(RachelG);

			var Jordan = new Staffer(
				"Medical Assistant",
				'Born and raised in Dallas and attended college at Howard Payne University, where I received my Bachelors Degree in 2009. I have been in the cosmetic industry for over two years. My favorite part of being involved in this field of medicine is "raising the confidence" of my patients. Favorite procedures include: sclerotherapy and Hyaluronic acid fillers. Hobbies include tennis, travel, and food.',
				false,
				'Jordan', 'Gilbreath', 6
				);

			self.$scope.TeamMembers.push(Jordan);

			var Carla = new Staffer(
				"HCG Registered Nurse",
				"Carla is a registered nurse with more than two decades experience in patient care and health education.  She graduated with her nursing degree in 1990 and recently received her RNC national certification.  Carla has a passion for helping people look and feel their best.  She has assisted Dr. Reihs for the last 4 years mentoring clients through the medically supervised HCG weight loss program at LeBeau Visage Medical Spa.  She has resided in Frisco, Texas since 1995 with her husband, where they have raised their 3 children and now enjoys their beautiful granddaughter.  Her favorite pastimes are playing the piano, golf, cooking, and adapting recipes to promote a more healthy lifestyle.",
				false,
				"Carla", "Marchand", 7
				);

			self.$scope.TeamMembers.push(Carla);

			var Suzanna = new Staffer(
				"Perm. Cosmetics",
				"",
				false,
				"Suzanna", "Karagiannias", 8
				);

			self.$scope.TeamMembers.push(Suzanna);

			var Lauren = new Staffer(
				"Adminstrator",
				"I was born and raised in Dallas, Texas.  I graduated top of the class from Paul Mitchell The School and have been part of this amazing industry for over 10 years.  Making people look and feel better about themselves is a truly rewarding experience that never gets old.  Thank you for letting me be a daily part of your life and here’s to many more years to come!",
				false,
				"Lauren", "Wheeler", 9
				);

			self.$scope.TeamMembers.push(Lauren);

			var Monet = new Staffer(
				"Adminstrator",
				"Transplanted to Texas in 1996 by my husband’s job transferred, I have two sons who are both in college. Once our nest was empty, I decided to pursue a job in the health care field.  I obtained my Medical Secretary Certificate from Collin College in 2014.  I am also a Certified Administrative Health Assistant with the National Association for Health Professionals scoring a 96% on the exam.  Dr. Riehs’ mission statement of providing an outstanding patient experience resonated with me and I strive to make that happen.  In addition to travelling with my husband, I enjoy reading, gardening, exercising and my delightful Yorkie Scooter.",
				false,
				"Monet", "Thompson", 10
				);

			self.$scope.TeamMembers.push(Monet);
				
				
		}
	}

	export class Staffer {

		constructor(
			public Position,
			public Biography,
			public ReadMore,
			public FirstName,
			public LastName,
			public OrderNumber
			) {
		}

		ImagePath(): string {
			return "../../Content/Images/Staff/" + this.LastName + ".jpg";
		}

		FullName(): string {
			return this.FirstName + " " + this.LastName;
		}

	}

	TeamCtrl.$inject = ['$scope'];
} 