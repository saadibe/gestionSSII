define([ 'jquery', 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/header.hbs' ], function(Jquery, Handlebars,
	Backbone, template_header) {
    var singleton;
    var HeaderView = Backbone.View.extend({
	tagName : "div",
	events : {
	    "click .js-gestionCandidats" : "gestionCandidats",
	    "click .js-gestionExams" : "gestionExams",
	    "click .js-gestionUsers" : "gestionUsers"
	},

	render : function() {
	    var template = Handlebars.compile(template_header);
	    this.$el.html(template({
		user : this.model.toJSON()
	    }));
	    $("#header").append(this.$el);
	    return this;
	},
	gestionCandidats : function() {
	    Application.router.navigate('gestionCandidats', {
		trigger : true
	    });
	},
	gestionExams : function() {
	    Application.router.navigate('gestionExams', {
		trigger : true
	    });
	},
	gestionUsers: function() {
	    Application.router.navigate('gestionUsers', {
		trigger : true
	    });
	},
	showMe : function(model) {
	    if (!singleton) {
		singleton = new HeaderView();
		singleton.model = model
	    }
	    return singleton.render();
	}
    });
    return HeaderView;
});
