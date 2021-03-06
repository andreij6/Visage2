﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Domain.Models.Main
{
	public abstract class Audit
	{
		[Column(TypeName = "DateTime2")]
		public DateTime Created { get; set; }

		[Column(TypeName = "DateTime2")]
		public DateTime Modified { get; set; }

	}
}
