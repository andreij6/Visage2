using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;
using Visage.Domain.Models.View;

namespace Visage.Services.Interfaces
{
	public interface IBlogService
	{
		bool Delete(int PostId);

		bPost GetById(int PostId);

		IEnumerable<PostModel> GetAll();

		bool Update(int PostId, bPost value);

		bool Post(NewPostModel value);
	}
}
