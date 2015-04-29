var app = app || {};

app.OrderView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model,'change', this.render);
    this.listenTo(this.model,'delete', this.remove);
  },
  template: _.template('<h3>order #<%= id %> paid? <%= paid %>'),
  tagName: 'li',
  className: 'order',
  render: function(){
    this.$el.append( this.template( this.model.attributes ) );
    // this.renderFoodList();
    return this;
  },
  // renderFoodList: function(){
  //   var foods = this.model.get('foods')
  //   var foodList = $('<ul>');
  //   for (var i = 0; i < foods.length; i++) {
  //     foodList.append( $('<li>').text( foods[i]['food_id'] ) );
  //   }
  //   this.$el.append(foodList);
  // }
  // events:{
  //   'click .select-party': 'selectParty'
  //   //'event .css selector': 'function to run'
  // },
  // selectParty: function(){
  //   $('.party-selected').removeClass('party-selected');
  //   this.$el.addClass('party-selected');
  //   app.partySelection = this.model;
  // }
});



//////////////////busted shit


// var app = app || {};
//
// app.OrderView = Backbone.View.extend({
//   initialize: function(){
//     this.listenTo(this.model,'sync', this.render);
//     this.listenTo(this.model,'delete', this.remove);
//   },
//   template: _.template('<h3><%= id %><%= total %></h3>'),
//   tagName: 'li',
//   // className: 'food',
//   render: function(){
//     this.$el.append( this.template( this.model.attributes ) );
//     return this;
//   },

  // events:{
  //   'click .select-order': 'selectFood'
  // },
  // selectFood: function(){
  //   $('.order-selected').removeClass('order-selected');
  //   this.$el.addClass('order-selected');
  //   app.orderSelection = this.model;
  // }
// });








// app.OrderView = Backbone.View.extend({
//   tagName: "li",
//   template: _.template("Order #<%= id %>: Party #<%= party_id %> $<%= total %>... paid? <%= paid %>"),
//   initialize: function() {
//     this.render();
//   },
//   render: function() {
//     var data = this.model.attributes;
//     var renderedTemplate = this.template(data);
//     this.$el.html(renderedTemplate);
//     // place me later!
//     console.log(this.$el.html());
//     $('#orders').append(this.$el);
//   }
// });
