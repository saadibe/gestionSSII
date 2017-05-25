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
	    this.hideErrors()
	    var login = $('input[name=email]')
	    var password = $('input[name=password]')
	    errors = this.validate(login.val(),password.val())
	    this.showErrors(errors)
	    var user = new User();
	    var self=this
	    if(errors.length == 0){
	    user.fetch({
		data : {
		    login : login.val(),
		    password : password.val(),
		    silent:true
		},
		success : (function(model) {

		    if (model.get("userId")) {
			Application.router.navigate('home/'+ model.get("userId"), {trigger : true});
		    }else{
			self.showErrors([{name:"password",message:"utilisateur non reconnu"}])
		    }
		}),
		error : (function(e) {
		    console.log(' Service request failure: ' + e); 
		}),
	    })
	    }
	},
	validate: function(login,password) {
	    var errors=[]
	    var pattern_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	      if (!password || password === '') {
		  var detailErros={};
		  detailErros.name="password"
		  detailErros.message="le champ mot de passe est vide"
		  errors.push(detailErros)
	      }
	      if (!login || !pattern_email.test(login)) {
	    	  
		  var detailErros={};
		  detailErros.name="email"
			  if(!login ){ detailErros.message="le champ email est vide"
				  }else{
					  detailErros.message="le champ e-mail est invalide"
				  }
		  
		  errors.push(detailErros)
	      }   
	      return errors;
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
	showMe : function() {
	    if (!singleton) {
		singleton = new AuthentificationView();
	    }
	    return singleton.render();
	}
    });
    return AuthentificationView;
});
