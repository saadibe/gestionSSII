define([ 'lib/handlebars', 'lib/backbone', 'lib/jquery.flot',
	'lib/text!templates/afficherCandidat.hbs', 'views/headerView',
	"models/candidat" ], function(Handlebars, Backbone, JqueryFlot,
	template_afficherCandidat, HeaderView, Candidat) {
    var singleton;
    var AfficherCandidatView = Backbone.View.extend({
	tagName : "div",
	className : "afficherCandidat",
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
	    Application.router.navigate('gestionCandidats/true', {
		trigger : true
	    });
	},
	createDiagrammeCompetences : function() {
	    var data = [ [ "orienté objet ", 10 ], [ "java", 8 ],
		    [ "j2ee", 4 ], [ "sql", 13 ], [ "integration", 17 ] ];

	    $.plot("#plotarea", [ data ], {
		series : {
		    bars : {
			show : true,
			barWidth : 0.7,
			align : "center"
		    }
		},
		xaxis : {
		    mode : "categories"
		}
	    });
	},
	formatDate : function(dateString) {
	    datetab = dateString.split("/");
	    newdate = datetab[2] + "-" + datetab[1] + "-" + datetab[0]
	    return newdate
	},
	render : function() {
	    var template = Handlebars.compile(template_afficherCandidat);
	    this.$el.html(template({
		candidat : this.model.toJSON()
	    }));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function(candidatId) {
	    if (!singleton) {
		singleton = new AfficherCandidatView();
	    }
	    candidat = new Candidat({
		candidatId : candidatId,
		action : "affichage"
	    });

	    candidat.fetch({
		success : (function(model) {
		    var options = {
			year : 'numeric',
			month : 'numeric',
			day : 'numeric'
		    };
		    singleton.model = model
		    singleton.model.set("birthDate", singleton
			    .formatDate(new Date(singleton.model
				    .get("birthDate")).toLocaleString("fr-FR",
				    options)))
		    singleton.model.set("availability", singleton
			    .formatDate(new Date(singleton.model
				    .get("availability")).toLocaleString(
				    "fr-FR", options)))
		    singleton.render();
		    singleton.createDiagrammeCompetences()
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
