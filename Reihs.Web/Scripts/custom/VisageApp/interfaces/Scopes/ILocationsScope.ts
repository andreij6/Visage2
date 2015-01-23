module Extensions {
	export interface ILocationsScope extends ng.IScope {
		Locations: any;
		Active: number;
		Frisco: any;
		Dallas: any;
		LaSchl: any;
		Others: any;
		SetActive(name: string): void;
	}
}   