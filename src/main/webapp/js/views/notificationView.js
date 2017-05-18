define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/notification.hbs', 'views/headerView',
	"collections/notifications" ], function(Handlebars, Backbone,
	template_notification, HeaderView, Notifications) {
    var singleton;
    var NotificationView = Backbone.View.extend({
	tagName : "div",
	className : "notification",
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
	    var template = Handlebars.compile(template_notification);
	    this.$el.html(template({notifications:this.model.toJSON()}));
	    $("#contenu").append(this.$el);
	    this.delegateEvents();
	    return this;
	},
	showMe : function() {
	    if (!singleton) {
		singleton = new NotificationView();
	    }
	    notification = new Notifications();
	    notification.fetch({
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
    return NotificationView ;
});
