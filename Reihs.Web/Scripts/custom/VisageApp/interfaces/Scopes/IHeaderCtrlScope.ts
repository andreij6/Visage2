module Extensions {
	export interface IHeaderCtrlScope extends ng.IScope {
		SideOpen: boolean;
		addjQuery(): void;
		ShoppingCart: Array<CartItem>;
		HasItems: boolean;
	}
}    