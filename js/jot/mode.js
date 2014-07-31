// View for the Jot mode button.

/*global define*/// JSHint global vars
define([
  "backbone",
  "underscore"
], function( Backbone, _ ) {
  "use strict";


  // Backbone view
  var Mode = Backbone.View.extend({

    template: _.template('<i class="fa fa-edit fa-lg"></i> <%= mode %>'),

    initialize: function() {
      this.listenTo(this.model, "change:mode", this.render);
      this.render();
    },

    changeMode: function() {
      var mode = this.model.get("mode");
      this.model.set("mode", ((mode === "markdown") ? "text" : "markdown"));
    },

    render: function() {
      this.$el.html( this.template( this.model.attributes ));
    },

    events: {
      "click": "changeMode"
    }

  });


  // Return Constructor
  return Mode;


});
