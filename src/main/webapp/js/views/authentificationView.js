define([ 'jquery', 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/authentification.hbs', 'models/user' ], function(
	Jquery, Handlebars, Backbone, template_auth, User) {
    var singleton;
    var AuthentificationView = Backbone.View.extend({
	tagName : "div",
	className : "authentification",
	events : {
	    "click .js-login" : "authentification",
	},
	render : function() {
	    var template = Handlebars.compile(template_auth);
	    this.$el.html(template);
	    $("#contenu").append(this.$el);
	    return this;
	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	authentification : function(event) {
	    var login = $('input[name=login]')
	    var password = $('input[name=password]')
	    var user = new User();
	    user.fetch({
		data : {
		    login : login.val(),
		    password : password.val()
		},
		success : (function(model) {

		    if (model.get("userId")) {
			Application.router.navigate('home/'
				+ model.get("userId"), {
			    trigger : true
			});
		    }
		}),
		error : (function(e) {
		    console.log(' Service request failure: ' + e);
		}),
	    })
	},
	showMe : function() {
	    if (!singleton) {
		singleton = new AuthentificationView();
	    }
	    return singleton.render();
	}
    });
    return AuthentificationView;
});
