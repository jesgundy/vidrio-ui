// Information Panel toggle functionality.


// RequireJS definition
define([
  "backbone"
], function( Backbone ) {
  "use strict";


  // Backbone Model
  var Information = Backbone.View.extend({

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

    events: {
      "click .information-button": "togglePanel"
    }
  });


  // instnatiate
  var information = new Information({el: ".container"});


});
