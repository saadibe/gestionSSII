define([ 'lib/handlebars', 'lib/backbone', 'lib/text!templates/endExam.hbs' ],
	function(Handlebars, Backbone, template_endExam) {
	    var singleton;
	    var endExamView = Backbone.View.extend({
		tagName : "div",
		className : "endExam",

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
		    var self = this;
		    var template = Handlebars.compile(template_endExam);
		    this.$el.html(template());
		    $("#contenu").append(this.$el);
		    this.delegateEvents();
		    return this;
		},
		showMe : function() {
		    if (!singleton) {
			singleton = new endExamView();
		    }
		    return singleton;
		}
	    });
	    return endExamView;
	});
