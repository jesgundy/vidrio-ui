// View for the Jot mode button.

/*global define*/// JSHint global vars
define([
  "backbone",
  "underscore"
], function( Backbone, _ ) {
  "use strict";


  // Backbone view
  var Toolbox = Backbone.View.extend({

    initialize: function() {
      this.modeButton = this.$(".jot-mode");
      this.listenTo(this.model, "change:mode", this.render);
      this.render();
    },

    changeMode: function() {
      var mode = this.model.get("mode");
      this.model.set("mode", ((mode === "markdown") ? "text" : "markdown"));
      return false;
    },

    render: function() {
      this.modeButton.html( this.model.get("mode") );
    },

    events: {
      "click .jot-mode": "changeMode"
    }

  });


  // Return Constructor
  return Toolbox;


});
