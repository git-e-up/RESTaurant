var app = app || {};

app.OrderView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model,'change', this.render);
    this.listenTo(this.model,'delete', this.remove);
  },
  template: _.template('<h3><%= id %><%= paid %></h3>'),
  tagName: 'li',
  // className: 'food',
  render: function(){
    this.$el.append( this.template( this.model.attributes ) );
    return this;
  },
  // events:{
  //   'click .select-order': 'selectFood'
  // },
  // selectFood: function(){
  //   $('.order-selected').removeClass('order-selected');
  //   this.$el.addClass('order-selected');
  //   app.orderSelection = this.model;
  // }
});
