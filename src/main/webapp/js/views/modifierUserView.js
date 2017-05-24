define([ 'lib/handlebars', 'lib/backbone',
		'lib/text!templates/modifierUser.hbs', 'views/headerView',
		"models/user" ], function(Handlebars, Backbone, template_modifierUser,
		HeaderView, User) {
	var singleton;
	var ModifierUserView = Backbone.View.extend({
		tagName : "div",
		className : "modifierUser",
		events : {
			"click .js-annuller" : "annuller",
			"click .js-modifier" : "modifierUser"
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
		modifierUser : function() {		    
		    this.hideErrors()
		    var user = new User({action:"ajout"})
		    var userJson = {
			userId: $("input[name=userId]").val(),
			firstName : $("input[name=firstName]").val(),
			lastName : $("input[name=lastName]").val(),
			sexe : $("select[name=sexe]").val(),
			profile : $("select[name=profile]").val(),
			email : $("input[name=email]").val(),
			password : $("input[name=password]").val(),
			silent:false
		    }
		    var self= this;
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
					var data = {}
					data.sexe = [];
					data.profile = [];
					singleton.model = model
					var sexe = singleton.model.get("sexe")
					var profile = singleton.model.get("profile")
					data.sexe.push(sexe)
					data.profile.push(profile)
					if (profile == "Administrateur") {
						data.profile.push("Observateur")
					} else {
						data.profile.push("Administrateur")
					}
					if (sexe == "Masculin") {
						data.sexe.push("Feminin")
					} else {
						data.sexe.push("Masculin")
					}
					singleton.model.set("arraysexe", data.sexe)
					singleton.model.set("arrayprofile", data.profile)
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
