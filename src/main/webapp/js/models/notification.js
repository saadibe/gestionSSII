define([ "lib/backbone" ], function(Backbone) {
    var Notification = Backbone.Model.extend({
	url : function() {    
	    switch (this.action) {
	    case "ajout":
		return host.url + 'ajoutNotification';
		break;
	    case "supprission":
		return host.url + 'supprimerNotification/' + this.idNotification;
		break;
	    }
	},
	initialize : function(attributes) {
	    if(attributes){
		    this.idNotification = attributes.idNotification;	
		    this.action = attributes.action;
	    }
	},
	defaults : {
	    idNotification  : null,
	    action: null
	}
    });
    return Notification;
});
