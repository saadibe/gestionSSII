define(
	[ "lib/backbone", "views/authentificationView", "views/homeView",
		'models/user', "views/gestionCandidatsView",
		"views/ajoutCandidatView","views/afficherCandidatView"],
	function(Backbone, AuthentificationView, HomeView, User,
		GestionCandidats, AjoutCandidat,AfficherCandidat) {
	    var gestionCandidats = new GestionCandidats(),
	    homeView = new HomeView(),
	    authentificationView = new AuthentificationView(),
	    ajoutCandidat = new AjoutCandidat(),
	    afficherCandidat = new AfficherCandidat()
	    var Router = Backbone.Router.extend({
		routes : {
		    '' : 'index',
		    'home/:userId' : 'home',
		    'gestionCandidats' : 'getAllCandidats',
		    'ajoutCandidat' : 'ajoutCandidat',
		    'afficherCandidat/:candidatId' :'afficherCandidat'
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
		getAllCandidats : function() {
		    this.closeActiveView();
		    this.activeView = gestionCandidats.showMe();
		},
		ajoutCandidat : function() {
		    this.closeActiveView();
		    this.activeView = ajoutCandidat.showMe();
		},
		afficherCandidat : function(candidatId) {
		    this.closeActiveView();
		    this.activeView = afficherCandidat.showMe(candidatId);
		},
	    });
	    return Router;
	});
