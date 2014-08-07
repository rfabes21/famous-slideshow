define(function (require, exports, module) {

var rich = require('rich');
var backbone = require('backbone');
var Modifier = require('famous/core/Modifier');
var utils = require('app/cube/utils');
var template = require('hbs!../../templates/cube-view');
var Easing = require('famous/transitions/Easing');
var Transform = require('famous/core/Transform');
var CubeSide = require('app/cube/models/cube-side').CubeSide;
var CubeSideView = require('./cube-side-view').CubeSideView;

var w = window.innerWidth * 0.6;
var h = window.innerHeight * 0.6;

var CubeView = rich.CollectionView.extend({
    childView: CubeSideView,
    _yPos: 0,
    _rotation: 0,
    events: {
        'childview:click': 'wantsRotateCube'
    },

    initialize: function(){

        this.rotation = 0;

        var front = new CubeSide({
            size: [w, h],
            color: utils.colors.blue[1],
            content: 'front',
            tz: h/2,
        });

        var back = new CubeSide({
            size: [w, h],
            color: utils.colors.blue[3],
            content: 'back',
            tz: h/2,
            rx: Math.PI,
        });

        var top = new CubeSide({
            size: [w, h],
            color: utils.colors.blue[5],
            content: 'top',
            tz: h/2,
            rx: Math.PI/2,
        });

        var bottom = new CubeSide({
            size: [w, h],
            color: utils.colors.blue[7],
            content: 'bottom',
            tz: h/2,
            rx: 1.5 * Math.PI,
        });

        this.collection = new backbone.Collection([front, back, top, bottom]);

        // prep for animation and move
        // container with scrollView
        var rotationMod = new Modifier();
        var positionMod = new Modifier();

        this.modifier = [rotationMod];

        var self = this;

        positionMod.transformFrom(function(){
            return Transform.translate(0, self._yPos, 0);
        });

        rotationMod.transformFrom(function(){
            return Transform.rotateX(self._rotation);
        });


        this.on('childview:click', this.wantsRotateCube.bind(this));

    },

    modifierForViewAtIndex: function(){
        return new Modifier();
    },

    scrollPosition: function(yPos){
        this._yPos = yPos;
        this.invalidateView();
        var percent = Math.abs(yPos/(h*2));
        // this.setRotationPos(percent);
        this._rotation = percent;
    },

    wantsRotateCube: function(){
        this.rotateCube();
    },

    radiansCalc: function(degrees){
        return degrees * Math.PI / 180;
    },

    rotateCube: function(){
        this.rotation += this.radiansCalc(90);

        var duration = 1000;
        this.setTransform(
            Transform.rotateX(this.rotation),
            {duration: duration, curve: Easing.outQuad});
    },

});

exports.CubeView = CubeView;

});
