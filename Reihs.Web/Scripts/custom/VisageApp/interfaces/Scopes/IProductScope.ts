module Extensions {
	export interface IProductScope extends ng.IScope {
		Product: any;
		Quantity: number;

		AddToCart(product: Extensions.Product, quantity: number): void;
	}
} 