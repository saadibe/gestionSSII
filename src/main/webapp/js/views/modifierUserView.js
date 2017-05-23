define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/modifierUser.hbs', 'views/headerView',
	"models/user" ], function(Handlebars, Backbone, template_modifierUser,
	HeaderView, User) {
    var singleton;
    var ModifierUserView = Backbone.View.extend({
	tagName : "div",
	className : "modifierUser",
	events : {
	    "click .js-annuller" : "annuller"
	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	annuller : function() {
	    Application.router.navigate('gestionUsers', {
		trigger : true
	    });
	},
	render : function() {
	    var template = Handlebars.compile(template_modifierUser);
	    this.$el.html(template({
		user : this.model.toJSON()
	    }));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function(userId) {
	    if (!singleton) {
		singleton = new ModifierUserView();
	    }
	    user = new User({
		userId : userId,
		action : "affichage"
	    });

	    user.fetch({
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
    return ModifierUserView;
});
