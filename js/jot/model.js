// Model for the Jot editor. Responsible for storing the content of the editor in localStorage.

/*global define*/// JSHint global vars
define([
  "backbone",
  "store"
], function( Backbone, store ) {
  "use strict";


  // Backbone Model
  var JotStorage = Backbone.Model.extend({

    defaults: {
      document: "",
      mode: "markdown"
    },

    initialize: function() {
      // If no local storage
      if (!store.enabled) {
        this.set("document", "# Fair warning - Your browser doesn't support local storage, so anything you write is going to be blown away on refresh.");
        return;
      }

      // otherwise get stored info
      this.set( store.get("jotStorage") );

      // and listen for changes
      this.on("change", this.saveDocument);
    },

    // save info to local storage
    saveDocument: function() {
      store.set( "jotStorage", this.toJSON() );
    }

  });


  // return constructor
  return JotStorage;


});
