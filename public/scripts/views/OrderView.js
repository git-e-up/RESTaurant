


// var ellapsed = jQuery.timeago(new Date());





var app = app || {};

app.OrderView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model,'change', this.render);
    this.listenTo(this.model,'delete', this.remove);
  },





  template: _.template('<h3>order #<%= id %> <%=food.name %>  served? <%= paid %>' ),
  tagName: 'li',
  className: 'order',
  render: function(){
    this.$el.append( this.template( this.model.attributes ) );

    return this;
  },
/////////////




});
