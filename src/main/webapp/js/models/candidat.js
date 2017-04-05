define([ "lib/backbone" ], function(Backbone) {
    var Candidat = Backbone.Model.extend({
	url : function() {
	    if (this.candidatId) {
		return host.url + 'supprimerCandidat/' + this.candidatId;
	    } else {
		return host.url + 'ajoutCandidat';
	    }
	},
	initialize : function(attributes) {
	    if (attributes) {
		this.candidatId = attributes.candidatId;
	    }
	},
	defaults : {
	    candidatId : null
	}
    });
    return Candidat;
});
