using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Reihs.Web.Controllers.MVC
{
	
	public class AdminController : Controller
	{
		// GET: Admin
		//[Authorize(Roles = "Admin")]  not working for now but will fix
		[Authorize]
		public ActionResult Index()
		{
			return View();
		}
	}
}