﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity;
using Visage.Repository.Models.Videos;
using Visage.Repository;
using Visage.Domain.Models.Main;
using Visage.Repository.SeederHelpers;

namespace Reihs.Repository
{
	public static class Seeder
	{
		public static void Seed(AppDB context)
		{
			SeedUserInfo(context);

			//SeedBlogInfo(context);

			SeedMarketInfo(context);
		}

		#region Market Seeders
		private static void SeedMarketInfo(AppDB context)
		{
			SeedSkinMedicaProducts(context);
			SeedClarisonic(context);
			SeedRevitaLashProducts(context);
			SeedEltaMDProducts(context);
			SeedColorscience(context);
			//SeedPackages(context);
			//SeedCartItems(context);
			//SeedOrderDetails(context);
			//SeedOrders(context);
		}


		private static void SeedOrders(AppDB context)
		{

		}

		private static void SeedOrderDetails(AppDB context)
		{

		}

		private static void SeedCartItems(AppDB context)
		{

		}

		private static void SeedSkinMedicaProducts(AppDB context)
		{
			context.mProducts.AddOrUpdate(x => x.Name,
					new mProduct {
						Name = "Lytera® Skin Brightening Complex",
						Brand = "SkinMedica",
						UnitPrice = 125.0,
						PayPalId = "C8GPXCKXK7JAA",
						ImagePath = getImgSM("LYTERA Primary 2oz"),
						Description = DescriptionsResource.SkinBrightening,
						MainCategory = Categories.Brighteners
					},
					new mProduct {
						Name = "AHA / BHA Cleanser",
						Brand = "SkinMedica",
						UnitPrice = 46.0,
						PayPalId = "9CMV7RRVWCCAA",
						ImagePath = getImgSM("AHABHA Cleanser"),
						Description = DescriptionsResource.AHABHACleanser,
						MainCategory = Categories.Cleansers
					},
					new mProduct {
						Name = "AHA/BHA Cream",
						Brand = "SkinMedica",
						UnitPrice = 42.0,
						PayPalId = "886KF2LBAZCSS",
						ImagePath = getImgSM("AHABHA Cream 2oz"),
						Description = DescriptionsResource.AHABHACream,
						MainCategory = Categories.Moisturizers
					},
					new mProduct {
						Name = "Daily Physical Defense® Sunscreen Broad Spectrum SPF 30+",
						Brand = "SkinMedica",
						UnitPrice = 46.0,
						PayPalId = "L5V73ZL3CPR4E",
						ImagePath = getImgSM("Daily-Physical-Defense SPF30 3oz"),
						Description = DescriptionsResource.DailyPhysicalDefense,
						MainCategory = Categories.Sunscreens
					},
					new mProduct {
						Name = "Dermal Repair Cream",
						Brand = "SkinMedica",
						UnitPrice = 124.0,
						PayPalId = "TMMZML8T7UH8N",
						ImagePath = getImgSM("Dermal Repair 1 7oz"),
						Description = DescriptionsResource.DermalRepairCream,
						MainCategory = Categories.Moisturizers

					},
					new mProduct {
						Name = "Environmental Defense Sunscreen™ SPF 50+ with UV ProPlex™",
						Brand = "SkinMedica",
						UnitPrice = 46.0,
						PayPalId = "XEGEL2NVP8DGC",
						ImagePath = getImgSM("Environmental Defense Sunscreen SPF50 3oz"),
						Description = DescriptionsResource.EnvironmentalDefenseSunscreen50,
						MainCategory = Categories.Sunscreens
					},
					new mProduct {
						Name = "Facial Cleanser",
						Brand = "SkinMedica",
						UnitPrice = 36.0,
						PayPalId = "38STWVQQLDJMA",
						ImagePath = getImgSM("Facial Cleanser 6oz"),
						Description = DescriptionsResource.FacialCleanser,
						MainCategory = Categories.Cleansers
					},
					new mProduct {
						Name = "Hydrating Complex",
						Brand = "SkinMedica",
						UnitPrice = 84.0,
						PayPalId = "WW2CDDQBK8QDL",
						ImagePath = getImgSM("Hydrating Complex"),
						Description = DescriptionsResource.HydratingComplex,
						MainCategory = Categories.AgeDefense
					},
					new mProduct {
						Name = "Purifying Foaming Wash",
						Brand = "SkinMedica",
						UnitPrice = 42.0,
						PayPalId = "FEE6PDEGSYD3S",
						ImagePath = getImgSM("Purifying Foaming Wash 5oz"),
						Description = DescriptionsResource.PurifyingFoamingWash,
						MainCategory = Categories.Acne
					},
					new mProduct {
						Name = "Redness Relief CalmPlex",
						Brand = "SkinMedica",
						UnitPrice = 84.0,
						PayPalId = "ZG34BPMJSGPXE",
						ImagePath = getImgSM("Redness Relief CalmPlex"),
						Description = DescriptionsResource.RednessReliefCream,
						MainCategory = Categories.Redness
					},
					new mProduct {
						Name = "Rejuvenative Moisturizer",
						Brand = "SkinMedica",
						UnitPrice = 56.0,
						PayPalId = "4VESWU62UYLCJ",
						ImagePath = getImgSM("Rejuvenative Moisturizer 2oz"),
						Description = DescriptionsResource.RejuvenateMoisturizer,
						MainCategory = Categories.Moisturizers
					},
					new mProduct {
						Name = "Rejuvenative Toner",
						Brand = "SkinMedica",
						UnitPrice = 36.0,
						PayPalId = "8FBNWSENXFLK6",
						ImagePath = getImgSM("Rejuvenative Toner 6oz"),
						Description = DescriptionsResource.RejuvenateToner,
						MainCategory = Categories.Cleansers
					},
					new mProduct {
						Name = "Retinol Complex .25",
						Brand = "SkinMedica",
						UnitPrice = 60.0,
						PayPalId = "VL7WJ37J5GMX6",
						ImagePath = getImgSM("Retinol Complex 25"),
						Description = DescriptionsResource.RetinolComplex25,
						MainCategory = Categories.Retinols
					},
					new mProduct {
						Name = "Retinol Complex 0.5",
						Brand = "SkinMedica",
						UnitPrice = 75.0,
						PayPalId = "ZWDJPNDRZZTU6",
						ImagePath = getImgSM("Retinol Complex 50"),
						Description = DescriptionsResource.RetinolComplex05,
						MainCategory = Categories.Retinols
					},
					new mProduct {
						Name = "Retinol Complex 1.0",
						Brand = "SkinMedica",
						UnitPrice = 90.0,
						PayPalId = "8HAVECYSMFUQ",
						ImagePath = getImgSM("Retinol Complex 1"),
						Description = DescriptionsResource.RetinolComplex1,
						MainCategory = Categories.Retinols
					},
					new mProduct {
						Name = "Scar Recovery Gel with Centelline™ (0.5 Oz.)",
						Brand = "SkinMedica",
						UnitPrice = 42.0,
						PayPalId = "V4LUU2VZ8GDUQ",
						ImagePath = getImgSM("Scar Recovery50oz"),
						Description = DescriptionsResource.ScarRecoveryGelwithC5oz,
						MainCategory = Categories.ScarRecovery
					},
					new mProduct {
						Name = "Scar Recovery Gel with Centelline™ (2 Oz.)",
						Brand = "SkinMedica",
						UnitPrice = 98.0,
						PayPalId = "DQ98XZFGS5RLS",
						ImagePath = getImgSM("Scar Recovery2oz"),
						Description = DescriptionsResource.ScarRecoveryGelwithC2oz,
						MainCategory = Categories.ScarRecovery
					},
					new mProduct {
						Name = "Sensitive Skin Cleanser",
						Brand = "SkinMedica",
						UnitPrice = 36.0,
						PayPalId = "39P93MBJ2BRM2",
						ImagePath = getImgSM("Sensitive Skin Cleanser 6oz"),
						Description = DescriptionsResource.SensitiveSkinCleanser,
						MainCategory = Categories.Acne
					},
					new mProduct {
						Name = "TNS Ceramide Treatment Cream™",
						Brand = "SkinMedica",
						UnitPrice = 66.0,
						PayPalId = "3XPTCKR9KR3H4",
						ImagePath = getImgSM("TNS Ceramide Treatment Cream 2oz"),
						Description = DescriptionsResource.TNSCeramideTreatmentCream,
						MainCategory = Categories.Moisturizers
					},
					new mProduct {
						Name = "TNS Essential Serum®",
						Brand = "SkinMedica",
						UnitPrice = 270.0,
						PayPalId = "JJ3KRHYFXS722",
						ImagePath = getImgSM("TNS Essential Serum 1oz"),
						Description = DescriptionsResource.TNSEssentialSerum,
						MainCategory = Categories.AgeDefense
					},
					new mProduct {
						Name = "TNS Eye Repair™",
						Brand = "SkinMedica",
						UnitPrice = 98.0,
						PayPalId = "WVB9WJB6PWYNJ",
						ImagePath = getImgSM("TNS Eye Repair"),
						Description = DescriptionsResource.TNSEyeRepair,
						MainCategory = Categories.AgeDefense
					},
					new mProduct {
						Name = "TNS Illuminating Eye Cream®",
						Brand = "SkinMedica",
						UnitPrice = 88.0,
						PayPalId = "73EDPAZLQXVNC",
						ImagePath = getImgSM("TNS IlluminatingEyeCream"),
						Description = DescriptionsResource.TNSIlluminatingEyeCream,
						MainCategory = Categories.AgeDefense
					},
					new mProduct {
						Name = "TNS Lip Plump System®",
						Brand = "SkinMedica",
						UnitPrice = 58.0,
						PayPalId = "XJJ7HWH8P6FP2",
						ImagePath = getImgSM("TNS LipPlump System 06oz"),
						Description = DescriptionsResource.TNSPlumpLipSystem,
						MainCategory = Categories.Systems
					},
					new mProduct {
						Name = "TNS Recovery Complex®",
						Brand = "SkinMedica",
						UnitPrice = 172.0,
						PayPalId = "24AWZEVSBZUVE",
						ImagePath = getImgSM("TNS Recovery Complex 063oz"),
						Description = DescriptionsResource.TNSRecovery,
						MainCategory = Categories.AgeDefense
					},
					new mProduct {
						Name = "TNS Ultimate Daily Moisturizer™ SPF 20 Sunscreen",
						Brand = "SkinMedica",
						UnitPrice = 88.0,
						PayPalId = "KEH9G9EJSAW6W",
						ImagePath = getImgSM("TNS Ultimate Daily Moisturizer SPF20 2oz"),
						MainCategory = Categories.Sunscreens
					},
					new mProduct {
						Name = "Ultra Sheer Moisturizer",
						Brand = "SkinMedica",
						UnitPrice = 56.0,
						PayPalId = "SVCA7TEVK3MCE",
						ImagePath = getImgSM("Ultra Sheer Moisturizer 2oz"),
						Description = DescriptionsResource.UltraSheer,
						MainCategory = Categories.Moisturizers
					},
					new mProduct {
						Name = "Uplifting Eye Serum™",
						Brand = "SkinMedica",
						UnitPrice = 58.0,
						PayPalId = "RNFMP5QRGXP68",
						ImagePath = getImgSM("Uplifting Eye Serum"),
						Description = DescriptionsResource.UpliftingEyeSerum,
						MainCategory = Categories.AgeDefense
					},
					new mProduct {
						Name = "Vitamin C+E Complex",
						Brand = "SkinMedica",
						UnitPrice = 98.0,
						PayPalId = "HQSJR49JEZRAY",
						ImagePath = getImgSM("VitaminCE"),
						Description = DescriptionsResource.VitaminCE,
						MainCategory = Categories.AgeDefense
					}

				);

			context.SaveChanges();
		}

