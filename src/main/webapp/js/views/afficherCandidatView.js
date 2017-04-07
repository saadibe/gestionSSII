define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/afficherCandidat.hbs', 'views/headerView',
	"models/candidat" ], function(Handlebars, Backbone,
	template_afficherCandidat, HeaderView, Candidat) {
    var singleton;
    var AfficherCandidatView = Backbone.View.extend({
	tagName : "div",
	className : "afficherCandidat",
	events : {
	    
	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	render : function() {
	    var headerView = new HeaderView();
	    headerView.showMe();
	    var template = Handlebars.compile(template_afficherCandidat);
	    this.$el.html(template({candidat:this.model.toJSON()}));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function(candidatId) {
	    if (!singleton) {
		singleton = new AfficherCandidatView();
	    }
	    candidat = new Candidat({candidatId:candidatId,action:"affichage"});
	    
	    candidat.fetch({
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
    return AfficherCandidatView;
});
