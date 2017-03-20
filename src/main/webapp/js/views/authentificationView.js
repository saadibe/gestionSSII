define(['lib/handlebars','lib/backbone','lib/text!templates/authentification.hbs','models/user'], function(Handlebars,Backbone,template_auth,User) {
  var AuthentificationView = Backbone.View.extend({
    tagName: "div",
    
    events: {
        "click .js-login": "authentification",
    },
    
    initialize: function(){
        this.render();
      },

    render: function() {
    var template = Handlebars.compile(template_auth);
      this.$el.html(template);
      $("#main").append(this.$el);
      return this;
    },
    authentification:function(event){
    	var login = $('input[name=login]')
    	var password = $('input[name=password]')
    	var user = new User({login: login.val(),password:password.val()});
    	user.fetch({ data: $.param({ id: 1}) });
    },
    showMe: function(){
  		this.render(); 
  	 }
  });
  return AuthentificationView;
});
