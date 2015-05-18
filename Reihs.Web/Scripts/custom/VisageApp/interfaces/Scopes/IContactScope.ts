module Extensions {
	export interface IContactScope extends ng.IScope {
		Message: ContactMessage;
		MapUrl: string;
		sendMessage(): void;
		ShowImage(locationCode: string): void;
		LocationImage: string;
		Showing: boolean;
	}
}    