// App controller and parent view for Jot. Manages the model, and several sub-views.

/*global define*/// JSHint global vars
define([
  "backbone",
  "./model",
  "./view-editor",
  "./view-toolbox"
], function( Backbone, JotStorage, Editor, Toolbox ) {
  "use strict";


  // Backbone Model
  var Jot = Backbone.View.extend({

    initialize: function() {
      // instantiate model
      this.model = new JotStorage();

      // Instantiate Editor View
      this.editor = new Editor({
        el: this.$('#editor'),
        model: this.model
      });

      // Instantiate Editor View
      this.mode = new Toolbox({
        el: this.$('.toolbox'),
        model: this.model
      });

      // Fade in stuff.
      $('.container').addClass('loaded');
    }

  });


  // Instantiate the app
  var jot = new Jot({el: ".jot"});


});

