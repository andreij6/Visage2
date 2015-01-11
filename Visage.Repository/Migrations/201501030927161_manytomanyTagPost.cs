namespace Reihs.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class manytomanyTagPost : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.bTagbPosts",
                c => new
                    {
                        bTag_Id = c.Int(nullable: false),
                        bPost_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.bTag_Id, t.bPost_Id })
                .ForeignKey("dbo.bTags", t => t.bTag_Id, cascadeDelete: true)
                .ForeignKey("dbo.bPosts", t => t.bPost_Id, cascadeDelete: true)
                .Index(t => t.bTag_Id)
                .Index(t => t.bPost_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.bTagbPosts", "bPost_Id", "dbo.bPosts");
            DropForeignKey("dbo.bTagbPosts", "bTag_Id", "dbo.bTags");
            DropIndex("dbo.bTagbPosts", new[] { "bPost_Id" });
            DropIndex("dbo.bTagbPosts", new[] { "bTag_Id" });
            DropTable("dbo.bTagbPosts");
        }
    }
}
