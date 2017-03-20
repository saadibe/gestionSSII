require.config({
  paths: {
    'jquery': 'lib/jquery'
  },
  shim: {
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ["lib/underscore", "jquery"],
      exports: 'Backbone'
    }
  }
});

require(
  ["jquery",
   	"lib/handlebars",
    "lib/underscore",
    "lib/backbone",
    "lib/text",
    "router"
  ]
);

var host = {url:"http://localhost:8080/gestionssii/"};

