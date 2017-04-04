require.config({
    paths : {
	'jquery' : 'lib/jquery'
    },
    shim : {
	'lib/underscore' : {
	    exports : '_'
	},
	'lib/backbone' : {
	    deps : [ "lib/underscore", "jquery" ],
	    exports : 'Backbone'
	},
	'lib/bootstrap' : {
	    deps : [ "jquery" ],
	    exports : 'Bootstrap'
	}
    }
});

require([ "lib/bootstrap","jquery", "lib/handlebars", "lib/underscore", "lib/backbone",
	"lib/text", "main" ]);

var host = {
    url : "http://localhost:8080/gestionssii/"
};
