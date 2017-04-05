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
	},
	'lib/bootbox' : {
	    deps : [ "jquery","lib/bootstrap" ],
	    exports : 'Bootbox'
	}
    }
});

require([ "lib/bootstrap", "jquery", "lib/handlebars", "lib/underscore",
	"lib/backbone", "lib/text", "main","lib/bootbox" ]);

var host = {
    url : "http://localhost:8080/gestionssii/"
};
