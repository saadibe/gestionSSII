define([ "lib/backbone", "models/notification" ], function(Backbone, Notification) {
    var Notifications = Backbone.Collection.extend({
	model : Notification,
	url : function() {
	    return host.url + 'getNotifications';
	}
    });
    return Notifications;
});