define([ "lib/backbone" ], function(Backbone) {
    var invitationExam = Backbone.Model.extend({
	url : function() {	    
	    return host.url + 'sendMail';
	}
    });
    return invitationExam;
});
