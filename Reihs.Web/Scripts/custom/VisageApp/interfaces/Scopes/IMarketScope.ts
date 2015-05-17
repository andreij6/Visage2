module Extensions {
	export interface IMarketScope extends ng.IScope {
		templates: any;
		template: any;
		Categories: any;
		Category: string;
		SeeDetail(product: string): void;
		Products: Array<any>;
		FeaturedProducts: any;
		GetProducts(): void;

		open: boolean;
		YouTubeMenu: string;

		MenuTrigger(): void;
		LoHi(): void;
		HiLo(): void;

		EveryThird(index: number): boolean;

		OrderBy: any;

		AddToCart(cmd: string, hosted_button_id: string): void;
	}
}    