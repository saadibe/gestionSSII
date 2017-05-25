define([ "lib/backbone" ], function(Backbone) {
    var Candidat = Backbone.Model.extend({
	url : function() {
	    
	    switch (this.action) {
	    case "ajout":
		return host.url + 'ajoutCandidat';
		break;
	    case "affichage":
		return host.url + 'afficherCandidat/' + this.candidatId;
		break;
	    case "supprission":
		return host.url + 'supprimerCandidat/' + this.candidatId;
		break;
	    case "invitation":
		return host.url + 'afficherCandidatExams/' + this.candidatId;
		break;
	    default:
	      return
	  }
	},
	initialize : function(attributes) {
	    if (attributes) {
		this.candidatId = attributes.candidatId;
		this.action = attributes.action;
	    }
	},
	defaults : {
	    candidatId : null,
	    action : null,
	    firstName:'',
	    lastName:''
	},
	isNumeric:function(input)
	{
	    return (input - 0) == input && (''+input).trim().length > 0;
	},
	  validate: function (attributes) {
	      var pattern_date =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	      var pattern_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	      var errors=[]
	      if (!attributes.firstName || attributes.firstName === '') {
		  var detailErros={};
		  detailErros.name="firstName"
		  detailErros.message="le champ nom est vide"
		  errors.push(detailErros)
	      }
	      if (!attributes.lastName || attributes.lastName === '') {
		  var detailErros={};
		  detailErros.name="lastName"
		  detailErros.message="le champ prénom est vide"
		  errors.push(detailErros)
	      }
	      
	      if (!attributes.birthDate || pattern_date.test(attributes.birthDate)) {
		  var detailErros={};
		  detailErros.name="birthDate"
			  if(!attributes.birthDate ){  detailErros.message="veuillez choisir une date de naissance "
				  }else{
					  detailErros.message=" la date de naissance est invalide"
				  }
		
		  errors.push(detailErros)
	      }
	      
	      if (!attributes.adresse || attributes.adresse === '') {
		  var detailErros={};
		  detailErros.name="adresse"
		  detailErros.message="le champ adresse est vide"
		  errors.push(detailErros)
	      }
	      
	      if (!attributes.expertise || attributes.expertise === '') {
		  var detailErros={};
		  detailErros.name="expertise"
		  detailErros.message="le champ domaine de compétence est vide "
		  errors.push(detailErros)
	      }
	      
	      if (!attributes.availability ||pattern_date.test(attributes.availability)) {
		  var detailErros={};
		  detailErros.name="availability"
			  if(!attributes.availability){
				  detailErros.message="veuillez choisir une disponibilité "
			  }else{
				  detailErros.message=" la date de disponibilité est invalide"
			  }
		 
		  errors.push(detailErros)
	      }

	      if (!attributes.email || !pattern_email.test(attributes.email)) {
		  var detailErros={};
		  detailErros.name="email"
			  if(!attributes.email){detailErros.message="le champ email est vide"}else{
				  detailErros.message="le champ email est invalide "  
			  }
		  
		  errors.push(detailErros)
	      }
	      if (!attributes.experience || !this.isNumeric(attributes.experience)) {
		  var detailErros={};
		  detailErros.name="experience"
			  if(!attributes.experience){detailErros.message="le champ experience est vide"
				  }else{
					  detailErros.message="le champ experience est invalide"
				  }
		  
		  errors.push(detailErros)
	      }
	      if(errors.length == 0){
		  return false;
	      }
	      return errors
	    }
    });
    return Candidat;
});
