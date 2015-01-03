namespace Visage.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addPublicToPost : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.bPosts", "Public", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.bPosts", "Public");
        }
    }
}
