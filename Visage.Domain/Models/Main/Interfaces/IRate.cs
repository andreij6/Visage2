using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reihs.Repository.Interfaces
{
	public interface IRate
	{
		int Rating { get; set; }

		int Likes { get; set; }

		int Clicks { get; set; }
	}
}
