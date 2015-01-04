module Extensions {

	export class bPost {
		Id: number;
		CategoryId: number;
		Title: string;
		Subtitle: string;
		Content: string;
		AuthorId: string;
		Rating: number;
		Likes: number;
		Clicks: number;
		Tags: Array<bTags>;
		Public: boolean;
	}
} 