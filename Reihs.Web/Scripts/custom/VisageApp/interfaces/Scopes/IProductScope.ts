module Extensions {
	export interface IProductScope extends ng.IScope {
		Product: Extensions.Product;

		AddToCart(product: Extensions.Product): void;
	}
} 