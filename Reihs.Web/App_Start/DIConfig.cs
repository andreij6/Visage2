using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web.Compilation;
using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Visage.Domain.DI;

namespace Reihs.Web.App_Start
{
	public class DIConfig
	{
		public static void RegisterDependencies(HttpConfiguration config)
		{
			var builder = new ContainerBuilder();

			builder.RegisterControllers(typeof(MvcApplication).Assembly);

			builder.RegisterInstance(config);
			builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

			builder.RegisterModelBinders(Assembly.GetExecutingAssembly());
			builder.RegisterModelBinderProvider();

			var diProvider = new DIProvider();

			diProvider.Run(builder, Assembly.GetExecutingAssembly(), BuildManager.GetReferencedAssemblies().Cast<Assembly>());

			// Set the dependency resolver to be Autofac.
			var container = builder.Build();
			DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
			config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
		}
	}
}
