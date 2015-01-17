module Extensions {
	export interface IMarketScope extends ng.IScope {
		templates: any;
		template: any;
		Categories: any;
		SetTemplate(name: string): void;
		SeeDetail(product: string): void;
		Products: any;
		GetProducts(): void;
	}
}    