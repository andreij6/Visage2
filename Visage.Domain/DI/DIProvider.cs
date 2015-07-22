using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Autofac;

namespace Visage.Domain.DI
{
	public class DIProvider
	{
		public IContainer Container;

		public virtual void Run(ContainerBuilder builder, Assembly currentAssembly, IEnumerable<Assembly> allAssemblies)
		{
			if (allAssemblies != null) {
				var a = GetReferencedAssemblies();
				allAssemblies = AppDomain.CurrentDomain.GetAssemblies();
			}

			var all = allAssemblies.ToList();

			all.Add(currentAssembly);

			Register(builder, all);
		}

		protected virtual void Register(ContainerBuilder builder, IEnumerable<Assembly> allAssemblies)
		{
			var moduleTypes = allAssemblies
						.Where(a => a.FullName.StartsWith("Visage"))
						.SelectMany(a => a.GetTypes()
										.Where(t => t.IsAssignableTo<VisageModuleBase>()
													&& t.IsAbstract == false))
						.Distinct();

			RegisterModuleTypes(builder, moduleTypes);
		}

		protected virtual void RegisterModuleTypes(ContainerBuilder builder, IEnumerable<Type> moduleTypes)
		{
			var orderedModules = moduleTypes
								.Select(t => ((VisageModuleBase)Activator.CreateInstance(t)))
								.OrderBy(m => m.Order);

			foreach (var module in orderedModules) {
				builder.RegisterModule(module);
			}
		}

		protected virtual IEnumerable<Assembly> GetReferencedAssemblies()
		{
			var loadedAssemblies = AppDomain.CurrentDomain.GetAssemblies().ToList();
			var assemblyNames =
				loadedAssemblies
				    .SelectMany(x => x.GetReferencedAssemblies())
				    .Distinct()
				    .Where(y => !loadedAssemblies.Any((a) => a.FullName == y.FullName)
						&& y.FullName.StartsWith("Visage"));

			foreach (var assemblyName in assemblyNames.ToList()) {
				try {
					loadedAssemblies.Add(AppDomain.CurrentDomain.Load(assemblyName));
				}
				catch (Exception ex) {
					Trace.TraceError(ex.Message);
				}
			}

			return loadedAssemblies;
		}

	}
}
