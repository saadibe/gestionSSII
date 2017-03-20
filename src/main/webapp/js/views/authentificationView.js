define(['lib/handlebars','lib/backbone','lib/text!templates/authentification.hbs'], function(Handlebars,Backbone,template_auth) {
  var AuthentificationView = Backbone.View.extend({
    tagName: "div",
    
    initialize: function(){
        this.render();
      },

    render: function() {
    var template = Handlebars.compile(template_auth);
      this.$el.html(template);
      $("#main").append(this.$el);
      
      return this;
    },
    showMe: function(){
  		this.render(); 
  	 }
  });
  return AuthentificationView;
});
