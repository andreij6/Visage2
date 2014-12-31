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
					  "~/Scripts/defaults/jquery-{version}.js"));

			bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
					  "~/Scripts/defaults/jquery.validate*"));

			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
					  "~/Scripts/defaults/modernizr-*"));

			bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
					"~/Scripts/defaults/bootstrap.js",
					"~/Scripts/defaults/respond.js"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					"~/Content/defaults/bootstrap.css",
					"~/Content/defaults/site.css"));
		}
	}
}
