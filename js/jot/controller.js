// App controller for Jot. Manages the model, and several sub-views.

// RequireJS definition
define([
  "backbone"
], function( Backbone ) {
  "use strict";

  // Backbone Model
  var Jot = Backbone.View.extend({

    initialize: function() {
      console.log("start jot");
    }

  });

  var jot = new Jot({el: ".jot"});

});
