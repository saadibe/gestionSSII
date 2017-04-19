define([ 'lib/bootbox', 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/gestionExams.hbs', 'views/headerView','collections/exams'
	 ], function(Bootbox, Handlebars,
	Backbone, template_gestionExams, HeaderView,Exams) {
    var singleton;
    var GestionExamsView = Backbone.View.extend({
	tagName : "div",
	className : "gestionExams",
	events : {},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},

	render : function() {
	    var template = Handlebars.compile(template_gestionExams);
	    this.$el.html(template({exams:this.model.toJSON()}));
	    $("#contenu").append(this.$el);
	    $('.filter').multifilter()
	    this.delegateEvents();
	    return this;
	},
	showMe : function() {
	    if (!singleton) {
		singleton = new GestionExamsView();
	    }
	    exams = new Exams();
	    exams.fetch({
		success : (function(model) {
		    singleton.model = model
		    singleton.render();
		}),
		error : (function(e) {
		    console.log(' Service request failure: ' + e);
		}),
	    })
	    return singleton;
	}
    });
    return GestionExamsView;
});
