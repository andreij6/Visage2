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

			bundles.Add(new ScriptBundle("~/bundles/holder").Include(
						"~/Scripts/defaults/holder/holder.js"
					));

			bundles.Add(new ScriptBundle("~/bundles/AdminApp").Include(
						"~/Scripts/custom/AdminApp/controllers/LayoutCtrl.js",
						"~/Scripts/custom/AdminApp/controllers/Index.js",
						"~/Scripts/custom/AdminApp/routes/Config.js",
						"~/Scripts/custom/AdminApp/AdminApp.js"
					));

			bundles.Add(new ScriptBundle("~/bundles/VisageApp").Include(
						"~/Scripts/custom/VisageApp/controllers/LayoutCtrl.js",
						"~/Scripts/custom/VisageApp/controllers/Index.js",
						"~/Scripts/custom/VisageApp/controllers/About.js",
						"~/Scripts/custom/VisageApp/controllers/Contact.js",
						"~/Scripts/custom/VisageApp/controllers/Blog.js",
						"~/Scripts/custom/VisageApp/controllers/Market.js",
						"~/Scripts/custom/VisageApp/routes/Config.js",
						"~/Scripts/custom/VisageApp/VisageApp.js"
						));

			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
					  "~/Scripts/defaults/modernizr-*"));

			bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
					"~/Scripts/defaults/bootstrap/bootstrap.js",
					"~/Scripts/defaults/respond.js"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					"~/Content/defaults/bootstrap.css"));

			bundles.Add(new StyleBundle("~/Content/Front/css").Include(
					"~/Content/Front/carousel.css",
					"~/Content/Front/blog.min.css",
					"~/Content/Front/store.min.css",
					"~/Content/Front/Site.css"));
		}
	}
}
