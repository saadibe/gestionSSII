define([ 'lib/bootbox', 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/gestionCandidats.hbs', 'views/headerView',
	"collections/candidats","models/candidat" ], function(Bootbox, Handlebars, Backbone,
	template_gestionCandidats, HeaderView, Candidats,Candidat) {
    var singleton;
    var GestionCandidatsView = Backbone.View.extend({
	tagName : "div",
	className : "gestionCandidats",
	events : {

	    "click .js-ajouter-candidat" : "ajoutCandidat",
	    "click .js-supprimer-candidat" : "supprimerCandidat"

	},
	ajoutCandidat : function() {
	    Application.router.navigate('ajoutCandidat', {
		trigger : true
	    });
	},
	supprimerCandidat : function(event) {
	    var self =this
	    Bootbox.confirm("Voulez vous supprimer le candidat?", function(
		    result) {
		if (result) {
		    var candidatData = $(event.currentTarget).data();
		    candidat = new Candidat({candidatId:candidatData.idcandidat})
		    candidat.save(candidat.toJSON(),{
			success: function(model) {
			   render();
	                },
	                error: function(model, response) {
	                    console.log("response"+response)
	                }
	            });
		   
		} else {
		    console.log("User declined dialog");
		}
	    });
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
		    singleton.model.each(function(candidat) {
			if(candidat.get("active") == '0'){
			    candidat.set("isactive",false)
			}else{
			    candidat.set("isactive",true)
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
