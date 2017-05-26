define([ 'lib/bootbox', 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/gestionExams.hbs', 'views/headerView',
	'collections/exams',"models/exam" ], function(Bootbox, Handlebars, Backbone,
	template_gestionExams, HeaderView, Exams,Exam) {
    var singleton;
    var GestionExamsView = Backbone.View.extend({
	tagName : "div",
	className : "gestionExams",
	events : {
	    "click .js-afficher-Exam" : "afficherExam",
	    "click .js-ajouter-exam" : "ajoutExam",
	    "click .js-supprimer-Exam" : "supprimerExam",
	    "click .js-modifier-Exam":"modifierExam"
	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	afficherExam : function(event) {
	    var ExamData = $(event.currentTarget).data();
	    examId = ExamData.idexams;
	    Application.router.navigate('afficherExam/' + examId, {
		trigger : true
	    });

	},
	modifierExam : function(event) {
	    var ExamData = $(event.currentTarget).data();
	    examId = ExamData.idexams;
	    Application.router.navigate('modifierExam/' + examId, {
		trigger : true
	    });

	},
	ajoutExam : function() {
	    Application.router.navigate('ajoutExam', {
		trigger : true
	    });

	},
	supprimerExam : function(event) {
	    var self = this
	    Bootbox.confirm("Voulez vous supprimer l'examen?", function(
		    result) {
		if (result) {
		    var examenData = $(event.currentTarget).data();
		    exam = new Exam({
			examId : examenData.idexams,
			action : "supprission"
		    })
		    exam.save(exam.toJSON(), {
			success : function(model) {
			    self.showMe();
			},
			error : function(model, response) {
			    console.log("response" + response)
			}
		    });

		} else {
		    console.log("User declined dialog");
		}
	    });
	},
	render : function() {
	    var template = Handlebars.compile(template_gestionExams);
	    this.$el.html(template({
		exams : this.model.toJSON()
	    }));
	    $("#contenu").append(this.$el);
	    $('.filter').multifilter()
	    this.delegateEvents();
	    return this;
	},
	showMe : function() {
	    if (!singleton) {
		singleton = new GestionExamsView();
	    }
	    exams = new Exams({action:'affichage'});
	    exams.fetch({
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
    return GestionExamsView;
});
