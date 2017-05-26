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
			action:null?
			silent:true
		},
		isNumeric:function(input)
		{
		    return (input - 0) == input && (''+input).trim().length > 0;
		},
		validate: function (attributes) {
		    if (!attributes.silent) {
		    
		      var errors=[]
		      if (!attributes.name || attributes.name === '') {
			  var detailErros={};
			  detailErros.name="name"
			  detailErros.message="le champ nom est vide "
			  errors.push(detailErros)
		      }
		      
		      if (!attributes.expertise || attributes.expertise === '') {
			  var detailErros={};
			  detailErros.name="expertise"
			  detailErros.message=" le champ Domaine de compétence est vide"
			  errors.push(detailErros)
		      }	   
		      
		      if (!attributes.level || !this.isNumeric(attributes.level)) {
				  var detailErros={};
				  detailErros.name="level"
					  if(!attributes.experience){detailErros.message="le champ Niveau est vide"
						  }else{
							  detailErros.message="le champ Niveau est invalide"
						  }
				  
				  errors.push(detailErros)
			      }
		      
		      if (!attributes.time || !this.isNumeric(attributes.time)) {
				  var detailErros={};
				  detailErros.name="time"
					  if(!attributes.experience){detailErros.message="le champ Durée est vide"
						  }else{
							  detailErros.message="le champ Durée est invalide"
						  }
				  
				  errors.push(detailErros)
			      }
		      if (!attributes.active || !this.isNumeric(attributes.active)) {
				  var detailErros={};
				  detailErros.name="active"
					  if(!attributes.experience){detailErros.message="le champ active est vide"
						  }else{
							  detailErros.message="le champ active est invalide"
						  }
				  
				  errors.push(detailErros)
			      }
		      if(errors.length == 0){
			  return false;
		      }
		      return errors
		    }
		}
		
	});
	return Exam;
});
