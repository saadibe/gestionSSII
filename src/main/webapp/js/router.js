define(["lib/backbone","views/authentificationView"], function(Backbone,AuthentificationView) {
		Router = Backbone.Router.extend({
			routes: {
				'': 'index'
			},

			index: function(){
				var authentificationView = new AuthentificationView();
				authentificationView.showMe();
			}

		});
		new Router;
		Backbone.history.start();
	});
