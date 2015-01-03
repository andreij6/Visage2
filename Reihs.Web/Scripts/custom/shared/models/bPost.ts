module Extensions {

	export class bPost {
		PostId: number;
		CategoryId: number;
		Title: string;
		Subtitle: string;
		Content: string;
		AuthorId: string;
		Rating: number;
		Likes: number;
		Clicks: number;
		Tags: Array<bTags>;
	}
} 