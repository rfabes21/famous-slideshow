define(function (require, exports, module) {

var rich = require('rich');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var SlideView = require('./slide-view').SlideView;
var Slide = require('app/slideshow/models/slide').Slide;

var SlideshowView = rich.View.extend({
    nestedSubviews: true,
    className: 'slideshow',


    initialize: function(){
        var slide = new Slide();

        this.slideView = new SlideView({
            model: slide,
        });

        this.addSubview(this.slideView);
    },

    onShow: function(){

    },
});

exports.SlideshowView = SlideshowView;

});
