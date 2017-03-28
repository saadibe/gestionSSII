define([ 'jquery', 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/header.hbs' ], function(Jquery, Handlebars,
	Backbone, template_header) {
    var singleton;
    var HeaderView = Backbone.View.extend({
	tagName : "div",
	events : {
	    
	},
	render : function() {
	    var template = Handlebars.compile(template_header);
	    this.$el.html(template);
	    $("#header").append(this.$el);
	    return this;
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
