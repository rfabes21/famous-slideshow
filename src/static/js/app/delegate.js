define(function(require, exports, module) {

var marionette = require('marionette');
var SlideshowLayout = require('app/slideshow/views/slideshow-layout').SlideshowLayout;



var ApplicationDelegate = marionette.Controller.extend({

    initialize: function(options){
        this.app = options.app;
        this.app.window.show(new SlideshowLayout());
    }
});

exports.ApplicationDelegate = ApplicationDelegate;
});
