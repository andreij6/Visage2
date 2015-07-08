module Extensions {
	export interface ISubscriberScope extends ng.IScope {
		Subscriber: Extensions.Subscriber;
		Subscribe(): void;
		FormInvalid: boolean;
		SuccessMessage: string;
	}
} 