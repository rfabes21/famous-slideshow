define(function (require, exports, module) {

var rich = require('rich');
var backbone = require('backbone');
var Modifier = require('famous/modifiers/StateModifier');
var utils = require('app/cube/utils');
var template = require('hbs!../../templates/cube-view');
var Easing = require('famous/transitions/Easing');
var Transform = require('famous/core/Transform');
var CubeSide = require('app/cube/models/cube-side').CubeSide;
var CubeSideView = require('./cube-side-view').CubeSideView;

var w = window.innerWidth * 0.5;
var h = window.innerHeight * 0.5;

var CubeView = rich.CollectionView.extend({

    events: {
        'childview:click': 'wantsRotateCube'
    },

    childView: CubeSideView,

    initialize: function(){
        this.name = 'foo';

        this.rotation = 0;

        var front = new CubeSide({
            size: [w, h],
            color: utils.colors.blue[0],
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

        // prep for animation
        this.modifier = new Modifier();

        this.on('childview:click', this.wantsRotateCube.bind(this));

    },

    modifierForViewAtIndex: function(){
        return new Modifier();
    },

    onShow: function(){

    },

    wantsRotateCube: function(){
        this.rotateCube();
    },

    rotateCube: function(){
        this.rotation +=(Math.PI/2);

        var duration = 500;
        this.setTransform(
            Transform.rotateX(this.rotation),
            {duration: duration, curve: Easing.outQuad});
    },

});

exports.CubeView = CubeView;

});
