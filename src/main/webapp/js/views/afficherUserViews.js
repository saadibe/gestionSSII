define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/afficherUser.hbs', 'views/headerView',
	"models/user" ], function(Handlebars, Backbone, template_afficherUser,
	HeaderView, User) {
    var singleton;
    var AfficherUserView = Backbone.View.extend({
	tagName : "div",
	className : "afficherUser",
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
	    var template = Handlebars.compile(template_afficherUser);
	    this.$el.html(template({
		user : this.model.toJSON()
	    }));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function(userId) {
	    if (!singleton) {
		singleton = new AfficherUserView();
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
    return AfficherUserView;
});
