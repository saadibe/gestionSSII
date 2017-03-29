define([ 'jquery', 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/header.hbs' ], function(Jquery, Handlebars,
	Backbone, template_header) {
    var singleton;
    var HeaderView = Backbone.View.extend({
	tagName : "div",
	events : {
	    "click .js-gestionCandidats" : "gestionCandidats",
	},
	render : function() {
	    var template = Handlebars.compile(template_header);
	    this.$el.html(template);
	    $("#header").append(this.$el);
	    return this;
	},
	gestionCandidats:function(){
	    Application.router.navigate('gestionCandidats', {trigger : true});
	},
	showMe : function() {
	    if (!singleton) {
		singleton = new HeaderView();
	    }
	    return singleton.render();
	}
    });
    return HeaderView;
});
