using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.DI;
using Autofac;
using Visage.Repository.Interfaces;
using Visage.Repository.Adapters.VideoRepo;
using Reihs.Repository.Adapters.Market.OrderRepository;
using Reihs.Repository.Adapters.Market.Product;
using Reihs.Repository.Adapters.Market;
using Visage.Repository.Adapters.Ticker;
using Visage.Repository.Adapters.User;
using Reihs.Repository.Adapters.Blog.Category;
using Visage.Repository.Adapters.Blog.Post;
using Reihs.Repository.Adapters.Blog.Tag;

namespace Visage.Repository.DI
{
	public class RepositoryModule : VisageModuleBase
	{
		public override ProjectTypes Order
		{
			get { return ProjectTypes.Repository; }
		}

		protected override void DoRegistrations()
		{
			Builder.RegisterType<VideoRepository>()
				.As<IVideoRepository>()
				.InstancePerDependency();

			Builder.RegisterType<UserRepository>()
				.As<IUserRepository>()
				.InstancePerDependency();

			Builder.RegisterType<TickerItemRepository>()
				.As<ITickerItemRepository>()
				.InstancePerDependency();

			Builder.RegisterType<ShoppingCartRepository>()
				.As<IShoppingCartRepository>()
				.InstancePerDependency();

			Builder.RegisterType<ProductRepository>()
				.As<IProductRepository>()
				.InstancePerDependency();

			Builder.RegisterType<OrderRepository>()
				.As<IOrderRepository>()
				.InstancePerDependency();

			Builder.RegisterType<CategoryRepository>()
				.As<ICategoryRepository>()
				.InstancePerDependency();

			Builder.RegisterType<PostRepository>()
				.As<IPostRepository>()
				.InstancePerDependency();

			Builder.RegisterType<TagRepository>()
				.As<ITagRepository>()
				.InstancePerDependency();
		}
	}
}
