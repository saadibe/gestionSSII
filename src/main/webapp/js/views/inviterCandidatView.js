define([ 'lib/handlebars', 'lib/backbone',
		'lib/text!templates/inviterCandidat.hbs', 'views/headerView',
		"models/candiadtValidate", "models/invitationExam" ], function(
		Handlebars, Backbone, template_inviterCandidat, HeaderView,
		candidatValidate, InvitationExam) {
	var singleton;
	var InviterCandidatView = Backbone.View.extend({
		tagName : "div",
		className : "inviterCandidat",
		events : {
			"click .js-annuller" : "retourGestionCandidat",
			"click .js-envoyer" : "envoyerInvitation"

		},
		close : function() {
			this.$el.remove();

			this.off();

			if (this.model) {
				this.model.off(null, null, this);
			}
		},
		retourGestionCandidat : function() {
			Application.router.navigate('gestionCandidats/true', {
				trigger : true
			});
		},
		envoyerInvitation : function(event) {
			 this.hideErrors()
			var candidatEmail = $("input[name=email]").val();
			var candidatObjet = $("input[name=objet]").val();
			var candidatMessage= $("textarea[name=message]").val();
			var idExams= $("select[name=exams]").val();
			errors = this.validate(candidatObjet,candidatMessage)
			this.showErrors(errors)
			if(errors.length == 0){
			var invitationExam = new InvitationExam({
				email : candidatEmail,
				object:candidatObjet,
				message:candidatMessage,
				idExams:idExams,
				idCandidat : this.model.get("candidat").idCandidat

			})
			invitationExam.save(invitationExam.toJSON(), {
				success : function(model) {
					Application.router.navigate('gestionCandidats/true', {
						trigger : true
					});
				},
				error : function(model, response) {
					console.log("response" + response)
				}
			})
			}
		},
		validate: function(objet,message) {
		    var errors=[]
		      if (!objet || objet === '') {
			  var detailErros={};
			  detailErros.name="objet"
			  detailErros.message="le champ objet est vide"
			  errors.push(detailErros)
		      }
		      if (!message || message === '') {
				  var detailErros={};
				  detailErros.name="messagetext"
				  detailErros.message="le champ message est vide"
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
		formatDate : function(dateString) {
		    datetab = dateString.split("/");
		    newdate = datetab[0]+ "/"+ datetab[1] + "/" +datetab[2] 
		    return newdate
		},
		render : function() {
			var template = Handlebars.compile(template_inviterCandidat);
			this.$el.html(template({
				candidatExams : this.model.toJSON()
			}));
			$("#contenu").append(this.$el);
			this.delegateEvents();
			return this;
		},
		showMe : function(candidatId) {
			if (!singleton) {
				singleton = new InviterCandidatView();
			}
			candidat = new candidatValidate({
				candidatId : candidatId,
				action : "invitation"
			});
			candidat.fetch({
				success : (function(model) {
					var options = {
						year : 'numeric',
						month : 'numeric',
						day : 'numeric'
					};
					singleton.model = model
					singleton.model.get("candidat").birthDate= singleton
							.formatDate(new Date(singleton.model.get("candidat").birthDate).toLocaleString("fr-FR",
									options))
					singleton.render();
				}),
				error : (function(e) {
					console.log('Service request failure: ' + e);
				}),
			})
			return singleton;
		}
	});
	return InviterCandidatView;
});
