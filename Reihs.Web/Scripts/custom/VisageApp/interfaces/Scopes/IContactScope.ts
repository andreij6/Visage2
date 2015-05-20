module Extensions {
	export interface IContactScope extends ng.IScope {
		Message: ContactMessage;
		MapUrl: string;
		sendMessage(): void;
		ShowImage(location: any): void;
		LocationImage: string;
		Showing: boolean;
		Locations: any;
	}
}    