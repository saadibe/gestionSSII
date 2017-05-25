define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/passageExam.hbs', 'models/exam',
	'lib/jquery.steps', 'lib/countdown' ], function(Handlebars, Backbone,
	template_passageExam, Exam) {
    var singleton;
    var passageExamView = Backbone.View.extend({
	tagName : "div",
	className : "passageExam",

	events : {
	    "click .finished":"countdownComplete"
	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	render : function() {
	    var self= this;
	    var template = Handlebars.compile(template_passageExam);
	    Handlebars.registerHelper("inc", function(value, options) {
		return parseInt(value) + 1;
	    });
	    this.$el.html(template({
		exam : this.model.toJSON()
	    }));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    $("#wizard").steps({
		labels : {
		    finish : "terminer",
		    next : "suivant",
		    previous : "précédent",
		    loading : "chargement ..."
		},
		headerTag : "h2",
		bodyTag : "section",
		transitionEffect : "slideLeft",
		onFinished : function(event, currentIndex) {
		    var form = $(this);
		    $( ".finished" ).click();
		   
		}
	    });
	    var myCountdown1 = new Countdown({
		time : this.model.get("time") * 60, // seconds
		width : 150,
		height : 80,
		rangeHi : "minute",
		target : 'target_location',
		onComplete : this.countdownComplete,
		hideLine : true,
	    });
	    return this;
	},
	countdownComplete : function() {
	    Application.router.navigate('endExam/'+'1'+'/'+this.model.get("candidatId"), {
		trigger : true
	    });
	},
	showMe : function(examId,candidatId) {

	    if (!singleton) {
		singleton = new passageExamView();
	    }

	    var exam = new Exam({
		action : "affichage",
		examId : examId
	    });

	    exam.fetch({
		success : (function(model) {
		    singleton.model = model
		    singleton.model.set("candidatId",candidatId)
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
