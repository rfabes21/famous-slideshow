define(function (require, exports, module) {

var rich = require('rich');
var template = require('hbs!../../templates/slide');
var Transform = require('famous/core/Transform');
var Background = require('app/slideshow/models/background').Background;

var SlideView = rich.ItemView.extend({
    template: template,
    shouldInitiateRenderable: false,
    nestedSubviews: true,
    className: 'slide',
    size: [450, 500],

    initialize: function(options){

    },
});

exports.SlideView = SlideView;

});
