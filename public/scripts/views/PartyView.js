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
  template: _.template('<h3><%= name %> party of <%= count %>. Table number: <%= id %> <button class="select-party"> Select </button> <button class="receipt"> Receipt </button>'),
  tagName: 'li',
  className: 'party',
  render: function(){
    this.$el.append( this.template( this.model.attributes ) );
    this.renderFoodList();
    return this;
  },
  renderFoodList: function(){
    var orders = this.model.get('orders')
    var foodList = $('<ul>');
    var subtotal = 0;
    if(orders.length>0){
      for (var i = 0; i < orders.length; i++) {



        var message = orders[i]['food']['name'];
        message += ' $';
        message += orders[i]['food']['cost'];
        var listItem = $('<li>').text( message );

        var startTime = new Date( orders[i].created_at );
        var timerNode = this.renderTimerNode(startTime);
        listItem.append( $('<p>').html( timerNode ) )

        foodList.append( listItem );

        subtotal += parseInt(orders[i]['food'].cost);
        var tax = subtotal*.0925;
        total = subtotal + tax;
      }
      foodList.append( $('<li id=subtotal>').text( 'Subtotal: $'+subtotal ));
      foodList.append( $('<li id=subtotal>').text( 'Sales Tax 9.25%: $'+tax.toFixed(2) ));
      foodList.append( $('<li id=total>').text( 'Total Due: $'+total.toFixed(2) ));
      this.$el.append(foodList);
    }
  },
  renderTimerNode: function(startTime){
    var timerDisplay = $('<h3>');

    function updateTimer(){
      var time = startTime - Date.now();
      var secondsLeft = ((1000 * 60 * 5) + time)/1000;


      timerDisplay.text( secondsLeft );

    }

    setInterval(updateTimer, 100);




        return timerDisplay
    

  },
  events:{
    'click .select-party': 'selectParty',
    'click .receipt': 'printReceipt'
    //'event .css selector': 'function to run'
  },
  selectParty: function(){
    $('.party-selected').removeClass('party-selected');
    this.$el.addClass('party-selected');
    app.partySelection = this.model;
  },
  printReceipt: function(){
    // $('.receipt').printElement();
    alert('Here is your receipt')
  }

});
// events:{
//   'click .receipt': 'printReceipt'
// }
// printReceipt: function(){
//   $('.receipt').show().printElement();
// }
