module Extensions {
	export interface IGalleryScope extends ng.IScope {
		Trigger(event: ng.IAngularEvent): void;
		Showing: boolean;
		Image: string;
	}
}    