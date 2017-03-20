define(["lib/backbone"], function(Backbone) {
  var AuthentificationView = Backbone.View.extend({
    tagName: "div",
    className: "item-wrap",

    render: function() {
      this.$el.html("<H3>HELLO USER</h3>");
      return this;
    },
    showMe: function(){
  		this.render(); 
  	 }
  });
  return AuthentificationView;
});
