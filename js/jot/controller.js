// App controller for Jot. Manages the model, and several sub-views.

/*global define*/// JSHint global vars
define([
  "backbone",
  "./editor",
  "./mode",
  "./storage"
], function( Backbone, Editor, Mode, Storage ) {
  "use strict";


  // Backbone Model
  var Jot = Backbone.View.extend({

    initialize: function() {
      // instantiate model
      this.model = new Storage();

      // Instantiate Editor View
      this.editor = new Editor({
        el: this.$('#editor'),
        model: this.model
      });

      // Instantiate Editor View
      this.mode = new Mode({
        el: this.$('.jot-mode'),
        model: this.model
      });
    }

  });


  // Instantiate the app
  var jot = new Jot({el: ".jot"});


});
