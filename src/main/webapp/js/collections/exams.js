define([ "lib/backbone", "models/exam" ], function(Backbone, Exam) {
    var Exams = Backbone.Collection.extend({
	model : Exam,
	url : function() {
	    return host.url + '/getExams';
	}
    });
    return Exams;
});