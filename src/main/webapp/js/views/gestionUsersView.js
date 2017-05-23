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
	    "click .js-supprimer-user" : "supprimerUser",
	    "click .js-afficher-user" : "afficherUser",
	    "click .js-modifier-user" : "modifierUser",
	    
	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	afficherUser : function(event) {
	    var userData = $(event.currentTarget).data();
	    userId = userData.iduser;
	    Application.router.navigate('afficherUser/'+userId, {
		trigger : true
	    });
	},
	ajoutUser : function() {
	    Application.router.navigate('ajoutUser', {
		trigger : true
	    });
	},
	modifierUser : function(event) {
	    var userData = $(event.currentTarget).data();
	    iduser = userData.iduser;
	    Application.router.navigate('modifierUser/'+ iduser, {
		trigger : true
	    });
	},
	supprimerUser : function(event) {
	    var self = this
	    Bootbox.confirm("Voulez vous supprimer l'user?", function(
		    result) {
		if (result) {
		    var userData = $(event.currentTarget).data();
		    user = new User({
			userId : userData.iduser,
			action : "supprission"
		    })
		    user.save(user.toJSON(), {
			success : function(model) {
			    self.showMe();
			},
			error : function(model, response) {
			    console.log("response" + response)
			}
		    });

		} else {
		    console.log("User declined dialog");
		}
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
