// Model for the Jot editor. Responsible for storing the content of the editor in localStorage.


// RequireJS definition
define([
  "backbone"
], function( Backbone ) {
  "use strict";


  // Backbone Model
  var Storage = Backbone.Model.extend({


    // document content empty string by default
    defaults: {
      document: ""
    },


    // when instantiated
    initialize: function() {
      // set contents to any
      if (localStorage.jotStorage) {
        this.set("document", localStorage.jotStorage);
      }

      // listen for document change
      this.on("change:document", this.saveDocument);
    },


    // save document contents to local storage
    saveDocument: function() {
      localStorage.jotStorage = this.get("document");
    }
  });


  // return constructor
  return Storage;


});
