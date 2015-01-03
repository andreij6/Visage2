module Admin_Extensions {
	export interface IBlogScope extends ng.IScope {
		//Properties
		Posts: Array<Extensions.bPost>;
		Post: Extensions.bPost;

		//Functions
		GetAllPosts(): void;
		EditPosts(post: Extensions.bPost): void;
		DeletePosts(post: Extensions.bPost): void;
		Save(post: Extensions.bPost): void;
		Publish(post: Extensions.bPost): void;

	}
}    