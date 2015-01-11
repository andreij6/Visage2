using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Reihs.Repository.Adapters.User;
using Reihs.Repository.Models;

namespace Reihs.Web.Controllers.MVC
{
	
	public class AdminController : Controller
	{
		#region Dependencies
		private readonly IUserRepository UserRepo;
		#endregion

		#region Constructors
		public AdminController()
		{
			UserRepo = new UserRepository();
		}
		#endregion

		
		public ActionResult Index()
		{
			bool IsUserAdmin = UserRepo.IsUserAdmin(User.Identity.Name);
			
			if(IsUserAdmin)
				return View();
			else
				return RedirectToAction("Index","Home");
		}
	}
}