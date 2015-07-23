using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.View;

namespace Visage.Services.Interfaces
{
	public interface ISubscriberService
	{
		void Subscribe(SubscriberModel subscriber);

	}
}
