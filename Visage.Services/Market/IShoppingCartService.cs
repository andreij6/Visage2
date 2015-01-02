using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;

namespace Visage.Services.Market
{
	public interface IShoppingCartService
	{
		bool Add(int ProductId, HttpContext currentContext);
	}
}
