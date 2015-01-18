module Extensions {
	export interface IResourcesScope extends ng.IScope {
		SetTemplate(name: string): void;
		template: any;
		Pages: any;
	}
}   