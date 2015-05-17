module Extensions {
	export interface IHeaderCtrlScope extends ng.IScope {
		SideOpen: boolean;
		addjQuery(): void;
		UpdateSO(): void;
		ShoppingCart: Array<CartItem>;
		HasItems: boolean;
		IsAlertVisible: boolean;

		SearchItems: Array<any>;
		selected: any;
		Search(): void;
		SearchFail: boolean;

		Messages: Array<Extensions.TickerMessage>;

		SetNav(name: string): void;

		Navs: any;
		GoToTop(): void;

		Posts: any;
	}
}    