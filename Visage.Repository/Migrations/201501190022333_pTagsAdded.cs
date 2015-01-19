namespace Reihs.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class pTagsAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.pTags",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.pTagsmPackages",
                c => new
                    {
                        pTags_Id = c.Int(nullable: false),
                        mPackage_PackageId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.pTags_Id, t.mPackage_PackageId })
                .ForeignKey("dbo.pTags", t => t.pTags_Id, cascadeDelete: true)
                .ForeignKey("dbo.mPackages", t => t.mPackage_PackageId, cascadeDelete: true)
                .Index(t => t.pTags_Id)
                .Index(t => t.mPackage_PackageId);
            
            DropColumn("dbo.mPackages", "Type");
        }
        
        public override void Down()
        {
            AddColumn("dbo.mPackages", "Type", c => c.String());
            DropForeignKey("dbo.pTagsmPackages", "mPackage_PackageId", "dbo.mPackages");
            DropForeignKey("dbo.pTagsmPackages", "pTags_Id", "dbo.pTags");
            DropIndex("dbo.pTagsmPackages", new[] { "mPackage_PackageId" });
            DropIndex("dbo.pTagsmPackages", new[] { "pTags_Id" });
            DropTable("dbo.pTagsmPackages");
            DropTable("dbo.pTags");
        }
    }
}
