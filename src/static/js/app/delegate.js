define(function(require, exports, module) {

var marionette = require('marionette');
var SlideshowLayout = require('app/slideshow/views/slideshow-layout').SlideshowLayout;
var CubeLayout = require('app/cube/views/cube-layout').CubeLayout;

var ApplicationDelegate = marionette.Controller.extend({

    initialize: function(options){
        this.app = options.app;
        // this.app.window.show(new SlideshowLayout());
        this.app.window.context.setPerspective(1000);
        this.app.window.show(new CubeLayout());
    }
});

exports.ApplicationDelegate = ApplicationDelegate;
});
