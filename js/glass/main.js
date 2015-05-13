define(function (require) {


  // Dependencies
  var Backbone = require('backbone');
  var DropzoneView = require('./dropzone');


  // Controller
  var Jot = Backbone.View.extend({


  	initialize: function () {
  		this.dropzoneView = new DropzoneView();
      this.listenTo(this.dropzoneView, 'fileUpload', this.render);
  	},



    render: function (fileInfo) {
      this.fileInfo = fileInfo;
      console.log(this.fileInfo);
    }

  });


  // instantiagion
  var jot = new Jot();


});
