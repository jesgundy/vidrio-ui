// RequireJS Setup
require.config({
  paths: {
    'backbone': 'lib/backbone',
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',
    'store': 'lib/store',
  },
  waitSeconds: 30, // longer timeout for things to load
  urlArgs: window.REQUIRE_NOCACHE ? 'bust='+(new Date()).getTime() : null
});




// Main application bootstrapper
define(['jquery'], function( $ ) {
  // Wait for BG image to load
  $("<img/>")
    .load(function() {
      require(['vidrio/main']);
    })
    .attr("src", '/img/clouds.jpg');
});
