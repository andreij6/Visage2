var VisageApp;
(function (VisageApp) {
    var VideoCtrl = (function () {
        function VideoCtrl($scope, $routeParams) {
            var self = this;
            self.$scope = $scope;

            function menuTrigger() {
                if (!self.$scope.open)
                    self.$scope.YouTubeMenu = ' dr-menu-open';
                else
                    self.$scope.YouTubeMenu = '';

                self.$scope.open = !self.$scope.open;
            }

            function AssignVideo(id) {
                for (var x in self.$scope.Videos) {
                    if (self.$scope.Videos[x].Id == id) {
                        self.$scope.Video = self.$scope.Videos[x];
                        self.$scope.template = self.$scope.Video.Template;
                    }
                }
            }

            self.$scope.YouTubeMenu = '';

            self.$scope.MenuTrigger = menuTrigger;
            var nav = '../../../Templates/Front/Videos/Partials/';
            self.$scope.Videos = [
                { Id: 1, Title: 'Botox & Restylane Patient Testimonial', Template: nav + 'BotoxTestimonial.html' },
                { Id: 2, Title: 'Testimonial: Botox, Juvederm, BodyFX', Template: nav + 'Testimonialbjb.html' },
                { Id: 3, Title: 'Intense Pulsed Light (IPL)', Template: nav + 'IPL.html' },
                { Id: 4, Title: 'Botox Demo', Template: nav + 'BotoxDemo.html' },
                { Id: 5, Title: 'BodyFX', Template: nav + 'BodyFX.html' },
                { Id: 6, Title: 'Skin Medica', Template: nav + 'SkinMedica.html' },
                { Id: 7, Title: 'TSN Essential', Template: nav + 'TSN.html' },
                { Id: 8, Title: 'Services and Products Overview', Template: nav + 'Overview.html' },
                { Id: 9, Title: 'Botox', Template: nav + 'Botox.html' },
                { Id: 10, Title: 'Sclerotherapy', Template: nav + 'Sclerotherapy.html' },
                { Id: 11, Title: 'Nancy - Customer Testimonial', Template: nav + 'NancyTestimonial.html' },
                { Id: 12, Title: 'Lynn - Customer Testimonial', Template: nav + 'LynnTestimonial.html' },
                { Id: 13, Title: 'Kim - Customer Testimonial', Template: nav + 'KimTestimonial.html' },
                { Id: 14, Title: 'Skin Medica 2', Template: nav + 'SkinMedica_2.html' }
            ];
            self.$scope.Video = {};

            if ($routeParams['Id'] !== undefined)
                AssignVideo($routeParams['Id']);

            self.init();
            //console.log('in constructor');
        }
        VideoCtrl.prototype.init = function () {
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
        };
        return VideoCtrl;
    })();
    VisageApp.VideoCtrl = VideoCtrl;

    VideoCtrl.$inject = ['$scope', '$routeParams'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=VideoCtrl.js.map
