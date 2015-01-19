namespace Reihs.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addPackage : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.mPackages",
                c => new
                    {
                        PackageId = c.Int(nullable: false, identity: true),
                        Type = c.String(),
                        Name = c.String(),
                        UnitPrice = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.PackageId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.mPackages");
        }
    }
}
