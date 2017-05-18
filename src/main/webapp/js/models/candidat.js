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
	  validate: function (attributes) {
	      var errors=[]
	      if (!attributes.firstName || attributes.firstName === '') {
		  var detailErros={};
		  detailErros.name="firstName"
		  detailErros.message="nom obligatoire"
		  errors.push(detailErros)
	      }
	      if (!attributes.lastName || attributes.lastName === '') {
		  var detailErros={};
		  detailErros.name="lastName"
		  detailErros.message="prenom obligatoire"
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
