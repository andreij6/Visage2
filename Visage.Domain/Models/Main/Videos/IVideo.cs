using System;
namespace Visage.Repository.Models.Videos
{
	public interface IVideo
	{
		int Id { get; set; }
		string Image { get; set; }
		string Name { get; set; }
		string Url { get; set; }
	}
}
