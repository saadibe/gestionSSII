define([ "lib/backbone" ], function(Backbone) {
    var User = Backbone.Model.extend({
	url : function() {
	    if (this.userId) {
		return host.url + 'getuser/' + this.userId;
	    }
	    return host.url + 'getuser';
	},
	initialize : function(attributes) {
	    if(attributes){
		    this.userId = attributes.userId;	
	    }
	},
	defaults : {
	    userId  : null
	}
    });
    return User;
});
