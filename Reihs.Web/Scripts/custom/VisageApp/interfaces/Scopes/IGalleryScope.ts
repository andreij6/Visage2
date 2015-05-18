module Extensions {
	export interface IGalleryScope extends ng.IScope {
		Trigger(event: ng.IAngularEvent): void;

		Showing: boolean;
		Image: string;

		open: boolean;
		YouTubeMenu: string;
		MenuTrigger(): void;
		SideNavs: any;

		Photos: any;
		filterValue: any;
		Categories: any;
		CurrentCategory: string;

		SetFilter(Category: any): void;
		allactive: string;
	}
}    