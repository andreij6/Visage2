module VisageApp {
	export class VideoCtrl {
		private $scope: Extensions.IVideoScope;

		private init(): void {
			var self = this;

			function Carousel() {
				$('#myCarousel').carousel({
					interval: 5000
				});

				$('#carousel-text').html($('#slide-content-0').html());

				//Handles the carousel thumbnails
				$('[id^=carousel-selector-]').click(function () {
					var id = this.id.substr(this.id.lastIndexOf("-") + 1);
					var newId = parseInt(id);
					$('#myCarousel').carousel(newId);
				});


				// When the carousel slides, auto update the text
				$('#myCarousel').on('slid.bs.carousel', function (e) {
					var id = $('.item.active').data('slide-number');
					$('#carousel-text').html($('#slide-content-' + id).html());
				});
			}

			Carousel();
		}

		constructor($scope: Extensions.IVideoScope) {
			var self = this;
			self.$scope = $scope;

			function menuTrigger() {
				if (!self.$scope.open)
					self.$scope.YouTubeMenu = ' dr-menu-open';
				else
					self.$scope.YouTubeMenu = '';

				self.$scope.open = !self.$scope.open;

			}

			self.$scope.YouTubeMenu = '';

			self.$scope.MenuTrigger = menuTrigger;

			self.init();

			self.$scope.Videos = [
				{
					Url: "#/Videos/1",
					Image: "../../../Images/Videos/ClientStory.jpg",
					Title: "Tesitmonial"
				},
				{
					Url: "#/Videos/1",
					Image: "../../../Images/Videos/ClientStory.jpg",
					Title: "Tesitmonial"
				}
			]
		}
	}

	VideoCtrl.$inject = ['$scope'];
} 