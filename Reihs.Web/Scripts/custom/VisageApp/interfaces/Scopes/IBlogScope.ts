module Extensions {
	export interface IBlogScope extends ng.IScope {
		Posts: Array<Extensions.bPost>;
		Post: Extensions.bPost;
		
		GetAll(): void;
	}
}   