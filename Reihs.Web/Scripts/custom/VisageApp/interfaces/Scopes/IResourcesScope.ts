module Extensions {
	export interface IResourcesScope extends ng.IScope {
		SetTemplate(name: string): void;
		template: any;
		Pages: any;

		open: boolean;
		YouTubeMenu: string;
		MenuTrigger(): void;
	}
}   