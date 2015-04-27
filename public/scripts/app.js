
var app = {};

app.FoodModel = Backbone.Model.extend();

app.OrderModel = Backbone.Model.extend();

app.PartyModel = Backbone.Model.extend();


app.FoodCollection = Backbone.Collection.extend({
  url: '/api/foods',
  model: app.FoodModel
});

app.OrderCollection = Backbone.Collection.extend({
  url: '/api/orders',
  model: app.OrderModel
});

app.PartyCollection = Backbone.Collection.extend({
  url: '/api/parties',
  model: app.PartyModel
});

$(document).ready(function(){
  app.foodList = new app.FoodCollection();
  app.orderList = new app.OrderCollection();
  app.partyList = new app.PartyCollection();
  app.foodList.fetch();
  app.orderList.fetch();
  app.partyList.fetch();
});
///////////
// var LesMizView = Backbone.View.extend({
//   tagName: "p",
//   className: "poem",
//   template: _.template('<h3><%=order %></h3>'),
//
//   initialize: function() {
//     console.log("view == initialized");
//     this.listenTo(this.model, "change", this.render);
//
//   },
//   render: function() {
//     console.log("view == rendered");
//     var data = this.model.attributes;
//     var tpl = this.template(data);
//     this.$el.html(tpl);
//     $("#poem-container").html(this.$el.html());
//   }
// });
//
//
// var mod = new OrderModel();
//
//
// var mixView = new LesMizView({
//   model: miz
// });

// console.log('You are awesome!');
//
//
// // Define Chirp (Backbone Model)
// var Chirp = Backbone.Model.extend({});
//
// // Define ChirpCollection (Backbone Collection)
//   // What model it is managing
//   // What is the base url for the api
// var ChirpCollection = Backbone.Collection.extend({
//     model: Chirp,
//     url: '/api/orders'
//   });
//
//   // function getTemplate() {
//   //   return $('#chirp-form').html();
//   // }
//
// // Define ChirpView (Backbone View)
// var ChirpView = Backbone.View.extend({
//   // What initialize tasks?
//   tagName: 'ul',
//   // className: 'chirp',
//   template: _.template('<h3><%=message %></h3>'),
//      // listen to the model's change (NEW)
//   initialize: function() {
//     this.listenTo(this.model, 'change', this.render);
//     this.listenTo(this.model, 'remove', this.render);
//      // listen to the model's remove (NEW)
//    },
//   // What template should I use? Underscore template
//   render: function() {
//     // var data = this.model.attributes;
//     // var renderedTemplate = this.template(data);
//     this.$el.html(this.template( this.model.attributes));
//     // maybe you should .append() me somewhere?
//     // $('body').append(this.$el);
//   }
// });
//   // What render should do?
//     // Modify the $el's html
//
//
// var ChirpListView = Backbone.View.extend({
//   initialize: function(){
//     this.listenTo(this.collection, 'add', this.render)
//   },
//   render: function(){
//     this.$el.empty();
//     var models = this.collection.models;
//
//     for (var i = 0; i < models.length; i++) {
//       var modelView = new ChirpView ( {model: models[i]} );
//       modelView.render();
//       this.$el.append( modelView.$el);
//     }
//   }
// })
// // Define ChirpListView (Backbone View)
//   // What initialize tasks?
//     // listen to the collection's add
//     // listen to the collection's change (NEW)
//   // What render should do?
//     // Empty the $el
//     // Iterate over all the collection's models
//       // For each
//         // Create a new ChirpView for that model
//         // Render it
//         // Append the chirpview's $el to the listview $el
//
// var chirps = new ChirpCollection();
// var chirpsView;
//
// // On document ready...
// $(document).ready(function(){
//   chirpsView = new ChirpListView({
//     collection: chirps,
//     el: $('#all-the-chirps')
//   })
//
//   // Create a new Chirp collection instance
//   // Create a new Chirp listview instance
//     // pass in the collection
//     // pass an el already on the DOM
//
//   // $('#chirp-form').on('submit', function(e){
//   //   e.preventDefault();
//   //   var field = $(this).find('[name="my-chirp"]');
//   //   chirps.create({message: field.val()});
//   //   field.val('');
//   //
//   //   // get the text field value
//   //   // use the collection to create a new chirp
//   // });
//   chirps.fetch();
//   // Ask the Chirp collection to fetch
//
// });
//
//
//
//
// // // console.log("hi matt")
// //
// // var LesMizModel = Backbone.Model.extend({});
// //
// // // shake it it template!
// // var LesMizTemplate = $('#shake-template').html();
// //
// // // Shakespeare View
// // var LesMizView = Backbone.View.extend({
// //   tagName: "p",
// //   template: _.template(LesMizTemplate), // fill me out!
//   initialize: function() {
//     console.log("view == initialized");
//     this.listenTo(this.model, "change", this.render);
//
//   },
//   render: function() {
//     console.log("view == rendered");
//     var data = this.model.attributes;
//     var tpl = this.template(data);
//     this.$el.html(tpl);
//     $("#poem-container").html(this.$el.html());
//   }
// });
// //
// //
// //
// //
// //
// // $(document).ready(function(event) {
// //
// //
// //
// //   var miz = new LesMizModel();
// //   miz.url = '/api/orders';
// //
// //   var mixView = new LesMizView({
// //     model: miz
// //   });
// //
// //   miz.fetch();
// // });
