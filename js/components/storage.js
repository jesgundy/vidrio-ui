// Model for the Jot editor. Responsible for storing the content of the editor locally using the Backbone.localstorage plugin.

define([
  "backbone",
  "localstorage"
], function( Backbone, localstorage ) {
  "use strict";

  var Storage = Backbone.Model.extend({

    defaults: {
      document: "# This is a test."
    },

    initialize: function() {
      console.log("initialize Storage");
    }

  });


  // return constructor
  return Storage;

});