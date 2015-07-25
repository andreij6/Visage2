//module VisageApp {
//	export class MyDirective implements ng.IDirective {
//		public link;
//		restrict = "E";
//		require = "ngModel";
//		scope = {
//			ngModel: '='
//		}
//		constructor(private myFactory: VisageApp.services.MyFactory) {
//			this.link = this.unboundLink.bind(this);
//		}
//		unboundLink(scope: IMyDirectiveScope, elem: JQuery, attributes: ng.IAttributes, ngModel: ng.INgModelController) {
//			//Now you should be able to access myFactory
//			this.myFactory.doSomething();
//			elem.bind('blur', (evt: JQueryEventObject) => {
//				//keyword this is also window here, so yeah bummer indeed
//				validate();
//			});
//			function validate() {
//				//I need to use my factory here, but I can seem to get it.
//				//this is always window and I'm kinda stuck here
//			}
//		}
//	}
//}
//# sourceMappingURL=youtubeMenu.js.map
