define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/gestionCandidats.hbs', 'views/headerView',
	"collections/candidats" ], function(Handlebars, Backbone,
	template_gestionCandidats, HeaderView, Candidats) {
    var singleton;
    var GestionCandidatsView = Backbone.View.extend({
	tagName : "div",
	className : "gestionCandidats",
	events : {

	    "click .js-ajouter-candidat" : "ajoutCandidat",

	},
	ajoutCandidat : function() {
	    	Application.router.navigate('ajoutCandidat', {trigger : true});
	},
	render : function() {
	    var headerView = new HeaderView();
	    headerView.showMe();
	    var template = Handlebars.compile(template_gestionCandidats);
	    this.$el.html(template({
		candidats : this.model.toJSON()
	    }));
	    $("#contenu").append(this.$el);
	    return this;
	},
	showMe : function() {
	    candidats = new Candidats()
	    if (!singleton) {
		singleton = new GestionCandidatsView();
	    }
	    candidats.fetch({
		success : (function(model) {
		    singleton.model = model
		    singleton.render();
		}),
		error : (function(e) {
		    console.log(' Service request failure: ' + e);
		}),
	    })
	    return singleton;
	}
    });
    return GestionCandidatsView;
});
