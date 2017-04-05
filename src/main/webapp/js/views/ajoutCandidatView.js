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
	    "click .js-annuller" : "annuller"
	},
	ajouterCandidat : function() {
	    var candidat = new Candidat()
	    candidat.set({
		"firstName" : $("input[name=firstName]").val(),
		"lastName" : $("input[name=lastName]").val(),
		"sexe" : $("select[name=sexe]").val(),
		"birthDate" : $("input[name=birthDate]").val(),
		"adresse" : $("input[name=adresse]").val(),
		"email" : $("input[name=email]").val(),
		"expertise" : $("input[name=expertise]").val(),
		"experience" : $("input[name=experience]").val(),
		"cv" : $("input[name=cv]").val(),
		"availability" : $("input[name=availability]").val()
	    })
	    candidat.save(candidat.toJSON(),{
		success: function(model) {
		    Application.router.navigate('gestionCandidats', {trigger : true});
                },
                error: function(model, response) {
                    console.log("response"+response)
                }
            });
	},
	annuller : function(){
	    Application.router.navigate('gestionCandidats', {trigger : true}); 
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