		private static string getImgSM(string imageName)
		{
			return getImg(imageName, "SkinMedica", ".png");
		}

		private static string getImg(string imageName, string folder, string ext)
		{
			string path = "../../../Content/Images/Products/" + folder;

			string image = imageName.Replace(' ', '_');

			string formattedImage = String.Format("{0}/{1}{2}", path, image, ext);

			return formattedImage;
		}

		private static void SeedEltaMDProducts(AppDB context)
		{
			context.mProducts.AddOrUpdate(x => x.Name,
					new mProduct {
						Name = "Intense Moisturizer",
						Brand = "Elta MD",
						UnitPrice = 14.5,
						PayPalId = "23VUY55JF8QQU",
						ImagePath = getImgEMD("_IntenseMoisturizer"),
						Description = DescriptionsResource.IntenseMoisturizer,
						MainCategory = Categories.Moisturizers
					},
					new mProduct {
						Name = "UV Clear 46 SPF",
						Brand = "Elta MD",
						UnitPrice = 37.0,
						PayPalId = "JSRYJAWF7WTK8",
						ImagePath = getImgEMD("_UVClear46SPF"),
						Description = DescriptionsResource.UVClear46,
						MainCategory = Categories.Sunscreens
					},
					new mProduct {
						Name = "UV Daily 40 SPF",
						Brand = "Elta MD",
						UnitPrice = 30.0,
						PayPalId = "HC5XP4S54CJCL",
						ImagePath = getImgEMD("_UVDaily40SPF"),
						Description = DescriptionsResource.UVDaily40,
						MainCategory = Categories.Sunscreens
					},
					new mProduct {
						Name = "UV Physical 41",
						Brand = "Elta MD",
						UnitPrice = 36.0,
						PayPalId = "BLTSS3PDPVUQL",
						ImagePath = getImgEMD("_UVPhysical41SPF"),
						Description = DescriptionsResource.UVPhysical41,
						MainCategory = Categories.Sunscreens
					},
					new mProduct {
						Name = "UV Shield 45 SPF",
						Brand = "Elta MD",
						UnitPrice = 36.0,
						PayPalId = "CCNBJLUW2GGRS",
						ImagePath = getImgEMD("_UVShield45SPF"),
						Description = DescriptionsResource.UVShield45,
						MainCategory = Categories.Sunscreens
					}
			);

			context.SaveChanges();
		}

