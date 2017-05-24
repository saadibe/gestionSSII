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
	    this.hideErrors();
	    var self = this
	    var user = new User({action:"ajout"})
	    var userJson={
		firstName : $("input[name=firstName]").val(),
		lastName : $("input[name=lastName]").val(),
		sexe : $("select[name=sexe]").val(),
		profile : $("select[name=profile]").val(),
		email : $("input[name=email]").val(),
		password : $("input[name=password]").val(),
		silent:false
	    } 
	    user.save(userJson,{
		success: function(model) {
		    Application.router.navigate('gestionUsers', {trigger : true});
                },
                error: function(model, errors) {
                    console.log("response"+errors)
                    self.showErrors(errors);
                }
            });
	},
	showErrors : function(errors) {
	    _.each(errors, function(error) {
		var controlGroup = $('.' + error.name);
		controlGroup.find('.error-inline').addClass('error');
		controlGroup.find('.error-inline').text(error.message);
	    }, this);
	},
	hideErrors : function() {
	    $('.error-inline').removeClass('error');
	    $('.error-inline').text('');
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
