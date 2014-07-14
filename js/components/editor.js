// View for the Jot editor. Instantiates the Ace code editor, manages the UI using backbone.


// RequireJS definition
define([
  "backbone",
  "underscore",
  "ace/ace",
  "./storage"
], function( Backbone, _, ace, Storage ) {
  "use strict";


  // Backbone view
  var Editor = Backbone.View.extend({


    // startup
    initialize: function() {
      // build model
      this.model = new Storage();

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

      // change event
      this.session.on("change", function() {
        self.saveDocument();
      });
    },


    // build the editor
    buildEditor: function() {
      this.editor = ace.edit( this.el );
      this.editor.setTheme("ace/theme/twilight");
      this.editor.setSession( this.session );
    },


    // save document content
    saveDocument: function() {
      this.model.set("document", this.session.getValue() );
    }
  });


  // instantiate
  var editor = new Editor({el: "#editor"});


});
