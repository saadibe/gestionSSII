define([ "lib/backbone", "models/candidat" ], function(Backbone, Candidat) {
    var Candidats = Backbone.Collection.extend({
	model : Candidat,
	url : function() {
	    return host.url + '/getCandidats';
	}
    });
    return Candidats;
});