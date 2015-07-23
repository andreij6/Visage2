using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Domain.Models.Main
{
	public class CartItem
	{
		[Key]
		public string ItemId { get; set; }

		public string CartId { get; set; }

		public int Quantity { get; set; }

		[Column(TypeName = "DateTime2")]
		public DateTime DateCreated { get; set; }

		public int ProductId { get; set; }

		public virtual mProduct Product { get; set; }
	}
}
