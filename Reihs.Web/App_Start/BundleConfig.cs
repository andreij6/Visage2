using System.Web;
using System.Web.Optimization;

namespace Reihs.Web
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
					  "~/Scripts/defaults/jquery/jquery-{version}.js"));

			bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
					  "~/Scripts/defaults/jquery/jquery.validate*"));

			bundles.Add(new ScriptBundle("~/bundles/angularcore").Include(
						"~/Scripts/defaults/angular/angular.js",
						"~/Scripts/defaults/angular/angular-route.js",
						"~/Scripts/defaults/angular/angular-sanitize.js"));

			bundles.Add(new ScriptBundle("~/bundles/angularplugins").Include(
						"~/Scripts/Plugins/textAngular/textAngular-sanitize.js",  //make a plugins bundle
						"~/Scripts/Plugins/textAngular/textAngular.js",
						"~/Scripts/Plugins/textAngular/textAngularSetup.js",
						"~/Scripts/Plugins/angular-ui/ui-bootstrap-tpls.min.js",
						"~/Scripts/Plugins/angular-ui/ui-bootstrap.min.js"));

			bundles.Add(new ScriptBundle("~/bundles/holder").Include(
						"~/Scripts/defaults/holder/holder.js"
					));

			bundles.Add(new ScriptBundle("~/bundles/AdminApp").Include(
						"~/Scripts/custom/AdminApp/controllers/LayoutCtrl.js",
						"~/Scripts/custom/AdminApp/controllers/Blogs.js",
						"~/Scripts/custom/AdminApp/controllers/MarketCtrl.js",
						"~/Scripts/custom/AdminApp/controllers/Index.js",
						"~/Scripts/custom/AdminApp/controllers/TickerCtrl.js",
						"~/Scripts/custom/AdminApp/controllers/ProductCtrl.js",
						"~/Scripts/custom/AdminApp/factories/bCategoryDataService.js",
						"~/Scripts/custom/AdminApp/factories/TickerDataService.js",
						"~/Scripts/custom/AdminApp/factories/PostDataService.js",
						"~/Scripts/custom/AdminApp/factories/mCategoryDataService.js",
						"~/Scripts/custom/AdminApp/factories/ProductDataService.js",
						"~/Scripts/custom/AdminApp/factories/OrderDataService.js",
						"~/Scripts/custom/AdminApp/routes/Config.js",
						"~/Scripts/custom/AdminApp/AdminApp.js"
					));

			bundles.Add(new ScriptBundle("~/bundles/VisageApp").Include(
						"~/Scripts/Plugins/angular-loading-bar/loading-bar.js",
						"~/Scripts/custom/VisageApp/controllers/LayoutCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/HeaderCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/Resources.js",
						"~/Scripts/custom/VisageApp/controllers/GalleryCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/Treatments.js",
						"~/Scripts/custom/VisageApp/controllers/Index.js",
						"~/Scripts/custom/VisageApp/controllers/About.js",
						"~/Scripts/custom/VisageApp/controllers/Contact.js",
						"~/Scripts/custom/VisageApp/controllers/Blog.js",
						"~/Scripts/custom/VisageApp/controllers/CartCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/OrderCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/ProductCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/Market.js",
						"~/Scripts/custom/VisageApp/controllers/TeamCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/PackageCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/LocationsCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/VideoCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/GiftCardCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/SpecialCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/SiteMapCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/TestimonialCtrl.js",
						"~/Scripts/custom/VisageApp/factories/ProductService.js",
						"~/Scripts/custom/VisageApp/factories/PostDataService.js",
						"~/Scripts/custom/VisageApp/factories/ContactAPIService.js",
						"~/Scripts/custom/VisageApp/factories/MarketService.js",
						"~/Scripts/custom/VisageApp/factories/TickerDataService.js",
						"~/Scripts/custom/VisageApp/routes/Config.js",
						"~/Scripts/custom/VisageApp/VisageApp.js"
						));

			var ScriptsPlugins = "~/Scripts/Plugins/theme/";

			bundles.Add(new ScriptBundle("~/bundle/ThemeScripts").Include(
					ScriptsPlugins + "owl.carousel.min.js",
					ScriptsPlugins + "typed.js",
					ScriptsPlugins + "wow.min.js",
					ScriptsPlugins + "jquery.sticky.js",
					ScriptsPlugins + "jquery.stellar.min.js",
					ScriptsPlugins + "jquery.easing.1.3.min.js",
					ScriptsPlugins + "jquery.flexslider-min.js",
					ScriptsPlugins + "jquery.mixitup.min.js",
					ScriptsPlugins + "jquery.countdown.js",
					ScriptsPlugins + "jquery.counterup.min.js",
					ScriptsPlugins + "jquery.magnific-popup.min.js",
					ScriptsPlugins + "custom.js"
				));

			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
					  "~/Scripts/defaults/modernizr-*"));

			bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
					"~/Scripts/defaults/bootstrap/bootstrap.js",
					"~/Scripts/defaults/respond.js"));

			bundles.Add(new ScriptBundle("~/bundles/Plugins").Include(
					"~/Scripts/Plugins/s3Slider/s3Slider.js",
					"~/Scripts/Plugins/li-scroller/li-scroller.js"));

			bundles.Add(new StyleBundle("~/bundles/Theme").Include(
					"~/Content/Front/ThirdParty/theme/flexslider.css",
					"~/Content/Front/ThirdParty/theme/animate.css",
					"~/Content/Front/ThirdParty/theme/owl.carousel.css",
					"~/Content/Front/ThirdParty/theme/owl.theme.css",
					"~/Content/Front/ThirdParty/theme/yamm.css",
					"~/Content/Front/ThirdParty/theme/magnific-popup.css",
					"~/Content/Front/ThirdParty/theme/Theme.min.css"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					"~/Content/defaults/bootstrap.css",
					"~/Content/defaults/font-awesome.min.css"
					));

			var CFTP = "~/Content/Front/ThirdParty/";
			var CFC = "~/Content/Front/Custom/";
			var MarketSection = CFC + "Market/";

			bundles.Add(new StyleBundle("~/Content/Front/css").Include(
					CFTP + "loading-bar/loading-bar.css",
					CFTP + "s3slider.css",
					CFTP + "li-scroller.css",
					CFC + "Visage.css",
					CFC + "homepage.css",
					CFC + "TopBottomNav.css",
					CFC + "MobileSideNavigation.css",
					CFC + "PatientStory.css",
					MarketSection + "MaketIndex.css",
					MarketSection + "ProductDetail.css",
					MarketSection + "ProductList.css",
					CFC + "SiteMap.css",
					CFC + "sitewide.css"));

			bundles.Add(new StyleBundle("~/Content/Admin/css").Include(
					"~/Content/Admin/ThirdParty/sb-admin-2.min.css",
					"~/Content/Admin/Custom/AdminStyles.css"
				));
		}
	}
}
