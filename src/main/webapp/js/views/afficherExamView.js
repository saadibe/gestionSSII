define([ 'lib/handlebars', 'lib/backbone', 'lib/jquery.flot',
		'lib/text!templates/afficherExam.hbs', 'views/headerView',
		"models/exam" ], function(Handlebars, Backbone, JqueryFlot,
		template_afficherExam, HeaderView, Exam) {
	var singleton;
	var AfficherExamView = Backbone.View.extend({
		tagName : "div",
		className : "afficherExam",
		events : {
			"click .js-retour" : "retourGestionExam"
		},
		close : function() {
			this.$el.remove();
			this.off();
			if (this.model) {
				this.model.off(null, null, this);
			}
		},
		
		retourGestionExam : function() {
			Application.router.navigate('gestionExams', {
				trigger : true
			});
		},

		render : function() {
			var template = Handlebars.compile(template_afficherExam);
			Handlebars.registerHelper("inc", function(value, options)
				{
				    return parseInt(value) + 1;
				});
			this.$el.html(template({exam : this.model.toJSON()}));
			$("#contenu").append(this.$el);
			this.delegateEvents();
			return this;
		},
		showMe : function(examId) {
			if (!singleton) {
				singleton = new AfficherExamView();
			}
			exam = new Exam({action:'affichage',
				examId : examId
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
	return AfficherExamView;
});
