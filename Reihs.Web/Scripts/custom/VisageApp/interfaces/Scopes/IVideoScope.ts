module Extensions {
	export interface IVideoScope extends ng.IScope {
		open: boolean;
		YouTubeMenu: string;
		MenuTrigger(): void;

		Videos: any;
		Video: any;
		template: any;
	}
}    