		private static string getImgEMD(string imageName)
		{
			return getImg("EltaMD" + imageName, "EltaMD", ".jpg");
		}

		private static void SeedRevitaLashProducts(AppDB context)
		{
			context.mProducts.AddOrUpdate(x => x.Name,
				new mProduct {
					Name = "RevitaLash Advanced Formula",
					Brand = "RevitaLash",
					UnitPrice = 120.0,
					PayPalId = "E9G58TQK3UYAY",
					ImagePath = getImgRL("RevitaLash AdvForm"),
					Description = DescriptionsResource.Revitalash1,
					MainCategory = Categories.Brow
				},
				new mProduct {
					Name = "RevitaBrow Advanced",
					Brand = "RevitaLash",
					UnitPrice = 110.0,
					PayPalId = "DQ5ZWAMXVE54S",
					ImagePath = getImgRL("RevitaLash ReVitaBrow"),
					Description = DescriptionsResource.RevitaBrow,
					MainCategory = Categories.Brow
				}
				);

			context.SaveChanges();
		}

		private static string getImgRL(string imageName)
		{
			return getImg(imageName, "RevitaLash", ".jpg");
		}

		private static void SeedColorscience(AppDB context)
		{
			context.mProducts.AddOrUpdate(x => x.Name,
				new mProduct {
					Name = "Even Up™ Clinical Pigment Perfector™ SPF 50",
					Brand = "Colorscience",
					UnitPrice = 120.0,
					PayPalId = "B68USQLA37324",
					ImagePath = getImgCS("Colorscience EvenUp"),
					Description = DescriptionsResource.EvenUp,
					MainCategory = Categories.Sunscreens
				},
				new mProduct {
					Name = "Sunforgettable® Mineral Sunscreen Brush SPF 50 for active use",
					Brand = "Colorscience",
					UnitPrice = 64.0,
					PayPalId = "DRLJNG73CTYEA",
					ImagePath = getImgCS("Colorscience Sunforgettable"),
					Description = DescriptionsResource.Sunforgettable,
					MainCategory = Categories.Sunscreens
				});

			context.SaveChanges();
		}

