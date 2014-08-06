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


        // var left = new CubeSide({
        //     size: [w, h],
        //     color: utils.colors.blue[9],
        //     content: 'left',
        //     tz: w/2,
        //     ry: -Math.PI/2,
        // });

        // var right = new CubeSide({
        //     size: [w, h],
        //     content: 'right',
        //     tz: w/2,
        //     ry: Math.PI/2,
        // });

        // this.backView   = new CubeSideView({model: back});
        // this.frontView  = new CubeSideView({model: front});
        // this.topView    = new CubeSideView({model: top});
        // this.bottomView = new CubeSideView({model: bottom});
        // this.leftView   = new CubeSideView({model: left});
        // this.rightView  = new CubeSideView({model: right});

        // this.addSubview(this.frontView);
        // this.addSubview(this.backView);
        // this.addSubview(this.topView);
        // this.addSubview(this.bottomView);
        // this.addSubview(this.leftView);
        // this.addSubview(this.rightView);


        // prep for animation
        this.modifier = new Modifier();

        this.on('childview:click', this.wantsRotateCube.bind(this));
        // this.listenTo(this.frontView, 'click', this.wantsRotateCube);
        // this.listenTo(this.bottomView, 'click', this.wantsRotateCube);
        // this.listenTo(this.topView, 'click', this.wantsRotateCube);

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
        console.log(this.setTransform);
        this.setTransform(
            Transform.rotateX(this.rotation),
            {duration: duration, curve: Easing.outQuad});


    },

});

exports.CubeView = CubeView;

});
