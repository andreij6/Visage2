using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Services.Handlers.Market
{
	public class PayPalService : IPayPalService
	{

		public async Task AddItemToCart(string cmd, string hosted_button_id)
		{

			using (var client = new HttpClient())
			{
				var values = new List<KeyValuePair<string, string>>();
				values.Add(new KeyValuePair<string, string>("cmd", cmd));
				values.Add(new KeyValuePair<string, string>("thing2 ", hosted_button_id));

				var content = new FormUrlEncodedContent(values);

				var response = await client.PostAsync("https://www.paypal.com/cgi-bin/webscr", content);

				var responseString = await response.Content.ReadAsStringAsync();
			}

		}
	}

	public interface IPayPalService
	{
		Task AddItemToCart(string cmd, string hosted_button_id);
	}
}
