define([ "lib/backbone" ], function(Backbone) {
    var User = Backbone.Model.extend({
	url : function() {    
	    switch (this.action) {
	    case "ajout":
		return host.url + 'ajoutUser';
		break;
	    case "affichage":
		return host.url + 'getuser/' +  this.userId;
		break;
	    case "supprission":
		return host.url + 'supprimerUser/' + this.userId;
		break;
	    default:
	      return  host.url + 'getuser';
	  }
	},
	initialize : function(attributes) {
	    if(attributes){
		    this.userId = attributes.userId;	
		    this.action = attributes.action;
	    }
	},
	defaults : {
	    userId  : null,
	    action: null,
	    silent:true,
	    isLogin:false
	},
	validate: function (attributes) {
	    if (!attributes.silent) {
	      var pattern_date =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	      var pattern_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
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
	      if (!attributes.email || !pattern_email.test(attributes.email)) {
		  var detailErros={};
		  detailErros.name="email"
		  detailErros.message="email non valide"
		  errors.push(detailErros)
	      }
	      if (!attributes.password || attributes.password === '') {
		  var detailErros={};
		  detailErros.name="password"
		  detailErros.message="password obligatoire"
		  errors.push(detailErros)
	      }	  
	      if(errors.length == 0){
		  return false;
	      }
	      return errors
	    }
	}
	
    });
    return User;
});
