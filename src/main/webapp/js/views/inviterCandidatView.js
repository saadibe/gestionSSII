define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/inviterCandidat.hbs', 'views/headerView',
	"models/candidat" ], function(Handlebars, Backbone,
	template_inviterCandidat, HeaderView, Candidat) {
    var singleton;
    var InviterCandidatView = Backbone.View.extend({
	tagName : "div",
	className : "inviterCandidat",
	events : {
	    "click .js-retour" : "retourGestionCandidat"

	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	retourGestionCandidat : function() {
	    Application.router.navigate('gestionCandidats', {
		trigger : true
	    });
	},

	render : function() {
	    var template = Handlebars.compile(template_inviterCandidat);
	    this.$el.html(template({
		candidatExams : this.model.toJSON()
	    }));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function(candidatId) {
	    if (!singleton) {
		singleton = new InviterCandidatView();
	    }
	    candidat = new Candidat({
		candidatId : candidatId,
		action : "invitation"
	    });
	    candidat.fetch({
		success : (function(model) {
		    singleton.model = model
		    singleton.render();
		}),
		error : (function(e) {
		    console.log('Service request failure: ' + e);
		}),
	    })
	    return singleton;
	}
    });
    return InviterCandidatView;
});
