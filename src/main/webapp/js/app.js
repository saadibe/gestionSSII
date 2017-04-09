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
	},
	'lib/jquery.flot':{
		deps : [ "jquery"],
		exports : 'JqueryFlot'
	}
	,
	'lib/jquery.flot.categories':{
		deps : [ "jquery","lib/jquery.flot"],
		exports : 'JqueryFlotCategories'
	}
    }
});

require([ "lib/bootstrap", "jquery", "lib/handlebars", "lib/underscore",
	"lib/backbone", "lib/text", "main","lib/bootbox","lib/jquery.flot","lib/jquery.flot.categories" ]);

var host = {
    url : "http://localhost:8080/gestionssii/"
};
