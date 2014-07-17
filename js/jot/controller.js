// App controller for Jot. Manages the model, and several sub-views.

/*global define*/// JSHint global vars
define([
  "backbone",
  "./editor",
  "./information",
  "./storage"
], function( Backbone, Editor, Information, Storage ) {
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

      // Instantiate Information View
      this.information = new Information({
        el: this.el, // share the top level elements
        model: this.model
      });
    }

  });


  // Instantiate the app
  var jot = new Jot({el: ".jot"});


});
