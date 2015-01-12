module Extensions {
	export interface IMarketScope extends ng.IScope {
		templates: any;
		template: any;
		SetTemplate(name: string): void;
		SeeDetail(product: string): void;
	}
}    