



////prior

var app = app || {};

app.PartyView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model,'change', this.render);
    this.listenTo(this.model,'delete', this.remove);
  },
///



////
  template: _.template('<h3><%= name %> party of <%= count %>. Table number: <%= id %> </h3><button class="select-party glyphicon glyphicon-check btn-default"> Select Party </button> <button class="receipt glyphicon glyphicon-print btn-success"> Print Receipt </button>'),
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

      if (secondsLeft > 0) {
      timerDisplay.text( secondsLeft +" seconds until Bisquification");
      timerDisplay.css("background-color:red");
      }
      else {
        timerDisplay.text("served")
      }
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

  printReceipt: function() {
     var divToPrint = this.$el;
     var popupWin = window.open('', '_blank', 'width=300,height=300');
     popupWin.document.open();
     popupWin.document.write('<html><body onload="window.print()">' + divToPrint.html() + '</html>');
      popupWin.document.close();
  }


});
