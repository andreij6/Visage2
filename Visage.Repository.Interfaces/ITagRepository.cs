using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Visage.Repository.Interfaces
{
	public interface ITagRepository
	{
		void Add(IEnumerable<string> enumerable, int postId);
	}
}
