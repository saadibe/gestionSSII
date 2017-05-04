define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/ajoutUser.hbs', 'views/headerView',
	"models/user" ], function(Handlebars, Backbone,
	template_ajoutUser, HeaderView, User) {
    var singleton;
    var AjoutUserView = Backbone.View.extend({
	tagName : "div",
	className : "ajoutUser",
	events : {
	    "click .js-ajouter" : "ajouterUser",
	    "click .js-annuller" : "annuller"
	},
	close : function() {
	    this.$el.remove();

	    this.off();

	    if (this.model) {
		this.model.off(null, null, this);
	    }
	},
	ajouterUser : function() {
	    var user = new User({action:"ajout"})
	    user.set({
		"firstName" : $("input[name=firstName]").val(),
		"lastName" : $("input[name=lastName]").val(),
		"sexe" : $("select[name=sexe]").val(),
		"profile" : $("select[name=profile]").val(),
		"email" : $("input[name=email]").val(),
		"password" : $("input[name=password]").val()
	    })
	    user.save(user.toJSON(),{
		success: function(model) {
		    Application.router.navigate('gestionUsers', {trigger : true});
                },
                error: function(model, response) {
                    console.log("response"+response)
                }
            });
	},
	annuller : function(){
	    Application.router.navigate('gestionUsers', {trigger : true}); 
	},
	render : function() {
	    var template = Handlebars.compile(template_ajoutUser);
	    this.$el.html(template);
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function() {
	    if (!singleton) {
		singleton = new AjoutUserView();
	    }
	    singleton.render();
	    return singleton;
	}
    });
    return AjoutUserView;
});