		private static string getImgCS(string imageName)
		{
			return getImg(imageName, "Colorscience", ".jpg");
		}

		private static void SeedClarisonic(AppDB context)
		{
			context.mProducts.AddOrUpdate(x => x.Name,
				new mProduct {
					Name = "Clarisonic Mia",
					Brand = "Clarisonic",
					UnitPrice = 125.0,
					PayPalId = "S73DYTU3DGURJ",
					ImagePath = getImgClarsonic("ClarisonicMia"),
					MainCategory = Categories.Systems
				},
				//new mProduct {
				//	Name = "Clarisonic Pro",
				//	Brand = "Clarisonic",
				//	UnitPrice = 195.0,
				//	PayPalId = "8VXQ6Q9GGKU36",
				//	ImagePath = getImgClarsonic("ClarisonicPro")
				//},
				//new mProduct {
				//	Name = "Clarisonic Pro System Kit",
				//	Brand = "Clarisonic",
				//	UnitPrice = 195.0,
				//	PayPalId = "FT6U7TE7T6LF4"
				//},
				//new mProduct {
				//	Name = "Clarisonic Pro System Plus Body",
				//	Brand = "Clarisonic",
				//	UnitPrice = 250.0,
				//	PayPalId = "Z56ZFFNW2C8RE"
				//},
			 new mProduct {
				 Name = "Gift Card",
				 UnitPrice = 0.0,
				 PayPalId = "SJ22FXJAFF9RL",
				 MainCategory = Categories.GiftCard
			 });

			context.SaveChanges();
		}

