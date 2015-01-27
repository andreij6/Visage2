namespace Visage.Repository.Migrations
{
	using Reihs.Repository;
	using System;
	using System.Data.Entity;
	using System.Data.Entity.Migrations;
	using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Reihs.Repository.AppDB>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Reihs.Repository.AppDB context)
        {
		   Seeder.Seed(context);
        }
    }
}
