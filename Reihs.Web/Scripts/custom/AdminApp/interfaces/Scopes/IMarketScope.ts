module Admin_Extensions {
	export interface IMarketScope extends ng.IScope {
		Products: Array<Extensions.Product>;

		GetAll();
		Delete(Product: Extensions.Product);
		Update(Product: Extensions.Product);
		Save(Product: Extensions.Product);
		GetById(Id: number);
	}
}     