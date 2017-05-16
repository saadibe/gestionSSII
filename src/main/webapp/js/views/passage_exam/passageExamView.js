define([ 'lib/handlebars', 'lib/backbone', 'lib/text!templates/passageExam.hbs',
	'models/exam',  ], function(Handlebars, Backbone,
	template_passageExam, Exam) {
    var singleton;
    var passageExamView = Backbone.View.extend({
	tagName : "div",
	className:"passageExam",

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
	    var template = Handlebars.compile(template_passageExam);
	    Handlebars.registerHelper("inc", function(value, options)
			{
			    return parseInt(value) + 1;
			});
	    this.$el.html(template({exam : this.model.toJSON()}));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function(userId) {

	    if (!singleton) {
		singleton = new passageExamView();
	    }
	   
	    var exam = new Exam({
		action:"affichage",
		examId : 10
	    });
	   
	    exam.fetch({
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
    return passageExamView;
});
