using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Models
{
	public abstract class Audit
	{
		public DateTime Created { get; set; }
		public DateTime Modified { get; set; }

	}
}
