namespace Visage.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addTicker : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TickerItems",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Dates = c.String(),
                        Message = c.String(),
                        Url = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.TickerItems");
        }
    }
}
