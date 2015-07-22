using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Autofac;
using Module = Autofac.Module;

namespace Visage.Domain.DI
{
	public abstract class VisageModuleBase : Module
	{
		public abstract ProjectTypes Order { get; }
		protected Assembly Assembly { get; set; }
		protected ContainerBuilder Builder { get; set; }

		protected override void Load(ContainerBuilder builder)
		{
			Assembly = Assembly.GetAssembly(this.GetType());

			Builder = builder;

			DoRegistrations();
		}

		protected abstract void DoRegistrations();
	}
}
