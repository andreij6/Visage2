namespace Visage.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialAfterClear : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.bCategories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        Created = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        Modified = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.bPosts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CategoryId = c.Int(nullable: false),
                        Title = c.String(),
                        Subtitle = c.String(),
                        Content = c.String(),
                        AuthorId = c.String(maxLength: 128),
                        Rating = c.Int(nullable: false),
                        Likes = c.Int(nullable: false),
                        Clicks = c.Int(nullable: false),
                        Public = c.Boolean(nullable: false),
                        Created = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        Modified = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.AuthorId)
                .ForeignKey("dbo.bCategories", t => t.CategoryId, cascadeDelete: true)
                .Index(t => t.CategoryId)
                .Index(t => t.AuthorId);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.bTags",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.mProducts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        ImagePath = c.String(),
                        Brand = c.String(),
                        UnitPrice = c.Double(nullable: false),
                        PayPalId = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.mTags",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.OrderDetails",
                c => new
                    {
                        OrderDetailId = c.Int(nullable: false, identity: true),
                        OrderId = c.Int(nullable: false),
                        Username = c.String(),
                        ProductId = c.Int(nullable: false),
                        Quantity = c.Int(nullable: false),
                        UnitPrice = c.Double(),
                    })
                .PrimaryKey(t => t.OrderDetailId);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OrderDate = c.DateTime(nullable: false),
                        UserName = c.String(),
                        FirstName = c.String(nullable: false, maxLength: 160),
                        LastName = c.String(nullable: false, maxLength: 160),
                        Address = c.String(nullable: false, maxLength: 70),
                        City = c.String(nullable: false, maxLength: 40),
                        State = c.String(nullable: false, maxLength: 40),
                        PostalCode = c.String(nullable: false, maxLength: 10),
                        Country = c.String(nullable: false, maxLength: 40),
                        Phone = c.String(maxLength: 24),
                        Email = c.String(nullable: false),
                        Total = c.Decimal(nullable: false, precision: 18, scale: 2),
                        PaymentTransactionId = c.String(),
                        HasBeenShipped = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.mPackages",
                c => new
                    {
                        PackageId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        UnitPrice = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.PackageId);
            
            CreateTable(
                "dbo.pTags",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.CartItems",
                c => new
                    {
                        ItemId = c.String(nullable: false, maxLength: 128),
                        CartId = c.String(),
                        Quantity = c.Int(nullable: false),
                        DateCreated = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ItemId)
                .ForeignKey("dbo.mProducts", t => t.ProductId, cascadeDelete: true)
                .Index(t => t.ProductId);
            
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
            
            CreateTable(
                "dbo.mTagsmProducts",
                c => new
                    {
                        mTags_Id = c.Int(nullable: false),
                        mProduct_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.mTags_Id, t.mProduct_Id })
                .ForeignKey("dbo.mTags", t => t.mTags_Id, cascadeDelete: true)
                .ForeignKey("dbo.mProducts", t => t.mProduct_Id, cascadeDelete: true)
                .Index(t => t.mTags_Id)
                .Index(t => t.mProduct_Id);
            
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
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CartItems", "ProductId", "dbo.mProducts");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.pTagsmPackages", "mPackage_PackageId", "dbo.mPackages");
            DropForeignKey("dbo.pTagsmPackages", "pTags_Id", "dbo.pTags");
            DropForeignKey("dbo.mTagsmProducts", "mProduct_Id", "dbo.mProducts");
            DropForeignKey("dbo.mTagsmProducts", "mTags_Id", "dbo.mTags");
            DropForeignKey("dbo.bTagbPosts", "bPost_Id", "dbo.bPosts");
            DropForeignKey("dbo.bTagbPosts", "bTag_Id", "dbo.bTags");
            DropForeignKey("dbo.bPosts", "CategoryId", "dbo.bCategories");
            DropForeignKey("dbo.bPosts", "AuthorId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropIndex("dbo.pTagsmPackages", new[] { "mPackage_PackageId" });
            DropIndex("dbo.pTagsmPackages", new[] { "pTags_Id" });
            DropIndex("dbo.mTagsmProducts", new[] { "mProduct_Id" });
            DropIndex("dbo.mTagsmProducts", new[] { "mTags_Id" });
            DropIndex("dbo.bTagbPosts", new[] { "bPost_Id" });
            DropIndex("dbo.bTagbPosts", new[] { "bTag_Id" });
            DropIndex("dbo.CartItems", new[] { "ProductId" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.bPosts", new[] { "AuthorId" });
            DropIndex("dbo.bPosts", new[] { "CategoryId" });
            DropTable("dbo.pTagsmPackages");
            DropTable("dbo.mTagsmProducts");
            DropTable("dbo.bTagbPosts");
            DropTable("dbo.CartItems");
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.pTags");
            DropTable("dbo.mPackages");
            DropTable("dbo.Orders");
            DropTable("dbo.OrderDetails");
            DropTable("dbo.mTags");
            DropTable("dbo.mProducts");
            DropTable("dbo.bTags");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.bPosts");
            DropTable("dbo.bCategories");
        }
    }
}
