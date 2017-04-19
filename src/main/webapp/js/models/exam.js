define([ "lib/backbone" ], function(Backbone) {
    var Exam = Backbone.Model.extend({
	url : function() {	    
	    return host.url + 'getExam';
	}
    });
    return Exam;
});
