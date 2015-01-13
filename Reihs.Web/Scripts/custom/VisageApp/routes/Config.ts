﻿module VisageApp {
	export class Config {
		constructor($routeProvider: ng.route.IRouteProvider) {
			$routeProvider.when('/',
				{
					templateUrl: '/Templates/Front/Home.html',
					controller: 'Index'
				}).when('/About',
				{
					templateUrl: '/Templates/Front/About.html',
					controller: 'About'
				}
				).when('/Contact',
				{
					templateUrl: '/Templates/Front/Contact.html',
					controller: 'Contact'
				}
				).when('/Blog',
				{
					templateUrl: '/Templates/Front/Blog/Index.html',
					controller: 'Blog'
				}
				).when('/Gallery',
				{
					templateUrl: '/Templates/Front/Gallery.html',
					controller: 'GalleryCtrl'
				}).when('/Market',
				{
					templateUrl: 'Templates/Front/Market/Index.html',
					controller: 'Market'
				}
				).when('/Market/Item/:id',
				{
					templateUrl: 'Templates/Front/Market/ProductDetail.html',
					controller: 'ProductCtrl'
				}
				).when('/Market/Cart',
				{
					templateUrl: 'Templates/Front/Market/CartDetail.html',
					controller: 'CartCtrl'
				}).when('/Market/Purchase',
				{
					templateUrl: 'Templates/Front/Market/Checkout.html',
					controller: 'OrderCtrl'
				}).when('/Market/Purchase/Success',
				{
					templateUrl: 'Templates/Front/Market/CompletedOrder.html',
					controller: 'OrderCtrl'
				}).when('/Treatments',
				{
					templateUrl: 'Templates/Front/Treatments/Index.html',
					controller: 'Treatments'
				}).when('/Resources',
				{
					templateUrl: 'Templates/Front/Resources/Index.html',
					controller: 'Resources'
				}).when('/Resources/NewPatients',
				{
					templateUrl: 'Templates/Front/Resources/NewPatients.html',
					controller: 'Resources'
				}).when('/Resources/PostCare', {
					templateUrl: 'Templates/Front/Resources/PostCare.html',
					controller: 'Resources'
				}).when('/Resources/FactSheets',
				{
					templateUrl: 'Templates/Front/Resources/FactSheets.html',
					controller: 'Resources'
				}).otherwise({ redirectTo: '/' });

			
		}
	}
} 