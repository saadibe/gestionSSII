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
	    action: null
	}
    });
    return User;
});
