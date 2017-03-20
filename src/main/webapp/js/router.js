define(["lib/backbone","views/authentificationView"], function(Backbone) {
		var AuthentificationView = require("views/authentificationView")
		Router = Backbone.Router.extend({
			routes: {
				'': 'index'
			},

			index: function(){
				AuthentificationView.showMe();
			}

		});
		new Router;
		Backbone.history.start();
	});
