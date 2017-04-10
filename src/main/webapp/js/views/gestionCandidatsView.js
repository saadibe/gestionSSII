define([ 'lib/bootbox', 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/gestionCandidats.hbs', 'views/headerView',
	"collections/candidats", "models/candidat" ], function(Bootbox,
	Handlebars, Backbone, template_gestionCandidats, HeaderView, Candidats,
	Candidat) {
    var singleton;
    var GestionCandidatsView = Backbone.View.extend({
	tagName : "div",
	className : "gestionCandidats",
	events : {

	    "click .js-ajouter-candidat" : "ajoutCandidat",
	    "click .js-supprimer-candidat" : "supprimerCandidat",
	    "click .js-afficher-candidat" : "afficherCandidat"

	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	ajoutCandidat : function() {
	    Application.router.navigate('ajoutCandidat', {
		trigger : true
	    });
	},
	afficherCandidat : function(event) {
	    var candidatData = $(event.currentTarget).data();
	    candidatId = candidatData.idcandidat;
	    Application.router.navigate('afficherCandidat/'+candidatId, {
		trigger : true
	    });
	},
	supprimerCandidat : function(event) {
	    var self = this
	    Bootbox.confirm("Voulez vous supprimer le candidat?", function(
		    result) {
		if (result) {
		    var candidatData = $(event.currentTarget).data();
		    candidat = new Candidat({
			candidatId : candidatData.idcandidat,
			action : "supprission"
		    })
		    candidat.save(candidat.toJSON(), {
			success : function(model) {
			    self.showMe();
			},
			error : function(model, response) {
			    console.log("response" + response)
			}
		    });

		} else {
		    console.log("User declined dialog");
		}
	    });
	},
	render : function() {
	    var template = Handlebars.compile(template_gestionCandidats);
	    this.$el.html(template({
		candidats : this.model.toJSON()
	    }));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
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
		    singleton.model.each(function(candidat) {
			if (candidat.get("active") == '0') {
			    candidat.set("isactive", false)
			} else {
			    candidat.set("isactive", true)
			}
		    });
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
