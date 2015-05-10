module Extensions {
	export interface ITestimonialScope extends ng.IScope {
		test: string;
		Image: any;
		Showing: boolean;
		Trigger(event: ng.IAngularEvent): void;
		TestimonialImages: any;
		VideoTemplate: string;

		TreatmentObjs: any;

		Treat
		Clients: any;
		Client: any;

		MenuTrigger(): void;
		YouTubeMenu: string;
		open: boolean;
	}
}    