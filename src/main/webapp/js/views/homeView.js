define([ 'lib/handlebars', 'lib/backbone', 'lib/text!templates/home.hbs',
	'models/user' ], function(Handlebars, Backbone, template_home, User) {
    var singleton;
    var HomeView = Backbone.View.extend({
	tagName : "div",

	events : {

	},

	render : function() {
	    console.log(this.model.get("firstName"))
	    var json_handlbars={
		user:this.model.toJSON()
            };
	    var template01 = Handlebars.template(template_home);
	    Handlebars.registerPartial('userName', "bechir");
	    var template =  Handlebars.compile(template01);
	    this.$el.html(template);
	    $("#main").append(this.$el);
	    return this;
	},
	showMe : function(userId) {
	    
	    if (!singleton) {
		singleton = new HomeView();
	    }
	    var user = new User({userId:userId});
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
