// View for the Jot mode button.

/*global define*/// JSHint global vars
define([
  "backbone",
  "showdown"
], function( Backbone, Showdown ) {
  "use strict";


  // Backbone view
  var Export = Backbone.View.extend({

    // instantiate markdown converter
    converter: new Showdown.converter(),

    initialize: function() {
      this.listenTo(this.model, "change", this.render);
      this.render();
    },

    render: function() {
      var content = this.model.get("document");
      var html = "";

      // build formatted content
      if (this.model.get("mode") === "text") {
        html+= "<pre>";
        html+= content;
        html+= "</pre>";
      } else {
        html+= "<div class=\"formatted\">";
        html+= this.converter.makeHtml( content );
        html+= "</div>";
      }

      // render to export container
      this.$el.html( html );
    }

  });


  // Return Constructor
  return Export;


});
