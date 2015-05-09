module Admin_Extensions {
	export interface ITickerScope extends ng.IScope {
		Message: Extensions.TickerMessage;

		SaveNew(): void;
		Save(): void;
		Cancel(): void;
	}
}  