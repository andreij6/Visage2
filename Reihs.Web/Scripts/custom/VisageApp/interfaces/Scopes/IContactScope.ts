module Extensions {
	export interface IContactScope extends ng.IScope {
		Message: ContactMessage;
		sendMessage(contactMessage: ContactMessage): void;
	}
}    