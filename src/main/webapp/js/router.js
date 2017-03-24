define([ "lib/backbone", "views/authentificationView", "views/homeView" ],
		function(Backbone, AuthentificationView, HomeView) {
			Router = Backbone.Router.extend({
				routes : {
					'' : 'index',
					'home' : 'home'
				},

				index : function() {
					var authentificationView = new AuthentificationView();
					authentificationView.showMe();
				},
				home : function() {
					var homeView = new HomeView();
					homeView.showMe();
				}
			});
			 return Router;
		});
