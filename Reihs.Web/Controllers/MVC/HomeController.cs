using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace Reihs.Web.Controllers
{
	
	public class HomeController : Controller
	{
		[AllowAnonymous]
		public ActionResult Index()
		{
			string key = WebConfigurationManager.AppSettings["GoogleMapsAPI"];

			ViewBag.Gmaps = String.Format("https://maps.googleapis.com/maps/api/js?key={0}", key);
			return View();
		}

	}
}