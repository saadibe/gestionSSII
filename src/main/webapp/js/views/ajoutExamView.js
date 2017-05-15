define(
	[ 'lib/handlebars', 'lib/backbone', 'lib/text!templates/ajoutExam.hbs',
		'views/headerView', "models/exam" ],
	function(Handlebars, Backbone, template_ajoutExam, HeaderView, Exam) {
	    var singleton, count = 1;
	    var AjoutExamView = Backbone.View
		    .extend({
			tagName : "div",
			className : "ajoutExam",
			events : {

			    "click .js-ajouter" : "ajouterExam",
			    "click .js-ajouterQuestion" : "ajouterQuestion",
			    "click .js-annuller" : "annuller",
			    "click .js-ajouterReponse" : "ajouterReponse"

			},
			close : function() {
			    this.$el.remove();

			    this.off();

			    if (this.model) {
				this.model.off(null, null, this);
			    }
			},
			ajouterQuestion : function() {
				countQuestions = this.lengthDiv('.task');
			    $(".questions")
				    .append(
					    "<div class=\"panel-group question"+countQuestions+"\" id=\"accordion\"> <div class=\"panel panel-default\">"
						    + "<div class=\"panel-heading\"><h4 class=\"panel-title\">"
						    + "<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse"
						    + countQuestions
						    + "\">Question "
						    + countQuestions
						    + " : </a></h4></div>"
						    + "<div id=\"collapse"
						    + countQuestions
						    + "\""
						    + +" class=\"panel-collapse collapse in\"> <div class=\"panel-body\"> "
						    + " <p> description : </p> <input type=\"text\" class=\"task\" name=\"task[]\" />"
						    + "<div class=\"link\"><button type=\"button\" class=\"btn btn-link js-ajouterReponse\" data-question=\""
						    + countQuestions
						    + "\">Ajouter une reponse</button></div></div>"
						    + "</div></div></div>");
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
				"question" :JSON.stringify(data)
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
			
			lengthDiv :function(div){
				return $(div).length + 1;
			},
			
			ajouterReponse : function(event) {
			    var questionData = $(event.currentTarget).data();
			    $("#collapse" + questionData.question)
				    .append(
					    " <input class=\"zonetextarea reponseDescription"+questionData.question+ "\" type=\"textarea\" rows=\"4\" cols=\"50\" name=\"reponse\" />"
						    + "<select id=\"select\" name=\"reponse"+questionData.question+"\">"
						    + "<option value=\"1\" selected >vrai</option>"
						    + "<option value=\"0\" >faux</option>"
						    + "</select>")
			},
			annuller : function() {
			    Application.router.navigate('gestionExams', {
				trigger : true
			    });
			},
			render : function() {
			    var template = Handlebars
				    .compile(template_ajoutExam);
			    this.$el.html(template);
			    $("#contenu").append(this.$el);
			    this.delegateEvents();
			    return this;
			},
			showMe : function() {
			    if (!singleton) {
				singleton = new AjoutExamView();
			    }
			    singleton.render();
			    return singleton;
			}
		    });
	    return AjoutExamView;
	});
