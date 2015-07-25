var VisageApp;
(function (VisageApp) {
    var Resources = (function () {
        function Resources($scope) {
            var self = this;
            self.$scope = $scope;

            var nav = "../../../Templates/Front/Resources/Partials/";

            var templates = [
                { name: "Index-FactSheets", url: nav + "FactSheets/Index.html" },
                { name: "Index-PostCare", url: nav + "PostCare/Index.html" },
                { name: "IPLPost", url: nav + "PostCare/IPLPhotofacial.html" },
                { name: "LSHPost", url: nav + "PostCare/LaserHairReduction.html" },
                { name: "SclPost", url: nav + "PostCare/Sclerotherapy.html" },
                { name: "TCAPost", url: nav + "PostCare/TCAPeel.html" },
                { name: "MesoPost", url: nav + "PostCare/Mesotherapy.html" },
                { name: "Fraxel", url: nav + "FactSheets/Fraxel.html" },
                { name: "LV", url: nav + "FactSheets/LegVein.html" },
                { name: "Scl", url: nav + "FactSheets/Sclerotherapy.html" },
                { name: "IPL", url: nav + "FactSheets/IPL.html" },
                { name: "NonTCA", url: nav + "FactSheets/NonTCA.html" },
                { name: "LSH", url: nav + "FactSheets/LaserHairRemoval.html" },
                { name: "LFLV", url: nav + "FactSheets/LFLV.html" }
            ];

            function setTemplate(name) {
                for (var temp in templates) {
                    if (templates[temp].name == name) {
                        self.$scope.template = templates[temp];

                        if (self.$scope.template["name"] !== "Index-FactSheets" && self.$scope.open) {
                            menuTrigger();
                        }
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

            self.$scope.template = templates[0];

            self.$scope.SetTemplate = setTemplate;

            self.$scope.YouTubeMenu = '';

            self.$scope.MenuTrigger = menuTrigger;

            self.$scope.Pages = [];

            self.init();
        }
        Resources.prototype.init = function () {
            var self = this;
        };
        return Resources;
    })();
    VisageApp.Resources = Resources;

    Resources.$inject = ['$scope'];
})(VisageApp || (VisageApp = {}));
//# sourceMappingURL=Resources.js.map
