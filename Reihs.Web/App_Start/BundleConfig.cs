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
						"~/Scripts/custom/AdminApp/factories/bCategoryDataService.js",
						"~/Scripts/custom/AdminApp/factories/PostDataService.js",
						"~/Scripts/custom/AdminApp/factories/mCategoryDataService.js",
						"~/Scripts/custom/AdminApp/factories/ProductDataService.js",
						"~/Scripts/custom/AdminApp/factories/OrderDataService.js",
						"~/Scripts/custom/AdminApp/routes/Config.js",
						"~/Scripts/custom/AdminApp/AdminApp.js"
					));

			bundles.Add(new ScriptBundle("~/bundles/VisageApp").Include(
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
						"~/Scripts/custom/VisageApp/factories/ContactAPIService.js",
						"~/Scripts/custom/VisageApp/routes/Config.js",
						"~/Scripts/custom/VisageApp/VisageApp.js"
						));

			bundles.Add(new ScriptBundle("~/bundle/ThemeScripts").Include(
					"~/Scripts/theme/owl.carousel.min.js",
					"~/Scripts/theme/typed.js",
					"~/Scripts/theme/wow.min.js",
					"~/Scripts/theme/jquery.sticky.js",
					"~/Scripts/theme/jquery.stellar.min.js",
					"~/Scripts/theme/jquery.easing.1.3.min.js",
					"~/Scripts/theme/jquery.flexslider-min.js",
					"~/Scripts/theme/jquery.mixitup.min.js",
					"~/Scripts/theme/jquery.countdown.js",
					"~/Scripts/theme/jquery.counterup.min.js",
					"~/Scripts/theme/jquery.magnific-popup.min.js",
					"~/Scripts/theme/custom.js"
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
					"~/Content/Front/theme/flexslider.css",
					"~/Content/Front/theme/animate.css",
					"~/Content/Front/theme/owl.carousel.css",
					"~/Content/Front/theme/owl.theme.css",
					"~/Content/Front/theme/yamm.css",
					"~/Content/Front/theme/magnific-popup.css",
					"~/Content/Front/theme/SassyStyle.css"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					"~/Content/defaults/bootstrap.css",
					"~/Content/defaults/font-awesome.min.css"
					));

			bundles.Add(new StyleBundle("~/Content/Front/css").Include(
					"~/Content/Front/s3slider.css",
					"~/Content/Front/li-scroller.css",
					"~/Content/Front/Visage.css"));

			bundles.Add(new StyleBundle("~/Content/Admin/css").Include(
					"~/Content/Admin/sb-admin-2.min.css"
				));
		}
	}
}
