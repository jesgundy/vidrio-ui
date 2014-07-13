// View for the Jot editor. Instantiates the Ace code editor, manages the UI using backbone.

define([
  "backbone",
  "ace/ace",
  "./storage"
], function( Backbone, ace, Storage ) {
  "use strict";


  // Backbone view
  var Editor = Backbone.View.extend({


    // startup
    initialize: function() {
      // build model
      this.model = new Storage();

      // build the editor session
      this.buildSession();

      // build the editor
      this.buildEditor();

      // focuson the editor
      this.editor.focus();
    },


    // Build the Editor Session
    buildSession: function() {
      this.session = ace.createEditSession( this.model.get("document") ); // passed value of editor
      this.session.setMode("ace/mode/markdown");
      this.session.setTabSize(2);
      this.session.setUseSoftTabs(true);
      this.session.setUseWrapMode(true);
    },


    // Build the Editor
    buildEditor: function() {
      this.editor = ace.edit( this.el );
      this.editor.setTheme("ace/theme/twilight");
      this.editor.setSession( this.session );
    }


  }); // Backbone View


  // instantiate
  var editor = new Editor({el: "#editor"});


});
