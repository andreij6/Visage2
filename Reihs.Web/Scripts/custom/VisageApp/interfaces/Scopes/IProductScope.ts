module Extensions {
	export interface IProductScope extends ng.IScope {
		Product: any;
		Products: Array<Extensions.Product>
	}
} 