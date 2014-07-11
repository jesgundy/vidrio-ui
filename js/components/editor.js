// View for the Jot editor. Instantiates the Ace code editor, manages the UI using backbone.

define([
  "backbone",
  "ace/ace"
], function( Backbone, ace ) {
  "use strict";


  // Backbone view
  var Editor = Backbone.View.extend({


    // startup
    initialize: function() {
      this.editor = ace.edit( this.el );
    }


  }); // Backbone View


  // instantiate
  var editor = new Editor({el: "#editor"});


});
