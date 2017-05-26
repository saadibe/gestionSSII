define(
	[ "lib/backbone", "views/authentificationView", "views/homeView",
		'models/user', "views/gestionCandidatsView",
		"views/ajoutCandidatView", "views/afficherCandidatView",
		"views/modifierCandidatView", "views/inviterCandidatView",
		"views/gestionExamsView", "views/afficherExamView",
		"views/ajoutExamView", "views/gestionUsersView",
		"views/ajoutUserView", 'views/passage_exam/homeViewExam','views/passage_exam/passageExamView','views/notificationView',"views/endExamView","views/afficherUserViews","views/modifierUserView","views/modifierExamView"],
	function(Backbone, AuthentificationView, HomeView, User,
		GestionCandidats, AjoutCandidat, AfficherCandidat,
		ModifierCandidat, InviterCandidat, GestionExams, AfficherExam,
		AjoutExam, GestionUsers, AjouterUser, HomeViewExam,PassageExamView,NotificationView,EndExamView,AfficherUserViews,ModifierUserView,ModifierExam) {
	    var gestionCandidats = new GestionCandidats(), homeView = new HomeView(), authentificationView = new AuthentificationView(), ajoutCandidat = new AjoutCandidat(), afficherCandidat = new AfficherCandidat(), modifierCandidat = new ModifierCandidat(), inviterCandidat = new InviterCandidat(), gestionExams = new GestionExams(), afficherExam = new AfficherExam(), ajoutExam = new AjoutExam(), gestionUsers = new GestionUsers(), ajouterUser = new AjouterUser(),
	     homeExam = new HomeViewExam(),passageExam = new PassageExamView(),notification= new NotificationView(),endExam = new EndExamView(),afficherUser = new AfficherUserViews(),modifierUser = new ModifierUserView(),modifierExam = new ModifierExam();

	    var Router = Backbone.Router.extend({
		routes : {
		    '' : 'index',
		    'home/:userId' : 'home',
		    'gestionCandidats/:isAdmin' : 'getAllCandidats',
		    'ajoutCandidat' : 'ajoutCandidat',
		    'afficherCandidat/:candidatId' : 'afficherCandidat',
		    'modifierCandidat/:candidatId' : 'modifierCandidat',
		    'inviterCandidat/:candidatId' : 'inviterCandidat',
		    'gestionExams' : 'gestionExams',
		    'afficherExam/:examId' : 'afficherExam',
		    'modifierExam/:examId' : 'modifierExam',
		    'ajoutExam' : 'ajoutExam',
		    'gestionUsers' : 'gestionUsers',
		    'ajoutUser' : 'ajoutUser',
		    'homeExam/:examId/:candidatId' : 'homeExam',
		    'passageExam/:idExam/:candidatId':'passageExam',
		    'notification':'notification',
		    'endExam/:userId/:candidatId' :'endExam',
		    'afficherUser/:userId':'afficherUser',
		    'modifierUser/:iduser':'modifierUser'
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
		getAllCandidats : function(isAdmin) {
		    this.closeActiveView();
		    this.activeView = gestionCandidats.showMe(isAdmin);
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
		afficherExam : function(examId) {
		    this.closeActiveView();
		    this.activeView = afficherExam.showMe(examId);
		},
		ajoutExam : function() {
		    this.closeActiveView();
		    this.activeView = ajoutExam.showMe();
		},
		gestionUsers : function() {
		    this.closeActiveView();
		    this.activeView = gestionUsers.showMe();
		},
		ajoutUser : function() {
		    this.closeActiveView();
		    this.activeView = ajouterUser.showMe();
		},
		homeExam : function(examId,candidatId) {
		    this.closeActiveView();
		    this.activeView = homeExam.showMe(examId,candidatId);
		},
		passageExam: function(idExam,candidatId) {
		    this.closeActiveView();
		    this.activeView = passageExam.showMe(idExam,candidatId);
		},
		notification: function() {
		    this.closeActiveView();
		    this.activeView = notification.showMe();
		},
		endExam: function(userId,candidatId) {
		    this.closeActiveView();
		    this.activeView = endExam.showMe(userId,candidatId);
		},
		afficherUser: function(userId) {
		    this.closeActiveView();
		    this.activeView = afficherUser.showMe(userId);
		},
		modifierUser: function(iduser) {
		    this.closeActiveView();
		    this.activeView = modifierUser.showMe(iduser);
		},
		modifierExam: function(examId) {
		    this.closeActiveView();
		    this.activeView = modifierExam.showMe(examId);
		},
	    });
	    return Router;
	});