		private static string getImgClarsonic(string imageName)
		{
			return getImg(imageName, "Clarisonic", ".jpg");
		}

		private static void SeedPackageCategories(AppDB context)
		{
			context.pCategories.AddOrUpdate(p => p.Name,
					new pTags {
						Name = "Laser Vien Therapy"
					},
					new pTags {
						Name = "Schlerotherapy (Leg Veins) Injections"
					},
					new pTags {
						Name = "Laser Hair Reduction"
					},
					new pTags {
						Name = "Permanent Cosmetics"
					},
					new pTags {
						Name = "Microdermabrasion"
					},
					new pTags {
						Name = "Chemical Peels"
					},
					new pTags {
						Name = "BodyFX (Non-Invasive Fat Reduction)"
					},
					new pTags {
						Name = "HCG Diet"
					},
					new pTags {
						Name = "Mesotherapy/Lipodissolve"
					},
					new pTags {
						Name = "Fractora"
					},
					new pTags {
						Name = "Forma"
					},
					new pTags {
						Name = "Fraxel"
					},
					new pTags {
						Name = "IPL Photo Facial"
					},
					new pTags {
						Name = "Botox"
					},
					new pTags {
						Name = "Dysport"
					},
					new pTags {
						Name = "Restylane"
					},
					new pTags {
						Name = "Juvederm"
					},
					new pTags {
						Name = "Perlane"
					},
					new pTags {
						Name = "Voluma"
					},
					new pTags {
						Name = "Sculptra"
					}
				);

			context.SaveChanges();
		}

		private static void SeedPackages(AppDB context)
		{
			SeedFacialInjectibles(context);
			SeedPigmentation(context);
			SeedSkinTightening(context);
			SeedBodyShaping(context);
			SeedMicroDerm(context);
			SeedPermCosmetic(context);
			SeedLaserHairReduction(context);
			SeedVeinReduction(context);


			context.SaveChanges();
		}

