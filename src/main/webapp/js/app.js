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
	},
	'lib/multifilter':{
		deps : [ "jquery"],
		exports : 'Multifilter'
	},
	'lib/jquery.steps':{
	    
	    deps : [ "jquery"],
   
	}
	
    }
});

require([ "lib/bootstrap", "jquery", "lib/handlebars", "lib/underscore",
	"lib/backbone", "lib/text", "main","lib/bootbox","lib/jquery.flot","lib/jquery.flot.categories","lib/multifilter",'lib/jquery.steps' ]);

var host = {
    url : "http://localhost:8080/gestionssii/"
};
