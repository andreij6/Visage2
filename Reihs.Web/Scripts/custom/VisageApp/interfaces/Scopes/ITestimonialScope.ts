module Extensions {
	export interface ITestimonialScope extends ng.IScope {
		test: string;
		Image: any;
		Showing: boolean;
		Trigger(event: ng.IAngularEvent): void;
		TestimonialImages: any;

		MenuTrigger(): void;
		YouTubeMenu: string;
		open: boolean;
	}
}    