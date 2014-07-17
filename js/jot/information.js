// Information Panel toggle functionality.

/*global define*/// JSHint global vars
define([
  "backbone"
], function( Backbone ) {
  "use strict";


  // Backbone Model
  var Information = Backbone.View.extend({

    // save variables
    initialize: function() {
      this.$button = this.$('.information-button');
      this.$panel = this.$('.information-panel');
    },

    // Toggle panel logic
    togglePanel: function(evt) {
      if (this.$button.hasClass("active")) {
        this.$button.removeClass("active");
        this.$panel.removeClass("active");
      } else {
        this.$button.addClass("active");
        this.$panel.addClass("active");
      }

      // prevent link action
      evt.preventDefault();
    },

    // events hash
    events: {
      "click .information-button": "togglePanel"
    }

  });


  // Return Constructor
  return Information;


});
