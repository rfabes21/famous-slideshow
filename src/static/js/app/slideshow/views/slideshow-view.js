define(function (require, exports, module) {

var rich = require('rich');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var SlideView = require('./slide-view').SlideView;
var FilmView = require('./film-view').FilmView;
var Slide = require('app/slideshow/models/slide').Slide;

var SlideshowView = rich.View.extend({
    nestedSubviews: true,
    className: ['overflow-hidden'],

    initialize: function(){
        var background = new Slide();
        var film = new Slide();

        this.backgroundView = new SlideView({model: background});
        this.filmView = new FilmView({model: film});

        this.addSubview(this.backgroundView);
        this.addSubview(this.filmView);
    },

    onShow: function(){

    },
});

exports.SlideshowView = SlideshowView;

});
