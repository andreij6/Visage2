module Extensions {
	export interface ITreatmentScope extends ng.IScope {
		template: any;
		templates: any;
		SetTemplate(name: string): void;
	}
}    