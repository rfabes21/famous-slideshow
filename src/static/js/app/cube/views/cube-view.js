define(function (require, exports, module) {

var rich = require('rich');
var Modifier = require('famous/core/Modifier');
var utils = require('app/cube/utils');
var Transform = require('famous/core/Transform');
var CubeSide = require('app/cube/models/cube-side').CubeSide;
var CubeSideView = require('./cube-side-view').CubeSideView;

var size = window.innerHeight;

var CubeView = rich.View.extend({

    initialize: function(){
        var front = new CubeSide({
            color: utils.colors.blue[0],
            content: 'front',
            tz: 100,
        });

        var back = new CubeSide({
            color: utils.colors.blue[3],
            content: 'back',
            tz: 100,
            rx: Math.PI,
        });

        var top = new CubeSide({
            color: utils.colors.blue[5],
            content: 'top',
            tz: 100,
            rx: Math.PI/2,
        });

        var bottom = new CubeSide({
            color: utils.colors.blue[7],
            content: 'bottom',
            tz: 100,
            rx: 1.5 * Math.PI,
        });

        var left = new CubeSide({
            color: utils.colors.blue[9],
            content: 'left',
            tz: 100,
            ry: -Math.PI/2,
        });

        var right = new CubeSide({
            content: 'right',
            tz: 100,
            ry: Math.PI/2,
        });

        this.backView   = new CubeSideView({model: back});
        this.frontView  = new CubeSideView({model: front});
        this.topView    = new CubeSideView({model: top});
        this.bottomView = new CubeSideView({model: bottom});
        this.leftView   = new CubeSideView({model: left});
        this.rightView  = new CubeSideView({model: right});

        this.addSubview(this.frontView);
        this.addSubview(this.backView);
        this.addSubview(this.topView);
        this.addSubview(this.bottomView);
        this.addSubview(this.leftView);
        this.addSubview(this.rightView);

        this.listenTo(this.frontView, 'click', this.wantsRotateCube);

    },

    onShow: function(){

    },

    wantsRotateCube: function(){
        this.rotateCube();
    },

    rotateCube: function(){
        this.setTransform(Transform.rotateX(Math.PI/2));
    },

});

exports.CubeView = CubeView;

});
