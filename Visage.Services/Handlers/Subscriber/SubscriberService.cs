using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using RestSharp;
using Visage.Domain.Models;
using Visage.Domain.Models.View;
using Visage.Services.Interfaces;

namespace Visage.Services.Handlers.Subscriber
{
	public class SubscriberService : ISubscriberService
	{
		protected const string BaseUrl = "https://api.constantcontact.com/v2";
		protected const string AuthToken = "615ba3db-4afa-4a0c-b9f8-854af153ac38";
		protected const string APIKey = "8vdfb2t7ghjfm3r9phhktzs5";

		public void Subscribe(SubscriberModel subscriber)
		{
			RestClient client = new RestClient(BaseUrl);

			var request = new RestRequest("/contacts", Method.POST);

			request.RequestFormat = DataFormat.Json;

			request.Parameters.Clear();
			request.AddHeader("Authorization", "Bearer " + AuthToken);
			request.AddHeader("Accept", "application/json");
			request.AddHeader("content-type", "application/json");
			
			request.AddQueryParameter("api_key", APIKey);
			request.AddQueryParameter("action_by", "ACTION_BY_OWNER");  //use this not AddParameter - cost me 3hrs
			String serialized = request.JsonSerializer.Serialize(subscriber.makeSubcriber());
			request.AddParameter("Application/Json", serialized, ParameterType.RequestBody);
			
			client.ExecuteAsync(request, response => {

			});
		}

	}
}
