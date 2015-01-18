module Extensions {
	export interface IHeaderCtrlScope extends ng.IScope {
		SideOpen: boolean;
		addjQuery(): void;
		UpdateSO(): void;
		ShoppingCart: Array<CartItem>;
		HasItems: boolean;
		IsAlertVisible: boolean;
	}
}    