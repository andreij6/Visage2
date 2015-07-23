using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visage.Domain.Models.Main;
using Visage.Domain.Models.View;

namespace Visage.Repository.Interfaces
{
	public interface IPostRepository
	{
		bool Add(bPost value);

		bPost GetById(int id);

		IEnumerable<bPost> GetAll();

		bool Update(int id, bPost value);

		bool Delete(int id);

		int Add(NewPostModel value, bCategory category);
	}
}
