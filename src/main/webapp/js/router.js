define([ "lib/backbone", "views/authentificationView", "views/homeView" ],
		function(Backbone, AuthentificationView, HomeView) {
			var Router = Backbone.Router.extend({
				routes : {
					'' : 'index',
					'home' : 'home'
				},
				activeView : null,

				closeActiveView : function() {
					if (this.activeView) {
						this.activeView.close ? this.activeView.close()
								: this.activeView.remove();
					}
				},
				index : function() {
					this.closeActiveView();
					var authentificationView = new AuthentificationView();
					this.activeView =authentificationView.showMe();
				},
				home : function() {
					this.closeActiveView();
					var homeView = new HomeView();
					this.activeView = homeView.showMe();
				}
			});
			return Router;
		});
