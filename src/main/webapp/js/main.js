require([ 'router', ], function(Router) {
    Application = {
	events : {},
	router : {}
    };

    _.extend(Application.events, Backbone.Events);

    Application.router = new Router();

    // call to begin monitoring uri and route changes
    Backbone.history.start();
});