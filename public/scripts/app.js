var app = app || {};

$(document).ready(function(){


  app.foods = new app.FoodCollection({
    model: app.FoodModel
  })

  app.parties = new app.PartyCollection({
    model: app.PartyModel
  })

  app.foodListPainter = new app.GeneralListView({
    modelView: app.FoodView,
    collection: app.foods,
    el: $('#menu-list'),
  });

  app.partyListPainter = new app.GeneralListView({
    modelView: app.PartyView,
    collection: app.parties,
    el: $('#party-list'),
  });

  app.parties.fetch();
  app.foods.fetch();

});


// Old Code below
// var app = {};
//
// // definitions
//
// app.FoodModel = Backbone.Model.extend();
// app.OrderModel = Backbone.Model.extend();
// app.PartyModel = Backbone.Model.extend();
//
//
// app.FoodCollection = Backbone.Collection.extend({
//   url: '/api/foods',
//   model: app.FoodModel
// });
//
// app.OrderCollection = Backbone.Collection.extend({
//   url: '/api/orders',
//   model: app.OrderModel
// });
//
// app.PartyCollection = Backbone.Collection.extend({
//   url: '/api/parties',
//   model: app.PartyModel
// });
//
// app.FoodView = Backbone.View.extend({
//   tagName: "li",
//   template: _.template("<%= name %> $<%= cost %>"),
//   initialize: function() {
//     this.render();
//   },
//   render: function() {
//     var data = this.model.attributes;
//     var renderedTemplate = this.template(data);
//     this.$el.html(renderedTemplate);
//     // place me later!
//     console.log(this.$el.html());
//     $('#foods').append(this.$el);
//   }
// });
//
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
//
//
// app.PartyView = Backbone.View.extend({
//   tagName: "li",
//   template: _.template("Party #<%= id %>: <%= name %> party of <%= count %>"),
//   initialize: function() {
//     this.render();
//   },
//   render: function() {
//     var data = this.model.attributes;
//     var renderedTemplate = this.template(data);
//     this.$el.html(renderedTemplate);
//     // place me later!
//     console.log(this.$el.html());
//     $('#parties').append(this.$el);
//   }
// });
//
// /*var newModel = new app.FoodModel();
// var newView = new app.FoodView({
//   model: newModel
// });
// newModel.fetch();*/
//
// app.FoodListView = Backbone.View.extend({
//   tagName: "div",
//
//   // template: _.template('<h2><%=food %></h2>')
//   initialize: function(){
//     this.listenTo(this.collection, "sync", this.render);
//   },
//   render: function(){
//     var numOfFoods = this.collection.models.length;
//     // var data = this.model.attributes;
//     $('#foods').html("Check out these bisques!");
//     for (var i = 0; i < numOfFoods; i++) {
//       var model =  this.collection.models[i];
//       var newView = new app.FoodView({ model: model });
//       //$('body').append('<br>' + model.attributes.name);
//     };
//     // this.$el.html( this.s template (data) );
//   }
// });
// ///////////////////////////////////
// app.OrderListView = Backbone.View.extend({
//   tagName: "div",
//   initialize: function(){
//     this.listenTo(this.collection, "sync", this.render);
//   },
//   render: function(){
//     var numOfOrders = this.collection.models.length;
//     // var data = this.model.attributes;
//     $('#orders').html("Check out these orders!");
//     for (var i = 0; i < numOfOrders; i++) {
//       var model =  this.collection.models[i];
//       var newView = new app.OrderView({ model: model });
//     };
//   }
// });
// /////////////////////////////////
// app.PartyListView = Backbone.View.extend({
//   tagName: "div",
//   initialize: function(){
//     this.listenTo(this.collection, "sync", this.render);
//   },
//   render: function(){
//     var numOfParties = this.collection.models.length;
//     // var data = this.model.attributes;
//     $('#parties').html("Check out these parties!");
//     for (var i = 0; i < numOfParties; i++) {
//       var model =  this.collection.models[i];
//       var newView = new app.PartyView({ model: model });
//     };
//   }
// });
// ///////////////////////////////Food
// //instances
// app.myFoodModel = new app.FoodModel();
// app.myFoodModel.url =  '/api/foods';
// ////
// // app.myFoodView = new app.FoodView({
// //   model: app.myFoodModel,
// //
// // });
// // app.myFoodModel.fetch();
// ////
//
// app.myFoodCollection = new app.FoodCollection({
//   model: app.FoodModel,
//   url: '/api/foods'
// });
// app.myFoodListView = new app.FoodListView({
//   collection: app.myFoodCollection
// });
// app.myFoodCollection.fetch();
// //////////////////////////////////Order
// app.myOrderModel = new app.OrderModel();
// app.myOrderModel.url =  '/api/orders';
//
//
// app.myOrderCollection = new app.OrderCollection({
//   model: app.OrderModel,
//   url: '/api/orders'
// });
// app.myOrderListView = new app.OrderListView({
//   collection: app.myOrderCollection
// });
// app.myOrderCollection.fetch();
//
//
//
// //////////////////////////////////Party
//
// app.myPartyModel = new app.PartyModel();
// app.myPartyModel.url =  '/api/parties';
//
//
// app.myPartyCollection = new app.PartyCollection({
//   model: app.PartyModel,
//   url: '/api/parties'
// });
// app.myPartyListView = new app.PartyListView({
//   collection: app.myPartyCollection
// });
// app.myPartyCollection.fetch();
