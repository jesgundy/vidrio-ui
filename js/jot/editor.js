// View for the Jot editor. Instantiates the Ace code editor, manages the UI using backbone.

/*global define*/// JSHint global vars
define([
  "backbone",
  "underscore",
  "ace/ace"
], function( Backbone, _, ace ) {
  "use strict";


  // Backbone view
  var Editor = Backbone.View.extend({

    initialize: function() {
      // debounce saveDocument function
      this.saveDocument = _.debounce(this.saveDocument, 500);
      // build the editor session
      this.buildSession();
      // build the editor
      this.buildEditor();
      // set focus on the editor
      this.editor.focus();
    },

    // build the session
    buildSession: function() {
      var self = this;
      this.session = ace.createEditSession( this.model.get("document") ); // passed value of editor
      this.session.setMode("ace/mode/markdown");
      this.session.setTabSize(2);
      this.session.setUseSoftTabs(true);
      this.session.setUseWrapMode(true);
      // move cursor to end of file
      this.session.selection.moveCursorFileEnd();
      // change event
      this.session.on("change", function() {
        self.saveDocument();
      });
    },

    // build the editor
    buildEditor: function() {
      this.editor = ace.edit( this.el );
      this.editor.setTheme("ace/theme/twilight");
      this.editor.setFontSize(14);
      this.editor.setSession( this.session );
    },

    // save document content
    saveDocument: function() {
      this.model.set("document", this.session.getValue() );
    }

  });


  // Return Constructor
  return Editor;


});
