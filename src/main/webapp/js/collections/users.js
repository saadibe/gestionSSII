define([ "lib/backbone", "models/user" ], function(Backbone, User) {
    var Users = Backbone.Collection.extend({
	model : User,
	url : function() {
	    return host.url + '/getusers';
	}
    });
    return Users;
});