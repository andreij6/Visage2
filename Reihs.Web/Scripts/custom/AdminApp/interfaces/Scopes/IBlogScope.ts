module Admin_Extensions {
	export interface IBlogScope extends ng.IScope {
		//Properties
		Posts: Array<Extensions.bPost>;
		Post: Extensions.bPost;
		Category: Extensions.bCategory;
		Categories: Array<Extensions.bCategory>;
		Editing: boolean;

		//Functions
		GetAll(): void;
		Edit(post: Extensions.bPost): void;
		Delete(post: Extensions.bPost): void;
		Save(post: Extensions.bPost): void;
		Publish(post: Extensions.bPost): void;
		EditLink(post: Extensions.bPost): void;
		Print(): void;

		cGetAll(): void;
		cEdit(category: Extensions.bCategory): void;
		cUpdate(category: Extensions.bCategory): void;
		cDelete(category: Extensions.bCategory): void;
		cSave(category: Extensions.bCategory): void;

	}
}    