define([ 'lib/handlebars', 'lib/backbone', 'lib/text!templates/homeExam.hbs',
	'models/candidat', ], function(Handlebars, Backbone, template_home,
	Candidat) {
    var singleton;
    var HomeViewExam = Backbone.View.extend({
	tagName : "div",
	className : "homeExam",
	events : {
	    'click .js-go-exam' : 'goExam'
	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	goExam : function() {
	    Application.router.navigate('passageExam/'+this.model.get("idExam"), {
		trigger : true
	    });
	},
	render : function() {
	    var template = Handlebars.compile(template_home);
	    this.$el.html(template({
			candidat : this.model.toJSON()
		    }))
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function(examId,candidatId) {

	    if (!singleton) {
		singleton = new HomeViewExam();
	    }
	    var candidat = new Candidat({
		action : "affichage",
		candidatId : candidatId
	    });
	    candidat.fetch({
			success : (function(model) {
			    singleton.model = model
			    singleton.model.set("idExam",examId)
			    singleton.render();
			}),
			error : (function(e) {
			    console.log(' Service request failure: ' + e);
			}),
		    })

	    return singleton;
	}
    });
    return HomeViewExam;
});
