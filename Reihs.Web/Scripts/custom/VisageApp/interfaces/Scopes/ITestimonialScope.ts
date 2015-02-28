module Extensions {
	export interface ITestimonialScope extends ng.IScope {
		test: string;
		Image: any;
		Showing: boolean;
		Trigger(event: ng.IAngularEvent): void;

		MenuTrigger(): void;
		YouTubeMenu: string;
		open: boolean;
	}
}    