var app = app || {};

app.FoodView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model,'change', this.render);
    this.listenTo(this.model,'delete', this.remove);
  },
  template: _.template('<h3><%= name %></h3><p>$<%= cost %></p><button class="select-food glyphicon glyphicon-thumbs-up btn-default">Select Bisque</button>'),
  tagName: 'li',
  className: 'food',
  render: function(){
    this.$el.append( this.template( this.model.attributes ) );
    return this;
  },
  events:{
    'click .select-food': 'selectFood',


  },
  selectFood: function(){
    $('.food-selected').removeClass('food-selected'); //for css to show selected one
    this.$el.addClass('food-selected'); //for css to show selected one
    app.foodSelection = this.model;
  },


});
