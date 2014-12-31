using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Reihs.Web.Startup))]
namespace Reihs.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
