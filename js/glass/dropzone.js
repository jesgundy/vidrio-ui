define(function (require) {


  // Dependencies
  var Backbone = require('backbone');


  // Constructor
  return Backbone.View.extend({


		el: 'body',
    loading: false,


		initialize: function() {
      var self = this;

      this.el.addEventListener('dragover', function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        self.$el.addClass('-dragover');
      }, false);

      // this.el.addEventListener('dragleave', function (evt) {
      //   evt.stopPropagation();
      //   evt.preventDefault();
      //   self.$el.removeClass('-dragover');
      // }, false);

      this.el.addEventListener('drop', function (evt) {
        evt.stopPropagation();
        evt.preventDefault();

        self.startLoading();

        var files = evt.dataTransfer.files; // FileList object

        if (files.length > 1) {
          console.error('Too many files: Jot can only edit one file at a time.');
        } else {
          self.processFile( files[0] );
        }

        self.$el.removeClass('-dragover');
      }, false);
		},


    processFile: function (file) {
      var self = this;

      var fileOutput = {
        original: file,
        name: file.name,
        type: file.type
      };

      var reader = new FileReader();

      reader.onload = (function( theFile ) {
        return function(e) {

          // call back to controller with data
          fileOutput.content = e.target.result;
          self.trigger( 'fileUpload', fileOutput );
          self.endLoading();
        };
      })( file );

      reader.readAsText( file );
    },


    startLoading: function () {
      this.loading = true;
      this.$el.addClass('-loading');
    },


    endLoading: function () {
      this.loading = false;
      this.$el.removeClass('-loading');
    }


	});

});
