using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Services.Models;

namespace Visage.Services.Handlers.Subscriber
{
	public interface ISubscriberService
	{
		void Subscribe(SubscriberModel subscriber);
	}
}
