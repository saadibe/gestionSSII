define([ 'lib/handlebars', 'lib/backbone', 'lib/text!templates/home.hbs',
		'models/user' ], function(Handlebars, Backbone, template_home, User) {

	var HomeView = Backbone.View.extend({
		tagName : "div",

		events : {

		},

		render : function() {
			var template = Handlebars.compile(template_home);
			this.$el.html(template);
			$("#main").append(this.$el);
			return this;
		},
		showMe : function() {
			this.render();
		}
	});
	return HomeView;
});
