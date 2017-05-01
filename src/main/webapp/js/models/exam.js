define([ "lib/backbone" ], function(Backbone) {
	var Exam = Backbone.Model.extend({
		url : function() {
			if (this.examId) {
				return host.url + 'getExam/' + this.examId;
			}
			return host.url + 'getExam';
		},
		initialize : function(attributes) {
			if (attributes) {
				this.examId = attributes.examId;
			}
		},
		defaults : {
			examId : null,
		}
	});
	return Exam;
});
