define(
	[ "lib/backbone", "views/authentificationView", "views/homeView",
		'models/user', "views/gestionCandidatsView",
		"views/ajoutCandidatView" ], function(Backbone,
		AuthentificationView, HomeView, User, GestionCandidats,
		AjoutCandidat) {

	    var Router = Backbone.Router.extend({
		routes : {
		    '' : 'index',
		    'home/:userId' : 'home',
		    'gestionCandidats' : 'getAllCandidats',
		    'ajoutCandidat' : 'ajoutCandidat'
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
		    var authentificationView = new AuthentificationView()
		    this.closeActiveView();
		    this.activeView = authentificationView.showMe();
		},
		home : function(userId) {
		    homeView = new HomeView()
		    this.closeActiveView();
		    this.activeView = homeView.showMe(userId);
		},
		getAllCandidats : function() {
		    gestionCandidats = new GestionCandidats();
		    this.closeActiveView();
		    this.activeView = gestionCandidats.showMe();
		},
		ajoutCandidat : function() {
		    ajoutCandidat = new AjoutCandidat();
		    this.closeActiveView();
		    this.activeView = ajoutCandidat.showMe();
		},
	    });
	    return Router;
	});
