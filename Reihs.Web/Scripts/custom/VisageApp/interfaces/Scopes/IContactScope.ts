module Extensions {
	export interface IContactScope extends ng.IScope {
		Message: ContactMessage;
		MapUrl: string;
		sendMessage(contactMessage: ContactMessage): void;
	}
}    