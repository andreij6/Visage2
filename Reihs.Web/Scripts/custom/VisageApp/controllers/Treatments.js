var VisageApp;
(function (VisageApp) {
    var Treatments = (function () {
        function Treatments($scope, $location) {
            var self = this;

            self.$scope = $scope;
            self.$location = $location;

            var nav = "../../../Templates/Front/Treatments/Partials/";

            var templates = [
                { Code: "", name: "Index", url: nav + "Index.html" },
                { Code: "fj", name: "FacialInject", url: nav + "FacialInjectibles.html" },
                { Code: "pm", name: "Pigment", url: nav + "Pigment.html" },
                { Code: "sr", name: "SkinResurface", url: nav + "SkinResurface.html" },
                { Code: "st", name: "SkinTight", url: nav + "SkinTight.html" },
                { Code: "bhcg", name: "Bodyshaping", url: nav + "Bodyshaping.html" },
                { Code: "mderm", name: "Microderma", url: nav + "Microderma.html" },
                { Code: "pcos", name: "PermCos", url: nav + "PermCos.html" },
                { Code: "lsrh", name: "LaserHair", url: nav + "LaserHair.html" },
                { Code: "vr", name: "VeinReduce", url: nav + "VeinReduce.html" }
            ];

            function setTemplate(name) {
                for (var temp in templates) {
                    if (templates[temp].name.toLowerCase() === name.toLowerCase()) {
                        self.$scope.template = templates[temp];
                        self.$location.search('t', templates[temp]['Code']);
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

            function findCategoryByCode(code) {
                for (var position = 0; position < templates.length; position++) {
                    var current = templates[position];

                    if (current["Code"].toLowerCase() == code.toLowerCase()) {
                        return current.name;
                    }
                }
            }

            function CheckQueryString() {
                var params = self.$location.search();

                if (params['t'] !== undefined) {
                    var param = findCategoryByCode(params['t']);

                    if (param !== undefined) {
                        setTemplate(param);
                    }
                }
            }

            self.$scope.SetTemplate = setTemplate;

            self.$scope.templates = templates;

            self.$scope.template = { name: "Index", url: nav + "Index.html" };

            self.$scope.YouTubeMenu = '';

            self.$scope.MenuTrigger = menuTrigger;

            self.init();
            CheckQueryString();
        }
        Treatments.prototype.init = function () {
            var self = this;
        };
        return Treatments;
    })();
    VisageApp.Treatments = Treatments;

    Treatments.$inject = ['$scope', '$location'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=Treatments.js.map
