define([ 'lib/handlebars', 'lib/backbone', 'lib/text!templates/home.hbs',
	'models/user', 'views/headerView' ], function(Handlebars, Backbone,
	template_home, User, HeaderView) {
    var singleton;
    var HomeView = Backbone.View.extend({
	tagName : "div",
	className:"message",

	events : {

	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	render : function() {
	    var headerView = new HeaderView();
	    headerView.showMe(this.model);
	    var template = Handlebars.compile(template_home);
	    this.$el.html(template(this.model.toJSON()));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function(userId) {

	    if (!singleton) {
		singleton = new HomeView();
	    }
	    var user = new User({
		action:"affichage",
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
