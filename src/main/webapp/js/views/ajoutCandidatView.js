define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/ajoutCandidat.hbs', 'views/headerView',
	"models/candidat" ], function(Handlebars, Backbone,
	template_ajoutCandidat, HeaderView, Candidat) {
    var singleton;
    var AjoutCandidatView = Backbone.View.extend({
	tagName : "div",
	className : "ajoutCandidat",
	events : {
	    "click .js-ajouter" : "ajouterCandidat",
	},
	ajouterCandidat : function() {
	    var candidat = new Candidat()
	    candidat.set({
		"firstName" : "bechir2",
		"lastName" : "saadi2",
		"sexe" : "Masculin",
		"birthDate" : "1982-11-19",
		"adresse":"rue maurice berteaux",
		"email":"saadyahoo@yahoo.fr",
		"expertise":"php",
		"experience":"8",
		"cv":"none",
		"availability":"19-10-2017"
	    })
	    candidat.save();
	},
	render : function() {
	    var headerView = new HeaderView();
	    headerView.showMe();
	    var template = Handlebars.compile(template_ajoutCandidat);
	    this.$el.html(template);
	    $("#contenu").append(this.$el);
	    return this;
	},
	showMe : function() {
	    if (!singleton) {
		singleton = new AjoutCandidatView();
	    }
	    singleton.render();
	    return singleton;
	}
    });
    return AjoutCandidatView;
});
