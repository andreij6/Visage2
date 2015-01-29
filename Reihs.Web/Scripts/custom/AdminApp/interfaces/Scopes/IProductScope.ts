module Admin_Extensions {
	export interface IProductScope extends ng.IScope {
		Product: any;
		Products: Array<Extensions.Product>;

		PageTitle: string;
		Editing: boolean;

		//Functions
		GetById(Id: number): void;
		Delete(product: Extensions.Product): void;
		Save(product: Extensions.Product): void;
		Edit(product: Extensions.Product): void;
	}
}