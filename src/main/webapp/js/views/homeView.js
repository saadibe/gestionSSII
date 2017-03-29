define([ 'lib/handlebars', 'lib/backbone', 'lib/text!templates/home.hbs',
	'models/user', 'views/headerView' ], function(Handlebars, Backbone,
	template_home, User, HeaderView) {
    var singleton;
    var HomeView = Backbone.View.extend({
	tagName : "div",

	events : {

	},

	render : function() {
	    var headerView = new HeaderView();
	    headerView.showMe();
	    var template = Handlebars.compile(template_home);
	    this.$el.html(template(this.model.toJSON()));
	    $("#contenu").append(this.$el);
	    return this;
	},
	showMe : function(userId) {

	    if (!singleton) {
		singleton = new HomeView();
	    }
	    var user = new User({
		userId : userId
	    });
	    user.fetch({
		success : (function(model) {
		    singleton.model = model
		    console.log(' Service request failure: ' + model);
		    singleton.render();

		}),
		error : (function(e) {
		    console.log(' Service request failure: ' + e);
		}),
	    })

	    return singleton;
	}
    });
    return HomeView;
});
