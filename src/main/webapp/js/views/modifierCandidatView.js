define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/modifierCandidat.hbs', 'views/headerView',
	"models/candidat" ], function(Handlebars, Backbone,
	template_modifierCandidat, HeaderView, Candidat) {
    var singleton;
    var ModifierCandidatView = Backbone.View.extend({
	tagName : "div",
	className : "modifierCandidat",
	events : {
	    "click .js-retour" : "retourGestionCandidat",
	    "click .js-modifier" : "modifierCandidat"

	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	modifierCandidat : function() {
	    this.hideErrors();
	    var self = this;
	    var candidat = new Candidat({
		action : "ajout"
	    })
	    var jsonCandidat = {
		idCandidat : $("input[name=idCandidat]").val(),
		firstName : $("input[name=firstName]").val(),
		lastName : $("input[name=lastName]").val(),
		sexe : $("select[name=sexe]").val(),
		birthDate : $("input[name=birthDate]").val(),
		adresse : $("input[name=adresse]").val(),
		email : $("input[name=email]").val(),
		expertise : $("input[name=expertise]").val(),
		experience : $("input[name=experience]").val(),
		cv : $("input[name=cv]").val(),
		availability : $("input[name=availability]").val(),
		active : "1"
	    }

	    candidat.save(jsonCandidat, {
		success : function(model) {
		    Application.router.navigate('gestionCandidats', {
			trigger : true
		    });
		},
		error : function(model, errors) {
		    console.log("response" + errors)
		    self.showErrors(errors);
		}
	    });
	},
	retourGestionCandidat : function() {
	    Application.router.navigate('gestionCandidats', {
		trigger : true
	    });
	},
	showErrors : function(errors) {
	    _.each(errors, function(error) {
		var controlGroup = $('.' + error.name);
		controlGroup.find('.error-inline').addClass('error');
		controlGroup.find('.error-inline').text(error.message);
	    }, this);
	},
	hideErrors : function() {
	    $('.error-inline').removeClass('error');
	    $('.error-inline').text('');
	},
	formatDate : function(dateString) {
	    datetab = dateString.split("/");
	    newdate = datetab[2] + "-" + datetab[1] + "-" + datetab[0]
	    return newdate
	},
	render : function() {
	    var template = Handlebars.compile(template_modifierCandidat);
	    this.$el.html(template({
		candidat : this.model.toJSON()
	    }));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function(candidatId) {
	    if (!singleton) {
		singleton = new ModifierCandidatView();
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
		}),
		error : (function(e) {
		    console.log(' Service request failure: ' + e);
		}),
	    })
	    return singleton;
	}
    });
    return ModifierCandidatView;
});
