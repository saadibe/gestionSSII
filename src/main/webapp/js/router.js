define(
	[ "lib/backbone", "views/authentificationView", "views/homeView",
		'models/user' ],
	function(Backbone, AuthentificationView, HomeView, User) {

	    var authentificationView = new AuthentificationView(), homeView = new HomeView();

	    var Router = Backbone.Router.extend({
		routes : {
		    '' : 'index',
		    'home/:userId' : 'home'
		},

		activeView : null,
		user : null,

		closeActiveView : function() {
		    if (this.activeView) {
			this.activeView.close ? this.activeView.close()
				: this.activeView.remove();
		    }
		},

		index : function() {
		    this.closeActiveView();
		    this.activeView = authentificationView.showMe();
		},
		home : function(userId) {
		    this.closeActiveView();
		    this.activeView = homeView.showMe(userId);
		}
	    });
	    return Router;
	});
