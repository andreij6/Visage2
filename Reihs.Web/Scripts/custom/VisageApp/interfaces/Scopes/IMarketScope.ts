module Extensions {
	export interface IMarketScope extends ng.IScope {
		templates: any;
		template: any;
		Categories: any;
		Category: string;
		SeeDetail(product: string): void;
		Products: any;
		GetProducts(): void;
	}
}    