// View for the Jot mode button.

/*global define*/// JSHint global vars
define([
  "backbone",
  "underscore",
  "zeroclipboard"
], function( Backbone, _, ZeroClipboard ) {
  "use strict";


  // setup ZeroClipboard
  ZeroClipboard.config( { swfPath: "/js/lib/ZeroClipboard.swf" } );

  // Backbone view
  var Toolbox = Backbone.View.extend({

    initialize: function() {
      this.modeButton = this.$(".jot-mode");
      this.listenTo(this.model, "change:mode", this.render);
      this.setupCopy();
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

    setupCopy: function() {
      this.copyClient = new ZeroClipboard( this.$(".jot-copy") );
    },

    copy: function() {
      return false;
    },

    events: {
      "click .jot-mode": "changeMode",
      "click .jot-copy": "copy"
    }

  });


  // Return Constructor
  return Toolbox;


});