		private static void SeedFacialInjectibles(AppDB context)
		{
			//36 total
			//context.Packages.AddOrUpdate(x => x.PackageId,
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },

			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },

			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },

			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },

			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },
			//    new mPackage { Name = , UnitPrice = },

			//    new mPackage { Name = , UnitPrice = },

			//    new mPackage { Name = , UnitPrice = }

			//    );
		}

		private static void SeedPigmentation(AppDB context)
		{
			context.Packages.AddOrUpdate(x => x.Name,
					new mPackage { Name = "Package of 3 Treatments-Face Area", UnitPrice = 1580.0 },
					new mPackage { Name = "Package of 3 Treatments-Neck Area", UnitPrice = 1580.0 },
					new mPackage { Name = "Package of 3 Treatments-Chest Area", UnitPrice = 1580.0 },
					new mPackage { Name = "Package of 3 Treatments-Hands Area", UnitPrice = 1580.0 },
					new mPackage { Name = "Package of 3 Treatments-Spot Treatment on Extremities", UnitPrice = 1580.0 },
					new mPackage { Name = "Package of 2 Treatments-Face Area", UnitPrice = 1790.0 },
					new mPackage { Name = "Package of 2 Treatments-Neck Area", UnitPrice = 1390.0 },
					new mPackage { Name = "Package of 2 Treatments-Chest Area•", UnitPrice = 1790.0 }
				);
		}

		private static void SeedSkinTightening(AppDB context)
		{
			context.Packages.AddOrUpdate(x => x.Name,
					new mPackage { Name = "Face (Esthetician)", UnitPrice = 500.0 },
					new mPackage { Name = "Chest (Esthetician)", UnitPrice = 500.0 },
					new mPackage { Name = "Neck (Esthetician)", UnitPrice = 400.0 },
					new mPackage { Name = "Face (Physician)", UnitPrice = 1500.0 },
					new mPackage { Name = "Chest (Physician)", UnitPrice = 1500.0 },
					new mPackage { Name = "Neck (Physician)", UnitPrice = 1200.0 },
					new mPackage { Name = "One area (8 treatments)", UnitPrice = 1600.0 }
				);
		}

		private static void SeedBodyShaping(AppDB context)
		{
			context.Packages.AddOrUpdate(x => x.Name,
					new mPackage { Name = "One area (8 Treatments)", UnitPrice = 1600.0 },

					new mPackage { Name = "21 Days Program", UnitPrice = 295.0 },
					new mPackage { Name = "42 Days Program", UnitPrice = 550.0 },
					new mPackage { Name = "4 B12 Injections", UnitPrice = 100.0 },

					new mPackage { Name = "Package of 5 Single Area", UnitPrice = 1000.0 },
					new mPackage { Name = "Package of 10 Single Area", UnitPrice = 2000.0 }
				);
		}

		private static void SeedMicroDerm(AppDB context)
		{
			context.Packages.AddOrUpdate(x => x.Name,
					new mPackage { Name = "Package of 5 Micros", UnitPrice = 500.0 },
					new mPackage { Name = "6 Mo. Membership", UnitPrice = 70.0 },
					new mPackage { Name = "12 Mo. Memebership", UnitPrice = 65.0 },

					new mPackage { Name = "Package of 3 TCA Peels", UnitPrice = 475.0 },
					new mPackage { Name = "Package of 3 Non-TCA Peels", UnitPrice = 375.0 },
					new mPackage { Name = "Package of 3 SkinMedica Vitialize Peels", UnitPrice = 375.0 },
					new mPackage { Name = "Package of 3 SkinMedicat Rejuvenize Peels", UnitPrice = 450.0 }
				);
		}

		private static void SeedPermCosmetic(AppDB context)
		{
			context.Packages.AddOrUpdate(x => x.PackageId,
					new mPackage { Name = "Eyebrows, Hairline Strokes", UnitPrice = 575.0 },
					new mPackage { Name = "Eyebrows", UnitPrice = 475.0 },
					new mPackage { Name = "Eyeliner", UnitPrice = 475.0 },
					new mPackage { Name = "Eyeliner (Upper or Lower)", UnitPrice = 350.0 },
					new mPackage { Name = "Eyes, Inner Tissue", UnitPrice = 450.0 },
					new mPackage { Name = "Lip Linner", UnitPrice = 350.0 },
					new mPackage { Name = "Lip Tatto", UnitPrice = 650.0 }
				);
		}

		private static void SeedLaserHairReduction(AppDB context)
		{
			//29
			//context.Packages.AddOrUpdate(x => x.PackageId,
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = },
			//		new mPackage { Name = , UnitPrice = }
			//	);
		}

		private static void SeedVeinReduction(AppDB context)
		{
			context.Packages.AddOrUpdate(x => x.Name,
					new mPackage { Name = "1 Treatment Area", UnitPrice = 75.0 },
					new mPackage { Name = "2 Treatment Areas", UnitPrice = 150.0 },
					new mPackage { Name = "3 Treatment Areas", UnitPrice = 225.0 },

					new mPackage { Name = "Both Legs/including Hose", UnitPrice = 350.0 }
				);
		}
		#endregion

		#region Blog Seeders
		private static void SeedBlogInfo(AppDB context)
		{
			SeedCategories(context);
			SeedTags(context);
			SeedPosts(context);
		}

		private static void SeedPosts(AppDB context)
		{
			#region Create Tags
			List<bTag> tags = context.bTags.ToList();

			List<bTag> blogOneTags = new List<bTag>();
			List<bTag> blogTwoTags = new List<bTag>();
			List<bTag> blogThreeTags = new List<bTag>();

			blogOneTags.Add(tags[1]);
			blogOneTags.Add(tags[2]);

			blogTwoTags.Add(tags[0]);

			blogThreeTags.Add(tags[1]);
			blogThreeTags.Add(tags[2]);
			blogThreeTags.Add(tags[0]);
			#endregion
			if (context.bPosts == null) {
				throw new Exception("Context is null");
			}

			context.bPosts.AddOrUpdate(x => x.Id,
			   new bPost {
				   Id = 1,
				   Title = "My first Blog Post",
				   Subtitle = "The subtitle is...",
				   Content = "All this content is amazing",
				   Rating = 10,
				   Likes = 50,
				   Clicks = 60,
				   AuthorId = context.Users.FirstOrDefault().Id,
				   Tags = blogOneTags,
				   CategoryId = 1,
				   Created = DateTime.Now.AddDays(-3),
				   Modified = DateTime.Now.AddDays(-2)
			   },
				new bPost {
					Id = 2,
					Title = "My second Blog Post",
					Subtitle = "The subtitle is that I dont know",
					Content = "All about burgers and such",
					Rating = 2,
					Likes = 25,
					Clicks = 30,
					AuthorId = context.Users.FirstOrDefault().Id,
					Tags = blogTwoTags,
					CategoryId = 2,
					Created = DateTime.Now.AddDays(-1),
					Modified = DateTime.Now.AddDays(-1)
				},
				new bPost {
					Id = 3,
					Title = "My third Blog Post",
					Subtitle = "The subtitle is a little stranger",
					Content = "All this content is amazing",
					Rating = 55,
					Likes = 5,
					Clicks = 20,
					AuthorId = context.Users.FirstOrDefault().Id,
					Tags = blogThreeTags,
					CategoryId = 1,
					Created = DateTime.Now,
					Modified = DateTime.Now
				}
			);

			context.SaveChanges();


		}

		private static void SeedTags(AppDB context)
		{
			context.bTags.AddOrUpdate(x => x.Id,
					new bTag {
						Id = 1,
						Name = "Flavor"
					},
					new bTag {
						Id = 2,
						Name = "Symbology"
					},
					new bTag {
						Id = 3,
						Name = "Arches"
					}
				);

			context.SaveChanges();
		}

		private static void SeedCategories(AppDB context)
		{
			context.bCategories.AddOrUpdate(x => x.Id,
					new bCategory {
						Id = 1,
						Name = "News",
						Description = "Visage in the news",
						Posts = Enumerable.Empty<bPost>(),
						Created = DateTime.Now.AddDays(-4),
						Modified = DateTime.Now
					},
					new bCategory {
						Id = 2,
						Name = "Deals",
						Description = "Visage Daily Deals",
						Posts = Enumerable.Empty<bPost>(),
						Created = DateTime.Now.AddDays(-3),
						Modified = DateTime.Now
					}
				);

			context.SaveChanges();
		}
		#endregion

		#region SeedUsers
		private static void SeedUserInfo(AppDB context)
		{
			SeedRoles(context);
			SeedUsers(context);
		}

		private static void SeedUsers(AppDB context)
		{
			if (!context.Roles.Any(r => r.Name == "SuperAdmin")) {
				var store = new RoleStore<IdentityRole>(context);
				var manager = new RoleManager<IdentityRole>(store);
				var role = new IdentityRole { Name = "SuperAdmin" };

				manager.Create(role);
			}

			if (!context.Users.Any(u => u.UserName == "andreij6@gmail.com")) {
				var store = new UserStore<ApplicationUser>(context);
				var manager = new UserManager<ApplicationUser>(store);
				var user = new ApplicationUser { UserName = "andreij6@gmail.com" };

				manager.Create(user, "ChangeItAsap!");
				manager.AddToRole(user.Id, "SuperAdmin");
			}

			if (!context.Users.Any(u => u.UserName == "acreativej@gmail.com")) {
				var store = new UserStore<ApplicationUser>(context);
				var manager = new UserManager<ApplicationUser>(store);
				var user = new ApplicationUser { UserName = "acreativej@gmail.com" };

				manager.Create(user, "ChangeItAsap!2");
				manager.AddToRole(user.Id, "SuperAdmin");
			}

			if (!context.Users.Any(u => u.UserName == "info@lebeauvisage.com")) {
				var store = new UserStore<ApplicationUser>(context);
				var manager = new UserManager<ApplicationUser>(store);
				var user = new ApplicationUser { UserName = "info@lebeauvisage.com" };

				manager.Create(user, "ChangeItAsap!");
				manager.AddToRole(user.Id, "SuperAdmin");
			}

			context.SaveChanges();

		}

		private static void SeedRoles(AppDB context)
		{
			context.Roles.AddOrUpdate(r => r.Name,
					new IdentityRole {
						Name = "Editor"
					},
					new IdentityRole {
						Name = "User"
					}
				);
		}

		#endregion

		#region Video Seeders
		private static void SeedVideos(AppDB context)
		{
			context.Videos.AddOrUpdate(x => x.Name,
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },

					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },

					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },

					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" },
					new Video { Name = "", Url = "//www.youtube.com/embed/" }
				);
		}
		#endregion
	}
}
