define([ 'lib/handlebars', 'lib/backbone', 'lib/text!templates/endExam.hbs','models/notification' ],
		function(Handlebars, Backbone, template_endExam,Notification) {
			var singleton;
			var EndExamView = Backbone.View.extend({
				tagName : "div",
				className : "endExam",

				events : {

				},
				close : function() {
					this.$el.remove();

					this.off();

					if (this.model) {
						this.model.off(null, null, this);
					}
				},
				render : function() {
					var self = this;
					var template = Handlebars.compile(template_endExam);
					this.$el.html(template());
					$("#contenu").append(this.$el);
					this.delegateEvents();
					return this;
				},
				showMe : function(userId, candidatId) {
					if (!singleton) {
						singleton = new EndExamView();
					}
					var notification = new Notification({
						action : 'ajout',
						idCandidat : candidatId
					})
					notification.save(notification.toJSON(), {
						success : function(model) {
							singleton.render()
						},
						error : function(model, errors) {
							console.log("response" + errors)

						}
					});

					return singleton;
				}
			});
			return EndExamView;
		});
