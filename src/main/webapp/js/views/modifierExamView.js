define([ 'lib/handlebars', 'lib/backbone', 'lib/jquery.flot',
		'lib/text!templates/modifierExam.hbs', 'views/headerView',
		"models/exam" ], function(Handlebars, Backbone, JqueryFlot,
		template_afficherExam, HeaderView, Exam) {
	var singleton;
	var ModifierExamView = Backbone.View.extend({
		tagName : "div",
		className : "modifierExam",
		events : {
			"click .js-retour" : "retourGestionExam",
			"click .js-ajouter" : "ajouterExam"
		},
		close : function() {
			this.$el.remove();
			this.off();
			if (this.model) {
				this.model.off(null, null, this);
			}
		},
		ajouterExam : function() {
		    var exam = new Exam({
			action : 'ajout'
		    })
		    var questionArray = new Array();
		    var data ={}
		    data.questions = [];
		    var count =1
		    $('.task').each(function() {
		    	var question = {} ;
		    	question.description =$(this).val();
		    	question.idQuestion =$('.questionId').val();
		    	question.reponses = [];
		    	
		    	var reponse ={}
		    	var countReponse = 1;
		    	$('.reponseDescription'+count).each(function() {
		    		 var reponse ={}
		    		 reponse.description = $(this).val();
		    		 reponse.isGoodreponse=$("select[name=reponse"+countReponse+"]").val(),
		    		 question.reponses.push(reponse)
		    		 countReponse++;
		    	 }),
		    	 count++;
		    	data.questions.push(question);
		    });
		    
		    exam.set({
			"name" : $("input[name=name]").val(),
			"expertise" : $("input[name=expertise]").val(),
			"level" : $("input[name=level]").val(),
			"time" : $("input[name=time]").val(),
			"active" : $("input[name=active]").val(),
			"idExams": $("input[name=idExams]").val(),
			"question" :JSON.stringify(data),
			 "silent":false
	    })
		    exam.save(exam.toJSON(), {
			success : function(model) {
			    Application.router.navigate('gestionExams',
				    {
					trigger : true
				    });
			},
			error : function(model, response) {
			    console.log("response" + response)
			}
		    });
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
				singleton = new ModifierExamView();
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
	return ModifierExamView;
});
