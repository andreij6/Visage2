module Extensions {
	export interface IHeaderCtrlScope extends ng.IScope {
		SideOpen: boolean;
		addjQuery(): void;
		UpdateSO(): void;
		ShoppingCart: Array<CartItem>;
		HasItems: boolean;
		IsAlertVisible: boolean;

		SetNav(name: string): void;
		HomeActive: boolean;
		AboutActive: boolean;
		MarketActive: boolean;
		CartActive: boolean;
		TreatmentActive: boolean;
		GalleryActive: boolean;
		ResourceActive: boolean;
		ContactActive: boolean;

		Navs: any;

	}
}    