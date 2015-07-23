using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.DI;
using Autofac;
using Reihs.Services.Blog;
using Visage.Services.Interfaces;
using Reihs.Services.Handlers.Contact;
using Visage.Services.Handlers.Subscriber;
using Visage.Services.Handlers.Videos;
using Visage.Services.Handlers.Market;
using Reihs.Services.Market;
using Visage.Services.Market;
using Visage.Services.Handlers.Ticker.Implementations;
using Visage.Services.Handlers.Blog;

namespace Visage.Services.DI
{
	public class ServiceModule : VisageModuleBase
	{
		public override ProjectTypes Order
		{
			get { return ProjectTypes.Services; }
		}

		protected override void DoRegistrations()
		{
			Builder.RegisterType<BlogService>()
				.As<IBlogService>()
				.InstancePerDependency();

			Builder.RegisterType<BlogSpotService>()
				.As<IBlogAPIService>()
				.InstancePerDependency();

			Builder.RegisterType<CategoryService>()
				.As<ICategoryService>()
				.InstancePerDependency();

			Builder.RegisterType<ContactUsService>()
				.As<IContactUsService>()
				.InstancePerDependency();

			Builder.RegisterType<ProductService>()
				.As<IProductService>()
				.InstancePerDependency();

			Builder.RegisterType<ShoppingCartService>()
				.As<IShoppingCartService>()
				.InstancePerDependency();

			Builder.RegisterType<TickerService>()
				.As<ITickerService>()
				.InstancePerDependency();

			Builder.RegisterType<SubscriberService>()
				.As<ISubscriberService>()
				.InstancePerDependency();

			Builder.RegisterType<VideoService>()
				.As<IVideoService>()
				.InstancePerDependency();
		}
	}
}
