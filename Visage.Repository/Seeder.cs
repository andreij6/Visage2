using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository
{
	public static class Seeder
	{
		public static void Seed(ApplicationDbContext context)
		{
			//			This method will be called after migrating to the latest version.

			//You can use the DbSet<T>.AddOrUpdate() helper extension method 
			//to avoid creating duplicate seed data. E.g.

			//context.People.AddOrUpdate(
			//  p => p.FullName,
			//  new Person { FullName = "Andrew Peters" },
			//  new Person { FullName = "Brice Lambson" },
			//  new Person { FullName = "Rowan Miller" }
			//);

		}
	}
}
