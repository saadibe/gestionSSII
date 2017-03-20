define(["lib/backbone"], function(Backbone) {
  var User = Backbone.Model.extend({
    defaults: {
      login: "",
      password: ""
    }
  });
  return User;
});
