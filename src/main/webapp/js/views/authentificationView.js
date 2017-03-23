define([ 'jquery', 'lib/handlebars', 'lib/backbone',
		'lib/text!templates/authentification.hbs', 'models/user', 'router' ],
		function(Jquery, Handlebars, Backbone, template_auth, User, Router) {
			var  singleton;
			var AuthentificationView = Backbone.View.extend({
				tagName : "div",

				events : {
					"click .js-login" : "authentification",
				},

				render : function() {
					var template = Handlebars.compile(template_auth);
					this.$el.html(template);
					$("#main").append(this.$el);
					return this;
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
							if (model.get("firstName")) {
								Backbone.history.navigate('home', {
									trigger : true
								});
							}
						}),
						error : (function(e) {
							Backbone.history.navigate('index', {
								trigger : true
							});
							console.log(' Service request failure: ' + e);
						}),
						traditional : true
					})
				},
				showMe : function() {
					if (!singleton) {
			            singleton = new AuthentificationView();
			        }
					singleton.render();
				}
			});
			return AuthentificationView;
		});
