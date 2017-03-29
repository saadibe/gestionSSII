define([ 'lib/handlebars', 'lib/backbone',
	'lib/text!templates/gestionCandidats.hbs', 'views/headerView' ],
	function(Handlebars, Backbone, template_gestionCandidats, HeaderView) {
	    var singleton;
	    var GestionCandidatsView = Backbone.View.extend({
		tagName : "div",
		className : "gestionCandidats",
		events : {

		},
		render : function() {
		    var headerView = new HeaderView();
		    headerView.showMe();
		    var template = Handlebars.compile(template_gestionCandidats);
		    this.$el.html(template);
		    $("#contenu").append(this.$el);
		    return this;
		},
		showMe : function() {
		    if (!singleton) {
			singleton = new GestionCandidatsView();
		    }
		    singleton.render();
		    return singleton;
		}
	    });
	    return GestionCandidatsView;
	});
