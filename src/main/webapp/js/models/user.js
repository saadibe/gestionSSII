define(["lib/backbone"], function(Backbone) {
  var User = Backbone.Model.extend({
	  url: function(){
		    return host.url + 'getuser';
		  },

    defaults: {
      login: "",
      password: ""
    }
  });
  return User;
});
