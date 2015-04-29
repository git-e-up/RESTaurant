///// in class Wed morning
var app = app || {};

app.PartyView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
    tagName: 'li',
    className: 'party',

  template: _.template('<p><%= id</p>'),

  render: function(){
    var data = this.model.attributes;
    var renderedHTML = this.template( data );
    this.$el.html( renderedHTML );

    var foodList = renderFoodList();
    this.$el.append(foodsList);
  },

  renderFoodList: function() {

  var foods = this.model.get('foods');
  var foodsList = $('<ul>');
  for (var i = 0; i < foods.length; i++) {
    var foodItem = foods[i];
    var newLi = $('<li>').html( foodItem.name );
    foodsList.append(newLi);
  }
}
    // Wild West!

    // <li class='party'>
    //   <h3>
    //   3
    //   </h3>
    //   <ul class='orders'>
    //     <li>cheese</li>
    //     <li>bacon</li>
    //   </ul>
    // </li>

})



////prior

var app = app || {};

app.PartyView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model,'change', this.render);
    this.listenTo(this.model,'delete', this.remove);
  },
///


  // var orders = this.model.get(foods)
  // for (var i = 0; i < orders.length; i++) {
  //   var total = orders[i] * foods.cost
  // },

////
  template: _.template('<h3><%= name %> party of <%= count %>. Table number: <%= id %> <button class="select-party"> Select </button>'),
  tagName: 'li',
  className: 'party',
  render: function(){
    this.$el.append( this.template( this.model.attributes ) );
    this.renderFoodList();
    return this;
  },
  renderFoodList: function(){
    var foods = this.model.get('foods')
    var foodList = $('<ul>');
    for (var i = 0; i < foods.length; i++) {
      var message = foods[i]['name'];
      message += foods[i]['cost'];
      foodList.append( $('<li>').text( message ));

    }
    this.$el.append(foodList);
  },
  events:{
    'click .select-party': 'selectParty'
    //'event .css selector': 'function to run'
  },
  selectParty: function(){
    $('.party-selected').removeClass('party-selected');
    this.$el.addClass('party-selected');
    app.partySelection = this.model;
  }
});
