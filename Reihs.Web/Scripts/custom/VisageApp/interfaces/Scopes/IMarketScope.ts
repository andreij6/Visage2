module Extensions {
	export interface IMarketScope extends ng.IScope {
		templates: any;
		template: any;
		Brands: any;
		Categories: any;
		Category: string;
		SeeDetail(product: string): void;
		Products: Array<any>;
		FeaturedProducts: any;
		GetProducts(): void;
		page: number;
		BrandProducts: any;

		currentPage: number;
		setPage(pageNo: number): void;
		GoToProductPage(product: any): void;

		open: boolean;
		YouTubeMenu: string;

		MenuTrigger(): void;
		LoHi(): void;
		HiLo(): void;

		EveryThird(index: number): boolean;

		OrderBy: any;
		FilterQuery: any;
		AddToCart(cmd: string, hosted_button_id: string): void;
		PageHeading: string;
		Brand: string;
	}
}    