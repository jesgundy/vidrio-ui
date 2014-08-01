// View for the Jot mode button.

/*global define*/// JSHint global vars
define([
  "backbone",
  "underscore"
], function( Backbone, _ ) {
  "use strict";


  // Backbone view
  var Mode = Backbone.View.extend({

    initialize: function() {
      this.listenTo(this.model, "change:mode", this.render);
      this.render();
    },

    changeMode: function(e) {
      var mode = this.model.get("mode");
      this.model.set("mode", ((mode === "markdown") ? "text" : "markdown"));
      return false;
    },

    render: function() {
      this.$el.html( this.model.get("mode") );
    },

    events: {
      "click": "changeMode"
    }

  });


  // Return Constructor
  return Mode;


});
