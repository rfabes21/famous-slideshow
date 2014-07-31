define(function (require, exports, module) {

var rich = require('rich');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var Slide = require('./slide').Slide;

var cameraWidth =  0.6 * window.innerHeight;
var slideWidth = 0.8 * cameraWidth;
var slideHeight = slideWidth + 40;

var SlideshowView = rich.ItemView.extend({
    shouldInitiateRenderable: false,
    // nestedSubviews: true,
    className: 'slideshow',
    size: [slideWidth, slideHeight],

    initialize: function(){

    },

    onShow: function(){

    },
});

exports.SlideshowView = SlideshowView;

});
