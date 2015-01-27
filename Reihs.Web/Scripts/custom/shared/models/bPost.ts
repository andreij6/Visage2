module Extensions {

	export class bPost {
		Id: number;
		Category: bCategory;
		CategoryId: number;
		Title: string;
		SubTitle: string;
		Content: string;
		AuthorId: string;
		Rating: number;
		Likes: number;
		Clicks: number;
		Tags: Array<bTags>;
		Public: boolean;
		Created: string;
	}
} 