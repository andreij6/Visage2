using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Visage.Domain.Models.View
{
	public class BlogViewModel
	{
		public string kind { get; set; }

		public IEnumerable<BlogItem> items { get; set; }
		
	}

	public class BlogItem {
		public string kind { get; set; }
		public string id { get; set; }
		public Blog blog { get; set; }
		public string published { get; set; }
		public string updated { get; set; }
		public string etag { get; set; }
		public string url { get; set; }
		public string selfLink { get; set; }
		public string title { get; set; }
		public string content { get; set; }
		public IEnumerable<string> labels { get; set; }

		public Author Author { get; set; }
		public Replies replies { get; set; }

		public string friendlyUrl()
		{
			var friendlyTitle = title.ToLower();
			// remove entities
			friendlyTitle = Regex.Replace(friendlyTitle, @"&\w+;", "");
			// remove anything that is not letters, numbers, dash, or space
			friendlyTitle = Regex.Replace(friendlyTitle, @"[^a-z0-9\-\s]", "");
			// replace spaces
			friendlyTitle = friendlyTitle.Replace(' ', '_');
			// collapse dashes
			friendlyTitle = Regex.Replace(friendlyTitle, @"-{2,}", "_");
			// trim excessive dashes at the beginning
			friendlyTitle = friendlyTitle.TrimStart(new[] { '_' });
			// if it's too long, clip it
			if (friendlyTitle.Length > 80)
				friendlyTitle = friendlyTitle.Substring(0, 79);
			// remove trailing dashes
			friendlyTitle = friendlyTitle.TrimEnd(new[] { '_' });

			return friendlyTitle;
		}
		//2014-03-29T02:51:00-07:00
		public string friendlyPublished()
		{
			int tIndex = published.IndexOf("T");

			var dateString = published.Substring(0, tIndex);

			DateTime date = DateTime.ParseExact(dateString, "yyyy-MM-dd", CultureInfo.InvariantCulture);

			return date.ToString("D");
		}

		public string writtenBy()
		{
			if (Author.displayName != "Unknown") {
				return "Written By: " + Author.displayName;
			}

			return "";
		}

		public string getLabels()
		{
			if (labels != null) {
				return string.Join(", ", labels);
			}
			return "";
		}
	}
	public class Blog
	{
		public string Id { get; set; }
	}

	public class Author
	{
		public string Id { get; set; }
		public string displayName { get; set; }
		public string url { get; set; }
		public Image MyProperty { get; set; }
	}

	public class Image
	{
		public string url { get; set; }
	}

	public class Replies
	{
		public string totalItems { get; set; }
		public string selfLink { get; set; }
	}



}
