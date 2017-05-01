define(
	[ "lib/backbone", "views/authentificationView", "views/homeView",
		'models/user', "views/gestionCandidatsView",
		"views/ajoutCandidatView", "views/afficherCandidatView",
		"views/modifierCandidatView","views/inviterCandidatView","views/gestionExamsView","views/afficherExamView" ],
	function(Backbone, AuthentificationView, HomeView, User,
		GestionCandidats, AjoutCandidat, AfficherCandidat,
		ModifierCandidat,InviterCandidat,GestionExams,AfficherExam) {
	    var gestionCandidats = new GestionCandidats(), homeView = new HomeView(), authentificationView = new AuthentificationView(), ajoutCandidat = new AjoutCandidat(), afficherCandidat = new AfficherCandidat(),
	    modifierCandidat = new ModifierCandidat(),inviterCandidat = new InviterCandidat(),gestionExams= new GestionExams(),afficherExam = new AfficherExam();
	    var Router = Backbone.Router.extend({
		routes : {
		    '' : 'index',
		    'home/:userId' : 'home',
		    'gestionCandidats' : 'getAllCandidats',
		    'ajoutCandidat' : 'ajoutCandidat',
		    'afficherCandidat/:candidatId' : 'afficherCandidat',
		    'modifierCandidat/:candidatId' : 'modifierCandidat',
		    'inviterCandidat/:candidatId' : 'inviterCandidat',
		    'gestionExams':'gestionExams',
		    'afficherExam/:examId':'afficherExam'
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
		modifierCandidat : function(candidatId) {
		    this.closeActiveView();
		    this.activeView = modifierCandidat.showMe(candidatId);
		},
		inviterCandidat : function(candidatId) {
		    this.closeActiveView();
		    this.activeView = inviterCandidat.showMe(candidatId);
		},
		gestionExams : function(candidatId) {
		    this.closeActiveView();
		    this.activeView = gestionExams.showMe(candidatId);
		},
		afficherExam:function(examId){
			this.closeActiveView();
			this.activeView = afficherExam.showMe(examId);
		},
	    });
	    return Router;
	});
