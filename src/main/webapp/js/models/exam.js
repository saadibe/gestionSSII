define([ "lib/backbone" ], function(Backbone) {
	var Exam = Backbone.Model.extend({
		url : function() {
		    switch (this.action) {
		    
		    case "ajout":
			return host.url + 'ajoutExam';
			break;
		    case "affichage":
			return host.url + 'afficherExamById/' + this.examId;
			break;
		    case "supprission":
			return host.url + 'supprimerExam/' + this.examId;
			break;
		    default:
		      return ;
		  }
		},
		initialize : function(attributes) {
			if (attributes) {
				this.examId = attributes.examId;
				this.action = attributes.action;
			}
		},
		defaults : {
			examId : null,
			action:null
		}
	});
	return Exam;
});
