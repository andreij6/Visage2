namespace Visage.Repository.Migrations
{
	using System;
	using System.Data.Entity;
	using System.Data.Entity.Migrations;
	using System.Linq;

	internal sealed class Configuration : DbMigrationsConfiguration<AppDB>
	{
		public Configuration()
		{
			AutomaticMigrationsEnabled = false;
		}

		protected override void Seed(AppDB context)
		{
			Seeder.Seed(context);
		}


	}
}
