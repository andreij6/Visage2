namespace Visage.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddMainCategoryColumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.mProducts", "MainCategory", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.mProducts", "MainCategory");
        }
    }
}
