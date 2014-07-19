// View for the Jot mode button.

/*global define*/// JSHint global vars
define([
  "backbone"
], function( Backbone ) {
  "use strict";


  // Backbone view
  var Mode = Backbone.View.extend({

    changeMode: function() {
      var mode = this.model.get("mode");
      if (mode === "markdown") {
        this.model.set("mode", "text");
      } else {
        this.model.set("mode", "markdown");
      }
    },

    events: {
      "click": "changeMode"
    }

  });


  // Return Constructor
  return Mode;


});
