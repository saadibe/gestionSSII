define([ 'lib/bootbox', 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/gestionUsers.hbs', 'views/headerView',
	"collections/users", "models/user" ], function(Bootbox,
	Handlebars, Backbone, template_gestionUsers, HeaderView, Users,
	User) {
    var singleton;
    var GestionUsersView = Backbone.View.extend({
	tagName : "div",
	className : "gestionUsers",
	events : {
	    "click .js-ajouter-user" : "ajoutUser",  
	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	ajoutUser : function() {
	    Application.router.navigate('ajoutUser', {
		trigger : true
	    });
	},
	render : function() {
	    var template = Handlebars.compile(template_gestionUsers);
	    this.$el.html(template({users:this.model.toJSON()}));
	    $("#contenu").append(this.$el);
	    $('.filter').multifilter()
	    this.delegateEvents();
	    return this;
	},
	showMe : function() {
	    users = new Users()
	    if (!singleton) {
		singleton = new GestionUsersView();
	    }
	    users.fetch({
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
    return GestionUsersView;
});
