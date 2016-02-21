


// var ellapsed = jQuery.timeago(new Date());





var app = app || {};

app.OrderView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model,'change', this.render);
    this.listenTo(this.model,'delete', this.remove);
    _.bindAll(this, 'show_house');
        app_state.on('change:current_house', this.show_house);
  },
  show_house: function(m) {
        // 'm' is actually 'app_state' here so...
        console.log('Current house is now ', m.get('current_house'));
    },

  // var t = "<%= created_at  %>".split(/[- :]/);
  // var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);


//   _.templateSettings = { interpolate: [0-9]{1,4}/[0-9]{1,2}/[0-9]{1,2} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}
// }

  template: _.template('<h3>order #<%= id %> <%=food.name %> served? <%= paid %> (order placed at <%= created_at %>)' ),
  tagName: 'li',
  className: 'order',
  render: function(){
    this.$el.append( this.template( this.model.attributes ) );

    return this;
  },



/////////////




});
