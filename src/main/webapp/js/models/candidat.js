define([ "lib/backbone" ], function(Backbone) {
    var Candidat = Backbone.Model.extend({
	url : function() {
	    return host.url + 'ajoutCandidat';
	},
    });
    return Candidat;
});
