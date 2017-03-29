define(
	[ "lib/backbone", "views/authentificationView", "views/homeView",
		'models/user',"views/gestionCandidatsView" ],
	function(Backbone, AuthentificationView, HomeView, User,GestionCandidats) {

	    var authentificationView = new AuthentificationView(),
	    homeView = new HomeView(),
	    gestionCandidats = new GestionCandidats();

	    var Router = Backbone.Router.extend({
		routes : {
		    '' : 'index',
		    'home/:userId' : 'home',
		    'gestionCandidats' : 'getAllCandidats'
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
		},
		getAllCandidats:function(){
		    this.closeActiveView();
		    this.activeView = gestionCandidats.showMe();
		}
	    });
	    return Router;
	});
